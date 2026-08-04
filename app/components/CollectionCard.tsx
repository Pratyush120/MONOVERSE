import Link from "next/link";
import { ImageReveal } from "./ImageReveal";

interface CollectionCardProps {
  title: string;
  overview: string;
  essayCount: number;
  readTime: string;
  image: string;
  href: string;
}

export function CollectionCard({ title, overview, essayCount, readTime, image, href }: CollectionCardProps) {
  return (
    <Link href={href} className="glass-panel overflow-hidden group block hover:shadow-float-high hover:-translate-y-[4px] transition-all duration-500 ease-out">
      <div className="w-full h-[200px] overflow-hidden">
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          <ImageReveal src={image} alt={title} width={800} height={400} />
        </div>
      </div>
      <div className="p-[32px]">
        <h3 className="font-display text-[24px] leading-[1.2] text-foreground mb-[12px] group-hover:text-bronze-accent transition-colors">{title}</h3>
        <p className="font-body text-[15px] leading-[1.6] text-text-secondary mb-[24px] line-clamp-3">
          {overview}
        </p>
        <div className="flex items-center justify-between font-meta text-[10px] uppercase tracking-[0.15em] text-text-secondary border-t border-outline-variant pt-[16px]">
          <div className="flex items-center gap-[16px]">
            <span>{essayCount} Essays</span>
            <span className="w-[4px] h-[4px] rounded-full bg-outline-variant"></span>
            <span>{readTime}</span>
          </div>
          <span className="text-bronze-accent group-hover:translate-x-[4px] transition-transform">Enter →</span>
        </div>
      </div>
    </Link>
  );
}
