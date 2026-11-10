import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PillarCard } from "@/components/PillarCard";
import { CourseCard } from "@/components/CourseCard";
import { Reveal } from "@/components/Reveal";
import { PILLARS, COURSES, METHODS } from "@/data/content";

const FrameworkPage = () => (
  <main className="bg-[#F7F4EE]" data-testid="framework-page">
    <section className="bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#202832] mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-3">
          Teaching Philosophy
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-medium text-white tracking-[-0.02em] leading-tight mb-6">
          The 3M Framework™ — MAKE · MANAGE · MULTIPLY
        </h1>
        <p className="text-sm md:text-base text-[#F7F4EE]/75 max-w-3xl font-light leading-relaxed mb-6">
          The 3M Framework is Mogul Maker Academy's proprietary teaching philosophy. It structures
          entrepreneurial education into three interdependent capabilities — creating economic
          value, building financial and operating discipline, and expanding ownership and
          enterprise value.
        </p>
        <div className="p-5 bg-[#202832] border-l-2 border-[#C6A66B] rounded-sm max-w-3xl">
          <p className="text-xs text-[#F7F4EE]/80 leading-relaxed">
            <span className="font-semibold text-[#C6A66B] uppercase tracking-wider text-[10px] block mb-1">
              An important distinction
            </span>
            The 3M Framework represents how we teach. Standard, Premium, and VIP represent levels
            of educational depth and member access. The entrepreneurial avatars represent the
            people we serve. These systems complement one another — they are never interchangeable.
          </p>
        </div>
      </div>
    </section>

    <section className="px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(PILLARS).map((p, i) => (
            <Reveal key={p.id}>
              <PillarCard pillar={p} index={i} linkTo={`/framework/${p.id}`} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#80551E] mb-3">
            The Operating Continuum
          </div>
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-medium text-[#101B2B] tracking-tight mb-8 max-w-2xl">
            Not Three Destinations — One Continuum of Ownership Capability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(PILLARS).map((p, i) => (
              <div key={p.id} className="relative pl-6" data-testid={`continuum-${p.id}`}>
                <span
                  className="absolute left-0 top-1 bottom-1 w-[2px]"
                  style={{ backgroundColor: p.color }}
                />
                <div
                  className="text-[10px] font-mono uppercase tracking-widest mb-1"
                  style={{ color: p.color }}
                >
                  Stage {i + 1}
                </div>
                <div className="font-display text-lg font-medium text-[#101B2B] mb-2">
                  {p.name} — {p.tagline}
                </div>
                <p className="text-xs text-[#5F6773] leading-relaxed">
                  {i === 0 &&
                    "Every enterprise begins by creating something a market values. MAKE builds the capability to validate, price, sell, and generate revenue."}
                  {i === 1 &&
                    "Revenue without discipline disappears. MANAGE builds the financial management, systems, and leadership that turn activity into a durable operation. Money Follows Management."}
                  {i === 2 &&
                    "A well-run business becomes an asset. MULTIPLY builds the capability to grow, value, acquire, and compound ownership over time."}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#80551E] mb-2">
                Framework in the Catalog
              </div>
              <h2 className="font-display text-[clamp(24px,3vw,40px)] font-medium text-[#101B2B] tracking-tight">
                Every Module Carries a 3M Classification
              </h2>
            </div>
            <Link
              to="/courses"
              data-testid="framework-catalog-link"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-semibold text-[#101B2B] border-b border-[#C6A66B] pb-1 hover:text-[#80551E] transition-colors"
            >
              Browse the full catalog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(PILLARS).map((p) => {
              const sample = COURSES.find((c) => c.pillar === p.id);
              return <CourseCard key={p.id} course={sample} dark={false} />;
            })}
          </div>
        </Reveal>

        <Reveal className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {METHODS.map((m) => {
            const pillar = PILLARS[m.pillar];
            return (
              <div
                key={m.name}
                className="bg-white border border-[#5F6773]/20 shadow-sm p-6 rounded-sm border-t-4"
                style={{ borderTopColor: pillar.color }}
                data-testid={`framework-method-${m.name.toLowerCase()}`}
              >
                <div className="font-display text-lg font-medium text-[#101B2B] mb-1">{m.name}</div>
                <div
                  className="text-[10px] font-mono uppercase tracking-wider mb-3"
                  style={{ color: pillar.color }}
                >
                  {pillar.name} Pillar
                </div>
                <p className="text-xs text-[#5F6773] leading-relaxed">{m.summary}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  </main>
);

export default FrameworkPage;
