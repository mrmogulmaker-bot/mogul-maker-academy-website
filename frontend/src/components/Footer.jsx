import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import { V2_PILLARS, DESTINATIONS } from "@/data/v2";

export const Footer = () => (
  <footer
    className="bg-[#142635] text-[#9FB8C8] border-t border-[#115754]/40 py-14 px-6 lg:px-12 text-xs"
    data-testid="site-footer"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-4 space-y-3">
        <span className="font-display text-sm font-semibold text-white block">
          MOGUL MAKER ACADEMY
        </span>
        <p className="text-[11px] leading-relaxed text-[#FBF6EB]/60 max-w-xs">
          A business ownership education and implementation platform — helping entrepreneurs
          develop the knowledge, judgment, operational capabilities, and practical systems
          required to build and manage valuable businesses.
        </p>
        <span className="text-[10px] tracking-widest uppercase text-[#C29949] block">
          MAKE • MANAGE • MULTIPLY
        </span>
      </div>

      <div className="md:col-span-2">
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#C29949] font-semibold mb-4">
          Philosophy
        </div>
        <ul className="space-y-2.5">
          {Object.values(V2_PILLARS).map((p) => (
            <li key={p.id}>
              <Link
                to={`/framework?stage=${p.id}`}
                className="hover:text-[#FBF6EB] transition-colors"
                data-testid={`footer-pillar-${p.id}`}
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-3">
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#C29949] font-semibold mb-4">
          The Platform
        </div>
        <ul className="space-y-2.5">
          <li><Link to="/start" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-start-here">Start Here</Link></li>
          <li><Link to="/framework" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-framework">3M Framework</Link></li>
          <li><Link to="/academy" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-academy">The Academy</Link></li>
          <li><Link to="/workshops" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-workshops">Workshops & Events</Link></li>
          <li><Link to="/resources" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-resources">Free Resources</Link></li>
          <li><Link to="/about" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-about">About MMA</Link></li>
          <li><Link to="/implementation" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-implementation">Professional Implementation</Link></li>
          <li><Link to="/contact" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-contact">Contact</Link></li>
        </ul>
      </div>

      <div className="md:col-span-3">
        <div className="text-[10px] uppercase tracking-[0.18em] text-[#C29949] font-semibold mb-4">
          Community & Legal
        </div>
        <ul className="space-y-2.5">
          <li><a href={DESTINATIONS.skoolMemberLogin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-member-login">Member Login</a></li>
          <li><a href={DESTINATIONS.skoolCommunity} target="_blank" rel="noopener noreferrer" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-join-community">Join the Community</a></li>
          <li><Link to="/privacy" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-privacy">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-terms">Terms of Use</Link></li>
          <li><Link to="/accessibility" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-link-accessibility">Accessibility</Link></li>
        </ul>
        <div className="flex items-center gap-4 mt-5">
          <a
            href={DESTINATIONS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mr. Mogul Maker on Instagram"
            data-testid="footer-social-instagram"
            className="text-[#9FB8C8] hover:text-[#C29949] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={DESTINATIONS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mr. Mogul Maker on YouTube"
            data-testid="footer-social-youtube"
            className="text-[#9FB8C8] hover:text-[#C29949] transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#115754]/30">
      <p className="text-[10px] leading-relaxed text-[#FBF6EB]/45 max-w-4xl">
        Mogul Maker Academy provides entrepreneurial and financial education and separately
        contracted implementation services. We do not advertise or imply guaranteed financing,
        sales, income, business valuations, acquisitions, or investment returns. Educational
        programs, memberships, workshops, and implementation services are distinct offerings with
        their own terms.
      </p>
      <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px]">
        <span>Mogul Maker Academy</span>
        <a href="tel:+14705177009" className="hover:text-[#FBF6EB] transition-colors" data-testid="footer-phone-link">
          +1 (470) 517-7009 (SMS-capable)
        </a>
        <span>Business ownership education & implementation</span>
      </div>
    </div>
  </footer>
);
