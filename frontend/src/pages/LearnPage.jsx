import { useMemo, useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { AccordionItem } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { COURSES, PILLARS } from "@/data/content";
import { LEARN_LEVELS } from "@/data/v2";

const KIND_FILTERS = [
  { id: "all", label: "All Types" },
  { id: "course", label: "Core Courses" },
  { id: "experience", label: "Experiences & Resources" },
];

const PILLAR_COLORS = {
  make: "#115754",
  manage: "#C29949",
  multiply: "#142635",
};

const FAQS = [
  {
    q: "What's the difference between Standard, Premium, and VIP?",
    a: "The three levels describe depth of education and member access — not the 3M Framework. Standard builds practical foundations for emerging entrepreneurs. Premium serves professionals moving from income toward ownership. VIP delivers executive-level education for established owners and strategic acquirers.",
  },
  {
    q: "Do memberships include individual consulting?",
    a: "No. Standard, Premium, and VIP are educational memberships — structured courses, resources, and community experiences. One-on-one professional work happens through separately contracted implementation services, which are never bundled into membership.",
  },
  {
    q: "Are the 2027 catalog courses available now?",
    a: "Not yet. The approved 2027 catalog is in development. Every module is labeled Coming Soon or In Development, and descriptions, instructors, and release details publish only when approved.",
  },
  {
    q: "Where do I see membership pricing?",
    a: "Pricing is presented on the verified membership details and enrollment destination — not on this page or the homepage. Use the contact form and we'll direct you to the current verified details.",
  },
  {
    q: "How do courses relate to MAKE, MANAGE, and MULTIPLY?",
    a: "Every module carries a 3M pillar tag describing its subject matter, alongside its membership level. The pillars organize what you learn; the levels describe depth and access.",
  },
];

const LearnPage = () => {
  const [level, setLevel] = useState("all");
  const [pillar, setPillar] = useState("all");
  const [kind, setKind] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      COURSES.filter(
        (c) =>
          (level === "all" || c.level === level) &&
          (pillar === "all" || c.pillar === pillar) &&
          (kind === "all" || c.kind === kind) &&
          (query.trim() === "" || c.title.toLowerCase().includes(query.trim().toLowerCase()))
      ),
    [level, pillar, kind, query]
  );

  return (
    <main className="bg-[#FBF6EB]" data-testid="learn-page">
      <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#115754]/40 mma-grain">
        <div className="max-w-7xl mx-auto max-w-4xl">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            Learn — The Academy
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
            Structured Education for Every Stage of Ownership
          </h1>
          <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed">
            Standard, Premium, and VIP are educational memberships — structured courses, resources,
            and community experiences classified by the MAKE · MANAGE · MULTIPLY framework. They
            do not include individual consulting; professional implementation is contracted
            separately.
          </p>
        </div>
      </section>

      {/* Levels */}
      <section className="px-6 lg:px-12 py-16 lg:py-20 border-b border-[#142635]/10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-12">
            <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-2">
              Membership Levels
            </div>
            <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight">
              Depth of Education, Not Status
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEARN_LEVELS.map((l) => (
              <Reveal key={l.id}>
                <div className="bg-white border border-[#142635]/12 rounded-sm p-8 h-full shadow-sm" data-testid={`learn-level-${l.id}`}>
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#115754] mb-4">
                    {l.audience}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#142635] mb-3">{l.name}</h3>
                  <p className="text-sm text-[#142635]/65 leading-relaxed mb-4">{l.text}</p>
                  <p className="text-[11px] text-[#142635]/50 leading-relaxed border-t border-[#142635]/10 pt-4">
                    {l.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-[11px] text-[#142635]/50 max-w-3xl" data-testid="pricing-location-note">
            Current membership rates are presented on the verified membership details and
            enrollment destination — never on this page. Contact the Academy for the current
            verified details.
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="px-6 lg:px-12 py-16 lg:py-20 border-b border-[#142635]/10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-2">
                2027 Master Catalog
              </div>
              <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight">
                Approved Curriculum — 38 Modules
              </h2>
            </div>
            <p className="text-xs font-mono text-[#142635]/50 uppercase tracking-wider">
              All modules Coming Soon or In Development
            </p>
          </Reveal>

          {/* Filters */}
          <div className="space-y-4 mb-10" data-testid="course-filters">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by membership level">
              <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#142635]/50 mr-1 w-full sm:w-auto">
                Level
              </span>
              {[{ id: "all", name: "All Levels" }, ...LEARN_LEVELS.map((l) => ({ id: l.id, name: l.name }))].map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLevel(l.id)}
                  data-testid={`filter-level-${l.id}`}
                  className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border ${
                    level === l.id
                      ? "bg-[#142635] text-[#FBF6EB] border-[#142635]"
                      : "border-[#142635]/25 text-[#142635]/60 hover:border-[#142635] hover:text-[#142635]"
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by 3M pillar">
              <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#142635]/50 mr-1 w-full sm:w-auto">
                3M Pillar
              </span>
              <button
                onClick={() => setPillar("all")}
                data-testid="filter-pillar-all"
                className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border ${
                  pillar === "all"
                    ? "bg-[#142635] text-[#FBF6EB] border-[#142635]"
                    : "border-[#142635]/25 text-[#142635]/60 hover:border-[#142635] hover:text-[#142635]"
                }`}
              >
                All Pillars
              </button>
              {Object.values(PILLARS).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPillar(p.id)}
                  data-testid={`filter-pillar-${p.id}`}
                  className="px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border"
                  style={
                    pillar === p.id
                      ? { backgroundColor: PILLAR_COLORS[p.id], color: "#fff", borderColor: PILLAR_COLORS[p.id] }
                      : { borderColor: `${PILLAR_COLORS[p.id]}66`, color: PILLAR_COLORS[p.id], backgroundColor: "transparent" }
                  }
                >
                  {p.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by content type">
                {KIND_FILTERS.map((k) => (
                  <button
                    key={k.id}
                    onClick={() => setKind(k.id)}
                    data-testid={`filter-kind-${k.id}`}
                    className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border ${
                      kind === k.id
                        ? "bg-[#142635] text-[#FBF6EB] border-[#142635]"
                        : "border-[#142635]/25 text-[#142635]/60 hover:border-[#142635] hover:text-[#142635]"
                    }`}
                  >
                    {k.label}
                  </button>
                ))}
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the catalog…"
                aria-label="Search courses"
                data-testid="course-search-input"
                className="sm:ml-auto w-full sm:w-64 bg-white border border-[#142635]/25 px-3.5 py-2 text-xs text-[#142635] placeholder-[#142635]/40 focus:outline-none focus:border-[#115754] rounded-sm transition-colors"
              />
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#142635]/50" data-testid="course-count">
              Showing {filtered.length} of {COURSES.length} approved modules
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center" data-testid="course-empty-state">
              <p className="font-display text-2xl text-[#142635] mb-2">No modules match these filters.</p>
              <p className="text-sm text-[#142635]/60">Adjust the level, pillar, or search to explore the catalog.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((c) => (
                <CourseCard key={c.id} course={c} dark={false} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-2">
              Questions
            </div>
            <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight">
              How the Academy Works
            </h2>
          </Reveal>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} question={f.q} testId={`learn-faq-${i}`}>
                {f.a}
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearnPage;
