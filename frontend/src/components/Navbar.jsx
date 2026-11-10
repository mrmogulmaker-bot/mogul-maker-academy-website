import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/framework", label: "3M Framework" },
  { to: "/courses", label: "Courses & Pathways" },
  { to: "/methods", label: "Methods" },
  { to: "/events", label: "Events & Media" },
  { to: "/about", label: "The Academy" },
];

export const Logo = ({ compact = false }) => (
  <span className="flex items-center gap-3 text-left">
    <svg
      className="w-8 h-8 text-[#C6A66B] flex-shrink-0"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 22V10L16 18L24 10V22"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mma-line-draw"
        pathLength="1"
      />
    </svg>
    <span className="flex flex-col">
      <span className="font-display text-sm tracking-tight font-semibold text-white">
        MOGUL MAKER ACADEMY
      </span>
      {!compact && (
        <span className="text-[10px] tracking-[0.16em] uppercase text-[#C6A66B]">
          The Modern Ownership Institution
        </span>
      )}
    </span>
  </span>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className="sticky top-0 z-40 bg-[#101B2B] border-b border-[#202832] text-[#F7F4EE] px-6 lg:px-12 py-4"
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" data-testid="nav-logo-link" aria-label="Mogul Maker Academy home">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase text-[#F7F4EE]/80">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={({ isActive }) =>
                `transition-colors hover:text-[#C6A66B] ${isActive ? "text-[#C6A66B]" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/enquiry")}
            data-testid="nav-cta-find-path"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#101B2B] bg-[#C6A66B] hover:bg-[#d4b77f] transition-colors rounded-sm"
          >
            Find Your Mogul Path
          </button>
          <button
            className="lg:hidden text-[#F7F4EE] p-1"
            onClick={() => setOpen(!open)}
            data-testid="nav-mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-4 pb-2 border-t border-[#202832] pt-4 flex flex-col gap-4 text-xs tracking-wider uppercase text-[#F7F4EE]/85">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={({ isActive }) =>
                `transition-colors hover:text-[#C6A66B] ${isActive ? "text-[#C6A66B]" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              navigate("/enquiry");
            }}
            data-testid="nav-mobile-cta-find-path"
            className="mt-2 inline-flex items-center justify-center px-4 py-3 text-xs font-semibold tracking-wider uppercase text-[#101B2B] bg-[#C6A66B] hover:bg-[#d4b77f] transition-colors rounded-sm"
          >
            Find Your Mogul Path
          </button>
        </div>
      )}
    </nav>
  );
};
