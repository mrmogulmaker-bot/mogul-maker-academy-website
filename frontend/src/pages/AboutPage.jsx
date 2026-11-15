import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactStrip } from "@/components/ContactBlock";
import { BRAND, V2_PILLARS, FOUNDER_V2, PATHWAYS, LEADERSHIP } from "@/data/v2";

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

const AboutPage = () => (
  <main className="bg-[#FBF6EB]" data-testid="about-page">
    <Seo
      title="About MMA — Mission, Philosophy & Founder | Mogul Maker Academy"
      description="Our mission: better decisions, real capabilities, measurable progress. Learn about the 3M philosophy, the Academy's educational approach, and founder Antonio Cook — Mr. Mogul Maker."
    />
    {/* Mission */}
    <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#115754]/40 mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About MMA" }]} />
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
        <p className="mt-8 text-sm text-[#FBF6EB]/65 leading-relaxed max-w-2xl">
          Success does not look the same for everyone. Our purpose is to help entrepreneurs
          develop the capabilities required to pursue ownership on their own terms.
        </p>
      </div>
    </section>

    {/* 3M philosophy */}
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
            curriculum, the workshops, and how visitors find their next move. Its supporting
            principle: Money Follows Management.
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
        <Reveal className="mt-10">
          <Link
            to="/framework"
            data-testid="about-framework-cta"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-bold text-[#115754] border-b-2 border-[#C29949] pb-1 hover:text-[#142635] transition-colors"
          >
            Discover the framework <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* Delivery principles */}
    <section className="px-6 lg:px-12 py-20 bg-white border-b border-[#142635]/10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-3">
            Educational Approach
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
                  to={`/start?path=${p.id}`}
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

    {/* Leadership — Founder & Co-Founder side by side */}
    <section className="px-6 lg:px-12 py-20 bg-[#142635] text-[#FBF6EB] border-b border-[#115754]/40 mma-grain">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            Leadership
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-bold text-white tracking-tight mb-4">
            The People Behind the Academy
          </h2>
          <p className="text-sm text-[#FBF6EB]/65 leading-relaxed">
            Mogul Maker Academy is headquartered in Atlanta, Georgia. Approved portraits,
            testimonies, and biographies publish here as they are supplied by the founders' office —
            nothing is invented.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Founder */}
          <Reveal>
            <div className="bg-[#0E1D29] border border-[#115754]/40 rounded-sm p-8 h-full" data-testid="founder-card">
              <div className="relative aspect-[4/5] bg-[#142635] rounded-sm overflow-hidden p-7 flex flex-col justify-between border border-[#FBF6EB]/10 mb-7" data-testid="about-founder-photo-slot">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#C29949]">
                  <span>Founder Portrait</span>
                  <span>Forthcoming</span>
                </div>
                <div className="space-y-3">
                  <div className="h-[1px] w-12 bg-[#C29949]" />
                  <p className="text-xs text-[#FBF6EB]/70 font-light leading-snug max-w-[260px]">
                    Approved photographs publish here when supplied by the founder's office. No
                    fabricated likeness is ever used.
                  </p>
                </div>
              </div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
                Founder
              </div>
              <h3 className="font-display text-[clamp(24px,3vw,36px)] font-bold text-white tracking-tight mb-2">
                Meet Mr. Mogul Maker.
              </h3>
              <div className="text-[11px] uppercase tracking-[0.14em] text-[#7FD4C8] mb-5">
                Entrepreneur. Educator. Investor. Business Ownership Strategist.
              </div>
              <p className="text-sm text-[#FBF6EB]/70 leading-relaxed mb-4">
                Antonio Cook, known as Mr. Mogul Maker, is an independently positioned founder and
                personal brand — media, speaking, and thought leadership. Mr. Mogul Maker produces
                business education, commentary, and original intellectual property.
              </p>
              <p className="text-xs text-[#FBF6EB]/60 leading-relaxed mb-7 border-l-2 border-[#C29949]/50 pl-4">
                {FOUNDER_V2.relationship}
              </p>

              {/* Editable placeholders for owner-supplied founder content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7" data-testid="founder-content-placeholders">
                {[
                  { label: "First-Person Testimony", note: "The founder's own story, in his words — supplied by the owner." },
                  { label: "Entrepreneurial Journey", note: "Approved biography and business history — supplied by the owner." },
                  { label: "Verified Accomplishments", note: "Credentials and achievements published only when verified." },
                  { label: "Media, Speaking & Publications", note: "Appearances and original works linked when authorized." },
                ].map((slot) => (
                  <div key={slot.label} className="border border-dashed border-[#FBF6EB]/20 rounded-sm p-5" data-testid={`founder-slot-${slot.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#C29949] mb-2">
                      {slot.label} — Placeholder
                    </div>
                    <p className="text-[11px] text-[#FBF6EB]/50 leading-relaxed">{slot.note}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={FOUNDER_V2.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="about-founder-external-cta"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#115754] text-[#FBF6EB] text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-[#17716c] transition-colors"
                >
                  {FOUNDER_V2.cta} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] text-[#FBF6EB]/40 max-w-[220px]">
                  {FOUNDER_V2.externalNote} This links to the founder's YouTube channel — not the
                  independent mrmogulmaker.com website, which returns when its hosting is restored.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Co-Founder */}
          <Reveal>
            <div className="bg-[#0E1D29] border border-[#115754]/40 rounded-sm p-8 h-full" data-testid="cofounder-section">
              <div className="relative aspect-[4/5] bg-[#142635] rounded-sm overflow-hidden p-7 flex flex-col justify-between border border-[#FBF6EB]/10 mb-7" data-testid="cofounder-photo-slot">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#C29949]">
                  <span>Co-Founder Portrait</span>
                  <span>Forthcoming</span>
                </div>
                <div className="space-y-3">
                  <div className="h-[1px] w-12 bg-[#C29949]" />
                  <p className="text-xs text-[#FBF6EB]/70 font-light leading-snug max-w-[260px]">
                    Approved photograph publishes here when supplied by the owner's office. No
                    fabricated likeness is ever used.
                  </p>
                </div>
              </div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
                Co-Founder
              </div>
              <h3 className="font-display text-[clamp(24px,3vw,36px)] font-bold text-white tracking-tight mb-2">
                {LEADERSHIP.cofounder.name}
              </h3>
              <div className="text-[11px] uppercase tracking-[0.14em] text-[#7FD4C8] mb-5">
                {LEADERSHIP.cofounder.role} — {LEADERSHIP.cofounder.location}
              </div>
              {LEADERSHIP.cofounder.bio ? (
                <p className="text-sm text-[#FBF6EB]/70 leading-relaxed mb-7">
                  {LEADERSHIP.cofounder.bio}
                </p>
              ) : (
                <div className="border border-dashed border-[#FBF6EB]/20 rounded-sm p-5 mb-7" data-testid="cofounder-bio-slot">
                  <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#C29949] mb-2">
                    Biography — Placeholder
                  </div>
                  <p className="text-[11px] text-[#FBF6EB]/50 leading-relaxed">
                    The co-founder's approved biography, role, and accomplishments publish here
                    when supplied by the owner. Nothing is invented.
                  </p>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-testid="cofounder-content-placeholders">
                {[
                  { label: "Leadership Role", note: "Responsibilities and focus areas — supplied by the owner." },
                  { label: "Verified Accomplishments", note: "Credentials and achievements published only when verified." },
                ].map((slot) => (
                  <div key={slot.label} className="border border-dashed border-[#FBF6EB]/20 rounded-sm p-5" data-testid={`cofounder-slot-${slot.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#C29949] mb-2">
                      {slot.label} — Placeholder
                    </div>
                    <p className="text-[11px] text-[#FBF6EB]/50 leading-relaxed">{slot.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Contact + CTA */}
    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight mb-6">
            Ready to Find Your Path?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              to="/start"
              data-testid="about-start-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#115754] text-[#FBF6EB] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#17716c] transition-colors"
            >
              FIND YOUR MOGUL PATH <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              data-testid="about-contact-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#142635]/25 text-[#142635] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:border-[#115754] hover:text-[#115754] transition-colors"
            >
              Contact the Academy
            </Link>
          </div>
          <ContactStrip dark={false} />
        </Reveal>
      </div>
    </section>
  </main>
);

export default AboutPage;
