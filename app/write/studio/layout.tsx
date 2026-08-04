"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ContributorStudioLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/write/studio" },
    { name: "New Submission", href: "/write/studio/editor" },
    { name: "My Drafts", href: "/write/studio/drafts" },
    { name: "Submissions", href: "/write/studio/submissions" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row pt-[80px]">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-[280px] border-r border-glass-border-light bg-black/40 flex-shrink-0 flex flex-col h-[calc(100vh-80px)] md:sticky md:top-[80px]">
        <div className="p-[32px]">
          <h2 className="font-display text-[24px] mb-[4px]">Contributor Studio</h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary">Pratyush Mohanty</p>
        </div>
        
        <nav className="flex-1 px-[16px] py-[16px] space-y-[4px] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-[16px] py-[12px] font-body text-[15px] transition-colors rounded-sm ${
                  isActive 
                    ? "bg-bronze-accent/10 text-bronze-accent font-medium border-l-[2px] border-bronze-accent" 
                    : "text-text-secondary hover:bg-glass-overlay hover:text-foreground border-l-[2px] border-transparent"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-[24px] border-t border-glass-border-light">
          <Link href="/write" className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary hover:text-foreground transition-colors flex items-center gap-[8px]">
            ← Back to Monoverse
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden min-h-[calc(100vh-80px)]">
        {children}
      </main>
    </div>
  );
}
