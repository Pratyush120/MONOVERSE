"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Extremely subtle parallax motion for "Museum quality" feel (no bouncing/scaling)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Pure fade animation sequence (No slides)
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-start pt-[120px] md:pt-[140px] lg:pt-[160px] pb-[160px]"
    >
      {/* Background System */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        {/* User's specified background.svg without transparency to let colors pop */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/background.svg"
            alt="Monoverse Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div
          className="absolute inset-0 paper-grain opacity-[0.06]"
          style={{ mixBlendMode: "overlay" }}
        />
        
        {/* Slow glowing breathing effect on the radial light */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[500px] rounded-full pointer-events-none"
          style={{ 
            background: "radial-gradient(ellipse, rgba(237,232,223,0.06) 0%, transparent 70%)", 
            filter: "blur(60px)" 
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 w-full max-w-[1440px] px-[24px] md:px-[48px] lg:px-[64px] flex flex-col items-center text-center"
        style={{ y: textY, opacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        
        {/* Logo */}
        <motion.div variants={item} className="mb-[40px] md:mb-[48px] lg:mb-[56px]">
          <Image
            src="/images/monoverselogo.svg"
            alt="Monoverse"
            width={290}
            height={80}
            className="w-[170px] md:w-[220px] lg:w-[290px] h-auto brightness-0 invert"
            priority
          />
        </motion.div>

        {/* Display headline */}
        <motion.h1
          variants={item}
          className="font-display font-normal text-[#EDE8DF]"
          style={{
            fontSize: "clamp(48px, 6vw, 92px)",
            lineHeight: "1.05",
            letterSpacing: "-0.02em",
            maxWidth: "900px",
            marginBottom: "36px",
          }}
        >
          Understanding Reality
        </motion.h1>

        {/* Supporting paragraph */}
        <motion.p
          variants={item}
          className="font-body text-[#B8AFA4]"
          style={{
            fontSize: "clamp(18px, 2vw, 22px)",
            lineHeight: "1.8",
            maxWidth: "620px",
            marginBottom: "48px",
          }}
        >
          An independent research publication dedicated to philosophy, science, history, technology, and the forces that shape civilizations.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-[16px] md:gap-[20px] mb-[56px] lg:mb-[72px] w-full sm:w-auto"
        >
          <a href="/archive" className="w-full sm:w-auto text-center font-nav text-[13px] md:text-[14px] uppercase tracking-[0.15em] px-[28px] py-[14px] border border-[#EDE8DF] text-[#EDE8DF] hover:bg-bronze hover:border-bronze hover:text-white transition-all duration-[250ms]">
            Begin Reading
          </a>
          <a href="/about" className="w-full sm:w-auto text-center font-nav text-[13px] md:text-[14px] uppercase tracking-[0.15em] px-[28px] py-[14px] border border-[#3D3630] text-[#B8AFA4] hover:border-bronze hover:text-bronze transition-all duration-[250ms]">
            Read the Manifesto
          </a>
        </motion.div>

        {/* Editorial Divider */}
        <motion.div variants={item} className="flex items-center justify-center gap-[16px] mb-[24px]">
          <span className="w-[32px] md:w-[48px] h-[0.5px] bg-[#B8AFA4]" />
          <span className="text-bronze text-[12px] md:text-[14px]">✦</span>
          <span className="w-[32px] md:w-[48px] h-[0.5px] bg-[#B8AFA4]" />
        </motion.div>

        {/* Publication Line */}
        <motion.div
          variants={item}
          className="font-meta text-[11px] md:text-[12px] text-[#8A7B6E] tracking-[0.15em] md:tracking-widest"
        >
          Volume I • Independent Publication • Est. 2026
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="absolute bottom-[40px] md:bottom-[80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[12px]"
      >
        <span className="font-nav text-[10px] uppercase tracking-[0.2em] text-[#8A7B6E]">
          Scroll
        </span>
        <span className="text-[#8A7B6E] text-[12px] animate-pulse">↓</span>
      </motion.div>
    </section>
  );
}
