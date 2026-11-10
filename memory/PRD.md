# MOGUL MAKER ACADEMY — PRD

## Original Problem Statement
Integrate the proprietary **3M Framework — MAKE, MANAGE, MULTIPLY** into the entire Mogul Maker Academy website: brand storytelling, navigation, educational presentation, and cinematic motion design. Institutional digital headquarters, never a pricing funnel. Full 38-entry approved 2027 course catalog (Standard 12 / Premium 13 / VIP 13) preserved verbatim with Coming Soon / In Development badges. Founder: Antonio Cook ("Mr. Mogul Maker"). Later refined by the **2027 Master Brand Design Directive**: Modern Ownership Institution (Concept A) chosen — palette Midnight Navy #101B2B / Warm Ivory #F7F4EE / Champagne Gold #C6A66B (accent only) / Deep Charcoal #202832 / Slate Gray #5F6773; pillar colors MAKE #285F58 / MANAGE #275977 / MULTIPLY #80551E; typography Fraunces (display) + Manrope (body); cinematic 6-act hero (Ambition→Creation→Execution→Discipline→Ownership→Community) ending in "BUILD THE BUSINESS. MASTER THE MONEY. OWN YOUR FUTURE."; no invented stats/testimonials/outcomes/credentials/founder likenesses; WCAG 2.2 AA.

## User Personas (avatars — one brand, four stages)
- Stage C: Emerging Entrepreneur (Standard) — approachable, practical, achievable
- Stage B: Ownership Aspirant (Premium) — intelligent, organized, credible
- Stage A: Builder In Motion (VIP) — real operations, systems, leadership
- Stage D: Strategic Owner & Emerging Acquirer (VIP) — capital, transactions, valuation, risk

## Architecture
- React 19 + Tailwind frontend (`/app/frontend/src`), FastAPI + MongoDB backend (`/app/backend/server.py`)
- Content collections: `/app/frontend/src/data/content.js` (PILLARS, METHODS, LEVELS, COURSES×38, AVATARS, EVENTS, HERO_ACTS, FOUNDER) — single source of truth; new courses/events/instructors are added here without redesign
- Design source of truth: `/app/design/direction.html` + `/app/design_guidelines.json`
- Backend: `POST/GET /api/enquiries` (Mongo `enquiries` collection, indexed)

## What's Been Implemented (2026-11-10)
- Cinematic 6-act hero with rotating documentary imagery, tappable act progress bars, pause control, reduced-motion respect; exact headline + CTAs (Find Your Mogul Path → /enquiry; Explore the Academy → /courses)
- Doctrine marquee ticker ("Money Follows Management" etc.)
- Interactive 3M pillar section on homepage; pillar overview pages at /framework/make|manage|multiply with topics, methods (LAUNCH/ACCEL/BUILD/FUND/ACQUIRE), and per-pillar course listings; /framework overview with continuum
- Courses & Learning Pathways page (/courses): all 38 approved titles verbatim, unified card system, filters by level × 3M pillar × type, search, status badges
- Methods page (/methods), Events & Media page (/events), About page (/about) with founder section (portrait = honest placeholder — real photo of Antonio Cook needed)
- Enquiry capture: /enquiry page + homepage rail; wired to backend with Sonner toast; submissions stored in MongoDB
- Institutional disclaimers (no guaranteed wealth/returns/funding) on footer, courses, enquiry

## Verified
- POST/GET /api/enquiries via curl (201, stored, listed)
- Homepage hero/framework/curriculum screenshots at 1920px; courses page renders 38 cards; MULTIPLY filter → 14, VIP+MULTIPLY → 9; enquiry form submitted through UI, toast shown, record in DB
- NOT verified: true mobile (390px) rendering — screenshot tool forced 1920 width

## Missing / Needed From Owner
- Real founder photography of Antonio Cook (currently honest placeholder)
- Specific in-person workshop/event cities and dates
- Verified testimonials/proof points when approved
- Official avatar names (using neutral stage descriptors)
- Real video asset if a literal hero video (vs. cinematic image sequence) is desired

## Backlog
- P1: Founder photo + real event details once supplied
- P1: Mobile viewport verification at true 390px
- P2: CMS/admin editing of content collections; course detail pages with descriptions once approved
- P2: Future PAIGE integration (mentioned in directive, not scoped yet)
- P2: Cloudflare deployment migration of the stack
