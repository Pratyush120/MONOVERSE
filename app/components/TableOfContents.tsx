"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  level: number;
  text: string;
  slug: string;
}

interface TableOfContentsProps {
  toc: TOCItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (!toc || toc.length === 0) return null;

  return (
    <nav className="sticky top-[120px] hidden xl:block">
      <h4 className="font-meta text-[13px] uppercase tracking-[0.2em] text-text-secondary mb-6 font-semibold">Table of Contents</h4>
      <ul className="flex flex-col gap-3 border-l-[1px] border-border">
        {toc.map((item) => {
          const isActive = activeId === item.slug;
          return (
            <li 
              key={item.slug} 
              className={`transition-all duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                item.level === 3 ? "ml-[16px]" : ""
              }`}
            >
              <a 
                href={`#${item.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.slug);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className={`block pl-[16px] py-[4px] text-[14px] font-body leading-[1.4] transition-colors duration-[400ms] ease-out border-l-[1px] -ml-[1px] ${
                  isActive 
                    ? "text-foreground border-bronze-accent font-medium" 
                    : "text-text-secondary border-transparent hover:text-foreground hover:border-outline-variant"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
