import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { track } from "@/utils/track";
import { LEARN_LEVELS, DESTINATIONS } from "@/data/v2";

const LEVEL_DETAILS = {
  standard: {
    headline: "Build Your Foundation",
    audience: "Emerging entrepreneurs developing their first business capabilities",
    outcomes: [
      "Evaluate whether an idea has real customers",
      "Develop and price a first offer",
      "Set a business up properly from the beginning",
    ],
    experience:
      "Structured core courses, starter resources, and community discussion — with Workshop Wednesday and member programming built for early-stage builders.",
  },
  premium: {
    headline: "Move Toward Ownership",
    audience: "Individuals ready to understand business ownership, financial decision-making, and operating systems more deeply",
    outcomes: [
      "Evaluate the move from income to ownership — build or buy",
      "Understand the business math before committing capital",
      "Prepare for funding with clean books and real records",
    ],
    experience:
      "Deeper coursework and owner-grade resources, premium workshop deep dives, and a network of people making the same transition.",
  },
  vip: {
    headline: "Think and Operate Like an Owner",
    audience: "Established owners and emerging acquirers seeking advanced strategic education and facilitated experiences",
    outcomes: [
      "Build teams and systems that remove the founder bottleneck",
      "Evaluate acquisitions, valuation, and operational risk",
      "Make capital decisions with discipline — grow, acquire, or prepare for exit",
    ],
    experience:
      "Executive-level education, strategic case labs, capital and acquisition workshops, and a peer network of owners and acquirers.",
  },
};

const AcademyPage = () => (
  <main className="bg-[#FBF6EB]" data-testid="academy-page">
    <Seo
      title="The Academy — Standard, Premium & VIP Pathways | Mogul Maker Academy"
      description="Structured business ownership education for every stage: build your foundation, move toward ownership, or think and operate like an owner. Details via the member community."
    />
    <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#115754]/40 mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "The Academy" }]} />
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
          The Academy
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
          Structured Education for Every Stage of Ownership
        </h1>
        <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed">
          Three educational pathways — Standard, Premium, and VIP — organized by audience,
          outcomes, and learning experience. Each is classified by the MAKE · MANAGE · MULTIPLY
          framework. None includes individual consulting; professional implementation is
          contracted separately.
        </p>
      </div>
    </section>

    <section className="px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto space-y-14">
        {LEARN_LEVELS.map((l) => {
          const d = LEVEL_DETAILS[l.id];
          return (
            <Reveal key={l.id}>
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-[#142635]/12 rounded-sm shadow-sm overflow-hidden"
                data-testid={`academy-level-${l.id}`}
              >
                <div className="lg:col-span-4 bg-[#142635] text-[#FBF6EB] p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C29949]">
                      {l.name} Pathway
                    </span>
                    <h2 className="font-display text-[clamp(22px,2.6vw,32px)] font-bold text-white mt-4 mb-3 leading-tight">
                      {d.headline}
                    </h2>
                    <p className="text-xs text-[#FBF6EB]/65 leading-relaxed">{d.audience}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-[#FBF6EB]/10 text-[11px] text-[#FBF6EB]/50 leading-relaxed">
                    Membership-based education. Does not include individual consulting or
                    one-on-one advisory.
                  </div>
                </div>
                <div className="lg:col-span-8 p-8 lg:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#115754] mb-4">
                        What you'll develop
                      </div>
                      <ul className="space-y-3">
                        {d.outcomes.map((o, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#142635]" data-testid={`academy-outcome-${l.id}-${i}`}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C29949] flex-shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#115754] mb-4">
                        The learning experience
                      </div>
                      <p className="text-sm text-[#142635]/65 leading-relaxed">{d.experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}

        {/* Membership destination */}
        <Reveal>
          <div className="bg-[#115754] text-[#FBF6EB] rounded-sm p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mma-grain" data-testid="academy-membership-block">
            <div className="lg:col-span-8">
              <h2 className="font-display text-[clamp(22px,2.6vw,32px)] font-bold text-white mb-3">
                Membership details live inside the community.
              </h2>
              <p className="text-sm text-[#FBF6EB]/75 leading-relaxed max-w-2xl">
                Current pathways, member experiences, and enrollment are presented through the
                Academy's verified Skool community — the membership destination. Pricing is
                intentionally not published on the public website.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={DESTINATIONS.skoolCommunity}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("membership_destination_clicked", { location: "academy-page" })}
                data-testid="academy-skool-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C29949] text-[#142635] text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-[#d0a857] transition-colors"
              >
                EXPLORE MEMBERSHIP <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to="/start"
                data-testid="academy-start-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#FBF6EB]/30 text-[#FBF6EB] text-xs font-bold uppercase tracking-[0.12em] rounded-sm hover:border-[#C29949] hover:text-[#C29949] transition-colors"
              >
                Not sure? Find your path <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        <p className="text-[11px] text-[#142635]/50 max-w-3xl" data-testid="academy-catalog-note">
          The approved 2027 curriculum catalog is developed inside the learning experience. The
          public website introduces the pathways; the full curriculum belongs to members.
        </p>
      </div>
    </section>
  </main>
);

export default AcademyPage;
