# MOGUL MAKER ACADEMY — PRD

## Current Direction (2026-11-14) — 2027 RELAUNCH v2 "Ownership Journey First"
The site was redirected per the Emergent Master Development Prompt. Journey-first, not catalog-first. New palette: Midnight Navy #142635 / Heritage Emerald #115754 (nav + primary conversion) / Warm Ivory #FBF6EB / Antique Gold #C29949 (selective accent). Typography: Sora (display) + Manrope (body). Reference: Acquisition.com for clarity/hierarchy only — no copied branding. Nav: Start Here / Learn / Workshops / Implementation / Resources / About MMA + primary CTA "FIND YOUR NEXT MOVE" → curated Start Here (interactive diagnostic NOT represented as live). v1 (Modern Ownership Institution) backed up at /app/design/backup-pages-v1, /app/design/backup-content-v1.js, /app/design/direction-v1-modern-ownership-institution.html.

Mission (owner-favored, verbatim): "We teach people to make better decisions. We help them turn those decisions into capabilities. And we measure whether the work was actually completed." Homepage headline treatment: "Better Decisions. Real Capabilities. Measurable Progress." (proposed copy awaiting final approval).

Founder: Mr. Mogul Maker = independent founder brand (Independent Founder Authority · Media · Speaking · Thought Leadership); MMA features and appropriately licenses founder content. PAIGE Agent AI is a separate business — never an MMA product/benefit. Compliance: no guaranteed financing/sales/income/valuations/acquisitions/returns; no tradeline-placement advertising; membership prices ($19/$49/$197 confirmed owner rates) NOT displayed on homepage or universal pages — only on verified enrollment destination (not yet linked); eight implementation services shown as "Internal Catalog" — never enrollment-ready until authorized; free resources marked "In Development" are labeled design concepts, not live offerings.

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

## What's Been Implemented (2026-11-14, v2 redesign)
- Homepage with exact 10-section structure: Hero (exact headline "Don't Just Make Money. Build Something Worth Owning.", cinematic MAKE→MANAGE→MULTIPLY progress bar) → Pathways (4 interactive cards) → 3M Framework (interactive tabbed stage display with animated connectors) → Free Learning (6 resources, In Development labeled) → Support Levels (LEARN/APPLY/IMPLEMENT, no prices) → Community (7 programs, public vs member-labeled) → Mission (verbatim) → Proof of the Work (7 modules, evidence-gated, founder-experience only available item) → Meet Mr. Mogul Maker (independent positioning, external CTA pending verified URL) → Final CTA
- Supporting pages: /start-here (4 pathway detail sections with resources + program pointers), /learn (levels explained w/o consulting implication + 38-module catalog + accessible FAQ accordions), /workshops (+ /workshops/schedule calendar + /workshops/:id detail with RSVP), /implementation (8 services by 3M stage + boundaries FAQ), /resources (search + pillar filter), /about (mission, 3M, principles, founder relationship, FAQ), /contact (enquiry form preserved), /privacy /terms /accessibility (careful non-lawyer drafts — need legal review)
- Measurement-ready analytics stub /app/frontend/src/utils/track.js (pathway_selected, cta_clicked, 3m_stage_selected, resource_accessed — console in dev, consent-first, no destination yet)
- Footer: Community/Member Login (→ contact with note), Contact, Privacy, Terms, Accessibility; social channels listed as pending-verified (no dead links); legacy routes (/courses, /enquiry, /events, /journal, /framework, /methods, /schedule) redirect to new destinations
- v2 content model: /app/frontend/src/data/v2.js (single edit point for pathways, resources, community, implementation catalog, founder, levels)

## What's Been Implemented (2026-11-10, phase 2)
- Course detail pages (/courses/:id) for all 38 modules: pillar/level/status tags, extensible description+lessons+outcomes sections (render when approved fields are added to content.js), classification sidebar, related methods, related pillar modules, notify CTA
- Insights Journal: /journal index with 3M pillar filters + featured essay; /journal/:slug article pages with related-catalog crosslinks; 4 launch essays in /app/frontend/src/data/articles.js (Money Follows Management; Find Your Mogul Path; Build It or Buy It?; valuation intro)
- Live event infrastructure: each of the 4 programs has a detail page (/events/:id) with agenda, audience, schedule panel; /schedule dated calendar renders automatically when an event's date/location/sessions are approved in content.js; RSVP system wired to backend (POST/GET /api/rsvps, Mongo `rsvps` collection)
- Founder photo slot: /app/frontend/src/components/FounderPhoto.jsx — renders real portrait when FOUNDER.photoUrl is set in content.js; honest placeholder until then (no fabricated likeness)
- Journal added to main nav; Event Schedule + Insights Journal added to footer

## Verified
- POST/GET /api/enquiries via curl (201, stored, listed)
- POST/GET /api/rsvps via curl (201, stored, filtered by event_id)
- Homepage hero/framework/curriculum screenshots at 1920px; courses page renders 38 cards; MULTIPLY filter → 14, VIP+MULTIPLY → 9; enquiry form submitted through UI, toast shown, record in DB
- Phase 2: course detail page (/courses/vip-7), journal index + MULTIPLY filter (2 articles), article page, schedule page screenshotted at 1920px — all render correctly
- NOT verified: true mobile (390px) rendering — screenshot tool forced 1920 width; RSVP form only exercised via API (no scheduled events exist yet to render it in UI)

## Leadership Update (2026-11-15)
- Co-founder added: Tashia Anderson (Co-Founder, Atlanta, Georgia) on About page with honest bio/portrait placeholder slots; HQ stated as Atlanta, Georgia in structured data + llms.txt. Owner to supply approved co-founder bio/photo. LEADERSHIP block lives in /app/frontend/src/data/v2.js.

## v3.1 Production-Readiness Fixes (2026-11-15)
- Footer pillar links (MAKE/MANAGE/MULTIPLY) now route to /framework?stage=<id>; FrameworkPage reads ?stage to preselect the tab (verified: ?stage=multiply aria-selected=true)
- Member Login (nav + footer) → https://www.skool.com/login (existing-member flow); Join the Community (footer, separate CTA) → public Skool /about page
- Founder YouTube CTA explicitly labeled as the founder's YouTube channel, not the independent mrmogulmaker.com site (both homepage + About)
- Forms: EnquiryForm + RsvpForm restyled to v2 palette; consent disclosures added; hidden honeypot field (website) added to both; backend drops honeypot-filled submissions silently (verified: bot submission 201s but is not stored); RSVP relabeled "Register My Interest" with explicit "not a confirmed registration" copy; dates-pending workshops show interest-only panel
- SEO: staging meta robots set to noindex,nofollow until owner acceptance (restore index,follow + canonical/og:url at go-live); sitemap.xml placeholder written (activates when mogulmakeracademy.com resolves); robots.txt sitemap line prepared
- E2E verified via browser: all footer/hero/final CTAs + journey deep links, contact submit toast + consent + honeypot, event interest-only panel. NOT verified: true 390px mobile (screenshot tool forces desktop width); PostHog bot-filter warnings in console are tooling noise, not errors

## v3 Multi-Page Architecture (2026-11-14, current live state)
Refactored per the Multi-Page Structure + CTA Destination Map directive. Homepage reduced to 6 sections (hero / journey cards / 3M preview / MMA experience LEARN-CONNECT-IMPLEMENT / mission+founder intro / final invitation). Route map: / /start (?path=start|own|grow|acquire) /framework /academy /workshops (+/schedule, /:eventId) /resources /about /implementation /contact /privacy /terms /accessibility; /courses/:id preserved as deep links. Legacy redirects: /start-here→/start, /learn→/academy, /courses→/academy, /enquiry→/contact, /events→/workshops, /journal→/resources, /methods→/framework, /schedule→/workshops/schedule. Primary CTA = FIND YOUR MOGUL PATH → /start; Member Login in nav+footer → verified Skool. Implementation demoted from main nav (footer + experience card + contact routing). Methods directory removed from public nav (preserved internally in content.js + backup). Course catalog removed from public pages (curriculum lives inside Skool per directive; CourseCard/detail pages kept functional for deep links). Founder sections now have editable placeholder slots (portrait/testimony/journey/accomplishments/media) — owner supplies content.
SEO: react-helmet-async per-route titles/descriptions; static head (title, description, OG, Twitter, EducationalOrganization JSON-LD with phone +1-470-517-7009, founder Person node, sameAs YouTube/Instagram/Skool); robots.txt + llms.txt in public/; canonical/og:url/sitemap omitted pending confirmed production domain (mogulmakeracademy.com currently down, Cloudflare 522). Phone +1 (470) 517-7009 (SMS-capable) on footer, About, Contact. Breadcrumbs component on all interior pages.

## Verified Destinations Wired (2026-11-14)
- Skool member community (Community / Member Login in footer + contact page note): https://www.skool.com/mogul-maker-group-8193/about — LIVE, 167 members
- Founder external CTA ("EXPLORE MR. MOGUL MAKER" on homepage + About): https://www.youtube.com/@mrmogulmaker — verified via multiple sources
- Socials in footer: Instagram https://www.instagram.com/mrmogulmaker + YouTube (same channel)
- mrmogulmaker.com does NOT currently resolve (hosting down) — CTA points to YouTube with a note; swap DESTINATIONS/FOUNDER_V2 in v2.js when the site is restored
- mogulmakeracademy.com (current live site) is DOWN — Cloudflare error 522 (origin timeout); flag to owner
- DISCREPANCY: live Skool pricing is Standard $8/mo, Premium $44/mo, VIP $197/mo — owner-confirmed 2027 relaunch rates are $19/$49/$197. Neither is displayed on the website per directive; Skool checkout remains the pricing source of truth until relaunch.

## Missing / Needed From Owner
- Final approval of homepage mission headline treatment ("Better Decisions. Real Capabilities. Measurable Progress.")
- Verified URL for the independent Mr. Mogul Maker website → set FOUNDER_V2.externalUrl in v2.js
- Verified legal entity information for footer/terms
- Legal review of Privacy/Terms/Accessibility drafts (careful non-lawyer versions currently live)
- Verified social channel URLs (footer holds honest "pending" note)
- Founder photography/video for hero + Meet Mr. Mogul Maker slots
- Approved resource files (scorecard, guides, checklist, diagnostic, videos, bookshelf) to flip V2_RESOURCES live:true
- Approved workshop dates/venues/presenters → events in content.js (calendar + RSVP activate automatically)
- Approved course descriptions/lessons/outcomes → per-course fields in content.js
- Verified membership enrollment destination for pricing ($19/$49/$197 — never on universal pages)
- Verified analytics destination + consent mechanism (track.js queue is ready)

## Verified (v2)
- Homepage 10 sections screenshotted at 1920px (hero, pathways, 3M, mission); implementation + learn pages verified (38 modules, VIP filter → 13); resource search ("bottleneck" → 1 result) works; contact endpoint POST 201; all routes compile (200s)
- NOT verified: true mobile (390px) rendering — screenshot tool forces desktop width, so the lg:hidden mobile menu can't be exercised visually (code is responsive-by-class)

## Backlog
- P1: Owner review of v2 preview; approval gate before any production deploy (directive: do NOT publish without explicit authorization)
- P1: True 390px mobile verification
- P1: Wire verified destinations as supplied (founder URL, enrollment destination, socials, analytics)
- P2: Interactive Start Here diagnostic (currently curated pathways; must not be advertised as live until built and accepted)
- P2: Legal-reviewed privacy/terms; consent banner for analytics activation
- P2: CMS/admin editing of content collections
- P2: Cloudflare deployment migration
