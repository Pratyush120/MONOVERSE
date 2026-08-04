import Link from "next/link";
import { ImageReveal } from "./ImageReveal";

interface ComingSoonCardProps {
  title: string;
  poster: string;
  releaseDate: string;
  synopsis: string;
  director: string;
  cast: string[];
  href: string;
}

export function ComingSoonCard({ title, poster, releaseDate, synopsis, director, cast, href }: ComingSoonCardProps) {
  return (
    <Link href={href} className="glass-panel overflow-hidden group flex flex-col md:flex-row gap-[24px] md:gap-[40px] items-start p-[24px] md:p-[32px] hover:shadow-float-high hover:-translate-y-[4px] transition-all duration-500 ease-out">
      <div className="w-[120px] md:w-[180px] flex-shrink-0 aspect-[2/3] overflow-hidden">
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          <ImageReveal src={poster} alt={title} width={300} height={450} />
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="mb-[16px]">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-bronze-accent block mb-[8px]">Coming Soon</span>
          <h3 className="font-display text-[28px] md:text-[36px] leading-[1.1] text-foreground group-hover:text-bronze transition-colors">{title}</h3>
        </div>
        
        <p className="font-body text-[15px] leading-[1.65] text-text-secondary mb-[24px] line-clamp-3 md:line-clamp-none max-w-[600px]">
          {synopsis}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px] border-t border-outline-variant pt-[24px] mt-auto">
          <div>
            <span className="font-meta text-[10px] uppercase tracking-[0.15em] text-bronze-accent block mb-[4px]">Release Date</span>
            <span className="font-body text-[14px] text-foreground">{releaseDate}</span>
          </div>
          <div>
            <span className="font-meta text-[10px] uppercase tracking-[0.15em] text-bronze-accent block mb-[4px]">Director</span>
            <span className="font-body text-[14px] text-foreground">{director}</span>
          </div>
          <div>
            <span className="font-meta text-[10px] uppercase tracking-[0.15em] text-bronze-accent block mb-[4px]">Cast</span>
            <span className="font-body text-[14px] text-foreground line-clamp-1">{cast.join(", ")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
