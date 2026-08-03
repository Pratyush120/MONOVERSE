"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

// Anime.js powered Hero Component using the user's uploaded SVG
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  
  const [svgContent, setSvgContent] = useState<string | null>(null);

  // Fetch the SVG so it can be inlined (allowing Anime.js to target internal classes)
  useEffect(() => {
    fetch('/images/hero.svg')
      .then(res => res.text())
      .then(text => {
        // Strip out the internal <style> tag so we can control it entirely with Anime.js
        const stripped = text.replace(/<style>[\s\S]*?<\/style>/, '');
        setSvgContent(stripped);
      });
  }, []);

  // Intro Timeline
  useEffect(() => {
    if (!svgContent || !svgContainerRef.current) return;

    const tree = svgContainerRef.current.querySelector('.tree');
    const monoverse = svgContainerRef.current.querySelector('.monoverse');
    
    if (!tree && !monoverse) return;

    // Reset initial states
    anime.set([tree, monoverse], { opacity: 0 });
    anime.set(glowRef.current, { opacity: 0, scale: 0.5 });

    // Build the awards-caliber timeline
    const tl = anime.timeline({
      easing: "easeOutExpo",
    });

    // 1. Reveal the tree with a slow scale up and fade in
    tl.add({
      targets: tree,
      opacity: [0, 1],
      translateY: [40, 0],
      scale: [0.95, 1],
      duration: 2500,
      easing: "easeOutCubic",
    })
    // 2. Bloom the radial glow behind it
    .add({
      targets: glowRef.current,
      opacity: [0, 0.6],
      scale: [0.5, 1],
      duration: 3000,
      easing: "easeOutCubic",
    }, "-=1500")
    // 3. Pop in the Monoverse typography with elastic spring
    .add({
      targets: monoverse,
      opacity: [0, 1],
      scale: [0.9, 1],
      translateY: [20, 0],
      duration: 2000,
      easing: "easeOutElastic(1, .5)", 
    }, "-=2000");

    // Cleanup
    return () => {
      anime.remove([tree, monoverse, glowRef.current]);
    };
  }, [svgContent]);

  // Kinetic Mouse Tracking (Anime.js)
  useEffect(() => {
    if (!containerRef.current || !glowRef.current || !svgContainerRef.current) return;

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
        targets: svgContainerRef.current,
        translateX: mouseX * 15,
        translateY: mouseY * 15,
        duration: 800,
        easing: "easeOutCirc",
      });

      anime({
        targets: glowRef.current,
        translateX: mouseX * -30, // moves inversely for parallax
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
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full will-change-transform"
          style={{ 
            background: "radial-gradient(circle, var(--bronze-accent) 0%, transparent 70%)", 
            filter: "blur(60px)",
            opacity: 0,
          }}
        />
      </div>

      {/* Uploaded Hero SVG (Inlined via fetch for Anime.js targeting) */}
      <div 
        ref={svgContainerRef}
        className="relative z-10 pointer-events-none w-full h-full flex justify-center items-center will-change-transform"
        style={{ transformOrigin: "center bottom" }}
      >
        {svgContent ? (
          <div 
            className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:object-cover"
            dangerouslySetInnerHTML={{ __html: svgContent }} 
          />
        ) : null}
      </div>

      {/* Down Indicator */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary">Explore</span>
        <div className="w-[1px] h-[40px] bg-gradient-to-b from-text-secondary to-transparent" />
      </div>
    </section>
  );
}
