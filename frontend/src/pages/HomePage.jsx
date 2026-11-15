import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Users, Wrench, Hammer, Gauge, Layers } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { track } from "@/utils/track";
import { BRAND, V2_PILLARS, PATHWAYS, FOUNDER_V2, DESTINATIONS } from "@/data/v2";
import { HERO_ACTS } from "@/data/content";

const ACT_DURATION = 4600;
const PILLAR_ICONS = { make: Hammer, manage: Gauge, multiply: Layers };

const PATH_CARD_CTA = {
  start: "START YOUR JOURNEY",
  own: "EXPLORE OWNERSHIP",
  grow: "EXPLORE BUSINESS GROWTH",
  acquire: "EXPLORE STRATEGIC OWNERSHIP",
};

/* ---------- 01 HERO ---------- */
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
    timerRef.current = setInterval(() => setActIndex((i) => (i + 1) % HERO_ACTS.length), ACT_DURATION);
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
            style={{ opacity: i === actIndex ? 0.22 : 0, transform: i === actIndex ? "scale(1.06)" : "scale(1.0)" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#142635] via-[#142635]/70 to-[#142635]/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-16 lg:pt-24 lg:pb-28">
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
                  style={{ backgroundColor: act.pillar === p.id ? p.color : "rgba(251,246,235,0.15)" }}
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
            <span className="mma-hero-line"><span>BUILD THE BUSINESS.</span></span>
            <span className="mma-hero-line"><span>MASTER THE MONEY.</span></span>
            <span className="mma-hero-line"><span className="text-[#C29949]">OWN YOUR FUTURE.</span></span>
          </h1>
          <p className="mma-fade-up text-base md:text-lg text-[#FBF6EB]/85 max-w-2xl font-light leading-relaxed mb-10" data-testid="hero-subcopy">
            Mogul Maker Academy helps aspiring entrepreneurs, established business owners, and
            future acquirers develop the knowledge, judgment, and capabilities to build something
            worth owning.
          </p>
          <div className="mma-fade-up flex flex-wrap items-center gap-4">
            <Link
              to="/start"
              onClick={() => track("cta_clicked", { cta: "find-your-mogul-path", location: "hero" })}
              data-testid="hero-cta-primary"
              className="px-7 py-3.5 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
            >
              FIND YOUR MOGUL PATH
            </Link>
            <Link
              to="/academy"
              onClick={() => track("cta_clicked", { cta: "explore-the-academy", location: "hero" })}
              data-testid="hero-cta-secondary"
              className="px-7 py-3.5 border border-[#FBF6EB]/30 text-[#FBF6EB] text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:border-[#C29949] hover:text-[#C29949] transition-colors"
            >
              EXPLORE THE ACADEMY
            </Link>
            <a
              href={DESTINATIONS.skoolCommunity}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("cta_clicked", { cta: "join-us-on-skool", location: "hero" })}
              data-testid="hero-cta-skool"
              className="px-7 py-3.5 text-[#C29949] text-xs font-bold tracking-[0.12em] uppercase rounded-sm border-b-2 border-[#C29949]/60 hover:border-[#C29949] transition-colors inline-flex items-center gap-2"
            >
              JOIN US ON SKOOL <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

/* ---------- 02 OWNERSHIP JOURNEY ---------- */
const Journey = () => (
  <section className="py-24 lg:py-32 bg-[#FBF6EB] px-6 lg:px-12 border-b border-[#142635]/10" data-testid="journey-section">
    <div className="max-w-7xl mx-auto">
      <Reveal className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#115754] mb-3">
          Find Your Ownership Journey
        </div>
        <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-bold text-[#142635] tracking-[-0.02em] leading-tight mb-4">
          Where Are You on Your Ownership Journey?
        </h2>
        <p className="text-base text-[#142635]/65 leading-relaxed">
          Every entrepreneur starts from a different position. Whether you're building your first
          business, transitioning from income to ownership, growing an existing company, or
          preparing for an acquisition, your next move should be intentional.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PATHWAYS.map((p, i) => {
          const pillar = V2_PILLARS[p.pillar];
          return (
            <Reveal key={p.id}>
              <Link
                to={`/start?path=${p.id}`}
                onClick={() => track("pathway_selected", { pathway: p.id, location: "homepage" })}
                data-testid={`journey-card-${p.id}`}
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
                  {PATH_CARD_CTA[p.id]}
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

/* ---------- 03 3M FRAMEWORK PREVIEW ---------- */
const FrameworkPreview = () => (
  <section className="py-24 lg:py-32 bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 border-b border-[#115754]/40 mma-grain" data-testid="framework-preview-section">
    <div className="max-w-7xl mx-auto">
      <Reveal className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
          The 3M Framework
        </div>
        <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-bold text-white tracking-[-0.02em] leading-tight mb-3">
          MAKE. MANAGE. MULTIPLY.
        </h2>
        <p className="text-base text-[#FBF6EB]/70 leading-relaxed">
          Three stages. One philosophy of ownership.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {Object.values(V2_PILLARS).map((p, i) => {
          const Icon = PILLAR_ICONS[p.id];
          const previews = {
            make: "Create Value.",
            manage: "Build Capability.",
            multiply: "Develop Ownership Value.",
          };
          return (
            <Reveal key={p.id}>
              <div
                className="bg-[#0E1D29] border border-[#FBF6EB]/10 rounded-sm p-8 lg:p-10 h-full"
                data-testid={`framework-card-${p.id}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono uppercase tracking-[0.18em]" style={{ color: p.onDark }}>
                    Stage {i + 1}
                  </span>
                  <Icon className="w-5 h-5" style={{ color: p.onDark }} aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{p.name}</h3>
                <p className="text-sm text-[#FBF6EB]/65 leading-relaxed">{previews[p.id]}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-[#FBF6EB]/10 pt-10">
        <p className="font-display italic text-lg text-[#FBF6EB]/80" data-testid="mfm-principle">
          "Money Follows Management."
        </p>
        <Link
          to="/framework"
          onClick={() => track("cta_clicked", { cta: "discover-the-framework", location: "homepage" })}
          data-testid="framework-preview-cta"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-bold text-[#C29949] border-b-2 border-[#C29949]/50 pb-1 hover:text-white transition-colors flex-shrink-0"
        >
          DISCOVER THE FRAMEWORK <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </Reveal>
    </div>
  </section>
);

/* ---------- 04 MMA EXPERIENCE ---------- */
const EXPERIENCES = [
  {
    id: "learn",
    icon: BookOpen,
    name: "LEARN",
    title: "The Academy",
    text: "Structured educational pathways — Standard, Premium, and VIP — organized around where you are on the ownership journey.",
    to: "/academy",
    cta: "Explore the Academy",
  },
  {
    id: "connect",
    icon: Users,
    name: "CONNECT",
    title: "Workshops & Community",
    text: "Facilitated workshops, recurring community experiences, and a community of people pursuing meaningful business ownership.",
    to: "/workshops",
    cta: "Explore Workshops",
  },
  {
    id: "implement",
    icon: Wrench,
    name: "IMPLEMENT",
    title: "Professional Services",
    text: "For businesses requiring more than instruction — separately contracted implementation engagements with defined deliverables.",
    to: "/implementation",
    cta: "Explore Implementation",
  },
];

const Experience = () => (
  <section className="py-24 lg:py-32 bg-[#FBF6EB] px-6 lg:px-12 border-b border-[#142635]/10" data-testid="experience-section">
    <div className="max-w-7xl mx-auto">
      <Reveal className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
          The MMA Experience
        </div>
        <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-bold text-[#142635] tracking-[-0.02em] leading-tight mb-4">
          Knowledge Is the Beginning. What You Do With It Matters.
        </h2>
        <p className="text-base text-[#142635]/65 leading-relaxed">
          Information alone doesn't build a business. Mogul Maker Academy connects practical
          education with guided learning, useful resources, accountability, and community.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EXPERIENCES.map((e) => (
          <Reveal key={e.id}>
            <Link
              to={e.to}
              onClick={() => track("cta_clicked", { cta: `experience-${e.id}`, location: "homepage" })}
              data-testid={`experience-card-${e.id}`}
              className="group block bg-white border border-[#142635]/12 rounded-sm p-8 lg:p-10 h-full shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#115754]/40"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#115754] mb-6 block">
                {e.name}
              </span>
              <e.icon className="w-6 h-6 text-[#C29949] mb-5" aria-hidden="true" />
              <h3 className="font-display text-2xl font-bold text-[#142635] mb-3">{e.title}</h3>
              <p className="text-sm text-[#142635]/65 leading-relaxed mb-8">{e.text}</p>
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#115754]">
                {e.cta}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- 05 MISSION ---------- */
const Mission = () => (
  <section className="py-24 lg:py-32 bg-[#115754] text-[#FBF6EB] px-6 lg:px-12 mma-grain" data-testid="mission-section">
    <div className="max-w-5xl mx-auto">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C29949] mb-6">
          The MMA Mission
        </div>
        <h2 className="font-display text-[clamp(28px,4vw,52px)] font-bold text-white tracking-[-0.02em] leading-[1.05] mb-10">
          BETTER DECISIONS.<br />REAL CAPABILITIES.<br />MEASURABLE PROGRESS.
        </h2>
        <div className="border-l-2 border-[#C29949] pl-8 space-y-4 mb-10" data-testid="mission-statement">
          {BRAND.mission.map((l) => (
            <p key={l} className="font-display text-[clamp(16px,2vw,22px)] font-medium text-[#FBF6EB] leading-snug">
              {l}
            </p>
          ))}
        </div>
        <p className="text-sm text-[#FBF6EB]/70 leading-relaxed max-w-xl font-light mb-8">
          We believe business education should change more than what people know. It should
          influence how they evaluate opportunities, solve problems, manage resources, and take
          meaningful action.
        </p>
        <Link
          to="/about"
          data-testid="mission-about-cta"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#C29949] border-b-2 border-[#C29949]/50 pb-1 hover:text-white transition-colors"
        >
          OUR STORY <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </Reveal>
    </div>
  </section>
);

/* ---------- 06 FINAL INVITATION ---------- */
const FinalInvitation = () => (
  <section className="py-24 lg:py-32 bg-[#FBF6EB] px-6 lg:px-12" data-testid="final-invitation-section">
    <Reveal className="max-w-4xl mx-auto text-center">
      <h2 className="font-display text-[clamp(28px,4vw,52px)] font-bold text-[#142635] tracking-[-0.02em] leading-tight mb-6">
        YOUR NEXT MOVE STARTS HERE.
      </h2>
      <p className="text-base text-[#142635]/65 leading-relaxed max-w-2xl mx-auto mb-10">
        Your ownership journey doesn't need to look like someone else's. What matters is
        understanding where you are, identifying your next opportunity, and developing the
        capabilities to move forward.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/start"
          onClick={() => track("cta_clicked", { cta: "find-your-mogul-path", location: "final-cta" })}
          data-testid="final-cta-primary"
          className="px-8 py-4 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
        >
          FIND YOUR MOGUL PATH
        </Link>
        <Link
          to="/academy"
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
    <Seo
      title="Mogul Maker Academy — Build the Business. Master the Money. Own Your Future."
      description="A business ownership education and implementation institution. Find your ownership journey — start, own, grow, or acquire — through the MAKE · MANAGE · MULTIPLY philosophy."
    />
    <Hero />
    <Journey />
    <FrameworkPreview />
    <Experience />
    <Mission />
    <FinalInvitation />
  </main>
);

export default HomePage;
