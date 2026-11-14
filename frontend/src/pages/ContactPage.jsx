import { useLocation } from "react-router-dom";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";

const ContactPage = () => {
  const location = useLocation();
  const fromMemberLogin = location.state?.subject === "member-login";

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
          <p className="text-sm md:text-base text-[#FBF6EB]/75 max-w-3xl font-light leading-relaxed">
            Questions about the Academy, workshops, implementation services, or partnerships —
            tell us where you are and what you're working toward.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="space-y-8">
              {fromMemberLogin && (
                <div className="p-5 bg-white border-l-2 border-[#115754] rounded-sm shadow-sm" data-testid="member-login-note">
                  <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#115754] mb-1">
                    Community / Member Login
                  </div>
                  <p className="text-xs text-[#142635]/65 leading-relaxed">
                    The member community currently runs on the Academy's verified community
                    platform. Send this form with "Community / Member Login" in your message and
                    we'll direct you to the right destination.
                  </p>
                </div>
              )}
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
