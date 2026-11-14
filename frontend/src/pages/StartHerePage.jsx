import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { track } from "@/utils/track";
import { PATHWAYS, V2_PILLARS } from "@/data/v2";

const LEVEL_ROUTES = { standard: "/learn", premium: "/learn", vip: "/learn" };

const StartHerePage = () => (
  <main className="bg-[#FBF6EB]" data-testid="start-here-page">
    <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#115754]/40 mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
          Start Here
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
          Find Your Next Move
        </h1>
        <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed">
          Four ownership pathways. Choose the situation closest to yours — you'll get concise
          questions to think through, helpful recommendations, and the relevant next steps. No
          program is required to begin learning.
        </p>
        <p className="mt-6 text-[11px] text-[#FBF6EB]/45 max-w-2xl" data-testid="diagnostic-note">
          A guided interactive diagnostic is in development. Until it is built and accepted, this
          curated pathway experience is how visitors find their next move.
        </p>
      </div>
    </section>

    <section className="px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto space-y-16">
        {PATHWAYS.map((p, idx) => {
          const pillar = V2_PILLARS[p.pillar];
          const flip = idx % 2 === 1;
          return (
            <Reveal key={p.id}>
              <div
                id={p.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 scroll-mt-28 ${
                  flip ? "lg:[direction:rtl]" : ""
                }`}
                data-testid={`pathway-detail-${p.id}`}
              >
                {/* Situation card */}
                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <div
                    className="bg-[#142635] text-[#FBF6EB] rounded-sm p-8 lg:p-10 h-full border-t-4"
                    style={{ borderTopColor: pillar.color }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: pillar.onDark }}>
                        {p.name}
                      </span>
                      <span className="font-display text-4xl font-bold text-[#FBF6EB]/10">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="font-display text-[clamp(22px,2.6vw,32px)] font-bold text-white tracking-tight leading-snug mb-5">
                      "{p.question}"
                    </h2>
                    <p className="text-sm text-[#FBF6EB]/70 leading-relaxed">{p.text}</p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="lg:col-span-7 lg:[direction:ltr] space-y-8">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] font-bold mb-4" style={{ color: pillar.color }}>
                      Start by understanding
                    </div>
                    <ul className="space-y-3">
                      {p.resources.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 bg-white border border-[#142635]/12 rounded-sm p-4"
                          data-testid={`pathway-resource-${p.id}-${i}`}
                        >
                          <span className="font-mono text-[10px] mt-1" style={{ color: pillar.color }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-[#142635]">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border border-[#142635]/12 rounded-sm p-6">
                    <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#142635] mb-2">
                      Where the Academy supports this stage
                    </div>
                    <p className="text-sm text-[#142635]/65 leading-relaxed mb-5">{p.programsNote}</p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/resources"
                        onClick={() => track("cta_clicked", { cta: "free-resources", location: `pathway-${p.id}` })}
                        data-testid={`pathway-resources-cta-${p.id}`}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#115754] border-b-2 border-[#C29949] pb-1 hover:text-[#142635] transition-colors"
                      >
                        Free resources for this stage <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        to={LEVEL_ROUTES[p.level]}
                        onClick={() => track("cta_clicked", { cta: "academy-programs", location: `pathway-${p.id}` })}
                        data-testid={`pathway-programs-cta-${p.id}`}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#115754] border-b-2 border-[#C29949] pb-1 hover:text-[#142635] transition-colors"
                      >
                        Relevant Academy programs <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}

        <Reveal className="text-center pt-4">
          <p className="text-sm text-[#142635]/60 mb-6 max-w-xl mx-auto">
            Not sure which situation fits? That's exactly what a first conversation is for.
          </p>
          <Link
            to="/contact"
            data-testid="start-here-contact-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
          >
            Talk to the Academy <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  </main>
);

export default StartHerePage;
