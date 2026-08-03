"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import anime from "animejs";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    // Anime.js custom easing for the toggle
    if (iconRef.current) {
      anime({
        targets: iconRef.current,
        rotate: "+=180",
        scale: [0.5, 1.2, 1],
        duration: 800,
        easing: "spring(1, 80, 10, 0)",
      });
    }
    
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full hover:bg-bronze-accent/10 transition-colors flex items-center justify-center text-text-secondary hover:text-bronze-accent"
      aria-label="Toggle theme"
    >
      <div ref={iconRef} className="flex items-center justify-center will-change-transform">
        {theme === "dark" ? (
          <Sun size={16} />
        ) : (
          <Moon size={16} />
        )}
      </div>
    </button>
  );
}
