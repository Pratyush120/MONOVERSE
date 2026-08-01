"use client";

import { useRef, useEffect } from "react";

interface HeroScrollEffectProps {
  children: React.ReactNode;
}

export function HeroScrollEffect({ children }: HeroScrollEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    logoRef.current = container.querySelector<HTMLDivElement>("[data-hero-logo]");
    headlineRef.current = container.querySelector<HTMLElement>("[data-hero-headline]");
    bgRef.current = document.querySelector<HTMLDivElement>("[data-hero-bg]");

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroHeight = container.offsetHeight;
        // Progress 0 (top) → 1 (hero scrolled away)
        const progress = Math.min(scrollY / (heroHeight * 0.6), 1);

        // Logo: scale 1 → 0.9
        if (logoRef.current) {
          const scale = 1 - progress * 0.1;
          logoRef.current.style.transform = `scale(${scale})`;
          logoRef.current.style.transformOrigin = "center top";
        }

        // Headline: translate 0 → -20px
        if (headlineRef.current) {
          const ty = progress * -20;
          headlineRef.current.style.transform = `translateY(${ty}px)`;
        }

        // Background: opacity 0.07 → 0.03 (the astronomical SVG layer)
        if (bgRef.current) {
          const opacity = 0.07 - progress * 0.04;
          bgRef.current.style.opacity = `${opacity}`;
        }

        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
