"use client";

// Footer — Stitch Design
// "Printed in Digital Vellum" — archival, permanent
// Observatory Navy background option for depth
// Libre Franklin labels, bronze accents

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FOOTER_LINKS = [
  { label: "Colophon", href: "/about" },
  { label: "Ethos",    href: "/about" },
  { label: "Privacy",  href: "/privacy" },
  { label: "Curated Indices", href: "/archive" },
];

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Scroll darken effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["var(--background)", "#111111"] // Fades to ink black at the absolute bottom
  );
  
  const textColor = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["var(--foreground)", "#F8F6F2"] // Fades text to paper white
  );

  const dividerOpacity = useTransform(scrollYProgress, [0.5, 1], [0.1, 0.4]);

  // Ambient dust/stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {x: number, y: number, radius: number, alpha: number, speed: number}[] = [];
    const numParticles = 60; 

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Init particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random() * 0.5,
        speed: (Math.random() - 0.5) * 0.05
      });
    }

    let animationFrameId: number;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(196, 154, 58, 1)"; // Bronze accent

      particles.forEach(p => {
        if (!prefersReducedMotion) {
          p.alpha += p.speed;
          if (p.alpha <= 0 || p.alpha >= 0.8) {
            p.speed = -p.speed;
          }
        }

        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.footer 
      ref={containerRef}
      className="relative border-t overflow-hidden transition-colors duration-0"
      style={{ backgroundColor, color: textColor, borderColor: "var(--outline-variant)" }}
    >
      {/* Ambient stars canvas */}
      <motion.canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 w-full h-full"
        style={{ opacity: scrollYProgress }} // Fade in stars as user scrolls down
      />

      <div className="relative z-10">
        {/* Main footer */}
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] items-start">
            
            {/* Brand */}
            <div>
              <div className="mb-[20px]">
                <Image
                  src="/images/monoverselogo.svg"
                  alt="Monoverse"
                  width={120}
                  height={32}
                  className="h-[28px] w-auto opacity-70"
                />
              </div>
              <p className="font-body text-[14px] leading-[1.7] opacity-60 max-w-[240px]">
                An independent research publication dedicated to understanding reality through
                philosophy, science, history, and civilization.
              </p>
            </div>
            
            {/* Navigation */}
            <div>
              <div className="font-label text-[10px] font-[700] uppercase tracking-[0.2em] text-bronze-accent mb-[20px]">
                Navigate
              </div>
              <nav className="flex flex-col gap-[12px]">
                {[
                  { label: "Archive",      href: "/archive" },
                  { label: "Philosophy",   href: "/category/philosophy" },
                  { label: "Science",      href: "/category/science" },
                  { label: "History",      href: "/category/history" },
                  { label: "Technology",   href: "/category/technology" },
                  { label: "The Marginalia", href: "/about" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-meta text-[12px] uppercase tracking-[0.1em] opacity-60 hover:opacity-100 hover:text-bronze-accent transition-colors duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Publication info */}
            <div>
              <div className="font-label text-[10px] font-[700] uppercase tracking-[0.2em] text-bronze-accent mb-[20px]">
                Publication
              </div>
              <div className="space-y-[12px]">
                <div>
                  <span className="font-meta text-[10px] uppercase tracking-[0.15em] opacity-40 block mb-[4px]">Founded</span>
                  <span className="font-body text-[14px] opacity-70">2026</span>
                </div>
                <div>
                  <span className="font-meta text-[10px] uppercase tracking-[0.15em] opacity-40 block mb-[4px]">Current Volume</span>
                  <span className="font-body text-[14px] opacity-70">Volume I — Autumn Equinox</span>
                </div>
                <div>
                  <span className="font-meta text-[10px] uppercase tracking-[0.15em] opacity-40 block mb-[4px]">Format</span>
                  <span className="font-body text-[14px] opacity-70">Digital &amp; Independent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon line — Stitch spec: "Printed in Digital Vellum" */}
        <motion.div 
          className="border-t"
          style={{ borderColor: "rgba(196, 154, 58, 0.2)" }}
        >
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] py-[24px] flex flex-col sm:flex-row items-center justify-between gap-[16px]">
            <div className="flex items-center gap-[24px]">
              {FOOTER_LINKS.map((link, i) => (
                <span key={`${link.href}-${i}`} className="flex items-center gap-[20px]">
                  <Link
                    href={link.href}
                    className="font-meta text-[10px] uppercase tracking-[0.12em] opacity-50 hover:opacity-100 hover:text-bronze-accent transition-colors duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  >
                    {link.label}
                  </Link>
                  {i < FOOTER_LINKS.length - 1 && (
                    <span className="text-[8px] opacity-20">◆</span>
                  )}
                </span>
              ))}
            </div>
            
            <div className="font-meta text-[10px] uppercase tracking-[0.12em] opacity-40 flex items-center gap-[12px]">
              <span>Printed in Digital Vellum</span>
              <span className="text-bronze-accent">·</span>
              <span>© {new Date().getFullYear()} Monoverse</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
