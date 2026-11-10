import { Link } from "react-router-dom";
import { Hammer, Gauge, Layers, ArrowRight } from "lucide-react";

const ICONS = { Hammer, Gauge, Layers };

export const PillarCard = ({ pillar, index, linkTo }) => {
  const Icon = ICONS[pillar.icon] || Hammer;
  const num = String(index + 1).padStart(2, "0");

  const inner = (
    <article
      className="group bg-white border-t-4 p-8 lg:p-10 shadow-sm flex flex-col justify-between rounded-b-sm h-full transition-transform duration-300 hover:-translate-y-1"
      style={{ borderTopColor: pillar.color }}
      data-testid={`pillar-card-${pillar.id}`}
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          <span
            className="text-xs uppercase tracking-[0.18em] font-bold"
            style={{ color: pillar.color }}
          >
            Pillar {num}
          </span>
          <span className="flex items-center gap-2">
            <Icon className="w-4 h-4" style={{ color: pillar.color }} aria-hidden="true" />
            <span
              className="text-xs font-mono px-2 py-0.5 rounded"
              style={{ backgroundColor: `${pillar.color}1A`, color: pillar.color }}
            >
              {pillar.name}
            </span>
          </span>
        </div>
        <h3 className="font-display text-2xl font-medium text-[#101B2B] mb-3">
          {pillar.tagline}
        </h3>
        <p className="text-sm text-[#5F6773] leading-relaxed mb-4">{pillar.definition}</p>
        {pillar.philosophy && (
          <div
            className="mb-4 p-3 bg-[#F7F4EE] rounded border-l-2"
            style={{ borderLeftColor: pillar.color }}
          >
            <p className="font-display italic text-xs text-[#101B2B]">"{pillar.philosophy}"</p>
          </div>
        )}
      </div>
      <div className="pt-6 border-t border-[#F7F4EE] space-y-3">
        <div className="text-[11px] uppercase tracking-wider text-[#202832] font-semibold">
          Educational Areas
        </div>
        <ul className="text-xs text-[#5F6773] space-y-1.5 font-light">
          {pillar.topics.slice(0, 3).map((t) => (
            <li key={t}>• {t}</li>
          ))}
        </ul>
        {linkTo && (
          <span
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold mt-2 transition-colors"
            style={{ color: pillar.color }}
          >
            Explore {pillar.name}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </article>
  );

  return linkTo ? (
    <Link to={linkTo} className="block h-full" data-testid={`pillar-link-${pillar.id}`}>
      {inner}
    </Link>
  ) : (
    inner
  );
};
