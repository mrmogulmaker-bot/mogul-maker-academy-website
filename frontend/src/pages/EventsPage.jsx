import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Mic, BookOpen, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { EVENTS, PILLARS } from "@/data/content";

const FUTURE_FORMATS = [
  {
    icon: CalendarDays,
    title: "Conferences & Business Seminars",
    text: "Larger institutional gatherings are part of the Academy's long-term roadmap — structured education, guest instructors, and in-person executive experiences.",
  },
  {
    icon: Mic,
    title: "Podcast & Media",
    text: "Audio and video programming will extend the 3M Framework beyond the classroom — conversations on entrepreneurship, discipline, and ownership.",
  },
  {
    icon: BookOpen,
    title: "Articles, Guides & Publications",
    text: "Written education organized by MAKE, MANAGE, and MULTIPLY — practical reading for every stage of the entrepreneurial journey.",
  },
  {
    icon: Users,
    title: "Partnerships & Community Experiences",
    text: "Strategic partnerships, member meetups, and community experiences that connect education with real relationships.",
  },
];

const EventsPage = () => (
  <main className="bg-[#F7F4EE]" data-testid="events-page">
    <section className="bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#202832] mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-3">
          Events & Media
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-medium text-white tracking-[-0.02em] leading-tight mb-6">
          Beyond Recorded Courses
        </h1>
        <p className="text-sm md:text-base text-[#F7F4EE]/75 max-w-3xl font-light leading-relaxed">
          Mogul Maker Academy is built to grow — workshops, webinars, conferences, networking
          events, guest instructors, podcast content, and publications, all organized through the
          3M Framework. Online education plus in-person workshops and events.
        </p>
      </div>
    </section>

    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-12">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#80551E] mb-2">
            Programs & Recurring Experiences
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-medium text-[#101B2B] tracking-tight">
            Current & Upcoming
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((ev) => {
            const pillar = PILLARS[ev.pillar];
            return (
              <Reveal key={ev.id}>
                <div
                  className="bg-white border border-[#5F6773]/20 shadow-sm p-6 rounded-sm h-full border-t-4 flex flex-col"
                  style={{ borderTopColor: pillar.color }}
                  data-testid={`events-card-${ev.id}`}
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
                  <h3 className="font-display text-lg font-medium text-[#101B2B] mb-1">{ev.title}</h3>
                  <div className="text-[10px] uppercase tracking-wider text-[#5F6773] mb-3">
                    {ev.kind}
                  </div>
                  <p className="text-xs text-[#5F6773] leading-relaxed flex-1">{ev.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20 mb-12">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#80551E] mb-2">
            Built for Expansion
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-medium text-[#101B2B] tracking-tight max-w-2xl">
            One System for Every Future Format
          </h2>
          <p className="text-sm text-[#5F6773] leading-relaxed mt-3 max-w-3xl">
            Every event, article, and program the Academy adds is classified by 3M pillar and
            audience stage — so new initiatives publish without redesigning the website.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUTURE_FORMATS.map((f) => (
            <Reveal key={f.title}>
              <div
                className="bg-[#101B2B] text-[#F7F4EE] p-6 rounded-sm h-full"
                data-testid={`format-card-${f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <f.icon className="w-5 h-5 text-[#C6A66B] mb-4" aria-hidden="true" />
                <h3 className="font-display text-base font-medium text-white mb-2">{f.title}</h3>
                <p className="text-xs text-[#F7F4EE]/70 leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 p-8 bg-white border border-[#5F6773]/20 rounded-sm shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-medium text-[#101B2B] mb-1">
              Announcements arrive with the 2027 relaunch.
            </h3>
            <p className="text-xs text-[#5F6773] leading-relaxed max-w-xl">
              Dates, venues, and registration details are published only when approved. Submit an
              enquiry to be notified when workshops and events open.
            </p>
          </div>
          <Link
            to="/enquiry"
            data-testid="events-enquiry-link"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A66B] text-[#101B2B] text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-[#d8bb83] transition-colors flex-shrink-0"
          >
            Get Notified <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  </main>
);

export default EventsPage;
