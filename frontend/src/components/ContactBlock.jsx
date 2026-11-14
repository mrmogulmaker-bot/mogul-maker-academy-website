import { Phone } from "lucide-react";

export const CONTACT = {
  phoneDisplay: "+1 (470) 517-7009",
  phoneHref: "tel:+14705177009",
  smsHref: "sms:+14705177009",
};

export const ContactStrip = ({ dark = true }) => (
  <a
    href={CONTACT.phoneHref}
    data-testid="contact-phone-link"
    className={`inline-flex items-center gap-2.5 text-sm font-semibold transition-colors ${
      dark ? "text-[#FBF6EB]/85 hover:text-[#C29949]" : "text-[#142635] hover:text-[#115754]"
    }`}
  >
    <Phone className="w-4 h-4" aria-hidden="true" />
    {CONTACT.phoneDisplay}
    <span className={`text-[10px] uppercase tracking-wider font-mono ${dark ? "text-[#FBF6EB]/45" : "text-[#142635]/45"}`}>
      (SMS-capable)
    </span>
  </a>
);
