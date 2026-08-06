"use client";

import { useState, useMemo } from "react";
import { EssayCard } from "./EssayCard";
import { MDXArticle } from "@/lib/mdx";

interface ExploreFilterProps {
  initialArticles: MDXArticle[];
}

export function ExploreFilter({ initialArticles }: ExploreFilterProps) {
  // Filters State
  const [selectedDesks, setSelectedDesks] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedReadTimes, setSelectedReadTimes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("recent"); // "recent" | "longest" | "shortest"
  const [showOnlyCurated, setShowOnlyCurated] = useState<boolean>(false);
  
  // Progressive loading state
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Available options derived from data (with defaults fallback)
  const desks = useMemo(() => {
    const list = new Set(initialArticles.map(a => a.domain || "Essays"));
    return Array.from(list).filter(Boolean);
  }, [initialArticles]);

  const topics = useMemo(() => {
    const list = new Set<string>();
    initialArticles.forEach(a => {
      if (a.domain) list.add(a.domain);
      if (a.disciplines) a.disciplines.forEach(t => list.add(t));
    });
    return Array.from(list).filter(Boolean);
  }, [initialArticles]);

  const contentTypes = useMemo(() => {
    return ["Article", "Review", "Feature", "Community"];
  }, []);

  // Filter & Sort Logic
  const filteredArticles = useMemo(() => {
    let result = [...initialArticles];

    // Filter by Desks
    if (selectedDesks.length > 0) {
      result = result.filter(a => selectedDesks.includes(a.domain || "Essays"));
    }

    // Filter by Topics
    if (selectedTopics.length > 0) {
      result = result.filter(a => 
        selectedTopics.includes(a.domain || "") || 
        (a.disciplines && a.disciplines.some(t => selectedTopics.includes(t)))
      );
    }

    // Filter by Reading Time
    if (selectedReadTimes.length > 0) {
      result = result.filter(a => {
        const mins = parseInt(a.readingTime) || 5;
        if (selectedReadTimes.includes("quick") && mins < 5) return true;
        if (selectedReadTimes.includes("medium") && mins >= 5 && mins <= 15) return true;
        if (selectedReadTimes.includes("deep") && mins > 15) return true;
        return false;
      });
    }

    // Filter by Content Type
    if (selectedTypes.length > 0) {
      result = result.filter(a => {
        const type = (a as any).editorialType || "Article";
        return selectedTypes.includes(type);
      });
    }

    // Filter by Curated / Editor's Picks
    if (showOnlyCurated) {
      result = result.filter(a => (a as any).featured || a.slug.includes("review") || a.slug.includes("silence"));
    }

    // Sorting
    if (sortBy === "recent") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "longest") {
      result.sort((a, b) => (parseInt(b.readingTime) || 0) - (parseInt(a.readingTime) || 0));
    } else if (sortBy === "shortest") {
      result.sort((a, b) => (parseInt(a.readingTime) || 0) - (parseInt(b.readingTime) || 0));
    }

    return result;
  }, [initialArticles, selectedDesks, selectedTopics, selectedReadTimes, selectedTypes, showOnlyCurated, sortBy]);

  // Toggle helpers
  const toggleFilter = (list: string[], setList: (l: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
    setVisibleCount(6); // Reset pagination on filter change
  };

  const clearAllFilters = () => {
    setSelectedDesks([]);
    setSelectedTopics([]);
    setSelectedReadTimes([]);
    setSelectedTypes([]);
    setShowOnlyCurated(false);
    setSortBy("recent");
    setVisibleCount(6);
  };

  const hasActiveFilters = selectedDesks.length > 0 || selectedTopics.length > 0 || selectedReadTimes.length > 0 || selectedTypes.length > 0 || showOnlyCurated;

  return (
    <div className="w-full">
      {/* Quick Filters Panel */}
      <div className="border border-glass-border-light bg-surface-low/30 p-6 md:p-8 mb-12 rounded-xl">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-glass-border-light pb-4">
            <h2 className="font-display text-xl text-foreground">Interactive Filters</h2>
            {hasActiveFilters && (
              <button 
                onClick={clearAllFilters}
                className="font-mono text-xs uppercase tracking-wider text-bronze-accent hover:text-foreground transition-colors"
              >
                Clear All [✕]
              </button>
            )}
          </div>

          {/* Grid of filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Editorial Desk */}
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block mb-3">Editorial Desk</span>
              <div className="flex flex-wrap gap-2">
                {desks.map(desk => {
                  const active = selectedDesks.includes(desk);
                  return (
                    <button
                      key={desk}
                      onClick={() => toggleFilter(selectedDesks, setSelectedDesks, desk)}
                      className={`font-meta text-xs px-3 py-1.5 border rounded-full transition-all duration-300 ${
                        active 
                          ? "bg-bronze-accent text-white border-bronze-accent" 
                          : "border-glass-border-light text-text-secondary hover:border-text-secondary hover:text-foreground"
                      }`}
                    >
                      {desk}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Topics */}
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block mb-3">Topics</span>
              <div className="flex flex-wrap gap-2">
                {topics.map(topic => {
                  const active = selectedTopics.includes(topic);
                  return (
                    <button
                      key={topic}
                      onClick={() => toggleFilter(selectedTopics, setSelectedTopics, topic)}
                      className={`font-meta text-xs px-3 py-1.5 border rounded-full transition-all duration-300 ${
                        active 
                          ? "bg-bronze-accent text-white border-bronze-accent" 
                          : "border-glass-border-light text-text-secondary hover:border-text-secondary hover:text-foreground"
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Reading Time */}
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block mb-3">Reading Time</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "quick", label: "Quick (< 5m)" },
                  { id: "medium", label: "Medium (5-15m)" },
                  { id: "deep", label: "Deep (> 15m)" }
                ].map(time => {
                  const active = selectedReadTimes.includes(time.id);
                  return (
                    <button
                      key={time.id}
                      onClick={() => toggleFilter(selectedReadTimes, setSelectedReadTimes, time.id)}
                      className={`font-meta text-xs px-3 py-1.5 border rounded-full transition-all duration-300 ${
                        active 
                          ? "bg-bronze-accent text-white border-bronze-accent" 
                          : "border-glass-border-light text-text-secondary hover:border-text-secondary hover:text-foreground"
                      }`}
                    >
                      {time.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Content Type & Sorting */}
            <div className="space-y-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block mb-2">Content Type</span>
                <div className="flex flex-wrap gap-2">
                  {contentTypes.map(type => {
                    const active = selectedTypes.includes(type);
                    return (
                      <button
                        key={type}
                        onClick={() => toggleFilter(selectedTypes, setSelectedTypes, type)}
                        className={`font-meta text-xs px-3 py-1.5 border rounded-full transition-all duration-300 ${
                          active 
                            ? "bg-bronze-accent text-white border-bronze-accent" 
                            : "border-glass-border-light text-text-secondary hover:border-text-secondary hover:text-foreground"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-glass-border-light/50">
                <label className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-glass-border-light text-foreground text-xs rounded px-2 py-1 focus:outline-none focus:border-bronze-accent"
                >
                  <option value="recent">Recent</option>
                  <option value="longest">Longest</option>
                  <option value="shortest">Shortest</option>
                </select>
                
                <button
                  onClick={() => setShowOnlyCurated(!showOnlyCurated)}
                  className={`font-mono text-[10px] uppercase tracking-wider border px-2 py-1 rounded transition-colors ${
                    showOnlyCurated 
                      ? "border-bronze-accent text-bronze-accent bg-bronze-accent/5" 
                      : "border-glass-border-light text-text-secondary hover:text-foreground"
                  }`}
                >
                  Curated Only
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="font-mono text-xs text-text-secondary mb-6 flex justify-between items-center">
        <span>Showing {Math.min(filteredArticles.length, visibleCount)} of {filteredArticles.length} publications</span>
      </div>

      {/* Results Grid */}
      {filteredArticles.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(0, visibleCount).map(article => (
              <EssayCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                description={article.description}
                category={article.domain}
                author={article.author}
                readTime={article.readingTime}
                date={article.date}
                image={article.image}
              />
            ))}
          </div>

          {/* Progressive Loading Button */}
          {visibleCount < filteredArticles.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="btn-primary py-3 px-8 text-xs uppercase tracking-widest font-mono"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-glass-border-light rounded-xl bg-surface-low/10">
          <p className="font-body text-lg text-text-secondary mb-4">No content matches your active filter criteria.</p>
          <button 
            onClick={clearAllFilters}
            className="font-mono text-xs uppercase tracking-wider text-bronze-accent hover:text-foreground underline decoration-dotted"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
