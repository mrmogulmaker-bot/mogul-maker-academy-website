// Mogul Maker Academy — 2027 Relaunch content model (v2)
// Ownership journey first. Programs support the journey; they never lead it.

export const BRAND = {
  name: "Mogul Maker Academy",
  short: "MMA",
  tagline: "MAKE • MANAGE • MULTIPLY",
  missionHeadline: ["Better Decisions.", "Real Capabilities.", "Measurable Progress."],
  // Owner-favored wording — preserve exactly.
  mission: [
    "We teach people to make better decisions.",
    "We help them turn those decisions into capabilities.",
    "And we measure whether the work was actually completed.",
  ],
  missionSupport: [
    "We believe meaningful business education should change more than what people know. It should improve how they evaluate opportunities, solve problems, manage resources, and take responsibility for their next steps.",
    "Success doesn't look the same for everyone. Our purpose is to help people develop the capabilities to pursue the ownership goals that matter to them.",
  ],
  positioning:
    "A business ownership education and implementation platform helping entrepreneurs develop the knowledge, judgment, operational capabilities, and practical systems required to build and manage valuable businesses.",
  primaryCta: "FIND YOUR NEXT MOVE",
};

export const V2_PILLARS = {
  make: {
    id: "make",
    name: "MAKE",
    headline: "Build Your Earning Power.",
    color: "#115754",
    onDark: "#7FD4C8",
    summary:
      "Understand customers, establish valuable offers, develop sales, and create the foundation of a viable enterprise.",
    detail:
      "Create value, build earning power, acquire customers, and establish viable businesses.",
  },
  manage: {
    id: "manage",
    name: "MANAGE",
    headline: "Build a Business That Works.",
    color: "#C29949",
    onDark: "#E4C87F",
    summary:
      "Create capable Teams, repeatable Systems, and disciplined Capital management.",
    detail:
      "Strengthen Teams, Systems, and Capital to create operational stability and accountable execution.",
  },
  multiply: {
    id: "multiply",
    name: "MULTIPLY",
    headline: "Develop Lasting Ownership Value.",
    color: "#142635",
    onDark: "#9FB8C8",
    summary:
      "Evaluate reinvestment, expansion, assets, acquisitions, and future ownership decisions.",
    detail:
      "Make informed decisions about reinvestment, expansion, assets, business acquisitions, and long-term ownership value.",
  },
};

export const PATHWAYS = [
  {
    id: "start",
    name: "START",
    question: "I Have an Idea. Now What?",
    text: "Understand your customers, develop an offer, evaluate pricing, and take your first informed steps toward entrepreneurship.",
    cta: "EXPLORE STARTING A BUSINESS",
    pillar: "make",
    level: "standard",
    resources: [
      "How to evaluate whether a business idea has real customers",
      "Developing an offer people understand and want",
      "Pricing fundamentals for a first product or service",
    ],
    programsNote:
      "The Standard pathway inside the Academy is built for this stage — practical foundations without the overwhelm.",
  },
  {
    id: "own",
    name: "OWN",
    question: "I Earn a Good Living. But I Want to Own More.",
    text: "Explore how to move from earning income toward evaluating and building ownership opportunities.",
    cta: "EXPLORE THE PATH TO OWNERSHIP",
    pillar: "multiply",
    level: "premium",
    resources: [
      "The difference between income and ownership",
      "Build or buy: how to think through the decision",
      "Preparing your finances before you commit capital",
    ],
    programsNote:
      "The Premium pathway is designed for high-income professionals exploring real ownership — build or buy.",
  },
  {
    id: "grow",
    name: "GROW",
    question: "My Business Makes Money. Why Am I Still Doing Everything?",
    text: "Learn to build stronger teams, better systems, and financial discipline that supports a more capable business.",
    cta: "EXPLORE BUSINESS GROWTH",
    pillar: "manage",
    level: "vip",
    resources: [
      "Identifying where you are the bottleneck",
      "Systems and delegation that hold up under pressure",
      "Financial discipline that reveals the profit you're leaving behind",
    ],
    programsNote:
      "VIP education is built for operators — teams, systems, and capital discipline at an executive level.",
  },
  {
    id: "acquire",
    name: "ACQUIRE",
    question: "I'm Ready to Acquire, Expand, or Build Lasting Value.",
    text: "Evaluate business acquisitions, capital decisions, operational risks, and long-term enterprise value.",
    cta: "EXPLORE STRATEGIC OWNERSHIP",
    pillar: "multiply",
    level: "vip",
    resources: [
      "How acquisitions are evaluated before anyone signs",
      "Understanding valuation and operational risk",
      "Deciding: grow, acquire, or prepare for exit",
    ],
    programsNote:
      "VIP executive experiences address acquisition evaluation, capital allocation, and enterprise value.",
  },
];

// Free learning library. `live: false` = clearly identified design concept, not a public offering.
export const V2_RESOURCES = [
  {
    id: "res-bottleneck-scorecard",
    title: "Business Owner Bottleneck Scorecard",
    pillar: "manage",
    problem: "My business depends on me for everything",
    format: "Assessment",
    live: false,
    note: "In development — design concept, not yet available.",
    description:
      "A structured self-assessment that helps owners locate where the business depends on them — and what to systematize first.",
  },
  {
    id: "res-build-or-buy-guide",
    title: "Build-or-Buy Decision Guide",
    pillar: "multiply",
    problem: "Should I build a business or buy one?",
    format: "Guide",
    live: false,
    note: "In development — design concept, not yet available.",
    description:
      "A disciplined walkthrough of the build-versus-buy decision: capital, timeline, risk, and what you're really buying.",
  },
  {
    id: "res-capital-readiness",
    title: "Business Capital Readiness Checklist",
    pillar: "manage",
    problem: "Am I prepared to seek funding responsibly?",
    format: "Checklist",
    live: false,
    note: "In development — design concept, not yet available.",
    description:
      "The records, banking relationships, and financial hygiene lenders expect — assembled before you need them.",
  },
  {
    id: "res-ownership-diagnostic",
    title: "Business & Ownership Diagnostic",
    pillar: "make",
    problem: "Where am I on the ownership journey?",
    format: "Diagnostic",
    live: false,
    note: "In development — design concept, not yet available.",
    description:
      "A guided diagnostic that maps your current position to the next most useful move. Not yet live.",
  },
  {
    id: "res-video-lessons",
    title: "Original Video Lessons & Case Studies",
    pillar: "make",
    problem: "I want to see how this works in practice",
    format: "Video Series",
    live: false,
    note: "Awaiting approved footage — design concept.",
    description:
      "Short, practical video lessons drawn from the MAKE · MANAGE · MULTIPLY curriculum and approved case material.",
  },
  {
    id: "res-mogul-bookshelf",
    title: "The Mogul Bookshelf",
    pillar: "multiply",
    problem: "What should I be reading?",
    format: "Reading List",
    live: false,
    note: "In development — design concept, not yet available.",
    description:
      "A curated shelf of books on entrepreneurship, operations, capital, and ownership — with notes on why each matters.",
  },
];

// Community programming. Public vs member-restricted is always labeled.
export const COMMUNITY_PROGRAMS = [
  {
    id: "mogul-history",
    name: "Mogul History",
    access: "public",
    description:
      "Studies of real enterprises and the decisions that built — or broke — them.",
  },
  {
    id: "mogul-bookshelf",
    name: "The Mogul Bookshelf",
    access: "public",
    description: "A guided read-through of the books that shape serious owners.",
  },
  {
    id: "inside-the-classroom",
    name: "Inside the Classroom",
    access: "members",
    levels: "Standard, Premium & VIP",
    description: "A look inside current Academy lessons and member discussions.",
  },
  {
    id: "workshop-wednesday",
    name: "Workshop Wednesday",
    access: "members",
    levels: "Standard & Premium",
    description: "Weekly working sessions across the 3M Framework, with replays.",
  },
  {
    id: "owners-edge",
    name: "The Owner's Edge",
    access: "members",
    levels: "VIP",
    description: "Executive briefings for established owners and acquirers.",
  },
  {
    id: "mogul-moves-wins",
    name: "Mogul Moves & Wins",
    access: "members",
    levels: "Standard, Premium & VIP",
    description: "Members share decisions made, work completed, and progress earned.",
  },
  {
    id: "strategic-saturday",
    name: "Strategic Saturday",
    access: "members",
    levels: "Premium & VIP",
    description: "Longer-form strategic sessions on ownership decisions.",
  },
];

// The eight approved implementation services — internal catalog organization.
// None are presented as enrollment-ready until specifically authorized.
export const IMPLEMENTATION_SERVICES = [
  { id: "impl-1", name: "Business Structure & Formation Review", stage: "make", problem: "My business isn't set up properly", scope: "Entity structure, registrations, and foundational setup reviewed and corrected.", status: "catalog" },
  { id: "impl-2", name: "Offer & Revenue Model Development", stage: "make", problem: "My offer isn't selling consistently", scope: "Offer design, pricing logic, and revenue model built with the owner.", status: "catalog" },
  { id: "impl-3", name: "Financial Records & Reporting Setup", stage: "manage", problem: "I can't see my real numbers", scope: "Bookkeeping structure, reporting cadence, and owner dashboards established.", status: "catalog" },
  { id: "impl-4", name: "Capital Readiness Preparation", stage: "manage", problem: "I'm not ready to approach lenders", scope: "Banking relationships, documentation, and credit-readiness preparation. No financing outcome is promised.", status: "catalog" },
  { id: "impl-5", name: "Operating Systems & Delegation Build", stage: "manage", problem: "Everything runs through me", scope: "Documented processes, role design, and delegation systems installed.", status: "catalog" },
  { id: "impl-6", name: "Growth & Expansion Planning", stage: "multiply", problem: "I don't know which growth move is right", scope: "Structured evaluation of reinvestment, expansion, and capital allocation options.", status: "catalog" },
  { id: "impl-7", name: "Acquisition Evaluation Support", stage: "multiply", problem: "I'm looking at buying a business", scope: "Diligence support: valuation reasoning, operational risk review, deal structure education. No transaction outcome is guaranteed.", status: "catalog" },
  { id: "impl-8", name: "Enterprise Value & Exit Readiness", stage: "multiply", problem: "What is my business actually worth — and could it run without me?", scope: "Value-driver assessment and transferability preparation.", status: "catalog" },
];

export const PROOF_MODULES = [
  { id: "founder-experience", label: "Founder Experience", status: "available", note: "Founder background and original frameworks — presented in Meet Mr. Mogul Maker." },
  { id: "case-studies", label: "Authorized Client Case Studies", status: "pending", note: "Published only with written client authorization." },
  { id: "work-products", label: "Completed Business Work Products", status: "pending", note: "Examples of real deliverables, shared with permission." },
  { id: "assignments", label: "Educational Assignments & Progress", status: "pending", note: "Member work shared with consent." },
  { id: "milestones", label: "Implementation Milestones", status: "pending", note: "Documented project milestones from contracted engagements." },
  { id: "outcomes", label: "Documented Customer Outcomes", status: "pending", note: "Traceable, evidence-backed outcomes only." },
  { id: "testimonials", label: "Permissioned Testimonials", status: "pending", note: "Published only with explicit written permission." },
];

export const LEADERSHIP = {
  headquarters: "Atlanta, Georgia",
  cofounder: {
    name: "Tashia Anderson",
    role: "Co-Founder",
    location: "Atlanta, Georgia",
    // Approved biography, portrait, and credentials are supplied by the owner.
    bio: null,
    photoUrl: null,
  },
};

export const FOUNDER_V2 = {
  name: "Antonio Cook",
  knownAs: "Mr. Mogul Maker",
  independentPositioning: "Independent Founder Authority · Media · Speaking · Thought Leadership",
  intro: [
    "Antonio Cook, known as Mr. Mogul Maker, is an entrepreneur, educator, and investor whose work centers on helping people understand the difference between making money and building lasting ownership.",
    "His philosophy connects earning power, business operations, capital, and the decisions required to build valuable enterprises.",
    "Mogul Maker Academy brings that perspective into structured education, practical learning, and professionally supported implementation.",
  ],
  relationship:
    "Mr. Mogul Maker produces business education, thought leadership, speaking engagements, media appearances, commentary, and original intellectual property. Mogul Maker Academy is an educational and implementation business that features and appropriately licenses founder content.",
  externalUrl: "https://www.youtube.com/@mrmogulmaker",
  externalNote:
    "Verified YouTube destination. The independent mrmogulmaker.com website is linked here once its hosting is restored.",
  cta: "EXPLORE MR. MOGUL MAKER",
};

// Verified destinations (checked 2026-11-14). Add only confirmed, owner-approved URLs here.
export const DESTINATIONS = {
  // Public Skool landing — enrollment ("Join the Community")
  skoolCommunity: "https://www.skool.com/mogul-maker-group-8193/about",

  founderYouTube: "https://www.youtube.com/@mrmogulmaker",
  instagram: "https://www.instagram.com/mrmogulmaker",
  youtube: "https://www.youtube.com/@mrmogulmaker",
};

export const LEARN_LEVELS = [
  {
    id: "standard",
    name: "Standard",
    audience: "Emerging Entrepreneurs",
    text: "Practical foundations for people building their first real business — structured courses, resources, and community discussion.",
    detail:
      "Membership-based education. Standard does not include individual consulting or one-on-one advisory.",
  },
  {
    id: "premium",
    name: "Premium",
    audience: "Ownership Aspirants & Advancing Entrepreneurs",
    text: "Deeper education for professionals moving from income toward ownership — build-or-buy evaluation, business math, and funding readiness.",
    detail:
      "Membership-based education. Premium does not include individual consulting or one-on-one advisory.",
  },
  {
    id: "vip",
    name: "VIP",
    audience: "Established Owners & Strategic Acquirers",
    text: "Executive-level education for operators and acquirers — systems, valuation, capital decisions, and acquisition discipline.",
    detail:
      "Membership-based education. VIP does not include individual consulting or one-on-one advisory.",
  },
];
