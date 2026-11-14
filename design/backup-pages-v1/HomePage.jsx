import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { Ticker } from "@/components/Ticker";
import { PillarCard } from "@/components/PillarCard";
import { CourseCard } from "@/components/CourseCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { PILLARS, METHODS, COURSES, AVATARS, EVENTS, FOUNDER, LEVELS } from "@/data/content";
import { FounderPhoto } from "@/components/FounderPhoto";

const FEATURED_COURSE_IDS = ["std-1", "prm-6", "vip-7"];

const HomePage = () => {
  const navigate = useNavigate();
  const featured = FEATURED_COURSE_IDS.map((id) => COURSES.find((c) => c.id === id));

  return (
    <main data-testid="home-page">
      <CinematicHero />
      <Ticker />

      {/* 3M FRAMEWORK */}
      <section
        id="framework"
        className="py-24 lg:py-32 bg-[#F7F4EE] text-[#202832] px-6 lg:px-12 border-b border-[#5F6773]/20"
        data-testid="framework-section"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#80551E] mb-3">
              Teaching Philosophy
            </div>
            <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-medium text-[#101B2B] tracking-[-0.02em] leading-tight mb-4">
              The 3M Framework™
            </h2>
            <p className="text-base text-[#5F6773] leading-relaxed">
              Our proprietary teaching philosophy structures entrepreneurial education into three
              interdependent capabilities. It organizes everything we teach — it is not a pricing
              tier and never will be. Standard, Premium, and VIP describe depth of education and
              member access; MAKE, MANAGE, and MULTIPLY describe what you learn.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(PILLARS).map((p, i) => (
              <Reveal key={p.id}>
                <PillarCard pillar={p} index={i} linkTo={`/framework/${p.id}`} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link
              to="/framework"
              data-testid="framework-explore-link"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#101B2B] border-b border-[#C6A66B] pb-1 hover:text-[#80551E] transition-colors"
            >
              Explore the full framework <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* METHODS STRIP */}
      <section
        className="py-24 bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 border-b border-[#202832] mma-grain"
        data-testid="methods-section"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-2">
                Proprietary Methods
              </div>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-white tracking-tight">
                Frameworks Within the Framework
              </h2>
            </div>
            <Link
              to="/methods"
              data-testid="methods-view-all-link"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-[#C6A66B] hover:text-[#d8bb83] transition-colors"
            >
              All methods <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {METHODS.map((m) => {
              const pillar = PILLARS[m.pillar];
              return (
                <Reveal key={m.name}>
                  <div
                    className="bg-[#202832] border border-[#5F6773]/30 p-6 rounded-sm h-full border-t-4"
                    style={{ borderTopColor: pillar.color }}
                    data-testid={`method-card-${m.name.toLowerCase()}`}
                  >
                    <div
                      className="font-display text-xl font-medium text-white mb-1"
                    >
                      {m.name}
                    </div>
                    <div
                      className="text-[10px] font-mono uppercase tracking-wider mb-4"
                      style={{ color: pillar.onDarkText }}
                    >
                      {pillar.name} Pillar
                    </div>
                    <p className="text-xs text-[#F7F4EE]/70 leading-relaxed">{m.summary}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CURRICULUM PREVIEW */}
      <section
        className="py-24 bg-[#F7F4EE] text-[#202832] px-6 lg:px-12 border-b border-[#5F6773]/20"
        data-testid="curriculum-preview-section"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#80551E] mb-2">
                2027 Master Catalog
              </div>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-[#101B2B] tracking-tight">
                Structured Course Catalog
              </h2>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xs font-mono text-[#5F6773] uppercase tracking-wider mb-2">
                38 Approved Modules • In Development for 2027
              </p>
              <Link
                to="/courses"
                data-testid="curriculum-view-all-link"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-[#101B2B] border-b border-[#C6A66B] pb-1 hover:text-[#80551E] transition-colors"
              >
                Browse all courses <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((c) => (
              <Reveal key={c.id}>
                <CourseCard course={c} dark={false} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(LEVELS).map((l) => (
              <div key={l.id} className="flex items-start gap-3" data-testid={`level-summary-${l.id}`}>
                <span className="mt-1 w-2 h-2 rounded-full bg-[#C6A66B] flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#101B2B]">
                    {l.name} — {l.audience}
                  </div>
                  <p className="text-xs text-[#5F6773] leading-relaxed mt-1">{l.blurb}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section
        className="py-24 lg:py-32 bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 border-b border-[#202832] mma-grain"
        data-testid="avatars-section"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-3">
              Who the Academy Serves
            </div>
            <h2 className="font-display text-[clamp(28px,3.8vw,48px)] font-medium text-white tracking-[-0.02em] leading-tight mb-4">
              One Institution. Four Stages of the Entrepreneurial Journey.
            </h2>
            <p className="text-base text-[#F7F4EE]/70 leading-relaxed font-light">
              The Academy welcomes people at their particular stage — early-stage entrepreneurs
              without elementary treatment, experienced owners without intimidation. Education and
              access deepen with each membership level.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AVATARS.map((a) => {
              const level = LEVELS[a.level];
              return (
                <Reveal key={a.id}>
                  <div
                    className="bg-[#202832] border border-[#5F6773]/30 p-8 rounded-sm h-full"
                    data-testid={`avatar-card-${a.id.toLowerCase()}`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6773]">
                        Stage {a.id}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#C6A66B]/10 text-[#C6A66B] rounded">
                        {level.name} Membership
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-medium text-white mb-2">{a.name}</h3>
                    <p className="font-display italic text-sm text-[#C6A66B] mb-4">
                      "{a.response}"
                    </p>
                    <p className="text-xs text-[#F7F4EE]/70 leading-relaxed mb-5">{a.description}</p>
                    <ul className="space-y-1.5">
                      {a.settings.map((s) => (
                        <li key={s} className="text-[11px] text-[#F7F4EE]/60 flex items-start gap-2">
                          <span className="mt-1 w-1 h-1 rounded-full bg-[#C6A66B] flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section
        className="py-24 bg-[#F7F4EE] text-[#202832] px-6 lg:px-12 border-b border-[#5F6773]/20"
        data-testid="founder-section"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <FounderPhoto testId="founder-photo-placeholder" />
          </Reveal>
          <Reveal className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#80551E] mb-3">
              Founder
            </div>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-[#101B2B] tracking-tight mb-2">
              {FOUNDER.name}
            </h2>
            <div className="text-xs uppercase tracking-[0.14em] text-[#5F6773] mb-6">
              Known as {FOUNDER.knownAs} — {FOUNDER.role}
            </div>
            {FOUNDER.bio.map((p, i) => (
              <p key={i} className="text-sm text-[#5F6773] leading-relaxed mb-4 max-w-2xl">
                {p}
              </p>
            ))}
            <Link
              to="/about"
              data-testid="founder-read-more-link"
              className="inline-flex items-center gap-2 mt-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#101B2B] border-b border-[#C6A66B] pb-1 hover:text-[#80551E] transition-colors"
            >
              The Academy's mission <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* EVENTS PREVIEW */}
      <section
        className="py-24 bg-[#F7F4EE] text-[#202832] px-6 lg:px-12 border-b border-[#5F6773]/20"
        data-testid="events-preview-section"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#80551E] mb-2">
                Beyond Recorded Courses
              </div>
              <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-[#101B2B] tracking-tight">
                Workshops, Events & Community
              </h2>
            </div>
            <Link
              to="/events"
              data-testid="events-view-all-link"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-[#101B2B] border-b border-[#C6A66B] pb-1 hover:text-[#80551E] transition-colors"
            >
              All events & media <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS.map((ev) => {
              const pillar = PILLARS[ev.pillar];
              return (
                <Reveal key={ev.id}>
                  <div
                    className="bg-white border border-[#5F6773]/20 shadow-sm p-6 rounded-sm h-full border-t-4"
                    style={{ borderTopColor: pillar.color }}
                    data-testid={`event-card-${ev.id}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider"
                        style={{ color: pillar.color }}
                      >
                        {pillar.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#80551E] border border-[#C6A66B]/50 px-1.5 py-0.5 rounded">
                        Coming Soon
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-medium text-[#101B2B] mb-1">
                      {ev.title}
                    </h3>
                    <div className="text-[10px] uppercase tracking-wider text-[#5F6773] mb-3">
                      {ev.kind}
                    </div>
                    <p className="text-xs text-[#5F6773] leading-relaxed">{ev.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEFINING QUOTE */}
      <section
        className="py-24 bg-[#F7F4EE] text-[#202832] px-6 lg:px-12 border-b border-[#5F6773]/20"
        data-testid="philosophy-section"
      >
        <Reveal className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-[#101B2B] text-[#C6A66B] text-[10px] uppercase tracking-[0.2em] font-semibold rounded mb-6">
            Institutional Standard
          </div>
          <blockquote className="font-display text-[clamp(22px,3vw,36px)] leading-tight text-[#101B2B] font-normal mb-8 max-w-4xl mx-auto">
            "{FOUNDER.quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-[#5F6773]">
            <span className="font-semibold text-[#101B2B]">{FOUNDER.name}</span>
            <span>•</span>
            <span>Founder & Business Strategist</span>
          </div>
        </Reveal>
      </section>

      {/* ENQUIRY */}
      <section
        className="py-24 bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 mma-grain"
        data-testid="enquiry-section"
      >
        <div className="max-w-4xl mx-auto bg-[#202832] p-8 md:p-12 rounded-sm border border-[#5F6773]/30">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B]">
              Begin Your Assessment
            </span>
            <h3 className="font-display text-3xl font-medium text-white mt-2 mb-3">
              Find Your Mogul Path
            </h3>
            <p className="text-xs text-[#F7F4EE]/75">
              Submit your current operating stage to receive institutional guidance and a syllabus
              recommendation.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <EnquiryForm dark />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
