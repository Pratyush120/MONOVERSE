import Link from "next/link";
import Image from "next/image";

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

export function ArticleCard({ slug, title, description, category, author, readTime, date = "Oct 24, 2023", image, variant = "default" }: ArticleCardProps) {
  
  if (variant === "compact") {
    return (
      <Link 
        href={`/article/${slug}`} 
        className="group flex gap-6 p-[20px] bg-card rounded-[16px] border border-transparent hover:border-border transition-all duration-[250ms]"
        style={{ willChange: "transform" }}
      >
        <div className="w-[120px] h-[120px] flex-shrink-0 overflow-hidden rounded-[8px]">
          <Image 
            src={image} alt={title} width={120} height={120} 
            className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]" 
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-meta text-[13px] uppercase tracking-widest text-bronze mb-2">{category}</span>
          <h3 className="font-article-title text-[24px] font-semibold mb-2 leading-[1.2] relative inline-block transition-colors duration-[180ms] group-hover:text-bronze">
            <span className="bg-gradient-to-r from-bronze to-bronze bg-[length:0%_1px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-[300ms] ease-out">
              {title}
            </span>
          </h3>
          <div className="flex items-center gap-2 font-meta text-[13px] text-text-secondary uppercase tracking-widest mt-auto">
            <span>{author}</span>
            <span className="w-1 h-1 rounded-full bg-bronze/50" />
            <span>{readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link 
        href={`/article/${slug}`} 
        className="group flex flex-col md:flex-row gap-[40px] bg-card p-[40px] rounded-[16px] border border-transparent hover:border-border transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-xl"
        style={{ willChange: "transform" }}
      >
        <div className="md:w-[60%] aspect-[16/10] overflow-hidden rounded-[8px]">
          <Image 
            src={image} alt={title} width={800} height={500} 
            className="w-full h-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]" 
          />
        </div>
        <div className="md:w-[40%] flex flex-col justify-center">
          <span className="font-meta text-[13px] uppercase tracking-widest text-bronze mb-4">{category}</span>
          <h3 className="font-article-title text-[44px] font-semibold mb-4 leading-[1.1] transition-colors duration-[180ms] group-hover:text-bronze">
            <span className="bg-gradient-to-r from-bronze to-bronze bg-[length:0%_1px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-[300ms] ease-out">
              {title}
            </span>
          </h3>
          <p className="font-body text-[18px] leading-[1.6] text-text-secondary mb-8">{description}</p>
          <div className="flex items-center gap-3 font-meta text-[13px] text-text-secondary uppercase tracking-widest mt-auto">
            <span>{author}</span>
            <span className="w-1 h-1 rounded-full bg-bronze/50" />
            <span>{readTime}</span>
            <span className="w-1 h-1 rounded-full bg-bronze/50" />
            <span>{date}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      href={`/article/${slug}`} 
      className="group flex flex-col bg-card p-[40px] rounded-[16px] border border-transparent hover:border-border transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-xl h-full"
      style={{ willChange: "transform" }}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-[8px] mb-6 relative">
        <Image 
          src={image} alt={title} width={400} height={300} 
          className="w-full h-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]" 
        />
      </div>
      <span className="font-meta text-[13px] uppercase tracking-widest text-bronze mb-4">{category}</span>
      <h3 className="font-article-title text-[32px] font-semibold mb-4 leading-[1.2] transition-colors duration-[180ms] group-hover:text-bronze">
        <span className="bg-gradient-to-r from-bronze to-bronze bg-[length:0%_1px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-[300ms] ease-out">
          {title}
        </span>
      </h3>
      <p className="font-body text-[18px] leading-[1.6] text-text-secondary mb-6 flex-1">{description}</p>
      <div className="flex items-center gap-3 font-meta text-[13px] text-text-secondary uppercase tracking-widest mt-auto">
        <span>{author}</span>
        <span className="w-1 h-1 rounded-full bg-bronze/50" />
        <span>{readTime}</span>
      </div>
    </Link>
  );
}
