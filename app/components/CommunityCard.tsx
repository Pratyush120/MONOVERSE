import Link from "next/link";
import { ImageReveal } from "./ImageReveal";

interface CommunityCardProps {
  slug: string;
  title: string;
  description: string;
  author: string;
  image: string;
  date: string;
  readTime: string;
}

export function CommunityCard({
  slug,
  title,
  description,
  author,
  image,
  date,
  readTime,
}: CommunityCardProps) {
  return (
    <Link href={slug} className="glass-panel overflow-hidden group flex flex-col p-[24px] gap-[24px] hover:shadow-float-high hover:-translate-y-[4px] transition-all duration-500 ease-out">
      <div className="w-full overflow-hidden flex-shrink-0">
        <div className="w-full aspect-[16/9] group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          <ImageReveal src={image} alt={title} width={600} height={337} />
        </div>
      </div>
      
      <div className="flex flex-col justify-center flex-grow">
        <div className="flex items-center gap-[12px] font-meta text-[10px] uppercase tracking-[0.2em] text-bronze-accent mb-[16px] flex-wrap">
          <span>Community</span>
          <span className="w-[4px] h-[4px] rounded-full bg-outline-variant"></span>
          <span className="text-success-green flex items-center gap-[4px]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Editorially Reviewed
          </span>
        </div>

        <h3 className="font-display text-[24px] leading-[1.2] text-foreground mb-[16px] group-hover:text-bronze transition-colors">
          {title}
        </h3>

        <p className="font-body text-[15px] text-text-secondary leading-[1.6] mb-[24px] line-clamp-3">
          {description}
        </p>

        <div className="flex flex-col gap-[8px] font-meta text-[10px] uppercase tracking-[0.15em] text-text-secondary border-t border-outline-variant pt-[24px] mt-auto">
          <div className="flex justify-between">
            <span>Submitted By {author}</span>
            <span>{readTime}</span>
          </div>
          <div className="text-outline-variant/60">
            Published {new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </div>
        </div>
      </div>
    </Link>
  );
}
