import { Reveal } from "@/components/Reveal";

const CONTENT = {
  privacy: {
    eyebrow: "Privacy Policy",
    title: "How Your Information Is Handled",
    sections: [
      {
        h: "What we collect",
        p: "When you submit a contact form or reserve an event seat, we collect the details you provide: your name, email address, the business stage you select, and any message you write. We collect nothing else and we do not run tracking scripts without your consent.",
      },
      {
        h: "How it is used",
        p: "Your information is used to respond to your enquiry, provide pathway guidance, and — where you have asked — notify you when programs, courses, or events open. It is never sold and never shared with third parties for their marketing.",
      },
      {
        h: "Analytics",
        p: "This website is built measurement-ready with privacy-aware analytics. Usage measurement is activated only with appropriate consent mechanisms and never infers purchases or registrations from a button click alone.",
      },
      {
        h: "Your choices",
        p: "You may request a copy, correction, or deletion of your information at any time through the contact page. Requests are handled by the Academy directly.",
      },
    ],
  },
  terms: {
    eyebrow: "Terms of Use",
    title: "The Terms This Website Operates Under",
    sections: [
      {
        h: "Educational purpose",
        p: "Mogul Maker Academy provides entrepreneurial and financial education and separately contracted implementation services. Content on this website is educational and informational; it is not financial, legal, tax, or investment advice.",
      },
      {
        h: "No guaranteed outcomes",
        p: "Nothing on this website advertises or implies guaranteed financing, sales, income, business valuations, acquisitions, or investment returns. Educational programs, memberships, workshops, and implementation services are distinct offerings with their own terms.",
      },
      {
        h: "Accuracy of offerings",
        p: "Courses, workshops, resources, and services marked Coming Soon, In Development, or Dates Pending are not currently available. Catalog listings do not constitute an offer of enrollment unless expressly stated on a verified enrollment destination.",
      },
      {
        h: "Intellectual property",
        p: "The 3M Framework (MAKE · MANAGE · MULTIPLY), proprietary methods, course titles, and original content on this website are the intellectual property of Mogul Maker Academy and its founder. They may not be reproduced without written permission.",
      },
    ],
  },
  accessibility: {
    eyebrow: "Accessibility",
    title: "Built to Be Used by Everyone",
    sections: [
      {
        h: "Our standard",
        p: "This website is designed toward WCAG 2.2 AA: accessible color contrast, keyboard-navigable menus and accordions, visible focus states, semantic HTML, and text alternatives for meaningful imagery.",
      },
      {
        h: "Motion",
        p: "Cinematic and animated experiences respect your system's reduced-motion preference. No visitor is required to watch a video or complete an interactive exercise to access ordinary educational information.",
      },
      {
        h: "Feedback",
        p: "If any part of this website is difficult to use with your assistive technology, contact the Academy through the contact page and describe the barrier. Accessibility issues are treated as defects and prioritized accordingly.",
      },
    ],
  },
};

const LegalPage = ({ page }) => {
  const c = CONTENT[page];
  return (
    <main className="bg-[#FBF6EB]" data-testid={`${page}-page`}>
      <section className="bg-[#142635] text-[#FBF6EB] px-6 lg:px-12 py-16 lg:py-20 border-b border-[#115754]/40 mma-grain">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C29949] mb-3">
            {c.eyebrow}
          </div>
          <h1 className="font-display text-[clamp(28px,4vw,48px)] font-bold text-white tracking-[-0.02em] leading-tight">
            {c.title}
          </h1>
        </div>
      </section>
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto space-y-10">
          {c.sections.map((s, i) => (
            <Reveal key={i} data-testid={`${page}-section-${i}`}>
              <h2 className="font-display text-lg font-semibold text-[#142635] mb-3">{s.h}</h2>
              <p className="text-sm text-[#142635]/70 leading-relaxed">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LegalPage;
