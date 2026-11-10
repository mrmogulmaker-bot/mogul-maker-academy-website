import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Hammer, Gauge, Layers } from "lucide-react";
import { CourseCard } from "@/components/CourseCard";
import { Reveal } from "@/components/Reveal";
import { PILLARS, COURSES, METHODS } from "@/data/content";

const ICONS = { Hammer, Gauge, Layers };

const PILLAR_INTROS = {
  make: [
    "Every enterprise begins by creating something a market values. The MAKE pillar teaches the craft of economic value creation — from forming a business and designing its model, to developing offers, reaching customers, and building real revenue.",
    "This is where the proprietary LAUNCH and ACCEL methods live: structured pathways from concept to launch, and from early traction to repeatable sales.",
  ],
  manage: [
    "Revenue without discipline disappears. The MANAGE pillar teaches financial and operating discipline — cash flow, profitability, banking, credit readiness, organizational structure, leadership, and the operating systems that remove the founder as the bottleneck.",
    "Our philosophy is simple: Money Follows Management. The proprietary BUILD and FUND methods live here — building the operating backbone, and preparing for capital responsibly.",
  ],
  multiply: [
    "A well-run business becomes an asset. The MULTIPLY pillar teaches the expansion of ownership and enterprise value — strategic growth, capital allocation, acquisitions, real estate education, valuation, and exit readiness.",
    "The proprietary ACQUIRE method lives here: disciplined education for evaluating, valuing, and purchasing businesses. We teach evaluation and strategy — we never imply guaranteed returns or funding outcomes.",
  ],
};

const PillarPage = () => {
  const { pillarId } = useParams();
  const pillar = PILLARS[pillarId];
  if (!pillar) return <Navigate to="/framework" replace />;

  const Icon = ICONS[pillar.icon] || Hammer;
  const courses = COURSES.filter((c) => c.pillar === pillar.id);
  const methods = METHODS.filter((m) => m.pillar === pillar.id);
  const intros = PILLAR_INTROS[pillar.id];

  return (
    <main className="bg-[#F7F4EE]" data-testid={`pillar-page-${pillar.id}`}>
      {/* Hero */}
      <section
        className="text-white px-6 lg:px-12 py-20 lg:py-28 border-b border-[#202832] mma-grain"
        style={{ backgroundColor: "#101B2B" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.16em] rounded"
              style={{ backgroundColor: `${pillar.color}33`, color: pillar.onDarkText }}
            >
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              3M Framework — Pillar
            </span>
          </div>
          <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium tracking-[-0.03em] leading-[0.98] mb-4">
            <span style={{ color: pillar.onDarkText }}>{pillar.name}</span> MONEY
          </h1>
          <div className="font-display text-[clamp(20px,2.6vw,32px)] text-[#F7F4EE] font-normal mb-6">
            {pillar.tagline}
          </div>
          <p className="text-sm md:text-base text-[#F7F4EE]/75 max-w-3xl font-light leading-relaxed">
            {pillar.definition}
          </p>
          {pillar.philosophy && (
            <div
              className="mt-8 p-5 bg-[#202832] rounded-sm max-w-xl border-l-2"
              style={{ borderLeftColor: pillar.color }}
            >
              <p className="font-display italic text-lg text-white">"{pillar.philosophy}"</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#5F6773] mt-2">
                Mogul Maker Academy — Operating Philosophy
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Overview + Topics */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <div
              className="text-xs uppercase tracking-[0.18em] font-bold mb-3"
              style={{ color: pillar.color }}
            >
              Educational Overview
            </div>
            <h2 className="font-display text-[clamp(24px,3vw,40px)] font-medium text-[#101B2B] tracking-tight mb-6">
              What {pillar.name} Teaches
            </h2>
            {intros.map((p, i) => (
              <p key={i} className="text-sm text-[#5F6773] leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <div className="mt-10">
              <div
                className="text-xs uppercase tracking-[0.18em] font-bold mb-4"
                style={{ color: pillar.color }}
              >
                Proprietary Methods in this Pillar
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {methods.map((m) => (
                  <div
                    key={m.name}
                    className="bg-white border border-[#5F6773]/20 shadow-sm p-5 rounded-sm border-t-4"
                    style={{ borderTopColor: pillar.color }}
                    data-testid={`pillar-method-${m.name.toLowerCase()}`}
                  >
                    <div className="font-display text-base font-medium text-[#101B2B] mb-1">
                      {m.name}
                    </div>
                    <p className="text-xs text-[#5F6773] leading-relaxed">{m.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="bg-white border border-[#5F6773]/20 shadow-sm rounded-sm p-8">
              <div
                className="text-xs uppercase tracking-[0.18em] font-bold mb-6"
                style={{ color: pillar.color }}
              >
                Educational Topics
              </div>
              <ul className="space-y-4">
                {pillar.topics.map((t, i) => (
                  <li key={t} className="flex items-start gap-4" data-testid={`pillar-topic-${i}`}>
                    <span
                      className="font-mono text-[10px] mt-0.5 w-6 flex-shrink-0"
                      style={{ color: pillar.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#202832]">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#F7F4EE]">
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#202832] mb-3">
                  Core Competencies
                </div>
                <ul className="space-y-2">
                  {pillar.competencies.map((c) => (
                    <li key={c} className="text-xs text-[#5F6773]">
                      • {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Courses in this pillar */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <div
                className="text-xs uppercase tracking-[0.18em] font-bold mb-2"
                style={{ color: pillar.color }}
              >
                Catalog — {courses.length} Modules
              </div>
              <h2 className="font-display text-[clamp(24px,3vw,40px)] font-medium text-[#101B2B] tracking-tight">
                {pillar.name} Courses & Experiences
              </h2>
            </div>
            <Link
              to="/courses"
              data-testid="pillar-catalog-link"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#101B2B] border-b border-[#C6A66B] pb-1 hover:text-[#80551E] transition-colors"
            >
              Full catalog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Cross-pillar nav */}
      <section className="bg-[#101B2B] px-6 lg:px-12 py-16 mma-grain">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-6">
            Continue Through the Framework
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {Object.values(PILLARS).map((p) => (
              <Link
                key={p.id}
                to={`/framework/${p.id}`}
                data-testid={`pillar-crossnav-${p.id}`}
                className={`group p-6 rounded-sm border transition-colors ${
                  p.id === pillar.id
                    ? "border-[#C6A66B]/60 bg-[#202832]"
                    : "border-[#5F6773]/30 bg-[#202832]/60 hover:border-[#C6A66B]/40"
                }`}
              >
                <div
                  className="text-[10px] font-mono uppercase tracking-widest mb-2"
                  style={{ color: p.onDarkText }}
                >
                  {p.name}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-medium text-white">{p.tagline}</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A66B] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PillarPage;
