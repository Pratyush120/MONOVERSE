"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

import { usePathname } from "next/navigation";

// Luxury typography: navigation uses Barrels (Marcellus fallback), uppercase, minimal
// Header is separated from content by a single full-width construction line
// On scroll: bg becomes surface-low, height reduces, thin bottom border appears

const NAV_LINKS = [
  { label: "Archive",    href: "/archive" },
  { label: "Philosophy", href: "/category/philosophy" },
  { label: "Science",    href: "/category/science" },
  { label: "History",    href: "/category/history" },
  { label: "The Marginalia", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setPastHero(window.scrollY > (window.innerHeight * 0.8));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial check
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide header on homepage until scrolled past hero
  const isHiddenOnHome = isHomePage && !pastHero;

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-[400ms] ease-out ${
        isHiddenOnHome 
          ? "opacity-0 -translate-y-full pointer-events-none" 
          : "opacity-100 translate-y-0"
      } ${
        scrolled && !isHiddenOnHome
          ? "bg-surface/95 backdrop-blur-sm h-[64px] border-b border-outline-variant shadow-[0_1px_0_var(--outline-variant)]"
          : "bg-background h-[80px] border-b border-outline-variant"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] h-full flex items-center justify-between">
        
        {/* Logo — SVG, never recreated with typography */}
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="Monoverse Home">
          <Image
            src="/images/monoverselogo.svg"
            alt="Monoverse"
            width={140}
            height={40}
            className="h-[32px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation — Libre Franklin, uppercase, 13px, 0.08em tracking */}
        <nav className="hidden md:flex items-center gap-[32px]" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-[24px]">
          {/* Subscribe — Stitch Book Label button style */}
          <Link
            href="/newsletter"
            className="hidden md:inline-flex btn-primary text-[11px] py-[8px] px-[20px]"
          >
            Subscribe
          </Link>
          <ThemeToggle />
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-foreground transition-colors duration-[180ms]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation — slides down, thin border separator */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-outline-variant">
          <nav className="max-w-[1440px] mx-auto px-[24px] py-[24px] flex flex-col gap-[20px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-outline-variant">
              <Link href="/newsletter" className="btn-primary w-full text-center" onClick={() => setMenuOpen(false)}>
                Subscribe
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
