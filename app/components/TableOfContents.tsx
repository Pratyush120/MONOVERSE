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
              className={`transition-all duration-300 ${
                item.level === 3 ? "ml-4" : ""
              }`}
            >
              <a 
                href={`#${item.slug}`}
                className={`block pl-4 py-1 text-[14px] font-body leading-[1.4] transition-colors border-l-[1px] -ml-[1px] ${
                  isActive 
                    ? "text-foreground border-bronze font-medium" 
                    : "text-text-secondary border-transparent hover:text-foreground hover:border-text-secondary"
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
