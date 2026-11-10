import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin, Monitor } from "lucide-react";
import { RsvpForm } from "@/components/RsvpForm";
import { Reveal } from "@/components/Reveal";
import { EVENTS, PILLARS } from "@/data/content";

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
  if (!event) return <Navigate to="/events" replace />;

  const pillar = PILLARS[event.pillar];
  const scheduled = event.scheduleStatus === "scheduled";
  const sessions = event.sessions || [];

  return (
    <main className="bg-[#F7F4EE]" data-testid={`event-detail-${event.id}`}>
      <section className="bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 py-16 lg:py-24 border-b border-[#202832] mma-grain">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/events"
            data-testid="event-back-link"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#F7F4EE]/60 hover:text-[#C6A66B] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Events & Media
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded"
              style={{ backgroundColor: `${pillar.color}4D`, color: pillar.onDarkText }}
              data-testid="event-detail-pillar-tag"
            >
              {pillar.name} Pillar
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#C6A66B]/15 text-[#C6A66B]">
              {event.kind}
            </span>
            {event.format && (
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#5F6773]/40 text-[#F7F4EE]/60">
                {event.format}
              </span>
            )}
            <span
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#C6A66B]/40 text-[#C6A66B]"
              data-testid="event-detail-status"
            >
              {scheduled ? "Scheduled" : "Dates Pending"}
            </span>
          </div>
          <h1 className="font-display text-[clamp(30px,4.2vw,56px)] font-medium text-white tracking-[-0.02em] leading-tight max-w-4xl">
            {event.title}
          </h1>
          <p className="mt-5 text-sm md:text-base text-[#F7F4EE]/75 max-w-2xl font-light leading-relaxed">
            {event.description}
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Agenda */}
          <div className="lg:col-span-7 space-y-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.18em] font-bold mb-6" style={{ color: pillar.color }}>
                What Happens Here
              </div>
              <ol className="space-y-3">
                {event.agenda.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 bg-white border border-[#5F6773]/20 rounded-sm p-5"
                    data-testid={`event-agenda-${i}`}
                  >
                    <span className="font-mono text-[10px] mt-1" style={{ color: pillar.color }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-[#202832] leading-relaxed">{a}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <div className="p-6 bg-white border border-[#5F6773]/20 rounded-sm">
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#202832] mb-2">
                  Who This Is For
                </div>
                <p className="text-sm text-[#5F6773] leading-relaxed">{event.audienceNote}</p>
              </div>
            </Reveal>
          </div>

          {/* Schedule / RSVP sidebar */}
          <div className="lg:col-span-5">
            <Reveal>
              <div
                className="bg-[#101B2B] text-[#F7F4EE] rounded-sm p-8 mma-grain"
                data-testid="event-schedule-panel"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-5">
                  Schedule & Registration
                </div>

                {scheduled && sessions.length > 0 ? (
                  <div className="space-y-6">
                    {sessions.map((s, i) => (
                      <div key={i} className="pb-5 border-b border-[#202832]" data-testid={`event-session-${i}`}>
                        <div className="flex items-start gap-3 text-sm text-white font-medium">
                          <CalendarDays className="w-4 h-4 text-[#C6A66B] mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>
                            {formatSession(s.date)} — {formatTime(s.date)}
                          </span>
                        </div>
                        {s.location && (
                          <div className="flex items-start gap-3 mt-2 text-xs text-[#F7F4EE]/70">
                            <MapPin className="w-4 h-4 text-[#5F6773] mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span>{s.location}</span>
                          </div>
                        )}
                      </div>
                    ))}
                    <RsvpForm eventId={event.id} eventTitle={event.title} sessionLabel={sessions[0] ? formatSession(sessions[0].date) : null} />
                  </div>
                ) : (
                  <div data-testid="event-dates-pending">
                    <div className="flex items-start gap-3 text-sm text-[#F7F4EE]/80">
                      <Monitor className="w-4 h-4 text-[#C6A66B] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <p className="leading-relaxed">
                        Dates and venues publish the moment they are approved. Registration opens
                        here as soon as the first session is scheduled.
                      </p>
                    </div>
                    <Link
                      to="/enquiry"
                      data-testid="event-notify-link"
                      className="mt-6 block w-full text-center py-3.5 bg-[#C6A66B] text-[#101B2B] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#d8bb83] transition-colors rounded-sm"
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
