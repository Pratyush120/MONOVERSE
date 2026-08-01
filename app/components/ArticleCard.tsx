import Link from "next/link";
import Image from "next/image";

// Stitch Design: Cards are "Journal Pages"
// - 0px border-radius (strictly orthogonal)
// - 1px charcoal ghost border at 10% opacity
// - Category labels in parentheses: (Philosophy)
// - EB Garamond for titles
// - Source Serif 4 for descriptions
// - Libre Franklin for metadata
// - No drop shadows — tonal layering only

interface ArticleCardProps {
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

export function ArticleCard({
  slug,
  title,
  description,
  category,
  author,
  readTime,
  date = "Oct 24, 2023",
  image,
  variant = "default",
}: ArticleCardProps) {

  // Compact variant — horizontal layout
  if (variant === "compact") {
    return (
      <Link
        href={`/article/${slug}`}
        className="group flex gap-[24px] journal-card p-[24px] transition-border-color duration-[250ms]"
        style={{ willChange: "transform" }}
      >
        <div className="w-[100px] h-[100px] flex-shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="w-full h-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <span className="taxonomy-tag mb-[8px] block">{category}</span>
          <h3 className="font-display text-[22px] font-normal leading-[1.3] text-foreground group-hover:text-bronze transition-colors duration-[180ms] mb-[8px]">
            {title}
          </h3>
          <div className="flex items-center gap-[12px] font-meta text-[11px] text-text-secondary uppercase tracking-[0.1em]">
            <span>{author}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-outline" />
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Featured variant — large horizontal editorial layout
  if (variant === "featured") {
    return (
      <Link
        href={`/article/${slug}`}
        className="group flex flex-col md:flex-row gap-[48px] journal-card transition-border-color duration-[250ms] hover:-translate-y-[2px]"
        style={{ willChange: "transform", transition: "transform 250ms ease, border-color 250ms ease" }}
      >
        {/* Image — no radius per Stitch spec */}
        <div className="md:w-[55%] aspect-[16/10] overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="md:w-[45%] flex flex-col justify-center p-[24px] md:p-[40px] md:pl-0 md:pr-[48px] md:py-[48px]">
          <span className="taxonomy-tag mb-[16px] block">{category}</span>
          <h3 className="font-display text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-foreground group-hover:text-bronze transition-colors duration-[180ms] mb-[20px]">
            {title}
          </h3>
          <p className="font-body text-[17px] leading-[1.75] text-text-secondary mb-[32px]">{description}</p>
          <div className="flex items-center gap-[12px] font-meta text-[11px] text-text-secondary uppercase tracking-[0.12em] mt-auto">
            <span>{author}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-outline" />
            <span>{readTime}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-outline" />
            <span>{date}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant — vertical journal card
  return (
    <Link
      href={`/article/${slug}`}
      className="group flex flex-col journal-card h-full transition-border-color duration-[250ms] hover:-translate-y-[2px]"
      style={{ willChange: "transform", transition: "transform 250ms ease, border-color 250ms ease" }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
        />
      </div>
      {/* Content */}
      <div className="p-[24px] md:p-[32px] flex flex-col flex-1">
        <span className="taxonomy-tag mb-[12px] block">{category}</span>
        <h3 className="font-display text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-foreground group-hover:text-bronze transition-colors duration-[180ms] mb-[12px]">
          {title}
        </h3>
        <p className="font-body text-[16px] leading-[1.7] text-text-secondary mb-[24px] flex-1">{description}</p>
        <div className="flex items-center gap-[12px] font-meta text-[11px] text-text-secondary uppercase tracking-[0.1em] pt-[16px] border-t border-outline-variant mt-auto">
          <span>{author}</span>
          <span className="w-[3px] h-[3px] rounded-full bg-outline" />
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}
