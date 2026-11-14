import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, Clock3, Hammer, Gauge, Layers } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { track } from "@/utils/track";
import {
  BRAND,
  V2_PILLARS,
  PATHWAYS,
  V2_RESOURCES,
  COMMUNITY_PROGRAMS,
  PROOF_MODULES,
  FOUNDER_V2,
} from "@/data/v2";
import { HERO_ACTS } from "@/data/content";

const ACT_DURATION = 4600;
const PILLAR_ICONS = { make: Hammer, manage: Gauge, multiply: Layers };

/* ---------------- SECTION 01 — HERO ---------------- */
const Hero = () => {
  const [actIndex, setActIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    timerRef.current = setInterval(() => {
      setActIndex((i) => (i + 1) % HERO_ACTS.length);
    }, ACT_DURATION);
    return () => clearInterval(timerRef.current);
  }, [reducedMotion]);

  const act = HERO_ACTS[actIndex];

  return (
    <header
      className="relative bg-[#142635] text-[#FBF6EB] overflow-hidden border-b border-[#115754]/40 mma-grain"
      data-testid="hero-section"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_ACTS.map((a, i) => (
          <img
            key={a.id}
            src={a.image}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            className="mma-act-image absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === actIndex ? 0.22 : 0,
              transform: i === actIndex ? "scale(1.06)" : "scale(1.0)",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#142635] via-[#142635]/70 to-[#142635]/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-16 lg:pt-24 lg:pb-28">
        {/* MAKE → MANAGE → MULTIPLY progress */}
        <div className="mb-12 pb-6 border-b border-[#FBF6EB]/10">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] mb-3">
            <span className="text-[#C29949] font-semibold">MAKE • MANAGE • MULTIPLY</span>
            <span className="text-[#FBF6EB]/50 hidden md:inline" data-testid="hero-act-caption">
              {act.name}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {Object.values(V2_PILLARS).map((p, i) => (
              <div key={p.id} className="flex items-center gap-3 flex-1">
                <div
                  className="h-[3px] flex-1 rounded-full transition-colors duration-700"
                  style={{
                    backgroundColor:
                      act.pillar === p.id ? p.color : "rgba(251,246,235,0.15)",
                  }}
                />
                {i < 2 && (
                  <svg width="18" height="8" viewBox="0 0 18 8" className="flex-shrink-0" aria-hidden="true">
                    <line x1="0" y1="4" x2="14" y2="4" stroke="#C29949" strokeWidth="1.5" className="mma-3m-connector" />
                    <path d="M13 1l4 3-4 3" fill="none" stroke="#C29949" strokeWidth="1.5" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl">
          <div className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#C29949] mb-6">
            MOGUL MAKER ACADEMY
          </div>
          <h1 className="font-display text-[clamp(34px,5vw,72px)] leading-[1.02] tracking-[-0.02em] font-bold text-white mb-8">
            <span className="mma-hero-line"><span>Don't Just Make Money.</span></span>
            <span className="mma-hero-line"><span className="text-[#C29949]">Build Something Worth Owning.</span></span>
          </h1>
          <p className="mma-fade-up text-base md:text-lg text-[#FBF6EB]/85 max-w-2xl font-light leading-relaxed mb-10" data-testid="hero-subcopy">
            Starting a business is one thing. Building one that can grow, operate effectively,
            and create lasting value is another. At Mogul Maker Academy, we help aspiring
            entrepreneurs, established business owners, and future acquirers develop the
            knowledge, judgment, and practical capabilities to build something meaningful.
          </p>
          <div className="mma-fade-up flex flex-wrap items-center gap-4">
            <Link
              to="/start-here"
              onClick={() => track("cta_clicked", { cta: "find-your-next-move", location: "hero" })}
              data-testid="hero-cta-primary"
              className="px-7 py-3.5 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
            >
              FIND YOUR NEXT MOVE
            </Link>
            <Link
              to="/resources"
              onClick={() => track("cta_clicked", { cta: "explore-free-learning", location: "hero" })}
              data-testid="hero-cta-secondary"
              className="px-7 py-3.5 border border-[#FBF6EB]/30 text-[#FBF6EB] text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:border-[#C29949] hover:text-[#C29949] transition-colors"
            >
              EXPLORE FREE LEARNING
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

/* ---------------- SECTION 02 — PATHWAYS ---------------- */
const Pathways = () => (
  <section className="py-24 lg:py-32 bg-[#FBF6EB] px-6 lg:px-12 border-b border-[#142635]/10" data-testid="pathways-section">
    <div className="max-w-7xl mx-auto">
      <Reveal className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#115754] mb-3">
          Find Your Ownership Path
        </div>
        <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-bold text-[#142635] tracking-[-0.02em] leading-tight mb-4">
          Where Are You on Your Ownership Journey?
        </h2>
        <p className="text-base text-[#142635]/65 leading-relaxed">
          Every entrepreneur starts from a different position. The right next move depends on
          where you are, what you're building, and what you want ownership to accomplish.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PATHWAYS.map((p, i) => {
          const pillar = V2_PILLARS[p.pillar];
          return (
            <Reveal key={p.id}>
              <Link
                to={`/start-here#${p.id}`}
                onClick={() => track("pathway_selected", { pathway: p.id })}
                data-testid={`pathway-card-${p.id}`}
                className="group block bg-white border border-[#142635]/12 rounded-sm p-8 lg:p-10 h-full shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#115754]/40"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: pillar.color }}>
                    {p.name}
                  </span>
                  <span className="font-display text-5xl font-bold text-[#142635]/8 group-hover:text-[#115754]/15 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-[#142635] mb-4 leading-snug">
                  "{p.question}"
                </h3>
                <p className="text-sm text-[#142635]/65 leading-relaxed mb-8">{p.text}</p>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#115754]">
                  {p.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------------- SECTION 03 — 3M FRAMEWORK ---------------- */
const Framework3M = () => {
  const [active, setActive] = useState("make");
  const pillars = Object.values(V2_PILLARS);
  const current = V2_PILLARS[active];
  const Icon = PILLAR_ICONS[active];

  return (
    <section className="py-24 lg:py-32 bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 border-b border-[#115754]/40 mma-grain" data-testid="framework-section">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            The 3M Framework
          </div>
          <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-bold text-white tracking-[-0.02em] leading-tight mb-4">
            Three Stages. One Ownership Philosophy.
          </h2>
        </Reveal>

        {/* Interactive selector */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-10" role="tablist" aria-label="3M stages">
          {pillars.map((p, i) => (
            <div key={p.id} className="flex items-center gap-2 md:gap-4">
              <button
                role="tab"
                aria-selected={active === p.id}
                onClick={() => {
                  setActive(p.id);
                  track("3m_stage_selected", { stage: p.id });
                }}
                data-testid={`3m-tab-${p.id}`}
                className={`flex-1 py-4 px-3 md:px-6 text-left rounded-sm border transition-all duration-300 ${
                  active === p.id
                    ? "border-[#C29949]/60 bg-[#0E1D29]"
                    : "border-[#FBF6EB]/10 bg-[#0E1D29]/50 hover:border-[#FBF6EB]/25"
                }`}
              >
                <span className="block text-[10px] md:text-xs font-mono uppercase tracking-[0.18em] mb-1" style={{ color: p.onDark }}>
                  Stage {i + 1}
                </span>
                <span className={`block font-display text-base md:text-xl font-bold ${active === p.id ? "text-white" : "text-[#FBF6EB]/60"}`}>
                  {p.name}
                </span>
              </button>
              {i < 2 && (
                <svg width="22" height="10" viewBox="0 0 22 10" className="hidden md:block flex-shrink-0" aria-hidden="true">
                  <line x1="0" y1="5" x2="17" y2="5" stroke="#C29949" strokeWidth="1.5" className="mma-3m-connector" />
                  <path d="M16 1.5L21 5l-5 3.5" fill="none" stroke="#C29949" strokeWidth="1.5" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Stage display */}
        <Reveal key={active}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0E1D29] border border-[#FBF6EB]/10 rounded-sm p-8 lg:p-14" data-testid="3m-stage-display">
            <div className="lg:col-span-2 flex lg:justify-center">
              <div
                className="w-20 h-20 lg:w-28 lg:h-28 rounded-sm flex items-center justify-center border"
                style={{ borderColor: `${current.color}`, backgroundColor: `${current.color}22` }}
              >
                <Icon className="w-9 h-9 lg:w-12 lg:h-12" style={{ color: current.onDark }} aria-hidden="true" />
              </div>
            </div>
            <div className="lg:col-span-10">
              <h3 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-white tracking-tight mb-4">
                {current.headline}
              </h3>
              <p className="text-base text-[#FBF6EB]/75 leading-relaxed max-w-2xl mb-4">
                {current.summary}
              </p>
              <p className="text-sm text-[#FBF6EB]/50 leading-relaxed max-w-2xl">
                {current.detail}
              </p>
            </div>
          </div>
        </Reveal>
        <p className="mt-6 text-[11px] text-[#FBF6EB]/40 max-w-2xl">
          The 3M Framework is an educational philosophy — not a promise of wealth, and not a
          pricing structure.
        </p>
      </div>
    </section>
  );
};

/* ---------------- SECTION 04 — FREE LEARNING ---------------- */
const FreeLearning = () => (
  <section className="py-24 lg:py-32 bg-[#FBF6EB] px-6 lg:px-12 border-b border-[#142635]/10" data-testid="free-learning-section">
    <div className="max-w-7xl mx-auto">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
            Free Learning
          </div>
          <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-bold text-[#142635] tracking-[-0.02em] leading-tight mb-4">
            Start With a Better Decision.
          </h2>
          <p className="text-base text-[#142635]/65 leading-relaxed">
            You don't have to purchase a program to begin learning something useful. Explore
            practical business education designed to help you recognize problems, evaluate
            opportunities, and determine what comes next.
          </p>
        </div>
        <Link
          to="/resources"
          onClick={() => track("cta_clicked", { cta: "explore-free-resources", location: "home-free-learning" })}
          data-testid="free-learning-cta"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-bold text-[#115754] border-b-2 border-[#C29949] pb-1 hover:text-[#142635] transition-colors flex-shrink-0"
        >
          EXPLORE FREE RESOURCES <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {V2_RESOURCES.map((r) => {
          const pillar = V2_PILLARS[r.pillar];
          return (
            <Reveal key={r.id}>
              <div
                className="bg-white border border-[#142635]/12 rounded-sm p-7 h-full shadow-sm border-t-4"
                style={{ borderTopColor: pillar.color }}
                data-testid={`resource-card-${r.id}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: pillar.color }}>
                    {pillar.name} • {r.format}
                  </span>
                  {!r.live && (
                    <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-[#C29949]/50 text-[#8a6d2f]">
                      In Development
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold text-[#142635] mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-xs text-[#142635]/60 leading-relaxed">{r.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-8 text-[11px] text-[#142635]/50 max-w-3xl" data-testid="free-learning-honesty-note">
        Resources marked "In Development" are identified design concepts in preview — they are not
        live public offerings. Only approved resources publish for download.
      </p>
    </div>
  </section>
);

/* ---------------- SECTION 05 — LEVELS OF SUPPORT ---------------- */
const SupportLevels = () => (
  <section className="py-24 lg:py-32 bg-[#0E1D29] text-[#FBF6EB] px-6 lg:px-12 border-b border-[#115754]/40 mma-grain" data-testid="support-levels-section">
    <div className="max-w-7xl mx-auto">
      <Reveal className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
          Choose Your Level of Support
        </div>
        <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-bold text-white tracking-[-0.02em] leading-tight">
          Learning Is the Beginning. Execution Is the Difference.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal>
          <div className="bg-[#142635] border border-[#115754]/40 rounded-sm p-8 lg:p-10 h-full flex flex-col" data-testid="support-learn">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7FD4C8] mb-6">LEARN</span>
            <h3 className="font-display text-2xl font-bold text-white mb-4">The Academy</h3>
            <p className="text-sm text-[#FBF6EB]/70 leading-relaxed mb-6 flex-1">
              Structured courses, educational resources, community discussions, and practical
              learning experiences. Standard, Premium, and VIP membership opportunities.
            </p>
            <Link
              to="/learn"
              data-testid="support-learn-cta"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#7FD4C8] hover:text-white transition-colors"
            >
              EXPLORE THE ACADEMY <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-[#142635] border border-[#115754]/40 rounded-sm p-8 lg:p-10 h-full flex flex-col" data-testid="support-apply">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E4C87F] mb-6">APPLY</span>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Workshops & Experiences</h3>
            <p className="text-sm text-[#FBF6EB]/70 leading-relaxed mb-6 flex-1">
              Develop skills through guided exercises, real business scenarios, facilitated
              discussions, and practical assignments.
            </p>
            <Link
              to="/workshops"
              data-testid="support-apply-cta"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#E4C87F] hover:text-white transition-colors"
            >
              EXPLORE WORKSHOPS <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-[#142635] border border-[#C29949]/40 rounded-sm p-8 lg:p-10 h-full flex flex-col" data-testid="support-implement">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C29949] mb-6">IMPLEMENT</span>
            <h3 className="font-display text-2xl font-bold text-white mb-4">Professional Implementation</h3>
            <p className="text-sm text-[#FBF6EB]/70 leading-relaxed mb-6 flex-1">
              For businesses requiring more than instruction, MMA offers separately contracted
              professional services designed to establish defined operating capabilities and
              deliverables.
            </p>
            <Link
              to="/implementation"
              data-testid="support-implement-cta"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#C29949] hover:text-white transition-colors"
            >
              EXPLORE IMPLEMENTATION <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ---------------- SECTION 06 — COMMUNITY ---------------- */
const Community = () => (
  <section className="py-24 lg:py-32 bg-[#FBF6EB] px-6 lg:px-12 border-b border-[#142635]/10" data-testid="community-section">
    <div className="max-w-7xl mx-auto">
      <Reveal className="max-w-3xl mb-14">
        <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
          MMA Community
        </div>
        <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-bold text-[#142635] tracking-[-0.02em] leading-tight mb-4">
          Where Learning Becomes Action.
        </h2>
        <p className="text-base text-[#142635]/65 leading-relaxed">
          Business ownership shouldn't be a journey of endless information without execution.
          Inside MMA, our community experiences encourage entrepreneurs to learn, test ideas,
          make decisions, share progress, and develop real business capabilities.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {COMMUNITY_PROGRAMS.map((c, i) => (
          <Reveal key={c.id} className={i === 0 ? "sm:col-span-2" : ""}>
            <div
              className={`h-full rounded-sm p-7 border ${
                c.access === "public"
                  ? "bg-[#115754] text-[#FBF6EB] border-[#115754]"
                  : "bg-white text-[#142635] border-[#142635]/12 shadow-sm"
              }`}
              data-testid={`community-card-${c.id}`}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`text-[9px] font-mono uppercase tracking-[0.18em] px-2 py-0.5 rounded ${
                    c.access === "public"
                      ? "bg-[#FBF6EB]/15 text-[#FBF6EB]"
                      : "bg-[#115754]/10 text-[#115754]"
                  }`}
                >
                  {c.access === "public" ? "Public Experience" : `Members — ${c.levels}`}
                </span>
              </div>
              <h3 className={`font-display text-lg font-semibold mb-2 ${c.access === "public" ? "text-white" : "text-[#142635]"}`}>
                {c.name}
              </h3>
              <p className={`text-xs leading-relaxed ${c.access === "public" ? "text-[#FBF6EB]/75" : "text-[#142635]/60"}`}>
                {c.description}
              </p>
            </div>
          </Reveal>
        ))}

        {/* CTA tile */}
        <Reveal>
          <Link
            to="/learn"
            data-testid="community-cta"
            className="group flex flex-col justify-between h-full rounded-sm p-7 bg-[#C29949] text-[#142635] transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="font-display text-lg font-bold mb-2">Join the community that executes.</h3>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold">
              EXPLORE THE COMMUNITY <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ---------------- SECTION 07 — MISSION ---------------- */
const Mission = () => (
  <section className="py-24 lg:py-36 bg-[#115754] text-[#FBF6EB] px-6 lg:px-12 mma-grain" data-testid="mission-section">
    <div className="max-w-5xl mx-auto">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29949] mb-8">
          Our Mission
        </div>
        <h2 className="font-display text-[clamp(30px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-[1.05] mb-12">
          {BRAND.missionHeadline.map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </h2>
        <div className="border-l-2 border-[#C29949] pl-8 lg:pl-12 space-y-5 mb-12" data-testid="mission-statement">
          {BRAND.mission.map((l) => (
            <p key={l} className="font-display text-[clamp(17px,2.2vw,26px)] font-medium text-[#FBF6EB] leading-snug">
              {l}
            </p>
          ))}
        </div>
        <div className="max-w-2xl space-y-4">
          {BRAND.missionSupport.map((p, i) => (
            <p key={i} className="text-sm md:text-base text-[#FBF6EB]/70 leading-relaxed font-light">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

/* ---------------- SECTION 08 — PROOF OF THE WORK ---------------- */
const Proof = () => (
  <section className="py-24 lg:py-32 bg-[#FBF6EB] px-6 lg:px-12 border-b border-[#142635]/10" data-testid="proof-section">
    <div className="max-w-7xl mx-auto">
      <Reveal className="max-w-3xl mb-14">
        <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
          Proof of the Work
        </div>
        <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-bold text-[#142635] tracking-[-0.02em] leading-tight mb-4">
          Beyond the Promise. Show the Work.
        </h2>
        <p className="text-base text-[#142635]/65 leading-relaxed">
          Every claim on this website must be traceable to evidence. This area grows as case
          studies, work products, and documented outcomes are authorized for publication — and it
          stays honest while it does.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {PROOF_MODULES.map((m) => (
          <Reveal key={m.id}>
            <div
              className={`h-full rounded-sm p-6 border ${
                m.status === "available"
                  ? "bg-white border-[#115754]/40 shadow-sm"
                  : "bg-white/60 border-dashed border-[#142635]/20"
              }`}
              data-testid={`proof-module-${m.id}`}
            >
              <div className="flex items-center gap-2 mb-3">
                {m.status === "available" ? (
                  <BadgeCheck className="w-4 h-4 text-[#115754]" aria-hidden="true" />
                ) : (
                  <Clock3 className="w-4 h-4 text-[#C29949]" aria-hidden="true" />
                )}
                <span
                  className={`text-[9px] font-mono uppercase tracking-[0.18em] ${
                    m.status === "available" ? "text-[#115754]" : "text-[#8a6d2f]"
                  }`}
                >
                  {m.status === "available" ? "Available Now" : "Awaiting Authorization"}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold text-[#142635] mb-2">{m.label}</h3>
              <p className="text-xs text-[#142635]/55 leading-relaxed">{m.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-[11px] text-[#142635]/50 max-w-3xl">
        We do not invent students, testimonials, financial results, investment returns, or
        business valuations. Items marked "Awaiting Authorization" publish only when properly
        documented and permissioned.
      </p>
    </div>
  </section>
);

/* ---------------- SECTION 09 — FOUNDER ---------------- */
const Founder = () => (
  <section className="py-24 lg:py-32 bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 border-b border-[#115754]/40 mma-grain" data-testid="founder-section">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <Reveal className="lg:col-span-5">
        <div className="relative aspect-[4/5] bg-[#0E1D29] rounded-sm overflow-hidden p-8 flex flex-col justify-between border border-[#115754]/40" data-testid="founder-photo-slot">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#C29949]">
            <span>Founder Portrait & Introduction Video</span>
            <span>Forthcoming</span>
          </div>
          <div className="space-y-3">
            <div className="h-[1px] w-12 bg-[#C29949]" />
            <p className="text-xs text-[#FBF6EB]/70 font-light leading-snug max-w-[260px]">
              Authentic approved photographs and a short founder introduction video publish here
              when supplied by the founder's office.
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal className="lg:col-span-7">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
          Meet the Founder
        </div>
        <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold text-white tracking-tight mb-2">
          Meet Mr. Mogul Maker.
        </h2>
        <div className="text-[11px] uppercase tracking-[0.14em] text-[#7FD4C8] mb-6">
          {FOUNDER_V2.independentPositioning}
        </div>
        {FOUNDER_V2.intro.map((p, i) => (
          <p key={i} className="text-sm text-[#FBF6EB]/70 leading-relaxed mb-4 max-w-2xl">
            {p}
          </p>
        ))}
        <p className="text-xs text-[#FBF6EB]/50 leading-relaxed mb-8 max-w-2xl border-l-2 border-[#C29949]/50 pl-4">
          {FOUNDER_V2.relationship}
        </p>
        {FOUNDER_V2.externalUrl ? (
          <div>
            <a
              href={FOUNDER_V2.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("cta_clicked", { cta: "explore-mr-mogul-maker", location: "founder-section" })}
              data-testid="founder-external-cta"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#115754] text-[#FBF6EB] text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-[#17716c] transition-colors"
            >
              {FOUNDER_V2.cta} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <p className="mt-2 text-[10px] text-[#FBF6EB]/40">
              {FOUNDER_V2.externalNote}
            </p>
          </div>
        ) : (
          <div data-testid="founder-external-cta-pending">
            <span className="inline-flex items-center gap-2 px-6 py-3 border border-[#FBF6EB]/25 text-[#FBF6EB]/60 text-xs font-bold uppercase tracking-[0.12em] rounded-sm cursor-default">
              {FOUNDER_V2.cta}
            </span>
            <p className="mt-2 text-[10px] text-[#FBF6EB]/40">
              The independent Mr. Mogul Maker destination links here once the verified URL is supplied.
            </p>
          </div>
        )}
      </Reveal>
    </div>
  </section>
);

/* ---------------- SECTION 10 — FINAL CTA ---------------- */
const FinalCta = () => (
  <section className="py-24 lg:py-32 bg-[#FBF6EB] px-6 lg:px-12" data-testid="final-cta-section">
    <Reveal className="max-w-4xl mx-auto text-center">
      <h2 className="font-display text-[clamp(28px,4vw,52px)] font-bold text-[#142635] tracking-[-0.02em] leading-tight mb-6">
        Your Next Move Starts With a Better Decision.
      </h2>
      <p className="text-base text-[#142635]/65 leading-relaxed max-w-2xl mx-auto mb-10">
        Whether you're exploring entrepreneurship, operating a growing business, or preparing for
        your next ownership opportunity, begin by understanding where you are and what matters
        next.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/start-here"
          onClick={() => track("cta_clicked", { cta: "find-your-next-move", location: "final-cta" })}
          data-testid="final-cta-primary"
          className="px-8 py-4 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
        >
          FIND YOUR NEXT MOVE
        </Link>
        <Link
          to="/learn"
          onClick={() => track("cta_clicked", { cta: "explore-the-academy", location: "final-cta" })}
          data-testid="final-cta-secondary"
          className="px-8 py-4 border border-[#142635]/25 text-[#142635] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:border-[#115754] hover:text-[#115754] transition-colors"
        >
          EXPLORE THE ACADEMY
        </Link>
      </div>
    </Reveal>
  </section>
);

const HomePage = () => (
  <main data-testid="home-page">
    <Hero />
    <Pathways />
    <Framework3M />
    <FreeLearning />
    <SupportLevels />
    <Community />
    <Mission />
    <Proof />
    <Founder />
    <FinalCta />
  </main>
);

export default HomePage;
