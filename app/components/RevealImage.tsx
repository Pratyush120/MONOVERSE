"use client";

import { useEffect, useRef } from "react";

interface RevealImageProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealImage({ children, className = "" }: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 800ms cubic-bezier(0.22, 0.61, 0.36, 1), transform 800ms cubic-bezier(0.22, 0.61, 0.36, 1)";
          el.style.opacity = "1";
          el.style.transform = "scale(1)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ opacity: 0, transform: "scale(1.06)" }}
    >
      {children}
    </div>
  );
}
