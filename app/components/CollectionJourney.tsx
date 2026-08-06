"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Circle, ArrowRight, Play, BookOpen, Clock } from "lucide-react";
import { MDXArticle } from "@/lib/mdx";

interface CollectionJourneyProps {
  collectionTitle: string;
  description: string;
  readingTime: string;
  articles: MDXArticle[];
  relatedCollections: { title: string; slug: string; itemCount: number }[];
}

export function CollectionJourney({
  collectionTitle,
  description,
  readingTime,
  articles,
  relatedCollections
}: CollectionJourneyProps) {
  // Checklist State to track reading progress
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

  const toggleCompleted = (slug: string) => {
    if (completedSlugs.includes(slug)) {
      setCompletedSlugs(completedSlugs.filter(s => s !== slug));
    } else {
      setCompletedSlugs([...completedSlugs, slug]);
    }
  };

  const progressPercent = Math.round((completedSlugs.length / articles.length) * 100) || 0;

  return (
    <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] py-12">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left: Reading Order & Curated Journey */}
        <div className="flex-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-bronze-accent block mb-4">Reading Journey</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            {collectionTitle}
          </h1>
          <p className="font-body text-[18px] md:text-[20px] text-text-secondary leading-relaxed mb-12">
            {description}
          </p>

          <div className="space-y-8 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[20px] top-[24px] bottom-[24px] w-[1px] bg-glass-border-strong hidden sm:block" />

            {articles.map((article, index) => {
              const isCompleted = completedSlugs.includes(article.slug);
              return (
                <div key={article.slug} className="flex gap-6 relative group">
                  {/* Timeline bullet / check button */}
                  <button 
                    onClick={() => toggleCompleted(article.slug)}
                    className="z-10 bg-background text-bronze-accent hover:text-foreground hidden sm:flex items-center justify-center w-[40px] h-[40px] border border-glass-border-strong rounded-full transition-colors shrink-0"
                  >
                    {isCompleted ? (
                      <CheckCircle size={20} className="fill-bronze-accent text-white" />
                    ) : (
                      <span className="font-mono text-xs font-bold">0{index + 1}</span>
                    )}
                  </button>

                  {/* Card Content */}
                  <div className="flex-1 border border-glass-border-light bg-surface-low/10 p-6 rounded-xl hover:border-bronze-accent/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                        Chapter 0{index + 1} · {article.readingTime}
                      </span>
                      <button 
                        onClick={() => toggleCompleted(article.slug)}
                        className="sm:hidden font-mono text-[10px] uppercase tracking-wider text-bronze-accent"
                      >
                        {isCompleted ? "[✓] Completed" : "[ ] Mark Read"}
                      </button>
                    </div>

                    <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-bronze-accent transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary mb-6 leading-relaxed">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-glass-border-light/50">
                      <span className="font-mono text-xs text-text-secondary">By {article.author}</span>
                      <Link 
                        href={`/essay/${article.slug}`}
                        className="font-mono text-xs uppercase tracking-wider text-bronze-accent hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        Read Publication <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Progress Tracker & Stats */}
        <div className="w-full lg:w-[360px] shrink-0 space-y-8">
          
          {/* Progress panel */}
          <div className="border border-glass-border-light bg-surface-low/30 p-6 md:p-8 rounded-xl">
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block mb-4">Journey Progress</span>
            <div className="flex justify-between font-mono text-sm text-text-secondary mb-3">
              <span>{completedSlugs.length} of {articles.length} Completed</span>
              <span>{progressPercent}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-glass-border-light rounded-full overflow-hidden mb-6">
              <div className="h-full bg-bronze-accent transition-all duration-500" style={{ width: `${progressPercent}%` }} />
            </div>

            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <Clock size={16} className="text-bronze-accent" />
              <span>Est. Completion: {readingTime}</span>
            </div>
          </div>

          {/* Related Collections */}
          <div className="border border-glass-border-light bg-surface-low/10 p-6 md:p-8 rounded-xl">
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block mb-4">Related Journeys</span>
            <div className="space-y-4">
              {relatedCollections.map(rc => (
                <Link href={`/collections/${rc.slug}`} key={rc.slug} className="block group">
                  <h4 className="font-display text-lg text-foreground group-hover:text-bronze-accent transition-colors mb-1 leading-snug">
                    {rc.title}
                  </h4>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    {rc.itemCount} publications
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
