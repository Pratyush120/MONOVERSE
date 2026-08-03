"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch('/images/hero.svg')
      .then(res => res.text())
      .then(text => {
        // Strip the hardcoded CSS so Anime.js can take full control
        const stripped = text.replace(/<style>[\s\S]*?<\/style>/, '');
        setSvgContent(stripped);
      });
  }, []);

  useEffect(() => {
    if (!svgContent || !svgContainerRef.current) return;

    // Target every single path in the tree and the text for a spectacular build-up
    const treePaths = svgContainerRef.current.querySelectorAll('.tree path, .tree rect');
    const textPaths = svgContainerRef.current.querySelectorAll('.monoverse path');
    
    if (!treePaths.length) return;

    // Reset initial states
    anime.set(treePaths, { opacity: 0, scale: 0.8, translateY: 30 });
    anime.set(textPaths, { opacity: 0, scale: 0.9, translateY: -20 });
    anime.set(glowRef.current, { opacity: 0, scale: 0.5 });

    const tl = anime.timeline({
      easing: "easeOutExpo",
    });

    // 1. Bloom the radial glow first to set the atmosphere
    tl.add({
      targets: glowRef.current,
      opacity: [0, 0.5],
      scale: [0.5, 1],
      duration: 3000,
      easing: "easeOutCubic",
    })
    // 2. Assemble the tree piece by piece! (Staggering hundreds of paths)
    .add({
      targets: treePaths,
      opacity: [0, 1],
      scale: [0.8, 1],
      translateY: [30, 0],
      duration: 800,
      // Stagger them from the center out, or just by index
      delay: anime.stagger(2, { start: 0 }),
      easing: "easeOutElastic(1, .6)",
    }, "-=2500")
    // 3. Assemble the Monoverse typography letter by letter (path by path)
    .add({
      targets: textPaths,
      opacity: [0, 1],
      scale: [0.9, 1],
      translateY: [-20, 0],
      duration: 1000,
      delay: anime.stagger(20, { direction: 'normal' }),
      easing: "easeOutElastic(1, .5)", 
    }, "-=1500");

    return () => {
      anime.remove([treePaths, textPaths, glowRef.current]);
    };
  }, [svgContent]);

  useEffect(() => {
    if (!containerRef.current || !glowRef.current || !svgContainerRef.current) return;

    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      anime({
        targets: svgContainerRef.current,
        translateX: mouseX * 15,
        translateY: mouseY * 15,
        rotateX: mouseY * -2,
        rotateY: mouseX * 2,
        duration: 800,
        easing: "easeOutCirc",
      });

      anime({
        targets: glowRef.current,
        translateX: mouseX * -30, 
        translateY: mouseY * -30,
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
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 paper-grain opacity-[0.03]"
          style={{ mixBlendMode: "overlay" }}
        />
        <div
          ref={glowRef}
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full will-change-transform"
          style={{ 
            background: "radial-gradient(circle, var(--bronze-accent) 0%, transparent 70%)", 
            filter: "blur(60px)",
            opacity: 0,
          }}
        />
      </div>

      <div 
        ref={svgContainerRef}
        className="relative z-10 pointer-events-none w-full h-full flex justify-center items-center will-change-transform"
        style={{ transformOrigin: "center bottom", transformStyle: "preserve-3d" }}
      >
        {svgContent ? (
          <div 
            className="w-full h-full max-w-[1600px] mx-auto [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain"
            dangerouslySetInnerHTML={{ __html: svgContent }} 
          />
        ) : null}
      </div>

      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary">Explore</span>
        <div className="w-[1px] h-[40px] bg-gradient-to-b from-text-secondary to-transparent" />
      </div>
    </section>
  );
}
