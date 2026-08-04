"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function WriteHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 30, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, stagger: 0.2, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-[160px] pb-[80px] md:pt-[240px] md:pb-[120px] relative z-10 flex flex-col items-center text-center px-[24px]">
      <span className="hero-text taxonomy-tag mb-[24px]">Write for Monoverse</span>
      <h1 className="hero-text font-display text-[48px] md:text-[80px] leading-[1.05] tracking-[-0.02em] text-foreground mb-[32px] max-w-[900px]">
        Contribute ideas that outlive today's headlines.
      </h1>
      <p className="hero-text font-body text-[20px] md:text-[24px] leading-[1.6] text-text-secondary max-w-[700px] mb-[48px]">
        Monoverse publishes carefully reviewed work exploring knowledge, culture, and cinema through thoughtful writing. 
        We are looking for clarity, depth, and original thinking.
      </p>
      
      <div className="hero-text flex flex-col sm:flex-row gap-[16px] items-center">
        <Link href="#guidelines" className="btn-primary text-[14px] py-[16px] px-[40px]">
          Read Submission Guidelines
        </Link>
        <Link href="/write/studio" className="font-label text-[12px] font-[700] uppercase tracking-[0.2em] text-bronze-accent hover:text-foreground transition-colors px-[24px] py-[16px]">
          Submit Your Work
        </Link>
      </div>
    </section>
  );
}
