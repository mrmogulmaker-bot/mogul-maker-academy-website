import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// items: [{ label, to? }] — last item is the current page (no link)
export const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className="mb-8" data-testid="breadcrumbs">
    <ol className="flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#FBF6EB]/50">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3 h-3 text-[#FBF6EB]/30" aria-hidden="true" />}
            {isLast || !item.to ? (
              <span className="text-[#C29949]" aria-current="page">{item.label}</span>
            ) : (
              <Link to={item.to} className="hover:text-[#C29949] transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);
