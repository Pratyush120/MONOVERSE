import { notFound } from "next/navigation";
import { getAllArticles } from "@/lib/mdx";
import { EssayCard } from "../../components/EssayCard";
import { CATEGORY_LAYOUTS } from "../../types";

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  philosophy: "Essays on existence, ethics, and the nature of reality.",
  history: "Examining the past to understand the foundations of the present.",
  science: "Inquiry into the physical universe, from quantum mechanics to cosmology.",
  technology: "The philosophical and cultural implications of our tools.",
  ai: "The philosophical and cultural implications of artificial intelligence.",
  "artificial-intelligence": "The philosophical and cultural implications of artificial intelligence.",
  culture: "Observations on art, society, and the human condition.",
  economics: "Systems of value, exchange, and human behavior.",
  literature: "The written word as a mirror to humanity.",
  civilizations: "The rise, architecture, and fall of human societies.",
  health: "Explorations of human well-being, medicine, and the body.",
};

export async function generateStaticParams() {
  const allEssays = await getAllArticles();
  const categories = Array.from(new Set(allEssays.map(a => a.domain.toLowerCase().replace(/\s+/g, '-'))));
  const defaultCats = ['philosophy', 'science', 'history', 'technology', 'artificial-intelligence', 'ai', 'culture', 'economics', 'literature', 'civilizations', 'health'];
  const allSlugs = Array.from(new Set([...categories, ...defaultCats]));
  
  return allSlugs.map((domain) => ({
    domain,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ domain: string }> }) {
  const resolvedParams = await params;
  const domainSlug = resolvedParams.domain;
  const name = domainSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    title: `${name} | Monoverse`,
    description: CATEGORY_DESCRIPTIONS[domainSlug] || `Explore essays on ${name} in Monoverse.`,
  };
};

export default async function CategoryPage({ params }: { params: Promise<{ domain: string }> }) {
  const resolvedParams = await params;
  const domainSlug = resolvedParams.domain;
  const name = domainSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  let displayTitle = name;
  if (domainSlug === 'ai') displayTitle = 'Artificial Intelligence';
  if (domainSlug === 'artificial-intelligence') displayTitle = 'Artificial Intelligence';
  
  const allEssays = await getAllArticles();
  
  const categoryArticles = allEssays
    .filter((a) => a.domain.toLowerCase().replace(/\s+/g, '-') === domainSlug || (domainSlug === 'ai' && a.domain === 'Artificial Intelligence'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  const layout = CATEGORY_LAYOUTS[domainSlug] || "standard";
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-24 max-w-3xl">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {displayTitle}
        </h1>
        <p className="font-body text-xl md:text-2xl text-text-secondary leading-relaxed text-balance">
          {CATEGORY_DESCRIPTIONS[domainSlug] || `Essays and inquiries intersecting with ${displayTitle.toLowerCase()}.`}
        </p>
      </header>
      
      {categoryArticles.length === 0 ? (
        <div className="py-24 border-t border-border text-center">
          <p className="font-body text-lg text-text-secondary">No essays published in this category yet.</p>
        </div>
      ) : (
        <div className={
          layout === "philosophy" ? "grid grid-cols-1 md:grid-cols-2 gap-16" :
          layout === "history" ? "flex flex-col gap-12" :
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        }>
          {categoryArticles.map((article, index) => (
            <div key={article.slug} className={
              layout === "philosophy" && index === 0 ? "md:col-span-2 mb-12" : ""
            }>
              <EssayCard 
                  slug={article.slug}
                  title={article.title}
                  description={article.description}
                  category={article.domain}
                  author={article.author}
                  readTime={article.readingTime}
                  date={article.date}
                  image={article.image}
                variant={layout === "history" ? "compact" : (layout === "philosophy" && index === 0) ? "featured" : "default"} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
