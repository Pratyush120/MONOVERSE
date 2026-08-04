"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ReadingProgress({ 
  targetRef,
  title,
  readingTime
}: { 
  targetRef?: React.RefObject<HTMLElement | null>;
  title?: string;
  readingTime?: string;
}) {
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef || undefined,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fade in the reading header after scrolling past the main title (e.g., 300px)
  const headerOpacity = useTransform(scrollY, [200, 400], [0, 1]);
  const headerY = useTransform(scrollY, [200, 400], [-20, 0]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      {/* Premium Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-bronze-accent origin-left"
        style={{ scaleX }}
      />
      
      {/* Sticky Reading Time & Title */}
      {(title || readingTime) && (
        <motion.div 
          className="w-full flex justify-between items-center px-[24px] md:px-[64px] h-[48px] bg-surface-low/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <span className="font-display text-[14px] text-foreground truncate max-w-[60%]">
            {title}
          </span>
          <span className="font-meta text-[10px] uppercase tracking-[0.2em] text-bronze-accent font-semibold">
            {readingTime}
          </span>
        </motion.div>
      )}
    </div>
  );
}
