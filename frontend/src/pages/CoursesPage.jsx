import { useMemo, useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { Reveal } from "@/components/Reveal";
import { COURSES, PILLARS, LEVELS } from "@/data/content";

const KIND_FILTERS = [
  { id: "all", label: "All Types" },
  { id: "course", label: "Core Courses" },
  { id: "experience", label: "Experiences & Resources" },
];

const CoursesPage = () => {
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

  const chipCls = (active, color) => {
    if (active && color) {
      return {
        style: { backgroundColor: color, color: "#fff", borderColor: color },
        cls: "border",
      };
    }
    if (active) {
      return { style: { backgroundColor: "#101B2B", color: "#F7F4EE", borderColor: "#101B2B" }, cls: "border" };
    }
    return {
      style: { backgroundColor: "transparent", color: "#5F6773", borderColor: "#5F6773/40" },
      cls: "border border-[#5F6773]/40 hover:border-[#101B2B] hover:text-[#101B2B]",
    };
  };

  return (
    <main className="bg-[#F7F4EE]" data-testid="courses-page">
      {/* Header */}
      <section className="bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 py-20 lg:py-24 border-b border-[#202832] mma-grain">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-3">
            2027 Master Catalog
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-medium text-white tracking-[-0.02em] leading-tight mb-5">
            Courses & Learning Pathways
          </h1>
          <p className="text-sm md:text-base text-[#F7F4EE]/75 max-w-3xl font-light leading-relaxed">
            Thirty-eight approved modules across Standard, Premium, and VIP — every one classified
            by the MAKE · MANAGE · MULTIPLY framework. The 3M pillars describe what you learn;
            membership levels describe depth and access. All 2027 catalog courses are currently in
            development or coming soon.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-12 py-10 border-b border-[#5F6773]/20 bg-[#F7F4EE] sticky top-[72px] z-30 bg-opacity-95 backdrop-blur-md" data-testid="course-filters">
        <div className="max-w-7xl mx-auto space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by membership level">
              <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#5F6773] mr-1 w-full sm:w-auto">
                Level
              </span>
              {[{ id: "all", name: "All Levels" }, ...Object.values(LEVELS)].map((l) => {
                const active = level === l.id;
                const { style, cls } = chipCls(active);
                return (
                  <button
                    key={l.id}
                    onClick={() => setLevel(l.id)}
                    data-testid={`filter-level-${l.id}`}
                    style={style}
                    className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors ${cls}`}
                  >
                    {l.name}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by 3M pillar">
              <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#5F6773] mr-1 w-full sm:w-auto">
                3M Pillar
              </span>
              <button
                onClick={() => setPillar("all")}
                data-testid="filter-pillar-all"
                {...(() => { const { style, cls } = chipCls(pillar === "all"); return { style }; })()}
                className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border ${pillar === "all" ? "" : "border-[#5F6773]/40 text-[#5F6773] hover:border-[#101B2B] hover:text-[#101B2B]"}`}
                style={pillar === "all" ? { backgroundColor: "#101B2B", color: "#F7F4EE", borderColor: "#101B2B" } : {}}
              >
                All Pillars
              </button>
              {Object.values(PILLARS).map((p) => {
                const active = pillar === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPillar(p.id)}
                    data-testid={`filter-pillar-${p.id}`}
                    className="px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border"
                    style={
                      active
                        ? { backgroundColor: p.color, color: "#fff", borderColor: p.color }
                        : { borderColor: `${p.color}66`, color: p.color, backgroundColor: "transparent" }
                    }
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by content type">
              {KIND_FILTERS.map((k) => {
                const active = kind === k.id;
                return (
                  <button
                    key={k.id}
                    onClick={() => setKind(k.id)}
                    data-testid={`filter-kind-${k.id}`}
                    className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border ${
                      active
                        ? "bg-[#101B2B] text-[#F7F4EE] border-[#101B2B]"
                        : "border-[#5F6773]/40 text-[#5F6773] hover:border-[#101B2B] hover:text-[#101B2B]"
                    }`}
                  >
                    {k.label}
                  </button>
                );
              })}
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the catalog…"
              aria-label="Search courses"
              data-testid="course-search-input"
              className="sm:ml-auto w-full sm:w-64 bg-white border border-[#5F6773]/40 px-3.5 py-2 text-xs text-[#202832] placeholder-[#5F6773] focus:outline-none focus:border-[#C6A66B] rounded-sm transition-colors"
            />
          </div>

          <div className="text-[11px] font-mono uppercase tracking-wider text-[#5F6773]" data-testid="course-count">
            Showing {filtered.length} of {COURSES.length} approved modules
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="py-20 text-center" data-testid="course-empty-state">
              <p className="font-display text-2xl text-[#101B2B] mb-2">No modules match these filters.</p>
              <p className="text-sm text-[#5F6773]">Adjust the level, pillar, or search to explore the catalog.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((c) => (
                <CourseCard key={c.id} course={c} dark={false} />
              ))}
            </div>
          )}

          <Reveal className="mt-16 p-8 bg-white border border-[#5F6773]/20 rounded-sm shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#80551E] mb-2">
                  How the Catalog Works
                </div>
                <p className="text-xs text-[#5F6773] leading-relaxed">
                  Every module carries a 3M pillar tag — MAKE, MANAGE, or MULTIPLY — describing its
                  subject matter, and a level tag — Standard, Premium, or VIP — describing its
                  depth and member access.
                </p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#80551E] mb-2">
                  Availability
                </div>
                <p className="text-xs text-[#5F6773] leading-relaxed">
                  The approved 2027 catalog is in active development. "Coming Soon" and "In
                  Development" modules are not yet published. Descriptions, instructors, and
                  release details are added only as they are approved.
                </p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#80551E] mb-2">
                  Educational Standard
                </div>
                <p className="text-xs text-[#5F6773] leading-relaxed">
                  Mogul Maker Academy provides entrepreneurial and financial education. We do not
                  promise or imply guaranteed wealth, investment returns, or funding outcomes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;
