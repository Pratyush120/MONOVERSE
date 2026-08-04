"use client";

import { useState } from "react";
import Link from "next/link";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  url: string;
}

interface SearchClientProps {
  items: SearchResult[];
}

export function SearchClient({ items }: SearchClientProps) {
  const [query, setQuery] = useState("");
  
  const results = query.length > 2 
    ? items.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="relative mb-[48px]">
        <input
          type="text"
          placeholder="Search by Movie, Director, Genre, Article..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-surface-low border border-outline-variant rounded-none px-[24px] py-[24px] text-[18px] font-body text-foreground focus:outline-none focus:border-bronze-accent transition-colors"
        />
        <div className="absolute right-[24px] top-[50%] -translate-y-[50%] text-text-secondary font-meta text-[11px] uppercase tracking-[0.1em]">
          {query.length > 2 ? `${results.length} Results` : "Type 3+ characters"}
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        {results.map((result) => (
          <Link key={result.id} href={result.url} className="glass-panel p-[24px] group hover:-translate-y-[2px] transition-transform">
            <div className="flex items-center gap-[12px] font-meta text-[10px] uppercase tracking-[0.2em] text-bronze-accent mb-[12px]">
              <span>{result.type}</span>
            </div>
            <h3 className="font-display text-[24px] text-foreground mb-[8px] group-hover:text-bronze transition-colors">
              {result.title}
            </h3>
            <p className="font-body text-[15px] text-text-secondary line-clamp-2">
              {result.description}
            </p>
          </Link>
        ))}
      </div>
      
      {query.length > 2 && results.length === 0 && (
        <div className="text-center py-[64px] text-text-secondary font-body">
          No results found for "{query}".
        </div>
      )}
    </div>
  );
}
