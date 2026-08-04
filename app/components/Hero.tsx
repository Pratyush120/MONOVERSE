"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import SvgHero from "./HeroSVG";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!svgContainerRef.current) return;

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
      opacity: [0, 0.4],
      scale: [0.8, 1],
      duration: 3000,
      easing: "easeOutCubic",
    })
    // 2. Assemble the tree piece by piece! (Extremely fast start, slow 1.5s tail)
    .add({
      targets: treePaths,
      opacity: [0, 1],
      scale: [0.95, 1],
      translateY: [20, 0],
      duration: 3000,
      delay: anime.stagger(1.5, { start: 0 }),
      easing: "easeOutCubic",
    }, "-=2500") // Start almost immediately with the glow
    // 3. Assemble the Monoverse typography (gradual 5-7 second reveal per manifesto)
    .add({
      targets: textPaths,
      opacity: [0, 1],
      scale: [0.98, 1],
      translateY: [-10, 0],
      duration: 5000,
      delay: anime.stagger(15, { direction: 'normal' }),
      easing: "easeOutCubic", 
    }, "-=2000");

    return () => {
      anime.remove([treePaths, textPaths, glowRef.current]);
    };
  }, []);

  // Ambient dust particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {x: number, y: number, radius: number, vx: number, vy: number, alpha: number}[] = [];
    const numParticles = 40; // Very sparse dust

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Init particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.15, // Tiny drifting dust
        vy: (Math.random() - 0.5) * 0.15 - 0.05, // Drifting upwards slightly
        alpha: Math.random() * 0.3 + 0.1
      });
    }

    let animationFrameId: number;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(196, 154, 58, 1)"; // Bronze accent

      particles.forEach(p => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        }

        ctx.globalAlpha = p.alpha;
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
      className="relative w-full h-[100svh] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Cinematic Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none z-30" 
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(var(--background), 0.8) 100%)",
        }}
      />

      {/* Ambient Dust Particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
      />

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
        className="relative z-10 pointer-events-none w-full h-full flex justify-center items-center"
        style={{ transformOrigin: "center bottom", transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:object-cover">
          <SvgHero />
        </div>
      </div>

      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary">Explore</span>
        <div className="w-[1px] h-[40px] bg-gradient-to-b from-text-secondary to-transparent" />
      </div>
    </section>
  );
}
