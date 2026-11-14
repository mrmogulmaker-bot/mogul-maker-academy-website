import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CourseCard } from "@/components/CourseCard";
import { Reveal } from "@/components/Reveal";
import { METHODS, PILLARS, COURSES } from "@/data/content";

const METHOD_DETAILS = {
  LAUNCH:
    "LAUNCH structures the earliest stage of entrepreneurship: shaping a concept into a viable offer, forming the business properly, and reaching first revenue with a clear sequence instead of guesswork.",
  ACCEL:
    "ACCEL focuses on what happens after the first sales — turning scattered traction into customer acquisition systems, repeatable conversion, and steady revenue creation.",
  BUILD:
    "BUILD develops the operating backbone of a real company: financial management cadences, organizational structure, delegation, and systems that let the business run beyond the founder.",
  FUND:
    "FUND teaches responsible capital preparation — banking relationships, credit readiness, clean records, and disciplined funding decisions. Preparation, not promises: we never imply guaranteed funding outcomes.",
  ACQUIRE:
    "ACQUIRE is disciplined acquisition education: evaluating targets, understanding valuation, identifying risk before signing, and operating a business after the deal. Strategy and analysis — never implied returns.",
};

const MethodsPage = () => (
  <main className="bg-[#F7F4EE]" data-testid="methods-page">
    <section className="bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#202832] mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-3">
          Proprietary Intellectual Property
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-medium text-white tracking-[-0.02em] leading-tight mb-6">
          Methods Within the 3M Framework
        </h1>
        <p className="text-sm md:text-base text-[#F7F4EE]/75 max-w-3xl font-light leading-relaxed">
          LAUNCH, ACCEL, BUILD, FUND, and ACQUIRE are the Academy's specialist frameworks. Each one
          lives inside a pillar of the 3M Framework — applied methodology for a specific stage of
          the ownership journey.
        </p>
      </div>
    </section>

    <section className="px-6 lg:px-12 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto space-y-16">
        {METHODS.map((m, idx) => {
          const pillar = PILLARS[m.pillar];
          const related = COURSES.filter((c) => c.pillar === m.pillar).slice(0, 3);
          const flip = idx % 2 === 1;
          return (
            <Reveal key={m.name}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${
                  flip ? "lg:[direction:rtl]" : ""
                }`}
                data-testid={`method-section-${m.name.toLowerCase()}`}
              >
                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <div className="bg-white border border-[#5F6773]/20 shadow-sm rounded-sm p-8 border-t-4"
                    style={{ borderTopColor: pillar.color }}
                  >
                    <div
                      className="text-[10px] font-mono uppercase tracking-widest mb-2"
                      style={{ color: pillar.color }}
                    >
                      {pillar.name} Pillar — Specialist Framework
                    </div>
                    <h2 className="font-display text-[clamp(26px,3vw,42px)] font-medium text-[#101B2B] tracking-tight mb-4">
                      {m.name}
                    </h2>
                    <p className="text-sm text-[#5F6773] leading-relaxed mb-4">{m.summary}</p>
                    <p className="text-xs text-[#5F6773] leading-relaxed">{METHOD_DETAILS[m.name]}</p>
                  </div>
                </div>
                <div className="lg:col-span-7 lg:[direction:ltr]">
                  <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#5F6773] mb-4">
                    Related {pillar.name} modules in the 2027 catalog
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {related.map((c) => (
                      <CourseCard key={c.id} course={c} dark={false} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}

        <Reveal className="text-center pt-6">
          <Link
            to="/framework"
            data-testid="methods-framework-link"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#101B2B] border-b border-[#C6A66B] pb-1 hover:text-[#80551E] transition-colors"
          >
            Return to the 3M Framework <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  </main>
);

export default MethodsPage;
