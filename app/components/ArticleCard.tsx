import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  variant?: "default" | "featured" | "compact";
}

export function ArticleCard({ slug, title, description, category, author, readTime, image, variant = "default" }: ArticleCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/article/${slug}`} className="group flex gap-5">
        <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
          <Image src={image} alt={title} width={128} height={128} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">{category}</span>
          <h3 className="font-display text-lg md:text-xl font-semibold mt-1 mb-2 group-hover:text-bronze transition-colors duration-300 leading-tight">{title}</h3>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
            <span>{author}</span>
            <span className="w-1 h-1 rounded-full bg-bronze" />
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={`/article/${slug}`} className="group block">
        <div className="aspect-[16/10] overflow-hidden rounded-lg mb-5">
          <Image src={image} alt={title} width={800} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">{category}</span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold mt-2 mb-3 group-hover:text-bronze transition-colors duration-300">{title}</h3>
        <p className="font-body text-base leading-relaxed text-text-secondary mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-text-secondary">
          <span>{author}</span>
          <span className="w-1 h-1 rounded-full bg-bronze" />
          <span>{readTime}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden rounded-lg mb-5 relative">
        <Image src={image} alt={title} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-4 left-4">
          <span className="font-mono text-[10px] uppercase tracking-wider bg-bronze text-white px-2 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-bronze transition-colors duration-300 leading-tight">{title}</h3>
      <p className="font-body text-sm leading-relaxed text-text-secondary mb-3 line-clamp-2">{description}</p>
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
        <span>{author}</span>
        <span className="w-1 h-1 rounded-full bg-bronze" />
        <span>{readTime}</span>
      </div>
    </Link>
  );
}
