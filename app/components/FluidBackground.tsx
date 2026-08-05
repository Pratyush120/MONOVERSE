"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

export function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
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
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    
    // Smoothed physics values
    let currentTiltX = 0;
    let currentTiltY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    
    window.addEventListener('mousemove', onMouseMove);

    // Speeds for the interactive trailing blobs to create a liquid effect
    const speeds = [0.15, 0.08, 0.04, 0.15, 0.08, 0.04];
    
    let animationFrameId: number;
    const physicsLoop = () => {
      // Disable physics engine entirely on mobile screens (saves massive CPU/battery)
      if (window.innerWidth < 768) {
        animationFrameId = requestAnimationFrame(physicsLoop);
        return;
      }

      // A. Smooth Parallax for entire background container
      if (containerRef.current) {
        const targetParallaxX = (targetX / window.innerWidth - 0.5) * -60;
        const targetParallaxY = (targetY / window.innerHeight - 0.5) * -60;
        
        currentParallaxX += (targetParallaxX - currentParallaxX) * 0.05;
        currentParallaxY += (targetParallaxY - currentParallaxY) * 0.05;
        
        // Translate3d forces hardware acceleration
        containerRef.current.style.transform = `translate3d(${currentParallaxX}px, ${currentParallaxY}px, 0)`;
      }

      // B. Smooth 3D Tilt for the texture grid
      if (gridRef.current) {
        const targetTiltX = (targetY / window.innerHeight - 0.5) * -25;
        const targetTiltY = (targetX / window.innerWidth - 0.5) * 25;
        
        currentTiltX += (targetTiltX - currentTiltX) * 0.08;
        currentTiltY += (targetTiltY - currentTiltY) * 0.08;
        
        gridRef.current.style.transform = `rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg) translateZ(0)`;
      }

      // C. Liquid Smear for trailing blobs
      interactiveRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        let cx = parseFloat(ref.dataset.x || targetX.toString());
        let cy = parseFloat(ref.dataset.y || targetY.toString());
        
        cx += (targetX - cx) * speeds[index];
        cy += (targetY - cy) * speeds[index];
        
        ref.dataset.x = cx.toString();
        ref.dataset.y = cy.toString();
        
        // Translate3d forces hardware acceleration
        ref.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      });

      animationFrameId = requestAnimationFrame(physicsLoop);
    };
    
    physicsLoop();

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
            className="dark-fluid-blob absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-[40%_60%_70%_30%] mix-blend-screen blur-[60px] md:blur-[100px]" 
            style={{ background: 'radial-gradient(circle at center, #00FF87 0%, transparent 70%)' }}
          />
          <div 
            className="dark-fluid-blob absolute bottom-[10%] right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[60%_40%_30%_70%] mix-blend-screen blur-[80px] md:blur-[120px]" 
            style={{ background: 'radial-gradient(circle at center, #00F0FF 0%, transparent 70%)' }}
          />
          {/* Hide excessive blobs on mobile */}
          <div 
            className="dark-fluid-blob hidden md:block absolute top-[40%] left-[30%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-[50%_50%_60%_40%] mix-blend-screen blur-[140px]" 
            style={{ background: 'radial-gradient(circle at center, #1A75FF 0%, transparent 70%)' }}
          />
          <div 
            className="dark-fluid-blob hidden md:block absolute top-[-10%] right-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-[70%_30%_50%_50%] mix-blend-screen blur-[100px]" 
            style={{ background: 'radial-gradient(circle at center, #8A2BE2 0%, transparent 70%)' }}
          />
        </div>

        {/* ─── LIGHT MODE BLOBS (Punchier, but not blindingly neon) ─── */}
        <div className="absolute inset-0 opacity-80 block dark:hidden mix-blend-multiply">
          <div 
            className="light-fluid-blob absolute top-[5%] left-[5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-[40%_60%_70%_30%] blur-[60px] md:blur-[100px]" 
            style={{ background: 'radial-gradient(circle at center, #00E676 0%, transparent 70%)' }}
          />
          <div 
            className="light-fluid-blob absolute bottom-[10%] right-[10%] w-[65vw] h-[65vw] max-w-[900px] max-h-[900px] rounded-[60%_40%_30%_70%] blur-[80px] md:blur-[120px]" 
            style={{ background: 'radial-gradient(circle at center, #FFF05A 0%, transparent 70%)' }}
          />
          {/* Hide excessive blobs on mobile */}
          <div 
            className="light-fluid-blob hidden md:block absolute top-[30%] left-[30%] w-[75vw] h-[75vw] max-w-[1000px] max-h-[1000px] rounded-[50%_50%_60%_40%] blur-[140px]" 
            style={{ background: 'radial-gradient(circle at center, #FF1493 0%, transparent 70%)' }}
          />
          <div 
            className="light-fluid-blob hidden md:block absolute top-[60%] right-[30%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-[70%_30%_50%_50%] blur-[120px]" 
            style={{ background: 'radial-gradient(circle at center, #2ED69E 0%, transparent 70%)' }}
          />
        </div>
      </div>

      {/* ─── INTERACTIVE FLUID TRAIL (Dark Mode) ─── */}
      <div className="hidden md:dark:block">
        <div ref={el => { interactiveRefs.current[0] = el; }} className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full mix-blend-screen blur-[80px] opacity-[0.9] will-change-transform" style={{ background: 'radial-gradient(circle at center, #00FF87 0%, transparent 70%)' }} />
        <div ref={el => { interactiveRefs.current[1] = el; }} className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full mix-blend-screen blur-[120px] opacity-[0.6] will-change-transform" style={{ background: 'radial-gradient(circle at center, #00F0FF 0%, transparent 70%)' }} />
        <div ref={el => { interactiveRefs.current[2] = el; }} className="absolute top-[-400px] left-[-400px] w-[800px] h-[800px] rounded-full mix-blend-screen blur-[150px] opacity-[0.4] will-change-transform" style={{ background: 'radial-gradient(circle at center, #8A2BE2 0%, transparent 70%)' }} />
      </div>

      {/* ─── INTERACTIVE TRAILING BLOBS (Light Mode) ─── */}
      <div className="hidden md:block dark:hidden">
        <div ref={el => { interactiveRefs.current[3] = el; }} className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full mix-blend-multiply blur-[80px] opacity-[0.7] will-change-transform pointer-events-none" style={{ background: 'radial-gradient(circle at center, #FFF05A 0%, transparent 70%)' }} />
        <div ref={el => { interactiveRefs.current[4] = el; }} className="absolute top-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full mix-blend-multiply blur-[120px] opacity-[0.5] will-change-transform pointer-events-none" style={{ background: 'radial-gradient(circle at center, #FF1493 0%, transparent 70%)' }} />
        <div ref={el => { interactiveRefs.current[5] = el; }} className="absolute top-[-400px] left-[-400px] w-[800px] h-[800px] rounded-full mix-blend-multiply blur-[150px] opacity-[0.4] will-change-transform pointer-events-none" style={{ background: 'radial-gradient(circle at center, #00E676 0%, transparent 70%)' }} />
      </div>
      
      {/* ─── INDIAN TEXTURE MANDALA OVERLAY (Light Mode - Fluid Moving & 3D Interactive) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden block dark:hidden" style={{ perspective: '1200px' }}>
        <div 
          ref={gridRef}
          className="absolute inset-[-20%] w-[140%] h-[140%] mix-blend-multiply animate-texture-fall opacity-[0.7]"
          style={{
            // A premium, intricate Indian Star Mandala pattern SVG with very subtle transparency (rgba(0,0,0,0.035))
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg stroke='rgba(0,0,0,0.035)' stroke-width='1.5' fill='none'%3E%3Cpath d='M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z'/%3E%3Cpath d='M50 20 L58 42 L80 50 L58 58 L50 80 L42 58 L20 50 L42 42 Z'/%3E%3Ccircle cx='50' cy='50' r='12'/%3E%3Cpath d='M0 0 L15 15 M100 0 L85 15 M0 100 L15 85 M100 100 L85 85'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* ─── GEOMETRIC DOT GRID OVERLAY (Dark Mode - Static) ─── */}
      <div 
        className="absolute inset-0 opacity-[0.1] mix-blend-screen hidden dark:block"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      
      {/* SVG Grain Overlay - Disabled on mobile to prevent extreme battery drain/lag */}
      <div className="hidden md:block absolute inset-0 opacity-[0.12] mix-blend-color-dodge dark:opacity-[0.15]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />
    </div>
  );
}
