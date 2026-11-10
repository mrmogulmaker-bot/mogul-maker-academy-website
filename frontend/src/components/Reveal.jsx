import { useEffect, useRef } from "react";

// Adds .mma-visible when scrolled into view (works with .mma-scroll-in in index.css)
export const Reveal = ({ children, className = "", as: Tag = "div", ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mma-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`mma-scroll-in ${className}`} {...rest}>
      {children}
    </Tag>
  );
};
