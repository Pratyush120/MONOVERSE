import Link from "next/link";
import Image from "next/image";

// ArticleCard — Editorial Journal Pages
// - 0px border-radius everywhere
// - Bronze border on hover (not ghost translate)
// - Category labels: clean uppercase, no parentheses
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
        className="group flex gap-[24px] journal-card p-[24px]"
      >
        <div className="w-[100px] h-[100px] flex-shrink-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="w-full h-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex flex-col justify-center min-w-0">
          <span className="taxonomy-tag mb-[8px] block">{category}</span>
          <h3 className="font-display text-[22px] font-normal leading-[1.3] text-foreground group-hover:text-bronze transition-colors duration-[200ms] mb-[8px]">
            {title}
          </h3>
          <div className="flex items-center gap-[16px] font-meta text-[10px] text-text-secondary uppercase tracking-[0.12em]">
            <span>{author}</span>
            <span className="text-outline-variant">·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Featured variant — full editorial horizontal layout, no border box
  if (variant === "featured") {
    return (
      <Link
        href={`/article/${slug}`}
        className="group flex flex-col md:flex-row"
      >
        {/* Image — full bleed, no border */}
        <div className="md:w-[55%] aspect-[16/10] overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="md:w-[45%] flex flex-col justify-center p-[32px] md:p-[48px] md:pl-[56px] bg-background border border-outline-variant group-hover:border-bronze transition-colors duration-[300ms]">
          <span className="taxonomy-tag mb-[16px] block">{category}</span>
          <h3 className="font-display text-[36px] md:text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-foreground group-hover:text-bronze transition-colors duration-[200ms] mb-[20px]">
            {title}
          </h3>
          <p className="font-body text-[17px] leading-[1.75] text-text-secondary mb-[32px]">{description}</p>
          <div className="flex items-center gap-[16px] font-meta text-[10px] text-text-secondary uppercase tracking-[0.12em] mt-auto">
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

  // Default variant — vertical journal card
  return (
    <Link
      href={`/article/${slug}`}
      className="group flex flex-col journal-card h-full"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      {/* Content */}
      <div className="p-[28px] md:p-[32px] flex flex-col flex-1">
        <span className="taxonomy-tag mb-[12px] block">{category}</span>
        <h3 className="font-display text-[26px] md:text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-foreground group-hover:text-bronze transition-colors duration-[200ms] mb-[12px]">
          {title}
        </h3>
        <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-text-secondary mb-[24px] flex-1">{description}</p>
        <div className="flex items-center gap-[16px] font-meta text-[10px] text-text-secondary uppercase tracking-[0.12em] pt-[16px] border-t border-outline-variant mt-auto">
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
