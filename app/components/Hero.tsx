"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  
  // Scroll interactions
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const illustrationY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  // Mouse interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 10; // -5 to 5 range
    const y = (clientY / window.innerHeight - 0.5) * 10;
    mouseX.set(x);
    mouseY.set(y);
  };

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // SVG and glow shift (3-5px max)
  const shiftX = useTransform(smoothMouseX, [-5, 5], [-4, 4]);
  const shiftY = useTransform(smoothMouseY, [-5, 5], [-4, 4]);

  // Page Load Sequence
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden min-h-[100vh] flex flex-col items-center justify-center bg-[#111111]"
    >
      {/* Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft paper grain */}
        <div
          className="absolute inset-0 paper-grain opacity-[0.03]"
          style={{ mixBlendMode: "overlay" }}
        />
        
        {/* Subtle radial light */}
        <motion.div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] rounded-full"
          style={{ 
            background: "radial-gradient(ellipse, rgba(235,229,220,0.04) 0%, transparent 60%)", 
            filter: "blur(50px)",
            opacity: glowOpacity,
            x: shiftX,
            y: shiftY
          }}
        />
      </div>

      {/* Hero Illustration */}
      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: illustrationY, x: shiftX }}
      >
        <Image
          src="/images/hero.svg"
          alt="Monoverse Hero Illustration"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </motion.div>

      {/* Content wrapper - kept empty or can be removed if not needed */}
      <motion.div 
        className="relative z-10 w-full h-full pointer-events-none"
        variants={container}
        initial="hidden"
        animate="show"
      />
    </section>
  );
}
