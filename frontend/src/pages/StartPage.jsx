import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { track } from "@/utils/track";
import { PATHWAYS, V2_PILLARS, V2_RESOURCES, DESTINATIONS } from "@/data/v2";
import { COURSES, LEVELS } from "@/data/content";

const PATH_CTA = {
  start: "START YOUR JOURNEY",
  own: "EXPLORE OWNERSHIP",
  grow: "EXPLORE BUSINESS GROWTH",
  acquire: "EXPLORE STRATEGIC OWNERSHIP",
};

const StartPage = () => {
  const [searchParams] = useSearchParams();
  const activeId = PATHWAYS.some((p) => p.id === searchParams.get("path"))
    ? searchParams.get("path")
    : "start";
  const active = PATHWAYS.find((p) => p.id === activeId);
  const activePillar = V2_PILLARS[active.pillar];

  useEffect(() => {
    track("pathway_selected", { pathway: activeId, location: "start-page" });
  }, [activeId]);

  // Suggested supporting material for the active pathway
  const resource = V2_RESOURCES.find((r) => r.pillar === active.pillar);
  const course = COURSES.find((c) => c.level === active.level && c.pillar === active.pillar);
  const level = LEVELS[active.level];

  return (
    <main className="bg-[#FBF6EB]" data-testid="start-page">
      <Seo
        title="Start Here — Find Your Mogul Path | Mogul Maker Academy"
        description="Four ownership pathways: aspiring entrepreneur, income-to-ownership, established operator, and strategic acquirer. Find the next move that fits your stage."
      />
      <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-24 border-b border-[#115754]/40 mma-grain">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Start Here" }]} />
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            Start Here
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
            Find Your Mogul Path
          </h1>
          <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed">
            Choose the situation closest to yours. Each pathway shows the likely challenge, the
            learning philosophy that applies, and a clear next step. A full interactive diagnostic
            is a later enhancement — it is not required to begin.
          </p>
        </div>
      </section>

      {/* Pathway selector */}
      <section className="px-6 lg:px-12 py-10 border-b border-[#142635]/10" data-testid="path-selector">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
          {PATHWAYS.map((p) => {
            const pillar = V2_PILLARS[p.pillar];
            const isActive = p.id === activeId;
            return (
              <Link
                key={p.id}
                to={`/start?path=${p.id}`}
                data-testid={`path-tab-${p.id}`}
                className={`p-5 rounded-sm border text-left transition-all duration-300 ${
                  isActive
                    ? "bg-[#142635] border-[#142635] text-[#FBF6EB]"
                    : "bg-white border-[#142635]/15 text-[#142635] hover:border-[#115754]/50"
                }`}
              >
                <span
                  className="block text-[10px] font-mono uppercase tracking-[0.18em] mb-2"
                  style={{ color: isActive ? pillar.onDark : pillar.color }}
                >
                  {p.name}
                </span>
                <span className={`block font-display text-sm font-semibold leading-snug ${isActive ? "text-white" : ""}`}>
                  {p.id === "start" && "Aspiring entrepreneur"}
                  {p.id === "own" && "Income-to-ownership"}
                  {p.id === "grow" && "Established operator"}
                  {p.id === "acquire" && "Strategic owner & acquirer"}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Active pathway detail */}
      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto" data-testid={`pathway-result-${active.id}`}>
          <Reveal key={active.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: activePillar.color }}>
                {active.name} Pathway
              </span>
              <h2 className="font-display text-[clamp(26px,3.4vw,44px)] font-bold text-[#142635] tracking-tight leading-snug mt-3 mb-5">
                "{active.question}"
              </h2>
              <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#142635]/60 mb-3">
                Your likely challenge
              </div>
              <p className="text-sm text-[#142635]/70 leading-relaxed mb-8">{active.text}</p>

              <div className="text-[10px] uppercase tracking-[0.16em] font-bold mb-3" style={{ color: activePillar.color }}>
                The philosophy that applies — {activePillar.name}
              </div>
              <p className="text-sm text-[#142635]/70 leading-relaxed mb-8">{activePillar.detail}</p>

              <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#142635]/60 mb-3">
                Start by understanding
              </div>
              <ul className="space-y-3">
                {active.resources.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#142635]" data-testid={`path-topic-${active.id}-${i}`}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: activePillar.color }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-5">
              {/* Suggested free resource */}
              {resource && (
                <div className="bg-white border border-[#142635]/12 rounded-sm p-7 shadow-sm" data-testid="path-resource-card">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: activePillar.color }}>
                      Free Resource — {resource.format}
                    </span>
                    {!resource.live && (
                      <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-[#C29949]/50 text-[#8a6d2f]">
                        In Development
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#142635] mb-2">{resource.title}</h3>
                  <p className="text-xs text-[#142635]/60 leading-relaxed mb-3">{resource.description}</p>
                  <Link
                    to="/resources"
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-bold text-[#115754]"
                    data-testid="path-resource-link"
                  >
                    Browse free resources <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

              {/* Suitable course */}
              {course && (
                <Link
                  to={`/courses/${course.id}`}
                  className="block bg-[#142635] text-[#FBF6EB] rounded-sm p-7 transition-transform duration-300 hover:-translate-y-1"
                  data-testid="path-course-card"
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C29949] mb-3">
                    A course built for this stage — {level.name}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-xs text-[#FBF6EB]/65 leading-relaxed mb-3">{course.focus}</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-bold text-[#C29949]">
                    View course <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              )}

              {/* Next step */}
              <div className="bg-white border border-[#142635]/12 rounded-sm p-7 shadow-sm" data-testid="path-next-step">
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#142635] mb-3">
                  Your next step
                </div>
                <p className="text-sm text-[#142635]/65 leading-relaxed mb-5">{active.programsNote}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/academy"
                    data-testid="path-academy-cta"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#115754] text-[#FBF6EB] text-[11px] font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-[#17716c] transition-colors"
                  >
                    Explore the Academy <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={DESTINATIONS.skoolCommunity}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="path-community-cta"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#142635]/25 text-[#142635] text-[11px] font-bold uppercase tracking-[0.12em] rounded-sm hover:border-[#115754] hover:text-[#115754] transition-colors"
                  >
                    Join the Community
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default StartPage;
