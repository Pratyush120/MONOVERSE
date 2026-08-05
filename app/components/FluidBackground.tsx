"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

export function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const interactiveRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const darkBlobs = containerRef.current?.querySelectorAll(".dark-fluid-blob");
    const lightBlobs = containerRef.current?.querySelectorAll(".light-fluid-blob");
    
    // 1. Organic drifting for both background sets
    const animateBlobs = (targets: NodeListOf<Element>) => {
      if (!targets || targets.length === 0) return;
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

    if (darkBlobs) animateBlobs(darkBlobs);
    if (lightBlobs) animateBlobs(lightBlobs);

    // 2. Ultra-fluid Mouse tracking for liquid smear effect
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Subtle Parallax effect on the whole background
      if (containerRef.current) {
        const xOffset = (mouseX / window.innerWidth - 0.5) * 60; // Increased parallax
        const yOffset = (mouseY / window.innerHeight - 0.5) * 60;
        
        anime({
          targets: containerRef.current,
          translateX: -xOffset,
          translateY: -yOffset,
          duration: 1000,
          easing: 'easeOutExpo'
        });
      }
    };
    
    window.addEventListener('mousemove', onMouseMove);

    // Speeds for the interactive trailing blobs to create a liquid effect
    const speeds = [0.15, 0.08, 0.04, 0.15, 0.08, 0.04];
    
    let animationFrameId: number;
    const animateInteractiveBlobs = () => {
      interactiveRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        let cx = parseFloat(ref.dataset.x || mouseX.toString());
        let cy = parseFloat(ref.dataset.y || mouseY.toString());
        
        cx += (mouseX - cx) * speeds[index];
        cy += (mouseY - cy) * speeds[index];
        
        ref.dataset.x = cx.toString();
        ref.dataset.y = cy.toString();
        
        ref.style.transform = `translate(${cx}px, ${cy}px)`;
      });
      
      animationFrameId = requestAnimationFrame(animateInteractiveBlobs);
    };
    
    animateInteractiveBlobs();

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
      
      <div ref={containerRef} className="absolute inset-0 will-change-transform">
        {/* ─── DARK MODE BLOBS (Punchy & Vibrant) ─── */}
        <div className="absolute inset-0 opacity-80 hidden dark:block">
          <div 
            className="dark-fluid-blob absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-[40%_60%_70%_30%] mix-blend-screen blur-[100px]" 
            style={{ background: 'radial-gradient(circle at center, #00FF87 0%, transparent 70%)' }}
          />
          <div 
            className="dark-fluid-blob absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[60%_40%_30%_70%] mix-blend-screen blur-[120px]" 
            style={{ background: 'radial-gradient(circle at center, #00F0FF 0%, transparent 70%)' }}
          />
          <div 
            className="dark-fluid-blob absolute top-[40%] left-[30%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-[50%_50%_60%_40%] mix-blend-screen blur-[140px]" 
            style={{ background: 'radial-gradient(circle at center, #1A75FF 0%, transparent 70%)' }}
          />
          <div 
            className="dark-fluid-blob absolute top-[-10%] right-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-[70%_30%_50%_50%] mix-blend-screen blur-[100px]" 
            style={{ background: 'radial-gradient(circle at center, #8A2BE2 0%, transparent 70%)' }}
          />
        </div>

        {/* ─── LIGHT MODE BLOBS (Soft, Toned Down Pastels) ─── */}
        <div className="absolute inset-0 opacity-70 block dark:hidden mix-blend-multiply">
          <div 
            className="light-fluid-blob absolute top-[5%] left-[5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[40%_60%_70%_30%] blur-[100px]" 
            style={{ background: 'radial-gradient(circle at center, #d6fb00 0%, transparent 70%)' }}
          />
          <div 
            className="light-fluid-blob absolute bottom-[10%] right-[10%] w-[65vw] h-[65vw] max-w-[900px] max-h-[900px] rounded-[60%_40%_30%_70%] blur-[120px]" 
            style={{ background: 'radial-gradient(circle at center, #96E6A1 0%, transparent 70%)' }}
          />
          <div 
            className="light-fluid-blob absolute top-[30%] left-[30%] w-[75vw] h-[75vw] max-w-[1000px] max-h-[1000px] rounded-[50%_50%_60%_40%] blur-[140px]" 
            style={{ background: 'radial-gradient(circle at center, #ecffb6 0%, transparent 70%)' }}
          />
        </div>
      </div>

      {/* ─── INTERACTIVE FLUID TRAIL (Dark Mode) ─── */}
      <div className="hidden dark:block">
        <div ref={el => { interactiveRefs.current[0] = el; }} className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full mix-blend-screen blur-[80px] opacity-[0.9] will-change-transform" style={{ background: 'radial-gradient(circle at center, #00FF87 0%, transparent 70%)' }} />
        <div ref={el => { interactiveRefs.current[1] = el; }} className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full mix-blend-screen blur-[120px] opacity-[0.6] will-change-transform" style={{ background: 'radial-gradient(circle at center, #00F0FF 0%, transparent 70%)' }} />
        <div ref={el => { interactiveRefs.current[2] = el; }} className="absolute top-[-400px] left-[-400px] w-[800px] h-[800px] rounded-full mix-blend-screen blur-[150px] opacity-[0.4] will-change-transform" style={{ background: 'radial-gradient(circle at center, #8A2BE2 0%, transparent 70%)' }} />
      </div>

      {/* ─── INTERACTIVE FLUID TRAIL (Light Mode - Softer) ─── */}
      <div className="block dark:hidden">
        <div ref={el => { interactiveRefs.current[3] = el; }} className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full mix-blend-multiply blur-[80px] opacity-[0.4] will-change-transform" style={{ background: 'radial-gradient(circle at center, #96E6A1 0%, transparent 70%)' }} />
        <div ref={el => { interactiveRefs.current[4] = el; }} className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full mix-blend-multiply blur-[120px] opacity-[0.3] will-change-transform" style={{ background: 'radial-gradient(circle at center, #72BF78 0%, transparent 70%)' }} />
        <div ref={el => { interactiveRefs.current[5] = el; }} className="absolute top-[-400px] left-[-400px] w-[800px] h-[800px] rounded-full mix-blend-multiply blur-[150px] opacity-[0.2] will-change-transform" style={{ background: 'radial-gradient(circle at center, #A0D683 0%, transparent 70%)' }} />
      </div>
      
      {/* ─── GEOMETRIC DOT GRID OVERLAY (Light Mode - Moving) ─── */}
      <div 
        className="absolute inset-0 opacity-[0.25] mix-blend-multiply block dark:hidden animate-grid-fall"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ─── GEOMETRIC DOT GRID OVERLAY (Dark Mode - Static) ─── */}
      <div 
        className="absolute inset-0 opacity-[0.1] mix-blend-screen hidden dark:block"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
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
