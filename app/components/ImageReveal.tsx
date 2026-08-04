"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

// Wrap next/image with a cinematic reveal (Blur -> Sharp, Scale -> 100%, Opacity -> 100%)
export function ImageReveal(props: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        initial={{ filter: "blur(20px)", opacity: 0, scale: 0.97 }}
        animate={
          isLoaded
            ? { filter: "blur(0px)", opacity: 1, scale: 1 }
            : { filter: "blur(20px)", opacity: 0, scale: 0.97 }
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier
        }}
        className="w-full h-full relative"
      >
        <Image
          {...props}
          onLoad={(e) => {
            setIsLoaded(true);
            if (props.onLoad) props.onLoad(e);
          }}
          className={`object-cover w-full h-full ${props.className || ""}`}
        />
      </motion.div>
    </div>
  );
}
