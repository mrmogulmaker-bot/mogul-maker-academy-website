import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Accessible accordion for FAQs — keyboard navigable, aria-wired.
export const AccordionItem = ({ question, children, testId, dark = false }) => {
  const [open, setOpen] = useState(false);
  const panelId = `${testId}-panel`;
  const buttonId = `${testId}-button`;

  return (
    <div
      className={`border rounded-sm ${
        dark ? "border-[#115754]/40 bg-[#0E1D29]" : "border-[#142635]/15 bg-white"
      }`}
      data-testid={testId}
    >
      <h3>
        <button
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(!open)}
          data-testid={`${testId}-toggle`}
          className={`w-full flex items-center justify-between gap-4 text-left px-6 py-5 transition-colors ${
            dark ? "text-[#FBF6EB] hover:text-[#C29949]" : "text-[#142635] hover:text-[#115754]"
          }`}
        >
          <span className="font-display text-base font-medium">{question}</span>
          <ChevronDown
            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            } ${dark ? "text-[#C29949]" : "text-[#115754]"}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="px-6 pb-6"
      >
        <div className={`text-sm leading-relaxed ${dark ? "text-[#FBF6EB]/70" : "text-[#142635]/70"}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
