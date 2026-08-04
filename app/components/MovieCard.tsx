import Link from "next/link";
import { ImageReveal } from "./ImageReveal";

interface MovieCardProps {
  title: string;
  poster: string;
  releaseStatus: string;
  genres: string[];
  platform: string;
  href: string;
}

export function MovieCard({ title, poster, releaseStatus, genres, platform, href }: MovieCardProps) {
  return (
    <Link href={href} className="glass-panel overflow-hidden group block hover:shadow-float-high hover:-translate-y-[4px] transition-all duration-500 ease-out">
      <div className="w-full aspect-[2/3] overflow-hidden relative">
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          <ImageReveal src={poster} alt={title} width={400} height={600} />
        </div>
        <div className="absolute top-[16px] right-[16px] bg-background/90 backdrop-blur-md px-[12px] py-[4px] border border-bronze-accent/20">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-bronze-accent">{releaseStatus}</span>
        </div>
      </div>
      <div className="p-[24px]">
        <h3 className="font-display text-[24px] leading-[1.2] text-foreground mb-[8px] group-hover:text-bronze transition-colors">{title}</h3>
        <p className="font-body text-[14px] text-text-secondary mb-[16px]">
          {genres.join(" · ")}
        </p>
        <div className="font-meta text-[11px] uppercase tracking-[0.15em] text-foreground border-t border-outline-variant pt-[16px]">
          {platform}
        </div>
      </div>
    </Link>
  );
}
