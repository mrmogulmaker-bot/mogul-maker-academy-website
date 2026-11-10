import { FOUNDER } from "@/data/content";

// Renders the approved founder portrait when FOUNDER.photoUrl is supplied;
// otherwise an honest placeholder. Never fabricates a likeness.
export const FounderPhoto = ({ testId = "founder-photo" }) => {
  if (FOUNDER.photoUrl) {
    return (
      <div
        className="relative aspect-[4/5] bg-[#101B2B] rounded-sm overflow-hidden"
        data-testid={testId}
      >
        <img
          src={FOUNDER.photoUrl}
          alt={`${FOUNDER.name}, founder of Mogul Maker Academy`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101B2B]/90 to-transparent p-6">
          <div className="h-[1px] w-12 bg-[#C6A66B] mb-3" />
          <p className="text-xs text-[#F7F4EE] font-medium tracking-wide">
            {FOUNDER.name} — {FOUNDER.knownAs}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative aspect-[4/5] bg-[#101B2B] rounded-sm overflow-hidden p-8 flex flex-col justify-between"
      data-testid={testId}
    >
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#C6A66B]">
        <span>Founder Portrait</span>
        <span>Forthcoming</span>
      </div>
      <div className="space-y-3">
        <div className="h-[1px] w-12 bg-[#C6A66B]" />
        <p className="text-xs text-[#F7F4EE]/80 font-light leading-snug max-w-[240px]">
          {FOUNDER.photoNote}
        </p>
      </div>
    </div>
  );
};
