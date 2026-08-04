"use client";

import Link from "next/link";
import { ImageReveal } from "./ImageReveal";

// ArticleCard — Premium Tactile Hover State
// - Uses .glass-panel utility from globals.css
// - Scale, deep shadow, gold accent, title shift on hover

interface EssayCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  readTime: string;
  date?: string;
  image: string;
  variant?: "default" | "featured" | "compact";
}

export function EssayCard({
  slug,
  title,
  description,
  category,
  author,
  readTime,
  date = "Oct 24, 2023",
  image,
  variant = "default",
}: EssayCardProps) {

  // Compact variant — horizontal layout
  if (variant === "compact") {
    return (
      <Link
        href={slug.startsWith('/') ? slug : `/essay/${slug}`}
        className="glass-panel relative overflow-hidden group flex gap-[24px] p-[16px] items-center mb-[16px] hover:scale-[1.02] hover:shadow-2xl transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-bronze-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] origin-left z-20" />
        <div className="glass-panel-inner w-[80px] h-[80px] flex-shrink-0 group-hover:scale-105 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          <ImageReveal
            src={image}
            alt={title}
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-center min-w-0 pr-[16px]">
          <span className="taxonomy-tag mb-[4px] block">{category}</span>
          <h3 className="font-display text-[20px] font-normal leading-[1.3] text-foreground mb-[4px] group-hover:-translate-y-[2px] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
            {title}
          </h3>
          <div className="flex items-center gap-[12px] font-meta text-[10px] text-text-secondary uppercase tracking-[0.12em]">
            <span>{author}</span>
            <span className="text-outline-variant">·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Featured variant — full width glass card
  if (variant === "featured") {
    return (
      <Link
        href={slug.startsWith('/') ? slug : `/essay/${slug}`}
        className="glass-panel relative overflow-hidden group flex flex-col md:flex-row p-[16px] md:p-[24px] gap-[24px] items-center hover:scale-[1.02] hover:shadow-2xl transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-bronze-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] origin-left z-20" />
        <div className="glass-panel-inner md:w-[60%] aspect-[16/10] flex-shrink-0 w-full relative group-hover:scale-105 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          <ImageReveal
            src={image}
            alt={title}
            fill
          />
        </div>
        <div className="md:w-[40%] flex flex-col justify-center py-[24px] md:pr-[24px] w-full transform-style-3d">
          <span className="taxonomy-tag mb-[16px] block">{category}</span>
          <h3 className="font-display text-[32px] md:text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-foreground mb-[16px] group-hover:-translate-y-[2px] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
            {title}
          </h3>
          <p className="font-body text-[16px] md:text-[17px] leading-[1.75] text-text-secondary mb-[24px]">{description}</p>
          <div className="flex items-center gap-[12px] font-meta text-[10px] text-text-secondary uppercase tracking-[0.12em] mt-auto">
            <span>{author}</span>
            <span className="text-outline-variant">·</span>
            <span>{readTime}</span>
            <span className="text-outline-variant">·</span>
            <span>{date}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant — vertical card
  return (
    <Link
      href={slug.startsWith('/') ? slug : `/essay/${slug}`}
      className="glass-panel relative overflow-hidden group flex flex-col h-full p-[16px] hover:scale-[1.02] hover:shadow-2xl transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-bronze-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] origin-left z-20" />
      <div className="glass-panel-inner aspect-[4/3] w-full relative mb-[20px] group-hover:scale-105 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        <ImageReveal
          src={image}
          alt={title}
          fill
        />
      </div>
      <div className="flex flex-col flex-1 px-[8px] pb-[8px]">
        <span className="taxonomy-tag mb-[12px] block">{category}</span>
        <h3 className="font-display text-[24px] md:text-[26px] font-normal leading-[1.25] tracking-[-0.005em] text-foreground mb-[12px] group-hover:-translate-y-[2px] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          {title}
        </h3>
        <p className="font-body text-[15px] leading-[1.7] text-text-secondary mb-[24px] flex-1">{description}</p>
        <div className="flex items-center gap-[12px] font-meta text-[10px] text-text-secondary uppercase tracking-[0.12em] pt-[16px] border-t border-glass-border-light mt-auto">
          <span>{author}</span>
          <span className="text-outline-variant">·</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}
