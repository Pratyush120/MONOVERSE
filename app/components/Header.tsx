"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const CATEGORIES = ["Philosophy", "Science", "History", "Technology", "AI", "Culture"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border-2 border-bronze flex items-center justify-center group-hover:bg-bronze transition-colors duration-300">
            <div className="w-2 h-2 rounded-full bg-bronze group-hover:bg-background transition-colors duration-300" />
          </div>
          <span className="font-display text-xl tracking-tight font-semibold text-foreground">Monoverse</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {CATEGORIES.map(cat => (
            <Link 
              key={cat} 
              href={`/category/${cat.toLowerCase()}`}
              className="font-ui text-[13px] font-medium text-text-secondary hover:text-bronze transition-colors duration-300 tracking-wide"
            >
              {cat}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-bronze/10 transition-colors duration-300 text-text-secondary">
            <Search size={16} />
          </button>
          <ThemeToggle />
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-bronze/10 transition-colors duration-300 text-text-secondary"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-6 space-y-4">
          {CATEGORIES.map(cat => (
            <Link 
              key={cat} 
              href={`/category/${cat.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block font-ui text-sm font-medium text-text-secondary hover:text-bronze transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
