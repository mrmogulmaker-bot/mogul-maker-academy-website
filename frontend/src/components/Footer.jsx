import { Link } from "react-router-dom";
import { PILLARS } from "@/data/content";

export const Footer = () => (
  <footer
    className="bg-[#101B2B] text-[#5F6773] border-t border-[#202832] py-14 px-6 lg:px-12 text-xs"
    data-testid="site-footer"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-4 space-y-3">
        <span className="font-display text-sm font-semibold text-white block">
          MOGUL MAKER ACADEMY
        </span>
        <p className="text-[11px] leading-relaxed text-[#F7F4EE]/60 max-w-xs">
          Practical education, strategic guidance, and a community built for entrepreneurs and
          owners at every stage.
        </p>
        <span className="text-[10px] tracking-widest uppercase text-[#C6A66B] block">
          Structured Education & Real-World Application
        </span>
      </div>

      <div className="md:col-span-2">
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#C6A66B] font-semibold mb-4">
          3M Framework
        </div>
        <ul className="space-y-2.5">
          {Object.values(PILLARS).map((p) => (
            <li key={p.id}>
              <Link
                to={`/framework/${p.id}`}
                className="hover:text-[#F7F4EE] transition-colors"
                data-testid={`footer-pillar-${p.id}`}
              >
                {p.name} MONEY
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-3">
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#C6A66B] font-semibold mb-4">
          The Academy
        </div>
        <ul className="space-y-2.5">
          <li><Link to="/courses" className="hover:text-[#F7F4EE] transition-colors" data-testid="footer-link-courses">Courses & Learning Pathways</Link></li>
          <li><Link to="/methods" className="hover:text-[#F7F4EE] transition-colors" data-testid="footer-link-methods">Proprietary Methods</Link></li>
          <li><Link to="/events" className="hover:text-[#F7F4EE] transition-colors" data-testid="footer-link-events">Events & Media</Link></li>
          <li><Link to="/about" className="hover:text-[#F7F4EE] transition-colors" data-testid="footer-link-about">Founder & Mission</Link></li>
          <li><Link to="/enquiry" className="hover:text-[#F7F4EE] transition-colors" data-testid="footer-link-enquiry">Enquiries</Link></li>
        </ul>
      </div>

      <div className="md:col-span-3">
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#C6A66B] font-semibold mb-4">
          Educational Standard
        </div>
        <p className="text-[11px] leading-relaxed text-[#F7F4EE]/60">
          Mogul Maker Academy provides entrepreneurial and financial education. We do not promise
          or imply guaranteed wealth, investment returns, or funding outcomes. Courses marked
          "Coming Soon" or "In Development" are part of the approved 2027 catalog and are not yet
          published.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#202832] flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-[11px]">Mogul Maker Academy — The Modern Ownership Institution</span>
      <span className="text-[11px]">Online education & executive workshops</span>
    </div>
  </footer>
);
