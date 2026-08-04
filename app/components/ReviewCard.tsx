import Link from "next/link";
import { ImageReveal } from "./ImageReveal";

interface ReviewCardProps {
  slug: string;
  title: string;
  description: string;
  author: string;
  image: string;
  date: string;
  readTime: string;
  variant?: "default" | "featured" | "compact";
}

export function ReviewCard({
  slug,
  title,
  description,
  author,
  image,
  date,
  readTime,
  variant = "default",
}: ReviewCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <Link href={slug} className={`glass-panel overflow-hidden group flex ${isFeatured ? "flex-col md:flex-row gap-[40px] p-[40px] md:p-[64px]" : isCompact ? "flex-col p-[24px] gap-[24px]" : "flex-col gap-[32px] p-[32px] md:p-[40px]"} hover:shadow-float-high hover:-translate-y-[4px] transition-all duration-500 ease-out`}>
      <div className={`w-full overflow-hidden flex-shrink-0 ${isFeatured ? "md:w-[45%]" : ""}`}>
        <div className="w-full aspect-[16/9] group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
          <ImageReveal src={image} alt={title} width={isFeatured ? 800 : 600} height={isFeatured ? 450 : 337} />
        </div>
      </div>
      
      <div className={`flex flex-col justify-center ${isFeatured ? "md:w-[55%]" : ""}`}>
        <div className="flex items-center gap-[16px] font-meta text-[11px] uppercase tracking-[0.2em] text-bronze-accent mb-[24px]">
          <span>Review</span>
          <span className="w-[4px] h-[4px] rounded-full bg-outline-variant"></span>
          <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>

        <h3 className={`font-display text-foreground leading-[1.1] mb-[16px] group-hover:text-bronze transition-colors ${isFeatured ? "text-[36px] md:text-[48px]" : "text-[28px] md:text-[32px]"}`}>
          {title}
        </h3>

        {!isCompact && (
          <p className={`font-body text-text-secondary leading-[1.7] mb-[32px] ${isFeatured ? "text-[18px] md:text-[20px]" : "text-[16px]"}`}>
            {description}
          </p>
        )}

        <div className={`flex items-center justify-between font-meta text-[11px] uppercase tracking-[0.15em] text-text-secondary border-t border-outline-variant pt-[24px] ${isCompact ? "mt-auto" : "mt-auto md:mt-[16px]"}`}>
          <span>By {author}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}
