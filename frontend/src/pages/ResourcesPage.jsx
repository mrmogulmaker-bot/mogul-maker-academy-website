import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { track } from "@/utils/track";
import { V2_RESOURCES, V2_PILLARS } from "@/data/v2";

const ResourcesPage = () => {
  const [pillar, setPillar] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      V2_RESOURCES.filter(
        (r) =>
          (pillar === "all" || r.pillar === pillar) &&
          (query.trim() === "" ||
            r.title.toLowerCase().includes(query.trim().toLowerCase()) ||
            r.problem.toLowerCase().includes(query.trim().toLowerCase()) ||
            r.description.toLowerCase().includes(query.trim().toLowerCase()))
      ),
    [pillar, query]
  );

  return (
    <main className="bg-[#FBF6EB]" data-testid="resources-page">
      <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#115754]/40 mma-grain">
        <div className="max-w-7xl mx-auto max-w-4xl">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            Resources
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
            Free Business Education, Organized by Problem
          </h1>
          <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed">
            Practical tools, original guides, video lessons, and assessments — organized by
            MAKE · MANAGE · MULTIPLY and by the business problem you're actually facing. No
            purchase required.
          </p>
        </div>
      </section>

      {/* Search & filters */}
      <section className="px-6 lg:px-12 py-8 border-b border-[#142635]/10" data-testid="resource-filters">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by 3M pillar">
            <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#142635]/50 mr-1">
              Pillar
            </span>
            <button
              onClick={() => setPillar("all")}
              data-testid="resource-filter-all"
              className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border ${
                pillar === "all"
                  ? "bg-[#142635] text-[#FBF6EB] border-[#142635]"
                  : "border-[#142635]/25 text-[#142635]/60 hover:border-[#142635] hover:text-[#142635]"
              }`}
            >
              All
            </button>
            {Object.values(V2_PILLARS).map((p) => (
              <button
                key={p.id}
                onClick={() => setPillar(p.id)}
                data-testid={`resource-filter-${p.id}`}
                className="px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border"
                style={
                  pillar === p.id
                    ? { backgroundColor: p.color, color: "#fff", borderColor: p.color }
                    : { borderColor: `${p.color}66`, color: p.color, backgroundColor: "transparent" }
                }
              >
                {p.name}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by problem — e.g. bottleneck, funding, valuation…"
            aria-label="Search resources"
            data-testid="resource-search-input"
            className="lg:ml-auto w-full lg:w-96 bg-white border border-[#142635]/25 px-3.5 py-2 text-xs text-[#142635] placeholder-[#142635]/40 focus:outline-none focus:border-[#115754] rounded-sm transition-colors"
          />
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="py-20 text-center" data-testid="resource-empty-state">
              <p className="font-display text-2xl text-[#142635] mb-2">Nothing matches that search.</p>
              <p className="text-sm text-[#142635]/60">Try a different problem or clear the pillar filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r) => {
                const pillarInfo = V2_PILLARS[r.pillar];
                return (
                  <Reveal key={r.id}>
                    <div
                      className={`rounded-sm p-8 h-full border-t-4 ${
                        r.live
                          ? "bg-white border border-[#142635]/12 shadow-sm"
                          : "bg-white/60 border border-dashed border-[#142635]/20"
                      }`}
                      style={{ borderTopColor: pillarInfo.color }}
                      data-testid={`resource-item-${r.id}`}
                    >
                      <div className="flex items-center justify-between mb-4 gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: pillarInfo.color }}>
                          {pillarInfo.name} • {r.format}
                        </span>
                        {!r.live && (
                          <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-[#C29949]/50 text-[#8a6d2f]">
                            In Development
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] font-semibold text-[#142635]/70 mb-2">
                        "{r.problem}"
                      </div>
                      <h2 className="font-display text-xl font-semibold text-[#142635] mb-3 leading-snug">
                        {r.title}
                      </h2>
                      <p className="text-xs text-[#142635]/60 leading-relaxed mb-5">{r.description}</p>
                      {r.live ? (
                        <button
                          onClick={() => track("resource_accessed", { resource: r.id })}
                          data-testid={`resource-access-${r.id}`}
                          className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#115754] border-b-2 border-[#C29949] pb-1 hover:text-[#142635] transition-colors"
                        >
                          Open resource
                        </button>
                      ) : (
                        <p className="text-[10px] text-[#142635]/45 font-mono uppercase tracking-wider" data-testid={`resource-preview-note-${r.id}`}>
                          {r.note}
                        </p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}

          <Reveal className="mt-14 p-6 bg-[#115754]/5 border border-[#115754]/20 rounded-sm">
            <p className="text-xs text-[#142635]/65 leading-relaxed max-w-3xl" data-testid="resources-honesty-note">
              Only resources that exist and are approved for distribution are offered for access.
              Items marked "In Development" are clearly identified design concepts shown in
              preview — they are not live public offerings.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
