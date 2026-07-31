import { ArticleCard } from "./components/ArticleCard";
import { CategoryCard } from "./components/CategoryCard";
import { Newsletter } from "./components/Newsletter";
import { allArticles } from "contentlayer/generated";

const ConnectionLines = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08] dark:opacity-[0.06] text-bronze" preserveAspectRatio="none">
    <line className="connection-line" x1="10%" y1="20%" x2="30%" y2="45%" stroke="currentColor" strokeWidth="1" />
    <line className="connection-line" x1="30%" y1="45%" x2="50%" y2="35%" stroke="currentColor" strokeWidth="1" />
    <line className="connection-line" x1="50%" y1="35%" x2="70%" y2="55%" stroke="currentColor" strokeWidth="1" />
    <line className="connection-line" x1="70%" y1="55%" x2="85%" y2="30%" stroke="currentColor" strokeWidth="1" />
    <line className="connection-line" x1="25%" y1="60%" x2="55%" y2="75%" stroke="currentColor" strokeWidth="1" />
    <line className="connection-line" x1="55%" y1="75%" x2="80%" y2="65%" stroke="currentColor" strokeWidth="1" />
    <circle cx="10%" cy="20%" r="3" fill="currentColor" />
    <circle cx="30%" cy="45%" r="3" fill="currentColor" />
    <circle cx="50%" cy="35%" r="3" fill="currentColor" />
    <circle cx="70%" cy="55%" r="3" fill="currentColor" />
    <circle cx="85%" cy="30%" r="3" fill="currentColor" />
    <circle cx="25%" cy="60%" r="3" fill="currentColor" />
    <circle cx="55%" cy="75%" r="3" fill="currentColor" />
    <circle cx="80%" cy="65%" r="3" fill="currentColor" />
  </svg>
);

const CATEGORIES = [
  { name: 'Philosophy', count: 42, description: 'Essays on existence, ethics, and the nature of reality.' },
  { name: 'History', count: 38, description: 'Examining the past to understand the foundations of the present.' },
  { name: 'Science', count: 29, description: 'Inquiry into the physical universe, from quantum mechanics to cosmology.' },
  { name: 'AI', count: 15, description: 'The philosophical and cultural implications of artificial intelligence.' }
];

export default function Home() {
  const sortedArticles = allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredArticle = sortedArticles[0];
  const gridArticles = sortedArticles.slice(1, 5);

  return (
    <>
      <section className="relative pt-24 pb-16 overflow-hidden bg-card transition-colors duration-500">
        <ConnectionLines />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Understanding<br/>Reality.
            </h1>
            <p className="font-body text-xl md:text-2xl text-text-secondary leading-relaxed">
              An intellectual publication focused on philosophy, history, civilizations, and science. We seek the signal in the noise.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-bronze flex-1 opacity-20" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-bronze font-semibold">Featured Essay</span>
              <div className="h-px bg-bronze flex-1 opacity-20" />
            </div>
            
            {featuredArticle && (
              <ArticleCard 
                {...featuredArticle}
                readTime={featuredArticle.readingTime.text}
                variant="featured"
              />
            )}
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Latest Essays</h2>
          <div className="h-px bg-border flex-1" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
          {gridArticles.map((article) => (
            <ArticleCard 
              key={article.slug}
              {...article}
              readTime={article.readingTime.text}
              variant="default"
            />
          ))}
        </div>
      </section>
      
      <section className="bg-card py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Explorations</h2>
            <div className="h-px bg-border flex-1 ml-8 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <CategoryCard 
                key={category.name}
                {...category}
              />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
