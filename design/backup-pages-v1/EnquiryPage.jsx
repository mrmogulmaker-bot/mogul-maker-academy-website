import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Share your stage",
    text: "Tell us where you are — validating an idea, seeking ownership, operating a business, or exploring acquisitions.",
  },
  {
    num: "02",
    title: "Receive pathway guidance",
    text: "The Academy reviews your enquiry and responds with institutional guidance and a syllabus recommendation matched to your stage.",
  },
  {
    num: "03",
    title: "Begin with the 2027 relaunch",
    text: "Catalog courses marked Coming Soon or In Development open with the approved 2027 relaunch. Enquiries are answered in the order received.",
  },
];

const EnquiryPage = () => (
  <main className="bg-[#F7F4EE]" data-testid="enquiry-page">
    <section className="bg-[#101B2B] text-[#F7F4EE] px-6 lg:px-12 py-20 lg:py-28 border-b border-[#202832] mma-grain">
      <div className="max-w-7xl mx-auto max-w-4xl">
        <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C6A66B] mb-3">
          Enquiries
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,60px)] font-medium text-white tracking-[-0.02em] leading-tight mb-6">
          Find Your Mogul Path
        </h1>
        <p className="text-sm md:text-base text-[#F7F4EE]/75 max-w-3xl font-light leading-relaxed">
          One short form. Tell the Academy where you are, and receive guidance on where to begin —
          matched to your stage, not a sales sequence.
        </p>
      </div>
    </section>

    <section className="px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <div className="space-y-8">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-5" data-testid={`enquiry-step-${s.num}`}>
                <span className="font-mono text-xs text-[#C6A66B] mt-1 w-8 flex-shrink-0">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-[#101B2B] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#5F6773] leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
            <div className="pt-6 border-t border-[#5F6773]/20">
              <p className="text-[11px] text-[#5F6773] leading-relaxed">
                Mogul Maker Academy provides entrepreneurial and financial education — online and
                through in-person workshops and events. We do not promise or imply guaranteed
                wealth, investment returns, or funding outcomes.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7">
          <div className="bg-[#101B2B] p-8 md:p-10 rounded-sm mma-grain">
            <EnquiryForm dark />
          </div>
        </Reveal>
      </div>
    </section>
  </main>
);

export default EnquiryPage;
