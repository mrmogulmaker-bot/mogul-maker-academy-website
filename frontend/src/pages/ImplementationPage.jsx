import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AccordionItem } from "@/components/Accordion";

const MODES = [
  {
    name: "Education",
    text: "Structured courses, resources, and community learning inside the Academy — knowledge organized so it can be applied.",
  },
  {
    name: "Guided Application",
    text: "Workshops and facilitated experiences where skills are exercised against real business scenarios, with feedback and accountability.",
  },
  {
    name: "Professionally Contracted Implementation",
    text: "Separately contracted engagements for businesses requiring professional support beyond instruction — designed around specific deliverables, professional oversight, and measurable completion requirements.",
  },
];

const CHALLENGE_AREAS = [
  "Operational processes and business systems",
  "Revenue systems and offer performance",
  "Capital readiness and financial discipline",
  "Other specialized business capabilities",
];

const BOUNDARIES = [
  {
    q: "Is implementation included in membership?",
    a: "No. Implementation services are separately contracted professional engagements. Membership is never a prerequisite, and implementation is never bundled into Standard, Premium, or VIP.",
  },
  {
    q: "What does the engagement look like?",
    a: "Each engagement begins with a qualification conversation and proceeds under a written scope: defined deliverables, professional oversight, and measurable completion requirements agreed before work begins.",
  },
  {
    q: "Do you guarantee outcomes?",
    a: "Never. Implementation establishes defined operating capabilities and deliverables. We do not advertise or imply guaranteed financing, sales, income, business valuations, acquisitions, or investment returns.",
  },
  {
    q: "Who qualifies?",
    a: "Businesses whose challenges are operational rather than educational. If learning is the right answer, we'll direct you to the Academy instead — the honest fit matters more than the engagement.",
  },
];

const ImplementationPage = () => (
  <main className="bg-[#FBF6EB]" data-testid="implementation-page">
    <Seo
      title="Professional Implementation | Mogul Maker Academy"
      description="Separately contracted implementation services for businesses requiring professional support beyond traditional education — defined deliverables, professional oversight, measurable completion."
    />
    <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-24 border-b border-[#115754]/40 mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Professional Implementation" }]} />
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
          Professional Implementation
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
          Sometimes Knowledge Isn't Enough. You Need Help Putting It to Work.
        </h1>
        <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed">
          For businesses requiring professional support beyond traditional education, MMA offers
          separately contracted implementation services focused on defined business needs.
        </p>
      </div>
    </section>

    {/* Three modes */}
    <section className="px-6 lg:px-12 py-16 lg:py-20 border-b border-[#142635]/10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
            The Difference
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight">
            Education. Guided Application. Contracted Implementation.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MODES.map((m, i) => (
            <Reveal key={m.name}>
              <div
                className={`rounded-sm p-8 h-full ${
                  i === 2
                    ? "bg-[#142635] text-[#FBF6EB]"
                    : "bg-white border border-[#142635]/12 shadow-sm text-[#142635]"
                }`}
                data-testid={`impl-mode-${i}`}
              >
                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${i === 2 ? "text-[#C29949]" : "text-[#115754]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`font-display text-xl font-bold mt-4 mb-3 ${i === 2 ? "text-white" : ""}`}>
                  {m.name}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 2 ? "text-[#FBF6EB]/70" : "text-[#142635]/65"}`}>
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Challenge areas + boundaries */}
    <section className="px-6 lg:px-12 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
            Where Engagements Focus
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,36px)] font-bold text-[#142635] tracking-tight mb-6">
            Defined Business Needs
          </h2>
          <ul className="space-y-4">
            {CHALLENGE_AREAS.map((c, i) => (
              <li key={i} className="flex items-start gap-4 bg-white border border-[#142635]/12 rounded-sm p-5" data-testid={`impl-area-${i}`}>
                <span className="font-mono text-[10px] mt-1 text-[#C29949]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-[#142635]">{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[11px] text-[#142635]/50 leading-relaxed">
            Service methodology and internal playbooks are not published. Individual services are
            presented as enrollment-ready only after owner approval and operational verification.
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal className="mb-8">
            <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
              Qualification & Boundaries
            </div>
            <h2 className="font-display text-[clamp(24px,3vw,36px)] font-bold text-[#142635] tracking-tight">
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
          <Reveal className="mt-10">
            <Link
              to="/contact"
              state={{ subject: "implementation" }}
              data-testid="impl-request-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
            >
              REQUEST IMPLEMENTATION INFORMATION <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <p className="mt-3 text-[11px] text-[#142635]/50 max-w-xl">
              Requests route to the Academy's qualification conversation. Contractual terms and
              scope are disclosed through the application and proposal process — never through
              public pricing.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  </main>
);

export default ImplementationPage;
