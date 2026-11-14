import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { EVENTS } from "@/data/content";
import { V2_PILLARS } from "@/data/v2";

const formatSession = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

// Dated workshop calendar. Sessions appear automatically once approved dates,
// venues, and registration are added to the events collection.
const SchedulePage = () => {
  const scheduledEvents = EVENTS.filter(
    (e) => e.scheduleStatus === "scheduled" && (e.sessions || []).length > 0
  ).flatMap((e) => e.sessions.map((s) => ({ event: e, session: s })));
  scheduledEvents.sort((a, b) => new Date(a.session.date) - new Date(b.session.date));

  const pending = EVENTS.filter((e) => e.scheduleStatus !== "scheduled");

  return (
    <main className="bg-[#FBF6EB]" data-testid="schedule-page">
      <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-24 border-b border-[#115754]/40 mma-grain">
        <div className="max-w-7xl mx-auto max-w-4xl">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            Workshop Calendar
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
            Upcoming Sessions & Registration
          </h1>
          <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed">
            Every dated Academy session with real, verified registration. Dates publish only when
            approved — nothing is announced before it is confirmed.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {scheduledEvents.length === 0 ? (
            <Reveal>
              <div
                className="py-16 px-8 bg-white border border-[#142635]/12 rounded-sm shadow-sm text-center max-w-3xl mx-auto"
                data-testid="schedule-empty-state"
              >
                <CalendarDays className="w-8 h-8 text-[#C29949] mx-auto mb-5" aria-hidden="true" />
                <h2 className="font-display text-2xl font-bold text-[#142635] mb-3">
                  The calendar opens with the 2027 relaunch.
                </h2>
                <p className="text-sm text-[#142635]/65 leading-relaxed max-w-xl mx-auto mb-8">
                  Dates, venues, presenters, and registration links are published only when
                  approved. The programs below are in preparation — contact the Academy to be
                  notified when each one schedules its first session.
                </p>
                <Link
                  to="/contact"
                  data-testid="schedule-contact-cta"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#115754] text-[#FBF6EB] text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-[#17716c] transition-colors"
                >
                  Get Notified <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>
          ) : (
            <div className="space-y-5 mb-16" data-testid="schedule-list">
              {scheduledEvents.map(({ event, session }, i) => {
                const pillar = V2_PILLARS[event.pillar];
                return (
                  <Reveal key={`${event.id}-${i}`}>
                    <div
                      className="bg-white border border-[#142635]/12 shadow-sm rounded-sm p-6 flex flex-col md:flex-row md:items-center gap-6 border-l-4"
                      style={{ borderLeftColor: pillar.color }}
                      data-testid={`schedule-item-${event.id}-${i}`}
                    >
                      <div className="md:w-56 flex-shrink-0">
                        <div className="text-sm font-semibold text-[#142635]">
                          {formatSession(session.date)}
                        </div>
                        {session.location && (
                          <div className="flex items-center gap-1.5 mt-1 text-xs text-[#142635]/60">
                            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                            {session.location}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-mono uppercase tracking-wider mb-1" style={{ color: pillar.color }}>
                          {pillar.name} • {event.kind}
                        </div>
                        <div className="font-display text-lg font-semibold text-[#142635]">{event.title}</div>
                      </div>
                      <Link
                        to={`/workshops/${event.id}`}
                        data-testid={`schedule-rsvp-link-${event.id}-${i}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#115754] text-[#FBF6EB] text-[11px] font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-[#17716c] transition-colors flex-shrink-0"
                      >
                        Reserve a Seat <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}

          <Reveal className="mt-16 mb-10">
            <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-2">
              In Preparation
            </div>
            <h2 className="font-display text-[clamp(22px,2.8vw,36px)] font-bold text-[#142635] tracking-tight">
              Programs Awaiting Approved Dates
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pending.map((ev) => {
              const pillar = V2_PILLARS[ev.pillar];
              return (
                <Reveal key={ev.id}>
                  <Link
                    to={`/workshops/${ev.id}`}
                    data-testid={`schedule-pending-${ev.id}`}
                    className="block bg-white border border-[#142635]/12 shadow-sm p-6 rounded-sm h-full border-t-4 transition-transform duration-300 hover:-translate-y-1"
                    style={{ borderTopColor: pillar.color }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: pillar.color }}>
                        {pillar.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#8a6d2f] border border-[#C29949]/50 px-1.5 py-0.5 rounded">
                        Dates Pending
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[#142635] mb-1">{ev.title}</h3>
                    <div className="text-[10px] uppercase tracking-wider text-[#142635]/50">{ev.kind}</div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SchedulePage;
