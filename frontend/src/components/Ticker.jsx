const ITEMS = [
  { text: "Money Follows Management", accent: true },
  { text: "MAKE: Create Economic Value" },
  { text: "MANAGE: Financial & Operating Discipline" },
  { text: "MULTIPLY: Expand Enterprise Value" },
  { text: "Practical Experience Over Business Theory", accent: true },
];

const Row = ({ hidden }) => (
  <div className="flex items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
    {ITEMS.map((item, i) => (
      <span key={i} className="flex items-center gap-10">
        <span className={item.accent ? "text-[#C6A66B] font-display italic" : ""}>
          {item.text}
        </span>
        <span>•</span>
      </span>
    ))}
  </div>
);

export const Ticker = () => (
  <section
    className="bg-[#202832] border-b border-[#101B2B] py-3.5 px-4 overflow-hidden"
    aria-label="Core doctrine marquee"
    data-testid="doctrine-ticker"
  >
    <div className="mma-mq-track text-xs uppercase tracking-[0.18em] font-medium text-[#F7F4EE]/90">
      <Row />
      <Row hidden />
    </div>
  </section>
);
