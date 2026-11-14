import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AccordionItem } from "@/components/Accordion";
import { BRAND, V2_PILLARS, FOUNDER_V2, PATHWAYS } from "@/data/v2";

const PRINCIPLES = [
  {
    title: "Decisions before information",
    text: "Education that doesn't change how someone evaluates a situation hasn't done its job. Every MMA program is built around improving the quality of decisions — what to pursue, what to ignore, and what comes next.",
  },
  {
    title: "Capabilities, not completions",
    text: "Finishing a course is not the goal. Being able to do the work is. Programs are structured so knowledge becomes an operational capability the owner can actually use.",
  },
  {
    title: "Measurement, not motivation",
    text: "We measure whether the work was actually completed. Progress is tracked against real business tasks — not engagement metrics or motivational highs.",
  },
  {
    title: "Honesty before persuasion",
    text: "No invented results, no fabricated proof, no guaranteed outcomes. The Academy publishes claims only when they are documented, authorized, and traceable to evidence.",
  },
];

const FAQS = [
  {
    q: "Is Mogul Maker Academy a funding or business credit company?",
    a: "No. MMA is a business ownership education and implementation platform. Capital readiness is taught as a discipline — preparation, records, and banking relationships — never as a promise of financing.",
  },
  {
    q: "What is the relationship between MMA and Mr. Mogul Maker?",
    a: "Mr. Mogul Maker is an independently positioned founder and personal brand — media, speaking, and thought leadership. MMA is an educational and implementation business that features and appropriately licenses founder content. They are related, but distinct.",
  },
  {
    q: "How do membership, workshops, and implementation differ?",
    a: "Memberships are educational programs. Workshops are facilitated learning experiences. Implementation services are separately contracted professional engagements with defined deliverables. Each has its own terms, and none is a prerequisite for another.",
  },
  {
    q: "Who is the Academy for?",
    a: "Aspiring entrepreneurs, established business owners, and future acquirers — anyone serious about building or owning a valuable business and willing to do the work that progress requires.",
  },
];

const AboutPage = () => (
  <main className="bg-[#FBF6EB]" data-testid="about-page">
    {/* Mission */}
    <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#115754]/40 mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
          About MMA
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
          An Institution Built Around the Ownership Journey
        </h1>
        <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed mb-10">
          {BRAND.positioning}
        </p>
        <div className="border-l-2 border-[#C29949] pl-8 space-y-4 max-w-3xl" data-testid="about-mission-statement">
          {BRAND.mission.map((l) => (
            <p key={l} className="font-display text-[clamp(16px,2vw,22px)] font-medium text-[#FBF6EB] leading-snug">
              {l}
            </p>
          ))}
        </div>
      </div>
    </section>

    {/* 3M Philosophy */}
    <section className="px-6 lg:px-12 py-20 border-b border-[#142635]/10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
            Educational Philosophy
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight mb-4">
            The 3M Framework — MAKE · MANAGE · MULTIPLY
          </h2>
          <p className="text-base text-[#142635]/65 leading-relaxed">
            The Academy's original framework organizes the entire ownership journey. It shapes the
            curriculum, the workshops, the implementation catalog, and how visitors find their
            next move.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.values(V2_PILLARS).map((p, i) => (
            <Reveal key={p.id}>
              <div
                className="bg-white border border-[#142635]/12 rounded-sm p-8 h-full shadow-sm border-t-4"
                style={{ borderTopColor: p.color }}
                data-testid={`about-pillar-${p.id}`}
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.18em]" style={{ color: p.color }}>
                  Stage {i + 1} — {p.name}
                </span>
                <h3 className="font-display text-xl font-bold text-[#142635] mt-3 mb-3">{p.headline}</h3>
                <p className="text-sm text-[#142635]/60 leading-relaxed">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Delivery principles */}
    <section className="px-6 lg:px-12 py-20 bg-white border-b border-[#142635]/10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
            Professional Delivery Principles
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight">
            How the Work Gets Done
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRINCIPLES.map((p) => (
            <Reveal key={p.title}>
              <div className="p-8 bg-[#FBF6EB] rounded-sm border border-[#142635]/8 h-full" data-testid={`principle-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <h3 className="font-display text-lg font-semibold text-[#142635] mb-3">{p.title}</h3>
                <p className="text-sm text-[#142635]/65 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Who we serve */}
    <section className="px-6 lg:px-12 py-20 border-b border-[#142635]/10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
            Who the Academy Serves
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight">
            Four Positions on One Journey
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PATHWAYS.map((p) => {
            const pillar = V2_PILLARS[p.pillar];
            return (
              <Reveal key={p.id}>
                <Link
                  to={`/start-here#${p.id}`}
                  className="block bg-white border border-[#142635]/12 rounded-sm p-6 h-full shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  data-testid={`about-pathway-${p.id}`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em]" style={{ color: pillar.color }}>
                    {p.name}
                  </span>
                  <h3 className="font-display text-base font-semibold text-[#142635] mt-3 mb-2 leading-snug">
                    "{p.question}"
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[#115754]">
                    This pathway <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Founder relationship */}
    <section className="px-6 lg:px-12 py-20 bg-[#142635] text-[#FBF6EB] border-b border-[#115754]/40 mma-grain">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] bg-[#0E1D29] rounded-sm overflow-hidden p-8 flex flex-col justify-between border border-[#115754]/40" data-testid="about-founder-photo-slot">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#C29949]">
              <span>Founder Portrait</span>
              <span>Forthcoming</span>
            </div>
            <div className="space-y-3">
              <div className="h-[1px] w-12 bg-[#C29949]" />
              <p className="text-xs text-[#FBF6EB]/70 font-light leading-snug max-w-[260px]">
                Authentic approved photographs publish here when supplied by the founder's office.
                No fabricated likeness is ever used.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            Founder Relationship
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold text-white tracking-tight mb-2">
            Mr. Mogul Maker
          </h2>
          <div className="text-[11px] uppercase tracking-[0.14em] text-[#7FD4C8] mb-6">
            {FOUNDER_V2.independentPositioning}
          </div>
          <p className="text-sm text-[#FBF6EB]/70 leading-relaxed mb-4 max-w-2xl">
            Mr. Mogul Maker is an independently positioned founder and personal brand, founded by
            Antonio Cook. It produces business education, thought leadership, speaking
            engagements, media appearances, commentary, and original intellectual property.
          </p>
          <p className="text-sm text-[#FBF6EB]/70 leading-relaxed mb-8 max-w-2xl border-l-2 border-[#C29949]/50 pl-4">
            {FOUNDER_V2.relationship}
          </p>
          {FOUNDER_V2.externalUrl ? (
            <a
              href={FOUNDER_V2.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-founder-external-cta"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#115754] text-[#FBF6EB] text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-[#17716c] transition-colors"
            >
              {FOUNDER_V2.cta} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#FBF6EB]/25 text-[#FBF6EB]/60 text-xs font-bold uppercase tracking-[0.12em] rounded-sm cursor-default"
              data-testid="about-founder-external-cta-pending"
            >
              {FOUNDER_V2.cta} — link pending verified destination
            </span>
          )}
        </Reveal>
      </div>
    </section>

    {/* FAQ + Contact */}
    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-10">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-2">
            Straight Answers
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight">
            What MMA Is — and Isn't
          </h2>
        </Reveal>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} question={f.q} testId={`about-faq-${i}`}>
              {f.a}
            </AccordionItem>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/contact"
            data-testid="about-contact-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
          >
            Contact the Academy <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  </main>
);

export default AboutPage;
