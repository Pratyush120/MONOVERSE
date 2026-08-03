"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

// Anime.js powered Hero Component
// - Custom SVG path drawing (strokeDashoffset)
// - Elastic scaling and opacity blooms
// - Kinetic mouse tracking

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const svgPaths = useRef<SVGGElement>(null);

  // Intro Timeline
  useEffect(() => {
    if (!containerRef.current || !glowRef.current || !svgPaths.current) return;

    // Reset initial states for anime.js
    const paths = svgPaths.current.querySelectorAll("path, ellipse, line");
    anime.set(paths, { strokeDashoffset: anime.setDashoffset, opacity: 0 });
    anime.set(glowRef.current, { opacity: 0, scale: 0.5 });
    anime.set(svgRef.current, { scale: 0.8, rotate: -15 });

    // Build the awards-caliber timeline
    const tl = anime.timeline({
      easing: "easeOutExpo",
    });

    // Step 1: Draw the SVG paths dynamically
    tl.add({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [0, 1],
      duration: 2500,
      easing: "easeInOutSine",
      delay: anime.stagger(200, { start: 300 }),
    })
    // Step 2: Elastic scale and rotation
    .add({
      targets: svgRef.current,
      scale: [0.8, 1],
      rotate: [-15, 0],
      duration: 2500,
      easing: "spring(1, 80, 10, 0)", // custom spring easing
    }, "-=1500")
    // Step 3: Bloom the radial glow behind it
    .add({
      targets: glowRef.current,
      opacity: [0, 0.4],
      scale: [0.5, 1],
      duration: 3000,
      easing: "easeOutCubic",
    }, "-=2000");

    // Cleanup
    return () => {
      anime.remove([paths, glowRef.current, svgRef.current]);
    };
  }, []);

  // Kinetic Mouse Tracking (Anime.js)
  useEffect(() => {
    if (!containerRef.current || !glowRef.current || !svgRef.current) return;

    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      // Use anime to smoothly interpolate the transform
      anime({
        targets: svgRef.current,
        translateX: mouseX * 25,
        translateY: mouseY * 25,
        rotateX: mouseY * -10,
        rotateY: mouseX * 10,
        duration: 800,
        easing: "easeOutCirc",
      });

      anime({
        targets: glowRef.current,
        translateX: mouseX * -40, // moves inversely for parallax
        translateY: mouseY * -40,
        duration: 1000,
        easing: "easeOutQuad",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden min-h-[100vh] flex flex-col items-center justify-center bg-transparent perspective-[1000px]"
    >
      {/* Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft paper grain */}
        <div
          className="absolute inset-0 paper-grain opacity-[0.03]"
          style={{ mixBlendMode: "overlay" }}
        />
        
        {/* The Glow Bloom */}
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full will-change-transform"
          style={{ 
            background: "radial-gradient(circle, var(--bronze-accent) 0%, transparent 70%)", 
            filter: "blur(60px)",
            opacity: 0,
          }}
        />
      </div>

      {/* Hero Illustration (Bespoke Inline SVG) */}
      <div className="relative z-10 pointer-events-none w-full max-w-[600px] px-8 flex justify-center items-center">
        <svg 
          ref={svgRef}
          viewBox="0 0 400 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          <g ref={svgPaths} stroke="var(--bronze-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Outer Orbital Ring */}
            <ellipse cx="200" cy="200" rx="180" ry="180" strokeOpacity="0.4" strokeDasharray="4 8" />
            <ellipse cx="200" cy="200" rx="150" ry="60" transform="rotate(-30 200 200)" strokeOpacity="0.6" />
            <ellipse cx="200" cy="200" rx="150" ry="60" transform="rotate(30 200 200)" strokeOpacity="0.6" />
            
            {/* Axis Lines */}
            <line x1="200" y1="20" x2="200" y2="380" strokeOpacity="0.3" />
            <line x1="20" y1="200" x2="380" y2="200" strokeOpacity="0.3" />
            
            {/* Inner Core Diamond */}
            <path d="M200 120 L240 200 L200 280 L160 200 Z" strokeOpacity="0.9" fill="rgba(212, 175, 55, 0.05)" />
            
            {/* Core Star */}
            <path d="M200 160 L210 190 L240 200 L210 210 L200 240 L190 210 L160 200 L190 190 Z" strokeOpacity="1" fill="var(--bronze-accent)" />
          </g>
        </svg>
      </div>

      {/* Down Indicator */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary">Explore</span>
        <div className="w-[1px] h-[40px] bg-gradient-to-b from-text-secondary to-transparent" />
      </div>
    </section>
  );
}
