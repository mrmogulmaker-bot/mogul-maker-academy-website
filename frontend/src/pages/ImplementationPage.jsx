import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AccordionItem } from "@/components/Accordion";
import { IMPLEMENTATION_SERVICES, V2_PILLARS } from "@/data/v2";

const STAGE_ORDER = ["make", "manage", "multiply"];

const BOUNDARIES = [
  {
    q: "Are implementation services included in membership?",
    a: "No. Implementation services are separately contracted professional engagements. Membership is never a prerequisite, and implementation is never bundled into Standard, Premium, or VIP.",
  },
  {
    q: "What does 'separately contracted' mean?",
    a: "Every engagement has its own written scope, deliverables, timeline, and fee structure — agreed before work begins. The services listed here are the approved internal catalog; availability depends on capacity and qualification.",
  },
  {
    q: "Do you guarantee financing, sales, or acquisition outcomes?",
    a: "Never. Implementation establishes defined operating capabilities and deliverables. We do not advertise or imply guaranteed financing, sales, income, business valuations, acquisitions, or investment returns.",
  },
  {
    q: "How does qualification work?",
    a: "Each engagement begins with an application and a qualification conversation. If the problem is educational rather than operational, we'll point you to the Academy or workshops instead — the honest fit matters more than the sale.",
  },
];

const ImplementationPage = () => (
  <main className="bg-[#FBF6EB]" data-testid="implementation-page">
    <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#115754]/40 mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
          Implementation
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
          When a Business Needs More Than Instruction
        </h1>
        <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed mb-6">
          MMA offers separately contracted professional services designed to establish defined
          operating capabilities and deliverables — organized by customer problem and 3M stage.
        </p>
        <div className="p-5 bg-[#0E1D29] border-l-2 border-[#C29949] rounded-sm max-w-3xl">
          <p className="text-xs text-[#FBF6EB]/80 leading-relaxed">
            <span className="font-bold text-[#C29949] uppercase tracking-wider text-[10px] block mb-1">
              Catalog status
            </span>
            The services below are the approved internal catalog. Catalog approval does not mean
            every service is currently staffed, available for enrollment, or approved for public
            advertising. Individual services publish as enrollment-ready only when specifically
            authorized.
          </p>
        </div>
      </div>
    </section>

    <section className="px-6 lg:px-12 py-16 lg:py-20 border-b border-[#142635]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {STAGE_ORDER.map((stageId) => {
          const pillar = V2_PILLARS[stageId];
          const services = IMPLEMENTATION_SERVICES.filter((s) => s.stage === stageId);
          return (
            <Reveal key={stageId}>
              <div data-testid={`impl-stage-${stageId}`}>
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="text-xs font-mono uppercase tracking-[0.18em] font-bold px-3 py-1 rounded"
                    style={{ backgroundColor: `${pillar.color}1A`, color: pillar.color }}
                  >
                    {pillar.name} Stage
                  </span>
                  <span className="text-sm text-[#142635]/55">{pillar.headline}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((s) => (
                    <div
                      key={s.id}
                      className="bg-white border border-[#142635]/12 rounded-sm p-8 shadow-sm border-t-4"
                      style={{ borderTopColor: pillar.color }}
                      data-testid={`impl-service-${s.id}`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-display text-lg font-semibold text-[#142635] leading-snug">
                          {s.name}
                        </h3>
                        <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-[#C29949]/50 text-[#8a6d2f] flex-shrink-0 mt-1">
                          Internal Catalog
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#142635]/80 mb-2">
                        "{s.problem}"
                      </p>
                      <p className="text-xs text-[#142635]/60 leading-relaxed mb-5">{s.scope}</p>
                      <Link
                        to="/contact"
                        state={{ service: s.name }}
                        data-testid={`impl-apply-${s.id}`}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#115754] border-b-2 border-[#C29949] pb-1 hover:text-[#142635] transition-colors"
                      >
                        Request application route <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>

    <section className="px-6 lg:px-12 py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-10">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-2">
            Qualification, Scope & Boundaries
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight">
            How Professional Engagement Works
          </h2>
        </Reveal>
        <div className="space-y-3">
          {BOUNDARIES.map((b, i) => (
            <AccordionItem key={i} question={b.q} testId={`impl-boundary-${i}`}>
              {b.a}
            </AccordionItem>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/contact"
            data-testid="impl-contact-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
          >
            Discuss Your Situation <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  </main>
);

export default ImplementationPage;
