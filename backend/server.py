import asyncio
from contextlib import suppress
from fastapi import FastAPI, APIRouter, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ASCENDING, DESCENDING, IndexModel
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Annotated
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# One entry per collection: every field a route filters, sorts or dedupes on. Add the index in the same edit as the query.
INDEXES: dict[str, list[IndexModel]] = {
    "enquiries": [
        IndexModel([("id", ASCENDING)], name="id", unique=True),
        IndexModel([("created_at", DESCENDING)], name="created_at_desc"),
        IndexModel([("stage", ASCENDING)], name="stage"),
    ],
    "rsvps": [
        IndexModel([("id", ASCENDING)], name="id", unique=True),
        IndexModel([("created_at", DESCENDING)], name="created_at_desc"),
        IndexModel([("event_id", ASCENDING)], name="event_id"),
    ],
    "status_checks": [
        IndexModel([("id", ASCENDING)], name="id", unique=True),
        IndexModel([("timestamp", DESCENDING)], name="timestamp_desc"),
    ],
}


async def ensure_indexes() -> None:
    for collection, models in INDEXES.items():
        for model in models:  # one at a time so a bad spec skips only itself
            try:
                await db[collection].create_indexes([model])
            except Exception as exc:  # never block boot on an index; the log line names what to fix
                logging.getLogger(__name__).error("ensure_indexes(%s.%s): %s", collection, model.document["name"], exc)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: Annotated[str, Field(min_length=1, max_length=120)]
    email: EmailStr
    stage: Annotated[str, Field(min_length=1, max_length=200)]
    interest: str = "courses"
    message: Optional[str] = Field(default=None, max_length=2000)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class Rsvp(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: Annotated[str, Field(min_length=1, max_length=120)]
    email: EmailStr
    event_id: Annotated[str, Field(min_length=1, max_length=80)]
    event_title: Annotated[str, Field(min_length=1, max_length=200)]
    session_label: Optional[str] = Field(default=None, max_length=200)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Mogul Maker Academy API"}


@api_router.post("/enquiries", response_model=Enquiry, status_code=201)
async def create_enquiry(input: Enquiry):
    doc = input.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.enquiries.insert_one(doc)
    return input


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries(limit: int = Query(50, ge=1, le=200)):
    # Institutional inbox endpoint (no auth in this phase; internal tooling will gate access)
    rows = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).limit(limit).to_list(limit)
    for row in rows:
        if isinstance(row.get("created_at"), str):
            row["created_at"] = datetime.fromisoformat(row["created_at"])
    return rows


@api_router.post("/rsvps", response_model=Rsvp, status_code=201)
async def create_rsvp(input: Rsvp):
    doc = input.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.rsvps.insert_one(doc)
    return input


@api_router.get("/rsvps", response_model=List[Rsvp])
async def list_rsvps(event_id: Optional[str] = Query(None), limit: int = Query(50, ge=1, le=200)):
    query = {"event_id": event_id} if event_id else {}
    rows = await db.rsvps.find(query, {"_id": 0}).sort("created_at", -1).limit(limit).to_list(limit)
    for row in rows:
        if isinstance(row.get("created_at"), str):
            row["created_at"] = datetime.fromisoformat(row["created_at"])
    return rows


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks(limit: int = Query(20, ge=1, le=100)):
    status_checks = await db.status_checks.find({}, {"_id": 0}).sort("timestamp", -1).limit(limit).to_list(limit)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def start_index_build():
    app.state.index_task = asyncio.create_task(ensure_indexes())  # background: a big index build must not block boot


@app.on_event("shutdown")
async def shutdown_db_client():
    app.state.index_task.cancel()  # stop a build still running before its client closes
    with suppress(asyncio.CancelledError):
        await app.state.index_task
    client.close()
