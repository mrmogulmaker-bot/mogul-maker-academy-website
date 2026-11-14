import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EVENTS } from "@/data/content";
import { V2_PILLARS } from "@/data/v2";

const WorkshopsPage = () => (
  <main className="bg-[#FBF6EB]" data-testid="workshops-page">
    <Seo
      title="Workshops & Events | Mogul Maker Academy"
      description="Facilitated workshops and educational experiences — guided exercises, real business scenarios, and practical assignments. Verified schedules and registration only."
    />
    <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#115754]/40 mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Workshops & Events" }]} />
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
          Workshops & Events
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
          Where Skills Get Built, Not Just Discussed
        </h1>
        <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed">
          Guided exercises, real business scenarios, facilitated discussions, and practical
          assignments. Educational events, workshop replays where authorized, and registration —
          organized by the 3M Framework.
        </p>
      </div>
    </section>

    <section className="px-6 lg:px-12 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#115754] mb-2">
              Programs & Recurring Experiences
            </div>
            <h2 className="font-display text-[clamp(24px,3vw,40px)] font-bold text-[#142635] tracking-tight">
              Current Workshop Programming
            </h2>
          </div>
          <Link
            to="/workshops/schedule"
            data-testid="workshops-schedule-link"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-bold text-[#115754] border-b-2 border-[#C29949] pb-1 hover:text-[#142635] transition-colors flex-shrink-0"
          >
            View the workshop calendar <CalendarDays className="w-3.5 h-3.5" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((ev) => {
            const pillar = V2_PILLARS[ev.pillar];
            return (
              <Reveal key={ev.id}>
                <Link
                  to={`/workshops/${ev.id}`}
                  data-testid={`workshop-card-${ev.id}`}
                  className="block bg-white border border-[#142635]/12 shadow-sm p-6 rounded-sm h-full border-t-4 transition-transform duration-300 hover:-translate-y-1"
                  style={{ borderTopColor: pillar.color }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: pillar.color }}>
                      {pillar.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#8a6d2f] border border-[#C29949]/50 px-1.5 py-0.5 rounded">
                      {ev.scheduleStatus === "scheduled" ? "Scheduled" : "Dates Pending"}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#142635] mb-1">{ev.title}</h3>
                  <div className="text-[10px] uppercase tracking-wider text-[#142635]/50 mb-3">{ev.kind}</div>
                  <p className="text-xs text-[#142635]/60 leading-relaxed mb-4">{ev.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold" style={{ color: pillar.color }}>
                    Details & registration <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 p-8 bg-white border border-[#142635]/12 rounded-sm shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#115754] mb-2">
                Session Details
              </div>
              <p className="text-xs text-[#142635]/60 leading-relaxed">
                Each workshop page carries its session descriptions, expected outcomes, and
                presenter details once approved — nothing is advertised before it is confirmed.
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#115754] mb-2">
                Registration
              </div>
              <p className="text-xs text-[#142635]/60 leading-relaxed">
                Registration opens with real, verified links on each workshop page when dates are
                approved. Replays are available where the Academy is authorized to distribute them.
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#115754] mb-2">
                Availability
              </div>
              <p className="text-xs text-[#142635]/60 leading-relaxed">
                The workshop calendar opens with the 2027 relaunch. Programs marked "Dates Pending"
                are in preparation — submit a contact form to be notified when scheduling begins.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </main>
);

export default WorkshopsPage;
