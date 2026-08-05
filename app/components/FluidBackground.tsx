"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

export function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const interactiveBlobRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const darkBlobs = containerRef.current?.querySelectorAll(".dark-fluid-blob");
    const lightBlobs = containerRef.current?.querySelectorAll(".light-fluid-blob");
    
    // 1. Organic drifting for both background sets
    const animateBlobs = (targets: NodeListOf<Element>) => {
      if (!targets) return;
      targets.forEach((blob) => {
        anime({
          targets: blob,
          translateX: () => anime.random(-25, 25) + 'vw',
          translateY: () => anime.random(-25, 25) + 'vh',
          scale: () => anime.random(80, 140) / 100,
          rotate: () => anime.random(-90, 90),
          duration: () => anime.random(15000, 25000),
          easing: 'easeInOutSine',
          direction: 'alternate',
          loop: true,
          delay: () => anime.random(0, 2000)
        });
      });
    };

    animateBlobs(darkBlobs as NodeListOf<Element>);
    animateBlobs(lightBlobs as NodeListOf<Element>);

    // 2. Mouse tracking for parallax and interactive blob
    // We keep the interactive blob ONLY for dark mode (it will be hidden in light mode via CSS)
    // The parallax effect stays for both modes, as the user wanted "something different"
    // meaning the fluid ambient animation and parallax is enough for light mode without the cursor blob.
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Subtle Parallax effect on the whole background
      if (containerRef.current) {
        const xOffset = (mouseX / window.innerWidth - 0.5) * 40; // Shift by up to 40px
        const yOffset = (mouseY / window.innerHeight - 0.5) * 40;
        
        anime({
          targets: containerRef.current,
          translateX: -xOffset,
          translateY: -yOffset,
          duration: 1500,
          easing: 'easeOutExpo'
        });
      }
    };
    
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop for the interactive cursor blob
    let animationFrameId: number;
    const animateInteractiveBlob = () => {
      // Smooth lerp for the cursor blob for fluid 'lag'
      currentX += (mouseX - currentX) * 0.04;
      currentY += (mouseY - currentY) * 0.04;
      
      if (interactiveBlobRef.current) {
        interactiveBlobRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }

      // Also animate the light mode interactive cursor
      const lightCursor = document.querySelector('.interactive-cursor-light') as HTMLElement;
      if (lightCursor) {
        lightCursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animateInteractiveBlob);
    };
    
    animateInteractiveBlob();

    return () => {
      if (darkBlobs) anime.remove(darkBlobs);
      if (lightBlobs) anime.remove(lightBlobs);
      if (containerRef.current) anime.remove(containerRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-2] overflow-hidden bg-background">
      
      {/* ─── DARK MODE BLOBS ─── */}
      <div ref={containerRef} className="absolute inset-0 opacity-70 will-change-transform hidden dark:block">
        <div 
          className="dark-fluid-blob absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-[40%_60%_70%_30%] mix-blend-screen blur-[120px]" 
          style={{ background: 'radial-gradient(circle at center, #16A085 0%, transparent 70%)' }}
        />
        <div 
          className="dark-fluid-blob absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[60%_40%_30%_70%] mix-blend-screen blur-[140px]" 
          style={{ background: 'radial-gradient(circle at center, #156F69 0%, transparent 70%)' }}
        />
        <div 
          className="dark-fluid-blob absolute top-[40%] left-[30%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-[50%_50%_60%_40%] mix-blend-screen blur-[160px]" 
          style={{ background: 'radial-gradient(circle at center, #153D4C 0%, transparent 70%)' }}
        />
        <div 
          className="dark-fluid-blob absolute top-[-10%] right-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-[70%_30%_50%_50%] mix-blend-screen blur-[100px]" 
          style={{ background: 'radial-gradient(circle at center, #14253E 0%, transparent 70%)' }}
        />
      </div>

      {/* ─── LIGHT MODE BLOBS ─── */}
      <div className="absolute inset-0 opacity-80 will-change-transform block dark:hidden">
        {/* Soft Mint / Seafoam */}
        <div 
          className="light-fluid-blob absolute top-[5%] left-[5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[40%_60%_70%_30%] blur-[120px]" 
          style={{ background: 'radial-gradient(circle at center, #8EE4AF 0%, transparent 70%)' }}
        />
        {/* Vibrant Spring Green */}
        <div 
          className="light-fluid-blob absolute bottom-[10%] right-[10%] w-[65vw] h-[65vw] max-w-[900px] max-h-[900px] rounded-[60%_40%_30%_70%] blur-[130px]" 
          style={{ background: 'radial-gradient(circle at center, #A8E6CF 0%, transparent 70%)' }}
        />
        {/* Soft Creamy Yellow / Sunlight */}
        <div 
          className="light-fluid-blob absolute top-[30%] left-[30%] w-[75vw] h-[75vw] max-w-[1000px] max-h-[1000px] rounded-[50%_50%_60%_40%] blur-[150px]" 
          style={{ background: 'radial-gradient(circle at center, #FDFFCC 0%, transparent 70%)' }}
        />
      </div>

      {/* Interactive Cursor Blob (Dark Mode) */}
      <div 
        ref={interactiveBlobRef}
        className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full mix-blend-screen blur-[120px] opacity-[0.8] will-change-transform hidden dark:block"
        style={{ background: 'radial-gradient(circle at center, #16A085 0%, #156F69 30%, transparent 70%)' }}
      />

      {/* Interactive Cursor Blob (Light Mode) */}
      <div 
        ref={(el) => {
          // We can just use the same ref by assigning it here, but React doesn't like that easily.
          // Since we animate interactiveBlobRef.current.style, we need to apply it to BOTH if they exist, or just use a class.
        }}
        className="interactive-cursor-light absolute top-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full blur-[100px] opacity-[0.5] will-change-transform block dark:hidden pointer-events-none mix-blend-multiply"
        style={{ background: 'radial-gradient(circle at center, #72BF78 0%, #96E6A1 40%, transparent 70%)' }}
      />
      
      {/* SVG Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.12] mix-blend-color-dodge dark:opacity-[0.15]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />
    </div>
  );
}
