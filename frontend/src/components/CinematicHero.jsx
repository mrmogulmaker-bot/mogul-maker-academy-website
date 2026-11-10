import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pause, Play } from "lucide-react";
import { HERO_ACTS, HERO_COPY, PILLARS } from "@/data/content";

const ACT_DURATION = 4200;

export const CinematicHero = () => {
  const navigate = useNavigate();
  const [actIndex, setActIndex] = useState(0);
  const [paused, setPaused] = useState(false);
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
    if (paused || reducedMotion) return;
    timerRef.current = setInterval(() => {
      setActIndex((i) => (i + 1) % HERO_ACTS.length);
    }, ACT_DURATION);
    return () => clearInterval(timerRef.current);
  }, [paused, reducedMotion]);

  const act = HERO_ACTS[actIndex];
  const pillar = PILLARS[act.pillar];

  return (
    <header
      id="hero"
      className="relative bg-[#101B2B] text-[#F7F4EE] overflow-hidden border-b border-[#202832] mma-grain"
      data-testid="cinematic-hero"
    >
      {/* Cinematic act imagery */}
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_ACTS.map((a, i) => (
          <img
            key={a.id}
            src={a.image}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            className="mma-act-image absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === actIndex ? 0.28 : 0,
              transform: i === actIndex ? "scale(1.06)" : "scale(1.0)",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101B2B] via-[#101B2B]/60 to-[#101B2B]/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-16 lg:pt-20 lg:pb-24">
        {/* 6-act narrative indicator */}
        <div className="mb-10 pb-6 border-b border-[#202832]/80">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#5F6773] mb-3">
            <span className="text-[#C6A66B] font-semibold">The Mogul Maker Narrative</span>
            <span className="hidden md:inline">
              Ambition → Creation → Execution → Discipline → Ownership → Community
            </span>
            <button
              onClick={() => setPaused(!paused)}
              data-testid="hero-pause-toggle"
              aria-label={paused ? "Play cinematic sequence" : "Pause cinematic sequence"}
              className="inline-flex items-center gap-1.5 text-[#F7F4EE]/70 hover:text-[#C6A66B] transition-colors"
            >
              {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{paused ? "Play" : "Pause"}</span>
            </button>
          </div>
          <div className="flex gap-1.5" role="tablist" aria-label="Cinematic acts">
            {HERO_ACTS.map((a, i) => (
              <button
                key={a.id}
                role="tab"
                aria-selected={i === actIndex}
                aria-label={`${a.act}: ${a.name}`}
                data-testid={`hero-act-${a.id}`}
                onClick={() => {
                  setActIndex(i);
                  setPaused(true);
                }}
                className="flex-1 h-[3px] rounded-full transition-colors duration-500"
                style={{
                  backgroundColor:
                    i === actIndex ? PILLARS[a.pillar].color : i < actIndex ? "#5F6773" : "#202832",
                }}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase">
            <span className="text-[#F7F4EE]/85 font-medium" data-testid="hero-act-label">
              {act.act} — {act.name}
            </span>
            <span
              className="font-mono text-[10px]"
              style={{ color: pillar.onDarkText }}
              data-testid="hero-act-pillar"
            >
              {pillar.name}
            </span>
          </div>
          <p
            className="mt-2 text-xs text-[#F7F4EE]/60 font-light max-w-xl"
            data-testid="hero-act-line"
          >
            {act.line}
          </p>
        </div>

        {/* Headline */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C6A66B] bg-[#C6A66B]/10 rounded mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
            The Modern Ownership Institution
          </div>

          <h1 className="font-display text-[clamp(36px,5.2vw,76px)] leading-[0.98] tracking-[-0.03em] font-medium text-white mb-8">
            <span className="mma-hero-line"><span>{HERO_COPY.headline[0]}</span></span>
            <span className="mma-hero-line"><span>{HERO_COPY.headline[1]}</span></span>
            <span className="mma-hero-line">
              <span className="text-[#C6A66B]">{HERO_COPY.headline[2]}</span>
            </span>
          </h1>

          <p
            className="mma-fade-up text-base md:text-lg text-[#F7F4EE]/85 max-w-2xl font-light leading-relaxed mb-10"
            data-testid="hero-subcopy"
          >
            {HERO_COPY.sub}
          </p>

          <div className="mma-fade-up flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate("/enquiry")}
              data-testid="hero-cta-primary"
              className="px-7 py-3.5 bg-[#C6A66B] text-[#101B2B] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#d8bb83] transition-colors"
            >
              {HERO_COPY.primaryCta}
            </button>
            <button
              onClick={() => navigate("/courses")}
              data-testid="hero-cta-secondary"
              className="px-7 py-3.5 border border-[#F7F4EE]/30 text-[#F7F4EE] text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:border-[#C6A66B] hover:text-[#C6A66B] transition-colors"
            >
              {HERO_COPY.secondaryCta}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
