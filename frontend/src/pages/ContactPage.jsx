import { ArrowUpRight } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { Seo } from "@/components/Seo";
import { ContactStrip } from "@/components/ContactBlock";
import { DESTINATIONS } from "@/data/v2";

const ContactPage = () => {
  return (
    <main className="bg-[#FBF6EB]" data-testid="contact-page">
      <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-20 lg:py-24 border-b border-[#115754]/40 mma-grain">
        <div className="max-w-7xl mx-auto max-w-4xl">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            Contact
          </div>
          <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-bold text-white tracking-[-0.02em] leading-tight mb-6">
            Start the Conversation
          </h1>
          <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed mb-6">
            Questions about the Academy, workshops, implementation services, or partnerships —
            tell us where you are and what you're working toward.
          </p>
          <ContactStrip dark />
        </div>
      </section>

      <Seo
        title="Contact Mogul Maker Academy"
        description="Questions about the Academy, workshops, implementation services, or partnerships. Call or text +1 (470) 517-7009, or send the enquiry form."
      />
      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="space-y-8">
              <div className="p-5 bg-white border-l-2 border-[#115754] rounded-sm shadow-sm" data-testid="community-note">
                <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#115754] mb-1">
                  The Community
                </div>
                <p className="text-xs text-[#142635]/65 leading-relaxed mb-3">
                  The Academy's member community runs on the verified Skool platform — education,
                  workshops, and member experiences live there.
                </p>
                <a
                  href={DESTINATIONS.skoolCommunity}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="community-join-link"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[#115754] border-b-2 border-[#C29949] pb-1 hover:text-[#142635] transition-colors"
                >
                  Join Us on Skool <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-[#142635] mb-2">
                  What happens next
                </h2>
                <p className="text-sm text-[#142635]/65 leading-relaxed">
                  The Academy reviews every message and responds with relevant guidance — matched
                  to your stage, not a sales sequence.
                </p>
              </div>
              <div className="pt-6 border-t border-[#142635]/10">
                <p className="text-[11px] text-[#142635]/50 leading-relaxed">
                  Mogul Maker Academy provides entrepreneurial and financial education and
                  separately contracted implementation services. We do not advertise or imply
                  guaranteed financing, sales, income, business valuations, acquisitions, or
                  investment returns.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <div className="bg-[#142635] p-8 md:p-10 rounded-sm mma-grain">
              <EnquiryForm dark />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
