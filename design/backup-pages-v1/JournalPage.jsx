import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ARTICLES } from "@/data/articles";
import { PILLARS } from "@/data/content";

const formatDate = (iso) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const JournalPage = () => {
  const [pillar, setPillar] = useState("all");

  const filtered = useMemo(
    () => ARTICLES.filter((a) => pillar === "all" || a.pillar === pillar),
    [pillar]
  );

  return (
    <main className="bg-[#F7F4EE]" data-testid="journal-page">
      <section className="bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#202832] mma-grain">
        <div className="max-w-7xl mx-auto max-w-4xl">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-3">
            Insights Journal
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-medium text-white tracking-[-0.02em] leading-tight mb-6">
            Ideas Worth Owning
          </h1>
          <p className="text-sm md:text-base text-[#F7F4EE]/75 max-w-3xl font-light leading-relaxed">
            Essays, guides, and analysis from the Academy — every piece classified by the
            MAKE · MANAGE · MULTIPLY framework, written for entrepreneurs and owners at every
            stage.
          </p>
        </div>
      </section>

      {/* Pillar filters */}
      <section className="px-6 lg:px-12 py-8 border-b border-[#5F6773]/20" data-testid="journal-filters">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#5F6773] mr-1">
            Filter by Pillar
          </span>
          <button
            onClick={() => setPillar("all")}
            data-testid="journal-filter-all"
            className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors border ${
              pillar === "all"
                ? "bg-[#101B2B] text-[#F7F4EE] border-[#101B2B]"
                : "border-[#5F6773]/40 text-[#5F6773] hover:border-[#101B2B] hover:text-[#101B2B]"
            }`}
          >
            All
          </button>
          {Object.values(PILLARS).map((p) => {
            const active = pillar === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setPillar(p.id)}
                data-testid={`journal-filter-${p.id}`}
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
      </section>

      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Featured article */}
          {filtered.length > 0 && (
            <Reveal className="mb-14">
              <Link
                to={`/journal/${filtered[0].slug}`}
                data-testid={`journal-featured-${filtered[0].slug}`}
                className="group block bg-[#101B2B] text-[#F7F4EE] rounded-sm p-10 lg:p-14 mma-grain transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${PILLARS[filtered[0].pillar].color}4D`,
                      color: PILLARS[filtered[0].pillar].onDarkText,
                    }}
                  >
                    {PILLARS[filtered[0].pillar].name}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5F6773]">
                    {filtered[0].format} • {filtered[0].readingTime}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#5F6773]">
                    {formatDate(filtered[0].date)}
                  </span>
                </div>
                <h2 className="font-display text-[clamp(26px,3.4vw,44px)] font-medium text-white tracking-tight leading-tight max-w-3xl mb-4">
                  {filtered[0].title}
                </h2>
                <p className="text-sm text-[#F7F4EE]/70 leading-relaxed max-w-2xl mb-6">
                  {filtered[0].dek}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#C6A66B]">
                  Read the essay{" "}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          )}

          {/* Remaining articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(1).map((a) => {
              const p = PILLARS[a.pillar];
              return (
                <Reveal key={a.slug}>
                  <Link
                    to={`/journal/${a.slug}`}
                    data-testid={`journal-card-${a.slug}`}
                    className="group block bg-white border border-[#5F6773]/20 shadow-sm rounded-sm p-8 h-full border-t-4 transition-transform duration-300 hover:-translate-y-1"
                    style={{ borderTopColor: p.color }}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded"
                        style={{ backgroundColor: `${p.color}1A`, color: p.color }}
                      >
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#5F6773]">
                        {a.readingTime}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-medium text-[#101B2B] mb-3 leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-xs text-[#5F6773] leading-relaxed mb-5">{a.dek}</p>
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#5F6773]">
                      <span>{a.format} • {formatDate(a.date)}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#80551E] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {filtered.length <= 1 && (
            <p className="mt-10 text-sm text-[#5F6773]" data-testid="journal-count-note">
              More {pillar !== "all" ? PILLARS[pillar].name : ""} essays are in editorial
              development. New pieces publish here automatically.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default JournalPage;
