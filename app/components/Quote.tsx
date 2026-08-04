"use client";

import { useEffect, useRef } from "react";

interface QuoteProps {
  children: React.ReactNode;
}

export function Quote({ children }: QuoteProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.borderLeftWidth = "1px";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Fade in body text
          el.style.transition = "opacity 700ms cubic-bezier(0.22, 0.61, 0.36, 1)";
          el.style.opacity = "1";

          // Grow border height via a pseudo-element trick using a real child span
          const border = el.querySelector<HTMLSpanElement>("[data-quote-border]");
          if (border) {
            border.style.transition = "height 700ms cubic-bezier(0.22, 0.61, 0.36, 1)";
            border.style.height = "100%";
          }

          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative pl-8 py-2 my-16 max-w-[640px] mx-auto"
      style={{ opacity: 0 }}
    >
      {/* Animated border */}
      <span
        data-quote-border
        className="absolute left-0 top-0 w-[1px] bg-bronze/30"
        style={{ height: "0%", display: "block" }}
      />
      {children}
    </div>
  );
}
