"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Cinema", href: "/cinema" },
  { label: "Movies", href: "/cinema/movies" },
  { label: "Reviews", href: "/cinema/reviews" },
  { label: "Features", href: "/cinema/features" },
  { label: "Lists", href: "/cinema/lists" },
  { label: "People", href: "/cinema/people" },
  { label: "Community", href: "/cinema/community" },
  { label: "Archive", href: "/cinema/archive" },
];

export function CinemaNav() {
  const pathname = usePathname();

  return (
    <div className="fixed top-[80px] w-full z-40 bg-background/90 backdrop-blur-md border-b border-outline-variant">
      <nav className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] h-[48px] flex items-center gap-[32px] overflow-x-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = item.href === "/cinema" 
            ? pathname === "/cinema"
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`font-meta text-[11px] uppercase tracking-[0.15em] whitespace-nowrap transition-colors ${
                isActive ? "text-bronze-accent" : "text-text-secondary hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
