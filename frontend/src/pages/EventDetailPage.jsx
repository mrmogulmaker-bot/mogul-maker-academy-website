import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin, Monitor } from "lucide-react";
import { RsvpForm } from "@/components/RsvpForm";
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

const formatTime = (iso) =>
  new Date(iso).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

const EventDetailPage = () => {
  const { eventId } = useParams();
  const event = EVENTS.find((e) => e.id === eventId);
  if (!event) return <Navigate to="/workshops" replace />;

  const pillar = V2_PILLARS[event.pillar];
  const scheduled = event.scheduleStatus === "scheduled";
  const sessions = event.sessions || [];

  return (
    <main className="bg-[#FBF6EB]" data-testid={`event-detail-${event.id}`}>
      <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-16 lg:py-24 border-b border-[#115754]/40 mma-grain">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/workshops"
            data-testid="event-back-link"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#FBF6EB]/60 hover:text-[#C29949] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Workshops
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded"
              style={{ backgroundColor: `${pillar.color}4D`, color: pillar.onDark }}
              data-testid="event-detail-pillar-tag"
            >
              {pillar.name} Pillar
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#C29949]/15 text-[#C29949]">
              {event.kind}
            </span>
            {event.format && (
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#FBF6EB]/20 text-[#FBF6EB]/60">
                {event.format}
              </span>
            )}
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#C29949]/40 text-[#C29949]" data-testid="event-detail-status">
              {scheduled ? "Scheduled" : "Dates Pending"}
            </span>
          </div>
          <h1 className="font-display text-[clamp(30px,4.2vw,56px)] font-bold text-white tracking-[-0.02em] leading-tight max-w-4xl">
            {event.title}
          </h1>
          <p className="mt-5 text-sm md:text-base text-[#FBF6EB]/75 max-w-2xl font-light leading-relaxed">
            {event.description}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.18em] font-bold mb-6" style={{ color: pillar.color }}>
                Session Structure & Expected Outcomes
              </div>
              <ol className="space-y-3">
                {event.agenda.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 bg-white border border-[#142635]/12 rounded-sm p-5"
                    data-testid={`event-agenda-${i}`}
                  >
                    <span className="font-mono text-[10px] mt-1" style={{ color: pillar.color }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#142635] leading-relaxed">{a}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <div className="p-6 bg-white border border-[#142635]/12 rounded-sm">
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#142635] mb-2">
                  Who This Is For
                </div>
                <p className="text-sm text-[#142635]/65 leading-relaxed">{event.audienceNote}</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 bg-white border border-[#142635]/12 rounded-sm" data-testid="event-presenter-note">
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#142635] mb-2">
                  Presenters
                </div>
                <p className="text-sm text-[#142635]/65 leading-relaxed">
                  Presenter details publish with each approved session. Guest instructors are
                  announced only when confirmed.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-[#142635] text-[#FBF6EB] rounded-sm p-8 mma-grain" data-testid="event-schedule-panel">
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-5">
                  Schedule & Registration
                </div>

                {scheduled && sessions.length > 0 ? (
                  <div className="space-y-6">
                    {sessions.map((s, i) => (
                      <div key={i} className="pb-5 border-b border-[#115754]/40" data-testid={`event-session-${i}`}>
                        <div className="flex items-start gap-3 text-sm text-white font-medium">
                          <CalendarDays className="w-4 h-4 text-[#C29949] mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>
                            {formatSession(s.date)} — {formatTime(s.date)}
                          </span>
                        </div>
                        {s.location && (
                          <div className="flex items-start gap-3 mt-2 text-xs text-[#FBF6EB]/70">
                            <MapPin className="w-4 h-4 text-[#9FB8C8] mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span>{s.location}</span>
                          </div>
                        )}
                      </div>
                    ))}
                    <RsvpForm
                      eventId={event.id}
                      eventTitle={event.title}
                      sessionLabel={sessions[0] ? formatSession(sessions[0].date) : null}
                    />
                  </div>
                ) : (
                  <div data-testid="event-dates-pending">
                    <div className="flex items-start gap-3 text-sm text-[#FBF6EB]/80">
                      <Monitor className="w-4 h-4 text-[#C29949] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <p className="leading-relaxed">
                        Dates, presenters, and verified registration links publish the moment they
                        are approved. Nothing is advertised before it is confirmed.
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      data-testid="event-notify-link"
                      className="mt-6 block w-full text-center py-3.5 bg-[#115754] text-[#FBF6EB] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#17716c] transition-colors rounded-sm"
                    >
                      Get Notified When Dates Open
                    </Link>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventDetailPage;
