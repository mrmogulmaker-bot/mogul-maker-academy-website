import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Hammer, Gauge, Layers, Users, Workflow, Landmark } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { track } from "@/utils/track";
import { V2_PILLARS } from "@/data/v2";

const PILLAR_ICONS = { make: Hammer, manage: Gauge, multiply: Layers };

const STAGE_COPY = {
  make: {
    paragraphs: [
      "Every enterprise begins by creating something a market genuinely values. MAKE is the discipline of understanding customers, shaping valuable offers, developing sales, and establishing the foundation of a viable business.",
      "This stage is where ideas become economic activity — validated, priced, and sold to real customers.",
    ],
  },
  manage: {
    paragraphs: [
      "Revenue without discipline disappears. MANAGE builds the operational capability that turns activity into a durable business — capable Teams, repeatable Systems, and disciplined Capital management.",
      "This is where the Academy's supporting principle lives: Money Follows Management. A business that cannot run beyond its founder is not yet an asset.",
    ],
  },
  multiply: {
    paragraphs: [
      "A well-run business becomes an asset. MULTIPLY develops the judgment to evaluate reinvestment, expansion, assets, acquisitions, and long-term ownership decisions.",
      "This stage is about decisions, not promises — the Academy teaches evaluation and strategy, and never implies guaranteed returns or outcomes.",
    ],
  },
};

const TSC = [
  {
    icon: Users,
    name: "Teams",
    text: "People and roles designed so the business can operate beyond any single individual.",
  },
  {
    icon: Workflow,
    name: "Systems",
    text: "Repeatable processes and rhythms that make quality and accountability consistent.",
  },
  {
    icon: Landmark,
    name: "Capital",
    text: "Disciplined financial management — cash flow, records, and responsible preparation for capital decisions.",
  },
];

const FrameworkPage = () => {
  const [searchParams] = useSearchParams();
  const initialStage = V2_PILLARS[searchParams.get("stage")] ? searchParams.get("stage") : "make";
  const [active, setActive] = useState(initialStage);
  const pillars = Object.values(V2_PILLARS);
  const current = V2_PILLARS[active];
  const copy = STAGE_COPY[active];
  const Icon = PILLAR_ICONS[active];

  return (
    <main className="bg-[#FBF6EB]" data-testid="framework-page">
      <Seo
        title="The 3M Framework — MAKE · MANAGE · MULTIPLY | Mogul Maker Academy"
        description="Three stages, one philosophy of ownership. Create value, build capability through Teams, Systems and Capital, and develop lasting ownership value. Money Follows Management."
      />
      <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-24 border-b border-[#115754]/40 mma-grain">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "3M Framework" }]} />
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            The 3M Framework
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-4">
            MAKE. MANAGE. MULTIPLY.
          </h1>
          <p className="text-base md:text-lg text-[#FBF6EB]/75 max-w-2xl font-light leading-relaxed">
            Three stages. One philosophy of ownership.
          </p>
        </div>
      </section>

      {/* Interactive stage explorer */}
      <section className="px-6 lg:px-12 py-16 lg:py-20 border-b border-[#142635]/10">
        <div className="max-w-7xl mx-auto">
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
                      ? "border-[#115754] bg-[#142635] text-[#FBF6EB]"
                      : "border-[#142635]/15 bg-white text-[#142635] hover:border-[#115754]/50"
                  }`}
                >
                  <span
                    className="block text-[10px] md:text-xs font-mono uppercase tracking-[0.18em] mb-1"
                    style={{ color: active === p.id ? p.onDark : p.color }}
                  >
                    Stage {i + 1}
                  </span>
                  <span className={`block font-display text-base md:text-xl font-bold ${active === p.id ? "text-white" : ""}`}>
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

          <Reveal key={active}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#142635]/12 rounded-sm p-8 lg:p-14 shadow-sm" data-testid="3m-stage-display">
              <div className="lg:col-span-2 flex lg:justify-center">
                <div
                  className="w-20 h-20 lg:w-28 lg:h-28 rounded-sm flex items-center justify-center border"
                  style={{ borderColor: current.color, backgroundColor: `${current.color}14` }}
                >
                  <Icon className="w-9 h-9 lg:w-12 lg:h-12" style={{ color: current.color }} aria-hidden="true" />
                </div>
              </div>
              <div className="lg:col-span-10">
                <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight mb-5">
                  {active === "make" && "MAKE — Create Value."}
                  {active === "manage" && "MANAGE — Build Capability."}
                  {active === "multiply" && "MULTIPLY — Develop Ownership Value."}
                </h2>
                {copy.paragraphs.map((p, i) => (
                  <p key={i} className="text-base text-[#142635]/70 leading-relaxed mb-4 max-w-3xl">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Teams, Systems, Capital */}
      <section className="px-6 lg:px-12 py-16 lg:py-20 border-b border-[#142635]/10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
              Inside MANAGE
            </div>
            <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight mb-4">
              Teams. Systems. Capital.
            </h2>
            <p className="text-base text-[#142635]/65 leading-relaxed">
              Operational discipline has three working parts. The Academy develops all three —
              and the principle that connects them.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {TSC.map((t) => (
              <Reveal key={t.name}>
                <div className="bg-white border border-[#142635]/12 rounded-sm p-8 h-full shadow-sm" data-testid={`tsc-${t.name.toLowerCase()}`}>
                  <t.icon className="w-6 h-6 text-[#C29949] mb-5" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-[#142635] mb-3">{t.name}</h3>
                  <p className="text-sm text-[#142635]/65 leading-relaxed">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="p-8 bg-[#142635] rounded-sm text-center" data-testid="mfm-block">
            <p className="font-display italic text-[clamp(20px,2.6vw,30px)] text-[#FBF6EB] mb-2">
              "Money Follows Management."
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#C29949]">
              The Academy's supporting principle
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 text-center">
        <Reveal>
          <p className="text-sm text-[#142635]/60 max-w-xl mx-auto mb-8">
            The deeper methodology — curricula, guided exercises, and applied frameworks — lives
            inside the Academy's learning experience.
          </p>
          <Link
            to="/academy"
            onClick={() => track("cta_clicked", { cta: "apply-the-framework", location: "framework-page" })}
            data-testid="framework-apply-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
          >
            APPLY THE FRAMEWORK <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
};

export default FrameworkPage;
