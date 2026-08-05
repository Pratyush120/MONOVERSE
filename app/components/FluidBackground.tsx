"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

export function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const blobs = containerRef.current?.querySelectorAll(".fluid-blob");
    if (!blobs) return;

    // Animate each blob independently for a chaotic, fluid, organic feel
    // We use Anime.js (the skill previously used) for premium buttery-smooth physics
    blobs.forEach((blob, i) => {
      anime({
        targets: blob,
        translateX: () => anime.random(-25, 25) + 'vw',
        translateY: () => anime.random(-25, 25) + 'vh',
        scale: () => anime.random(80, 140) / 100,
        rotate: () => anime.random(-90, 90),
        duration: () => anime.random(15000, 25000), // Very slow, cinematic movement
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
        // Delay starts so they don't all move in sync
        delay: () => anime.random(0, 2000)
      });
    });

    return () => {
      anime.remove(blobs);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden hidden dark:block bg-[#0A0713]">
      <div ref={containerRef} className="absolute inset-0 opacity-70">
        {/* Blob 1: Vibrant Sea Green - Top Left */}
        <div 
          className="fluid-blob absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-[40%_60%_70%_30%] mix-blend-screen blur-[120px]" 
          style={{ background: 'radial-gradient(circle at center, #16A085 0%, transparent 70%)' }}
        />
        
        {/* Blob 2: Deep Ocean Teal - Bottom Right */}
        <div 
          className="fluid-blob absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[60%_40%_30%_70%] mix-blend-screen blur-[140px]" 
          style={{ background: 'radial-gradient(circle at center, #156F69 0%, transparent 70%)' }}
        />
        
        {/* Blob 3: Dark Teal - Center Left */}
        <div 
          className="fluid-blob absolute top-[40%] left-[30%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-[50%_50%_60%_40%] mix-blend-screen blur-[160px]" 
          style={{ background: 'radial-gradient(circle at center, #153D4C 0%, transparent 70%)' }}
        />
        
        {/* Blob 4: Midnight Blue for depth - Top Right */}
        <div 
          className="fluid-blob absolute top-[-10%] right-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-[70%_30%_50%_50%] mix-blend-screen blur-[100px]" 
          style={{ background: 'radial-gradient(circle at center, #14253E 0%, transparent 70%)' }}
        />
      </div>
      
      {/* SVG Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-color-dodge"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />
    </div>
  );
}
