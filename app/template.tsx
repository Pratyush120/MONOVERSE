"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Apple-like cinematic cross-dissolve with a barely perceptible scale
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, filter: "blur(4px)", scale: 0.995 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, filter: "blur(2px)", scale: 1.005 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for a premium, non-linear feel
      }}
    >
      {children}
    </motion.div>
  );
}
