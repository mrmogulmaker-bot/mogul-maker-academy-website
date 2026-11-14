import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FounderPhoto } from "@/components/FounderPhoto";
import { AVATARS, FOUNDER, LEVELS } from "@/data/content";

const BELIEFS = [
  {
    title: "Direction over motivation",
    text: "People need more than motivation, another online course, or promises of financial success. They need direction, the right sequence, useful tools, knowledgeable guidance, accountability, and relationships with people pursuing meaningful goals.",
  },
  {
    title: "Capable owners, not course completions",
    text: "What makes the Academy different is a commitment to developing capable business owners — not just selling business information.",
  },
  {
    title: "Education connected to implementation",
    text: "Through the MAKE · MANAGE · MULTIPLY philosophy, practical courses, live workshops, business-building resources, coaching opportunities, and community, the Academy connects education with implementation.",
  },
  {
    title: "Honesty before proof",
    text: "The Academy does not publish invented student results, teaching tenure, financial outcomes, endorsements, or membership statistics. Verified proof and testimonials will be published as they become available.",
  },
];

const AboutPage = () => (
  <main className="bg-[#F7F4EE]" data-testid="about-page">
    {/* Mission */}
    <section className="bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#202832] mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-3">
          The Academy
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-medium text-white tracking-[-0.02em] leading-tight mb-6">
          An Institution for People Who Intend to Own Something
        </h1>
        <p className="text-sm md:text-base text-[#F7F4EE]/75 max-w-3xl font-light leading-relaxed mb-6">
          Mogul Maker Academy teaches entrepreneurship, financial intelligence, and ownership
          through practical experience, structured education, and real-world application. Our
          mission is to help people build businesses, manage money intelligently, develop ownership
          opportunities, and create lasting economic value.
        </p>
        <div className="p-5 bg-[#202832] border-l-2 border-[#C6A66B] rounded-sm max-w-3xl">
          <p className="font-display italic text-base md:text-lg text-white leading-snug">
            "{FOUNDER.quote}"
          </p>
        </div>
      </div>
    </section>

    {/* Founder */}
    <section className="px-6 lg:px-12 py-20 lg:py-24 border-b border-[#5F6773]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <FounderPhoto testId="about-founder-photo-placeholder" />
        </Reveal>
        <Reveal className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#80551E] mb-3">
            Founder
          </div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-[#101B2B] tracking-tight mb-2">
            {FOUNDER.name}
          </h2>
          <div className="text-xs uppercase tracking-[0.14em] text-[#5F6773] mb-6">
            Known as {FOUNDER.knownAs} — {FOUNDER.role}
          </div>
          <p className="text-sm text-[#5F6773] leading-relaxed mb-4 max-w-2xl">
            Students choose Mogul Maker Academy because it does not teach business theory alone.
            The Academy teaches entrepreneurship, financial intelligence, and ownership through
            practical experience, structured education, and real-world application.
          </p>
          {FOUNDER.bio.map((p, i) => (
            <p key={i} className="text-sm text-[#5F6773] leading-relaxed mb-4 max-w-2xl">
              {p}
            </p>
          ))}
          <p className="text-sm text-[#5F6773] leading-relaxed max-w-2xl">
            The Academy's difference: it does not simply give people information. It helps them
            understand where they are, identify what's holding them back, determine their next
            move, and learn how to put knowledge into action.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Beliefs */}
    <section className="px-6 lg:px-12 py-20 lg:py-24 bg-white border-b border-[#5F6773]/20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#80551E] mb-3">
            What We Believe
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-medium text-[#101B2B] tracking-tight">
            Substance Before Status
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BELIEFS.map((b) => (
            <Reveal key={b.title}>
              <div
                className="p-8 bg-[#F7F4EE] rounded-sm border border-[#5F6773]/10 h-full"
                data-testid={`belief-card-${b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <h3 className="font-display text-lg font-medium text-[#101B2B] mb-3">{b.title}</h3>
                <p className="text-sm text-[#5F6773] leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Who we serve */}
    <section className="px-6 lg:px-12 py-20 lg:py-24 bg-[#101B2B] text-[#F7F4EE] mma-grain">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-3">
            Who We Serve
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-medium text-white tracking-tight mb-4">
            Four Stages. One Institution.
          </h2>
          <p className="text-sm text-[#F7F4EE]/70 leading-relaxed font-light">
            An environment where aspiring entrepreneurs learn to launch businesses, professionals
            explore pathways to ownership, established business owners strengthen their operations,
            and emerging investors develop better decision-making skills.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AVATARS.map((a) => (
            <Reveal key={a.id}>
              <div
                className="bg-[#202832] border border-[#5F6773]/30 p-8 rounded-sm h-full"
                data-testid={`about-avatar-${a.id.toLowerCase()}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6773]">
                    Stage {a.id}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#C6A66B]/10 text-[#C6A66B] rounded">
                    {LEVELS[a.level].name}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-white mb-2">{a.name}</h3>
                <p className="text-xs text-[#F7F4EE]/70 leading-relaxed">{a.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14">
          <Link
            to="/enquiry"
            data-testid="about-enquiry-link"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C6A66B] text-[#101B2B] text-xs font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-[#d8bb83] transition-colors"
          >
            Find Your Mogul Path <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  </main>
);

export default AboutPage;
