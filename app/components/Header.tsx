"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const CATEGORIES = ["Philosophy", "Science", "History", "Technology", "AI", "Culture"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-[250ms] ${
        scrolled 
          ? "bg-background/90 backdrop-blur-md h-[68px] border-b border-border shadow-sm" 
          : "bg-transparent h-[96px] border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-logo text-2xl tracking-tight text-foreground">Monoverse</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {CATEGORIES.map(cat => (
            <Link 
              key={cat} 
              href={`/category/${cat.toLowerCase()}`}
              className="font-nav text-[18px] text-text-secondary hover:text-foreground nav-link transition-colors duration-300"
            >
              {cat}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-9 h-9 hover:text-bronze transition-colors duration-300 text-text-secondary">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <ThemeToggle />
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden flex items-center justify-center w-9 h-9 transition-colors duration-300 text-text-secondary hover:text-foreground"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-6 space-y-4 shadow-lg absolute w-full">
          {CATEGORIES.map(cat => (
            <Link 
              key={cat} 
              href={`/category/${cat.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block font-nav text-[18px] text-text-secondary hover:text-bronze transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
