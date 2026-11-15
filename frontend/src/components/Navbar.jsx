import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { track } from "@/utils/track";
import { DESTINATIONS } from "@/data/v2";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/start", label: "Start Here" },
  { to: "/framework", label: "3M Framework" },
  { to: "/academy", label: "The Academy" },
  { to: "/workshops", label: "Workshops" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About MMA" },
];

export const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-3 text-left">
    <svg className="w-8 h-8 text-[#C29949] flex-shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 22V10L16 18L24 10V22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mma-line-draw" pathLength="1" />
    </svg>
    <span className="flex flex-col">
      <span className="font-display text-sm tracking-tight font-semibold text-white">
        MOGUL MAKER ACADEMY
      </span>
      {!compact && (
        <span className="text-[10px] tracking-[0.16em] uppercase text-[#C29949]">
          MAKE • MANAGE • MULTIPLY
        </span>
      )}
    </span>
  </span>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goMogulPath = () => {
    track("cta_clicked", { cta: "find-your-mogul-path", location: "navbar" });
    navigate("/start");
  };

  return (
    <nav
      className="sticky top-0 z-40 bg-[#142635] border-b border-[#115754]/40 text-[#FBF6EB] px-6 lg:px-12 py-4"
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Link to="/" data-testid="nav-logo-link" aria-label="Mogul Maker Academy home">
          <Logo />
        </Link>

        <div className="hidden xl:flex items-center gap-6 text-xs tracking-wider uppercase text-[#FBF6EB]/80">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={({ isActive }) =>
                `transition-colors hover:text-[#C29949] whitespace-nowrap ${isActive ? "text-[#C29949]" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={DESTINATIONS.skoolMemberLogin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-member-login"
            className="hidden md:inline text-[11px] tracking-wider uppercase text-[#FBF6EB]/70 hover:text-[#C29949] transition-colors whitespace-nowrap"
          >
            Member Login
          </a>
          <button
            onClick={goMogulPath}
            data-testid="nav-cta-mogul-path"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-[#FBF6EB] bg-[#115754] hover:bg-[#17716c] transition-colors rounded-sm whitespace-nowrap"
          >
            Find Your Mogul Path
          </button>
          <button
            className="xl:hidden text-[#FBF6EB] p-1"
            onClick={() => setOpen(!open)}
            data-testid="nav-mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden mt-4 pb-2 border-t border-[#115754]/40 pt-4 flex flex-col gap-4 text-xs tracking-wider uppercase text-[#FBF6EB]/85">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={({ isActive }) =>
                `transition-colors hover:text-[#C29949] ${isActive ? "text-[#C29949]" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={DESTINATIONS.skoolMemberLogin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-mobile-member-login"
            className="text-[#FBF6EB]/70 hover:text-[#C29949] transition-colors"
          >
            Member Login
          </a>
          <button
            onClick={() => {
              setOpen(false);
              goMogulPath();
            }}
            data-testid="nav-mobile-cta-mogul-path"
            className="mt-2 inline-flex items-center justify-center px-4 py-3 text-xs font-bold tracking-wider uppercase text-[#FBF6EB] bg-[#115754] hover:bg-[#17716c] transition-colors rounded-sm"
          >
            Find Your Mogul Path
          </button>
        </div>
      )}
    </nav>
  );
};
