import Link from "next/link";
import { ImageReveal } from "./ImageReveal";

interface MovieCardProps {
  title: string;
  poster: string;
  releaseStatus: string;
  genres: string[];
  platform: string;
  communityReviewCount?: number;
  discussionCount?: number;
  href: string;
}

export function MovieCard({ title, poster, releaseStatus, genres, platform, communityReviewCount = 0, discussionCount = 0, href }: MovieCardProps) {
  return (
    <Link href={href} className="glass-panel overflow-hidden group flex flex-col h-full hover:shadow-float-high hover:-translate-y-[4px] transition-all duration-500 ease-out">
      <div className="w-full aspect-[2/3] overflow-hidden relative flex-shrink-0">
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          <ImageReveal src={poster} alt={title} width={400} height={600} />
        </div>
        <div className="absolute top-[16px] right-[16px] bg-background/90 backdrop-blur-md px-[12px] py-[4px] border border-bronze-accent/20">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-bronze-accent">{releaseStatus}</span>
        </div>
      </div>
      <div className="p-[24px] flex flex-col flex-1">
        <h3 className="font-display text-[24px] leading-[1.2] text-foreground mb-[8px] group-hover:text-bronze transition-colors">{title}</h3>
        <p className="font-body text-[14px] text-text-secondary mb-[16px] flex-1">
          {genres.join(" · ")}
        </p>
        <div className="flex items-center gap-[16px] font-meta text-[11px] uppercase tracking-[0.15em] text-foreground border-t border-outline-variant pt-[16px] mt-auto">
          <span>{platform}</span>
          {communityReviewCount > 0 && (
            <>
              <span className="w-[3px] h-[3px] rounded-full bg-outline-variant"></span>
              <span className="text-text-secondary">{communityReviewCount} Reviews</span>
            </>
          )}
          {discussionCount > 0 && (
            <>
              <span className="w-[3px] h-[3px] rounded-full bg-outline-variant"></span>
              <span className="text-text-secondary">{discussionCount} Discussing</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
