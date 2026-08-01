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
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const buttonsOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
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
        
        {/* Subtle radial light behind logo */}
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
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
        style={{ y: illustrationY, x: shiftX }}
      >
        <div className="relative w-[90vw] max-w-[1500px] h-full">
          <Image
            src="/images/hero.svg"
            alt="Monoverse Hero Illustration"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 w-full max-w-[1400px] px-[24px] md:px-[48px] flex flex-col items-center justify-center h-full pt-[8vh]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        
        {/* Logo */}
        <motion.div 
          variants={item} 
          style={{ scale: logoScale }}
          className="mb-[28px]"
        >
          <Image
            src="/images/monoverselogo.svg"
            alt="Monoverse"
            width={280}
            height={80}
            className="w-[170px] md:w-[210px] lg:w-[260px] h-auto brightness-0 invert"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={item}
          className="font-display text-center mb-[48px]"
          style={{
            fontSize: "20px",
            letterSpacing: "0.08em",
            color: "rgba(235,229,220,0.82)",
            maxWidth: "500px"
          }}
        >
          Building a World of Wisdom & Understanding
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display font-normal text-[#F3ECE1] text-center"
          style={{
            fontSize: "clamp(42px, 6.5vw, 92px)",
            lineHeight: "1.05",
            maxWidth: "950px",
            marginBottom: "36px",
            y: headlineY
          }}
        >
          Understanding Reality Through Philosophy, Science, History, Health & Technology
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="font-body text-center"
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "620px",
            marginBottom: "56px",
            color: "rgba(225,220,210,0.86)"
          }}
        >
          An independent research publication dedicated to exploring the deep architectures of thought that remain timeless.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-[24px] w-full sm:w-auto"
          style={{ opacity: buttonsOpacity }}
        >
          <a 
            href="/archive" 
            className="w-full sm:w-auto text-center font-nav uppercase transition-all duration-[220ms]"
            style={{
              padding: "18px 40px",
              border: "1px solid rgba(194,164,97,0.55)",
              borderRadius: "4px",
              letterSpacing: "0.18em",
              color: "#F5F1EA",
              backgroundColor: "transparent",
              fontSize: "14px"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#C7A86A";
              e.currentTarget.style.backgroundColor = "rgba(194,164,97,0.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(194,164,97,0.55)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Begin Reading
          </a>
          <a 
            href="/about" 
            className="w-full sm:w-auto text-center font-nav uppercase transition-all duration-[220ms]"
            style={{
              padding: "18px 40px",
              border: "1px solid rgba(194,164,97,0.55)",
              borderRadius: "4px",
              letterSpacing: "0.18em",
              color: "#F5F1EA",
              backgroundColor: "transparent",
              fontSize: "14px"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#C7A86A";
              e.currentTarget.style.backgroundColor = "rgba(194,164,97,0.08)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(194,164,97,0.55)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Read the Manifesto
          </a>
        </motion.div>

        {/* Editorial Divider */}
        <motion.div 
          variants={item}
          className="flex items-center justify-center gap-[12px] mt-[72px] mb-[24px]"
          style={{ opacity: 0.6 }}
        >
          <span className="w-[64px] h-[0.5px] bg-[#C2A461]" />
          <span className="text-[#C2A461] text-[14px]">✦</span>
          <span className="w-[64px] h-[0.5px] bg-[#C2A461]" />
        </motion.div>

        {/* Publication Line */}
        <motion.div
          variants={item}
          className="font-meta text-center"
          style={{
            fontSize: "14px",
            color: "rgba(194,164,97,0.65)"
          }}
        >
          Volume I • Independent Publication • Est. 2026
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="absolute bottom-[80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[12px]"
      >
        <span 
          className="font-nav uppercase text-center"
          style={{
            fontSize: "12px",
            letterSpacing: "0.25em",
            color: "rgba(225,220,210,0.7)"
          }}
        >
          Scroll
        </span>
        <motion.span 
          className="text-center"
          style={{ color: "rgba(225,220,210,0.7)", fontSize: "14px" }}
          animate={{ opacity: [0.4, 1, 0.4], y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
