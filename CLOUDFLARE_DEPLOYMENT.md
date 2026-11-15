# Mogul Maker Academy — Cloudflare Pages Deployment Guide

Nothing in this guide touches DNS, your existing production site, or publishes anything.
Follow it to stand the site up on a Cloudflare staging URL first.

## 1. Project facts

| Item | Value |
|---|---|
| Framework | React 19 (Create React App via CRACO — `react-scripts` 5 / `craco build`) |
| Repo root | `/` (repository root) |
| Frontend root directory | `frontend` |
| Build command | `yarn build` (runs `craco build`) |
| Output directory | `frontend/build` |
| Node version | 18+ (set `NODE_VERSION=20` in Pages env) |
| Package manager | Yarn 1.22 (yarn.lock is in `frontend/`) |
| SPA routing | Handled by `frontend/public/_redirects` (`/* → /index.html 200`) |
| Security/cache headers | `frontend/public/_headers` |

## 2. Server-side work required for Cloudflare

The current backend is **FastAPI + MongoDB** (`backend/server.py`) and **cannot run on Cloudflare Pages directly**. Equivalent serverless functions are scaffolded in `/functions/`:

| Current endpoint | Pages Function | Storage |
|---|---|---|
| `POST/GET /api/enquiries` | `functions/api/enquiries.js` | KV namespace `MMA_DATA` |
| `POST/GET /api/rsvps` | `functions/api/rsvps.js` | KV namespace `MMA_DATA` |
| (future) PAIGE proxy | `functions/api/paige/[[path]].js` | env secrets only |

The frontend calls `${REACT_APP_BACKEND_URL}/api/...`. On Pages, set `REACT_APP_BACKEND_URL` to an **empty string** so calls become same-origin (`/api/...`) and hit the Functions automatically — no frontend code change needed.

MongoDB is replaced by **Cloudflare KV** for the two lightweight inbox collections. If you later need richer queries, swap the KV reads/writes in the functions for **D1** (SQL) — the function signatures stay the same.

The FastAPI backend folder (`backend/`) is NOT deployed to Pages. Keep it in the repo for reference/local dev.

## 3. Exact Cloudflare Pages settings (dashboard)

1. Pages → **Create project** → **Connect to Git** → pick your repo.
2. **Production branch**: `main`
3. **Framework preset**: `Create React App`
4. **Root directory**: `frontend`
5. **Build command**: `yarn build`
6. **Build output directory**: `build`  *(Pages appends this to the root dir → `frontend/build`)*
7. **Environment variables** (Production + Preview):
   - `NODE_VERSION` = `20`
   - `REACT_APP_BACKEND_URL` = *(leave empty)*
   - `CI` = `false`  *(CRACO treats warnings as errors when CI=true)*
8. **Functions → KV namespace bindings**: create KV namespace `MMA_DATA` (`npx wrangler login && npx wrangler kv namespace create MMA_DATA`), then bind variable name `MMA_DATA` to it for Production and Preview.
9. Every push to `main` deploys production; every PR gets a `*.pages.dev` **staging URL** automatically. Test there before any DNS change.

> Monorepo note: Pages' root-directory setting means the `backend/` folder is ignored by the build. Alternatively split the repo (frontend-only repo for Pages) if you prefer.

## 4. Environment variables & secrets

| Variable | Where | Exposed to browser? |
|---|---|---|
| `REACT_APP_BACKEND_URL` | Pages env (build-time) | Yes (by design; empty = same-origin) |
| `NODE_VERSION`, `CI` | Pages env | No |
| `PAIGE_API_URL`, `PAIGE_API_KEY` | Pages env (Functions secrets) | **No — server-side only** |
| `MMA_DATA` | KV binding | No |

Never put PAIGE credentials in `frontend/.env` or anything starting with `REACT_APP_` — those are baked into the public JS bundle.

## 5. Pre-flight verification (done in preview)

- `yarn build` succeeds → `frontend/build` (2.8 MB) with all routes client-side.
- SPA fallback via `_redirects` covers `/start`, `/framework`, `/academy`, `/workshops`, `/resources`, `/about`, `/implementation`, `/contact`, `/privacy`, `/terms`, `/accessibility`, `/courses/:id`, `/workshops/:id`, `/workshops/schedule`.
- `robots.txt`, `llms.txt`, `sitemap.xml` ship as static files.
- Contact + RSVP forms post to `/api/...` which the Functions answer.
- Legacy route redirects are client-side (react-router) — work identically on Pages.

## 6. Known differences vs. the current preview

- Form submissions on Pages store to KV instead of MongoDB (same response shape).
- The Emergent preview analytics/overlay scripts are dev-only and are not part of the build.
- Staging is currently marked `noindex` — restore `index, follow` + canonical URLs in `frontend/public/index.html` **after** owner acceptance and **before** pointing mogulmakeracademy.com.

## 7. Go-live checklist (do NOT do until owner approves)

1. Verify every route + form on the `*.pages.dev` staging URL.
2. Restore `index, follow`, set canonical/og:url to the confirmed domain, re-point `sitemap.xml`.
3. Add mogulmakeracademy.com as a **custom domain** on the Pages project (CNAME setup in your Cloudflare DNS — owner action).
4. Only then update DNS. The current live site stays untouched until this step.
