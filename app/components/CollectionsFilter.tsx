"use client";

import { useState, useMemo } from "react";
import { CollectionCard } from "./CollectionCard";

interface CollectionData {
  title: string;
  slug: string;
  description: string;
  itemCount: number;
  image: string;
  topics: string[];
  readingTime: string;
  category: string;
  lastUpdated: string;
}

interface CollectionsFilterProps {
  collections: CollectionData[];
}

export function CollectionsFilter({ collections }: CollectionsFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set(collections.map(c => c.category));
    return ["All", ...Array.from(cats).filter(Boolean)];
  }, [collections]);

  const filteredCollections = useMemo(() => {
    if (activeCategory === "All") return collections;
    return collections.filter(c => c.category === activeCategory);
  }, [collections, activeCategory]);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex border-b border-glass-border-light overflow-x-auto scrollbar-hide mb-12 gap-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-mono text-xs uppercase tracking-widest pb-4 border-b-2 transition-all duration-300 whitespace-nowrap ${
              activeCategory === cat
                ? "border-bronze-accent text-bronze-accent font-semibold"
                : "border-transparent text-text-secondary hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of collections */}
      {filteredCollections.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredCollections.map((col) => (
            <div key={col.slug} className="group relative">
              <CollectionCard
                title={col.title}
                overview={col.description}
                itemCount={col.itemCount}
                image={col.image}
                href={`/collections/${col.slug}`}
              />
              <div className="mt-4 flex flex-wrap gap-4 items-center justify-between px-2 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                <div className="flex gap-2">
                  {col.topics.map(t => (
                    <span key={t} className="border border-glass-border-light px-2 py-0.5 rounded text-bronze-accent">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <span>{col.readingTime}</span>
                  <span>•</span>
                  <span>Updated {col.lastUpdated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-glass-border-light rounded-xl">
          <p className="font-body text-lg text-text-secondary">No collections found in this category.</p>
        </div>
      )}
    </div>
  );
}
