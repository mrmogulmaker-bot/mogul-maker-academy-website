// Mogul Maker Academy — structured content collections
// Approved 2027 catalog titles are preserved verbatim. Do not rename, combine, delete, or invent courses.

export const PILLARS = {
  make: {
    id: "make",
    name: "MAKE",
    tagline: "Create Economic Value",
    color: "#285F58",
    onDarkText: "#8CD4CA",
    icon: "Hammer",
    definition:
      "Entrepreneurship, business formation, business models, product and service development, marketing, customer acquisition, and revenue creation.",
    philosophy: null,
    topics: [
      "Entrepreneurship & Business Formation",
      "Business Models",
      "Product & Service Development",
      "Marketing",
      "Customer Acquisition",
      "Revenue Creation",
    ],
    methods: ["LAUNCH", "ACCEL"],
    competencies: [
      "Demand Validation & Pricing Logic",
      "First-to-Steady Sales Conversion",
      "Commercial Entity Setup & Viability",
    ],
  },
  manage: {
    id: "manage",
    name: "MANAGE",
    tagline: "Build Financial & Operating Discipline",
    color: "#275977",
    onDarkText: "#9DC8E4",
    icon: "Gauge",
    definition:
      "Business financial management, profitability, cash flow, banking, credit readiness, organizational structure, leadership, operating systems, and responsible capital preparation.",
    philosophy: "Money Follows Management.",
    topics: [
      "Business Financial Management",
      "Profitability & Cash Flow",
      "Banking & Credit Readiness",
      "Organizational Structure & Leadership",
      "Operating Systems",
      "Responsible Capital Preparation",
    ],
    methods: ["BUILD", "FUND"],
    competencies: [
      "Real-Time Unit Economics & P&L",
      "Operating Dashboards & Delegation",
      "Capital Readiness & Banking Controls",
    ],
  },
  multiply: {
    id: "multiply",
    name: "MULTIPLY",
    tagline: "Expand Ownership & Enterprise Value",
    color: "#80551E",
    onDarkText: "#E0B986",
    icon: "Layers",
    definition:
      "Business growth, strategic capital allocation, acquisitions, real estate education, investment strategy, valuation, business ownership, and exit readiness.",
    philosophy: null,
    topics: [
      "Business Growth",
      "Strategic Capital Allocation",
      "Acquisitions",
      "Real Estate Education",
      "Investment Strategy & Valuation",
      "Business Ownership & Exit Readiness",
    ],
    methods: ["ACQUIRE"],
    competencies: [
      "Business Valuation & Diligence",
      "Buy-Side Acquisition Strategies",
      "Boardroom Governance & Scale",
    ],
  },
};

export const METHODS = [
  {
    name: "LAUNCH",
    pillar: "make",
    summary:
      "A structured pathway from business concept to official launch — formation, offer development, and first revenue.",
  },
  {
    name: "ACCEL",
    pillar: "make",
    summary:
      "Accelerating early traction — customer acquisition systems, repeatable sales, and steady revenue creation.",
  },
  {
    name: "BUILD",
    pillar: "manage",
    summary:
      "Building the operating backbone — financial management, organizational structure, and systems that scale beyond the founder.",
  },
  {
    name: "FUND",
    pillar: "manage",
    summary:
      "Responsible capital preparation — banking relationships, credit readiness, and funding decisions made with discipline.",
  },
  {
    name: "ACQUIRE",
    pillar: "multiply",
    summary:
      "Acquisition education — evaluating businesses, understanding valuation and risk, and pursuing ownership through purchase.",
  },
];

export const LEVELS = {
  standard: {
    id: "standard",
    name: "Standard",
    audience: "Emerging Entrepreneurs",
    avatar: "Avatar C",
    blurb: "Approachable, practical foundations for people building their first real business.",
  },
  premium: {
    id: "premium",
    name: "Premium",
    audience: "Ownership Aspirants & Advancing Entrepreneurs",
    avatar: "Avatar B",
    blurb: "Structured pathways from high income to genuine business ownership.",
  },
  vip: {
    id: "vip",
    name: "VIP",
    audience: "Established Business Owners & Strategic Acquirers",
    avatar: "Avatars A & D",
    blurb: "Executive-level education for operators, owners, and emerging acquirers.",
  },
};

// kind: "course" | "experience"  |  pillar: make | manage | multiply  |  status: coming-soon | in-development
export const COURSES = [
  // STANDARD — Core
  { id: "std-1", title: "Start Here: Find Your Mogul Path", level: "standard", kind: "course", pillar: "make", status: "coming-soon", focus: "Orientation, baseline diagnostic, and personal pathway mapping." },
  { id: "std-2", title: "Got a Business Idea? Make Sure It Sells", level: "standard", kind: "course", pillar: "make", status: "coming-soon", focus: "Demand validation before you build." },
  { id: "std-3", title: "Turn What You Know Into What You Sell", level: "standard", kind: "course", pillar: "make", status: "coming-soon", focus: "Product and service development from existing knowledge." },
  { id: "std-4", title: "Price It Right: Make Money, Not Just Sales", level: "standard", kind: "course", pillar: "make", status: "in-development", focus: "Pricing for profit, not just volume." },
  { id: "std-5", title: "Get Customers: From First Sale to Steady Sales", level: "standard", kind: "course", pillar: "make", status: "coming-soon", focus: "Customer acquisition that becomes repeatable." },
  { id: "std-6", title: "Make It Official: Set Your Business Up Right", level: "standard", kind: "course", pillar: "manage", status: "coming-soon", focus: "Business formation and structural setup." },
  { id: "std-7", title: "Know Your Money: Keep More of What You Make", level: "standard", kind: "course", pillar: "manage", status: "in-development", focus: "Foundational business money management." },
  { id: "std-8", title: "Make Your Move: The Mogul Playbook", level: "standard", kind: "course", pillar: "make", status: "coming-soon", focus: "Sequenced action plan for the emerging entrepreneur." },
  // STANDARD — Community Experiences & Resources
  { id: "std-9", title: "The Action Lab: Challenges & Wins", level: "standard", kind: "experience", pillar: "make", status: "coming-soon", focus: "Community challenges and applied practice." },
  { id: "std-10", title: "Workshop Wednesday: The Replay Library", level: "standard", kind: "experience", pillar: "manage", status: "coming-soon", focus: "Workshop replays for the Standard community." },
  { id: "std-11", title: "The Mogul Toolkit: Business Starter Resources", level: "standard", kind: "experience", pillar: "manage", status: "coming-soon", focus: "Starter templates, checklists, and resources." },
  { id: "std-12", title: "Meet the Moguls: Connect, Learn & Grow", level: "standard", kind: "experience", pillar: "multiply", status: "coming-soon", focus: "Community connection and peer learning." },
  // PREMIUM — Core
  { id: "prm-1", title: "Beyond the Paycheck: Your Path to Business Ownership", level: "premium", kind: "course", pillar: "make", status: "coming-soon", focus: "The pathway from high income to ownership." },
  { id: "prm-2", title: "Build It or Buy It? Make the Right Move", level: "premium", kind: "course", pillar: "multiply", status: "coming-soon", focus: "Evaluating organic build versus acquisition." },
  { id: "prm-3", title: "The Business Math: Know What You're Getting Into", level: "premium", kind: "course", pillar: "manage", status: "in-development", focus: "Financial fundamentals before committing capital." },
  { id: "prm-4", title: "Sales That Stick: From Random Leads to Repeat Buyers", level: "premium", kind: "course", pillar: "make", status: "coming-soon", focus: "Sales systems that produce repeat customers." },
  { id: "prm-5", title: "Set Up for Growth: Structure, Banking & Records", level: "premium", kind: "course", pillar: "manage", status: "coming-soon", focus: "Banking, records, and organizational structure." },
  { id: "prm-6", title: "Capital Without Chaos: Get Funding-Ready", level: "premium", kind: "course", pillar: "manage", status: "coming-soon", focus: "Clean books, lender metrics, and credit readiness." },
  { id: "prm-7", title: "Stop Doing Everything: Build Systems That Work", level: "premium", kind: "course", pillar: "manage", status: "in-development", focus: "Operating systems and delegation." },
  { id: "prm-8", title: "Before You Buy: Know What You're Really Buying", level: "premium", kind: "course", pillar: "multiply", status: "coming-soon", focus: "Pre-purchase evaluation and diligence fundamentals." },
  { id: "prm-9", title: "From Plan to Ownership: Make It Happen", level: "premium", kind: "course", pillar: "multiply", status: "coming-soon", focus: "Executing the transition into ownership." },
  // PREMIUM — Community Experiences & Resources
  { id: "prm-10", title: "The Implementation Lab: Learn It. Apply It.", level: "premium", kind: "experience", pillar: "manage", status: "coming-soon", focus: "Applied implementation sessions." },
  { id: "prm-11", title: "Workshop Wednesday: Premium Deep Dives", level: "premium", kind: "experience", pillar: "manage", status: "coming-soon", focus: "Deep-dive workshop replays for Premium members." },
  { id: "prm-12", title: "The Mogul Toolkit: Owner's Edition", level: "premium", kind: "experience", pillar: "manage", status: "coming-soon", focus: "Owner-grade templates and resources." },
  { id: "prm-13", title: "The Ownership Network: Connect & Collaborate", level: "premium", kind: "experience", pillar: "multiply", status: "coming-soon", focus: "Aspirant community and collaboration." },
  // VIP — Core
  { id: "vip-1", title: "The Owner's Next Move: Grow, Acquire or Exit?", level: "vip", kind: "course", pillar: "multiply", status: "coming-soon", focus: "Strategic decision frameworks for established owners." },
  { id: "vip-2", title: "Find the Profit You're Leaving Behind", level: "vip", kind: "course", pillar: "manage", status: "coming-soon", focus: "Profitability analysis and margin recovery." },
  { id: "vip-3", title: "Scale Without Being the Bottleneck", level: "vip", kind: "course", pillar: "manage", status: "in-development", focus: "Leadership, structure, and operating systems at scale." },
  { id: "vip-4", title: "Build a Business Worth More", level: "vip", kind: "course", pillar: "multiply", status: "coming-soon", focus: "Enterprise value creation." },
  { id: "vip-5", title: "Capital for Growth: Borrow, Reinvest or Wait?", level: "vip", kind: "course", pillar: "manage", status: "coming-soon", focus: "Strategic capital allocation decisions." },
  { id: "vip-6", title: "Buy the Right Business, Not Just a Good Story", level: "vip", kind: "course", pillar: "multiply", status: "in-development", focus: "Acquisition target evaluation discipline." },
  { id: "vip-7", title: "What's This Business Really Worth?", level: "vip", kind: "course", pillar: "multiply", status: "coming-soon", focus: "Valuation fundamentals and deal analysis." },
  { id: "vip-8", title: "Find the Risk Before You Sign", level: "vip", kind: "course", pillar: "multiply", status: "coming-soon", focus: "Risk identification in transactions." },
  { id: "vip-9", title: "After the Deal: Make the Acquisition Work", level: "vip", kind: "course", pillar: "multiply", status: "coming-soon", focus: "Post-acquisition integration and operation." },
  // VIP — Executive Experiences & Resources
  { id: "vip-10", title: "The Owner's Boardroom: Strategic Case Labs", level: "vip", kind: "experience", pillar: "multiply", status: "coming-soon", focus: "Executive case-study sessions." },
  { id: "vip-11", title: "Capital Call: Funding & Acquisition Workshops", level: "vip", kind: "experience", pillar: "multiply", status: "coming-soon", focus: "Funding and acquisition workshop intensives." },
  { id: "vip-12", title: "The Owner's Toolkit: Dashboards, Models & Checklists", level: "vip", kind: "experience", pillar: "manage", status: "coming-soon", focus: "Executive dashboards, models, and checklists." },
  { id: "vip-13", title: "The Ownership Circle: Peer Network & Accountability", level: "vip", kind: "experience", pillar: "multiply", status: "coming-soon", focus: "Peer network for owners and acquirers." },
];

export const AVATARS = [
  {
    id: "C",
    name: "The Emerging Entrepreneur",
    level: "standard",
    response: "I belong here. This feels approachable, practical, and achievable.",
    description:
      "Resource-constrained and ready to build. You want clear explanations, practical steps, and honest guidance — not jargon or hype. Standard membership is designed around your stage.",
    settings: ["Validating a first business idea", "Building a first offer and finding first customers", "Setting up a business properly from day one"],
  },
  {
    id: "B",
    name: "The Ownership Aspirant",
    level: "premium",
    response: "This is intelligent, organized, credible, and worthy of my time.",
    description:
      "A high-income professional exploring real ownership — build or buy. You value structured decision frameworks, business math, and a credible sequence over motivational noise. Premium membership meets you there.",
    settings: ["Evaluating the move from paycheck to ownership", "Comparing building versus buying a business", "Preparing for funding with clean books"],
  },
  {
    id: "A",
    name: "The Builder In Motion",
    level: "vip",
    response: "These people understand the challenges of operating and growing a real company.",
    description:
      "You operate a real business with real payroll, real customers, and real constraints. You need systems, leadership structure, and profitability discipline — not entry-level inspiration. VIP education is built for operators.",
    settings: ["Removing yourself as the bottleneck", "Installing operating dashboards and delegation", "Finding profit being left behind"],
  },
  {
    id: "D",
    name: "The Strategic Owner & Emerging Acquirer",
    level: "vip",
    response: "This organization understands capital, transactions, risk, and ownership.",
    description:
      "You think in terms of enterprise value, valuation, and strategic allocation. You want acquisition education and risk discipline at an executive level. VIP experiences are designed around that standard.",
    settings: ["Evaluating acquisition targets with discipline", "Understanding valuation and risk before signing", "Deciding: grow, acquire, or prepare for exit"],
  },
];

export const EVENTS = [
  {
    id: "ev-1",
    title: "Workshop Wednesday",
    pillar: "manage",
    kind: "Weekly Workshop",
    description:
      "A standing weekly workshop rhythm for members — practical sessions across the 3M Framework, with replays available to Standard and Premium communities.",
    status: "coming-soon",
  },
  {
    id: "ev-2",
    title: "Capital Call",
    pillar: "multiply",
    kind: "VIP Workshop Series",
    description:
      "Funding and acquisition workshop intensives for established owners and strategic acquirers — part of the VIP executive experience.",
    status: "coming-soon",
  },
  {
    id: "ev-3",
    title: "Meet the Moguls",
    pillar: "make",
    kind: "Community Meetup",
    description:
      "Community connection and peer learning for emerging entrepreneurs — connect, learn, and grow alongside people building at your stage.",
    status: "coming-soon",
  },
  {
    id: "ev-4",
    title: "The Owner's Boardroom",
    pillar: "multiply",
    kind: "Executive Case Lab",
    description:
      "Strategic case labs for VIP members — working through real business scenarios with structure, discipline, and peer accountability.",
    status: "coming-soon",
  },
];

export const HERO_COPY = {
  headline: ["BUILD THE BUSINESS.", "MASTER THE MONEY.", "OWN YOUR FUTURE."],
  sub: "Practical education, strategic guidance, and a community built for entrepreneurs and owners at every stage.",
  primaryCta: "FIND YOUR MOGUL PATH",
  secondaryCta: "EXPLORE THE ACADEMY",
};

export const HERO_ACTS = [
  { id: "ambition", act: "Act 1", name: "Ambition", pillar: "make", line: "An opportunity is discovered. A business concept begins.", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGlkZWF0aW9uJTIwbm90ZWJvb2slMjBwbGFubmluZ3xlbnwwfHx8fDE3OTQyODczODR8MA&ixlib=rb-4.1.0&q=85" },
  { id: "creation", act: "Act 2", name: "Creation", pillar: "make", line: "The idea becomes a product, a service, an enterprise.", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBzZXJ2aW5nJTIwY3VzdG9tZXJ8ZW58MHx8fHwxNzk0Mjg3Mzg0fDA&ixlib=rb-4.1.0&q=85" },
  { id: "execution", act: "Act 3", name: "Execution", pillar: "make", line: "Customers, teams, and operating businesses create real economic activity.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxjaW5lbWF0aWMlMjBidXNpbmVzcyUyMGxlYWRlciUyMHN0cmF0ZWd5fGVufDB8fHx8MTc5NDI4MjExNnww&ixlib=rb-4.1.0&q=85" },
  { id: "discipline", act: "Act 4", name: "Discipline", pillar: "manage", line: "Finances are reviewed. Systems are built. Decisions are managed. Money Follows Management.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGZpbmFuY2UlMjBkYXRhJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzk0MjgyMTE2fDA&ixlib=rb-4.1.0&q=85" },
  { id: "ownership", act: "Act 5", name: "Ownership", pillar: "multiply", line: "Assets are evaluated. Strategic growth, acquisitions, and enterprise value come into view.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMG93bmVyJTIwc3RyYXRlZ3klMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDB8fHx8MTc5NDI4NDczOHww&ixlib=rb-4.1.0&q=85" },
  { id: "community", act: "Act 6", name: "Community", pillar: "multiply", line: "Entrepreneurs learn, collaborate, and develop alongside one another.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxkaXZlcnNlJTIwZW50cmVwcmVuZXVycyUyMGxlYXJuaW5nJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTc5NDI4NzM4NHww&ixlib=rb-4.1.0&q=85" },
];

export const FOUNDER = {
  name: "Antonio Cook",
  knownAs: "Mr. Mogul Maker",
  role: "Founder — Entrepreneur, Business Strategist, Author & Educator",
  bio: [
    "Mogul Maker Academy reflects Antonio Cook's experience building businesses, navigating corporate structures, developing capital-readiness strategies, and exploring business ownership and investments.",
    "The Academy exists to connect education with implementation — practical courses, live workshops, business-building resources, coaching opportunities, and an entrepreneurial community, organized through the proprietary MAKE · MANAGE · MULTIPLY philosophy.",
  ],
  quote:
    "We're not here to teach you how to look successful. We're here to help you develop the knowledge, discipline, and capabilities to build something valuable.",
  photoNote:
    "Founder photography is being prepared for publication. The Academy's educational value extends beyond any individual image.",
};
