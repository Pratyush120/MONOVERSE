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
  { name: 'AI', count: 15, description: 'The philosophical and cultural implications of artificial intelligence.' },
  { name: 'Health', count: 12, description: 'Explorations of human well-being, medicine, and the body.' }
];

export default function Home() {
  const sortedArticles = allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredArticle = sortedArticles[0];
  const gridArticles = sortedArticles.slice(1, 5);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-card transition-colors duration-500">
        <ConnectionLines />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-8">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Understanding<br/>Reality.
            </h1>
            <p className="font-body text-xl md:text-2xl text-text-secondary leading-relaxed">
              An intellectual publication focused on philosophy, history, civilizations, and science. We seek the signal in the noise.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Editor's Note */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl border-l-4 border-bronze pl-8 md:pl-12 py-4">
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-bronze font-semibold mb-8">
            Editor&apos;s Note
          </h2>
          <div className="prose prose-xl dark:prose-invert prose-p:font-display prose-p:leading-relaxed prose-p:text-foreground">
            <p>
              We live in an age overflowing with information yet increasingly starved of understanding. Every day, we consume thousands of opinions, headlines, and fragments of knowledge, but rarely pause to ask how they connect.
            </p>
            <p>
              Monoverse exists to bridge those connections.
            </p>
            <p>
              Here, philosophy meets science, history informs technology, health is viewed as a system rather than a symptom, and ideas are explored through research instead of trends. Every essay is an invitation to think more deeply, question assumptions, and understand the forces shaping our world.
            </p>
            <p>
              This is not a publication built for endless scrolling. It is built for careful reading, intellectual curiosity, and conversations that endure long after the page is closed.
            </p>
            <p>Welcome to Monoverse.</p>
          </div>
          <div className="mt-12">
            <p className="font-display text-xl font-bold text-foreground">— Pratyush Mohanty</p>
            <p className="font-mono text-sm text-text-secondary mt-1">Founder & Editor</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Essay */}
      <section className="bg-card/30 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
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
      </section>
      
      {/* 4. Latest Essays */}
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
      
      {/* 5. Topic Explorer */}
      <section className="bg-card py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Topic Explorer</h2>
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

      {/* 6. About Monoverse */}
      <section className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                About Monoverse
              </h2>
              <div className="w-12 h-1 bg-bronze mb-8"></div>
              <p className="font-body text-2xl text-foreground font-medium leading-snug">
                Understanding reality through research, literature, philosophy, history, technology, and civilization.
              </p>
            </div>
            
            <div className="lg:col-span-7 prose prose-lg dark:prose-invert prose-p:font-body prose-p:text-text-secondary prose-p:leading-relaxed">
              <p>
                We live in an age of unlimited information and diminishing understanding. 
                Every day, thousands of articles explain what happened. Few ask <em>why</em> it happened. 
                Even fewer connect today&apos;s headlines with centuries of history, human psychology, 
                philosophy, economics, science, and the long arc of civilization.
              </p>
              <p>
                Monoverse exists to close that gap. This is an independent research publication 
                dedicated to exploring the ideas that shape our world—not through ideology or 
                sensationalism, but through careful inquiry, evidence, and first-principles thinking.
              </p>
              <div className="mt-8">
                <a 
                  href="/about" 
                  className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.1em] text-bronze hover:text-foreground transition-colors font-semibold"
                >
                  Read our full philosophy
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Reading Journey (Start Here) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-4">Start Here</h2>
          <p className="font-body text-xl text-text-secondary">
            Begin your journey through Monoverse with these essential essays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="flex flex-col h-full border border-border p-8 rounded-2xl bg-card hover:border-bronze/50 transition-colors group">
            <div className="text-bronze font-mono text-xs uppercase tracking-widest font-semibold mb-4 opacity-70">Read First</div>
            <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-bronze transition-colors">
              Why Monoverse Exists
            </h3>
            <p className="font-body text-text-secondary leading-relaxed flex-1">
              A manifesto explaining why this publication was created and how understanding reality requires connecting philosophy, science, history, health, and technology.
            </p>
            <div className="mt-8 font-mono text-xs text-text-secondary flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              8 min read
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-full border border-border p-8 rounded-2xl bg-card hover:border-bronze/50 transition-colors group">
            <div className="text-bronze font-mono text-xs uppercase tracking-widest font-semibold mb-4 opacity-70">Essential Concept</div>
            <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-bronze transition-colors">
              The First Principles of Reality
            </h3>
            <p className="font-body text-text-secondary leading-relaxed flex-1">
              An exploration of systems thinking, interconnectedness, and the hidden structures that shape our everyday lives.
            </p>
            <div className="mt-8 font-mono text-xs text-text-secondary flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              12 min read
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-full border border-border p-8 rounded-2xl bg-card hover:border-bronze/50 transition-colors group">
            <div className="text-bronze font-mono text-xs uppercase tracking-widest font-semibold mb-4 opacity-70">Deep Dive</div>
            <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-bronze transition-colors">
              The Age of Intelligent Machines
            </h3>
            <p className="font-body text-text-secondary leading-relaxed flex-1">
              Artificial intelligence is not just another technological revolution—it is reshaping work, creativity, education, and civilization itself.
            </p>
            <div className="mt-8 font-mono text-xs text-text-secondary flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              15 min read
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="/archive" className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-mono text-sm uppercase tracking-[0.1em] font-semibold hover:bg-bronze transition-colors rounded-full">
            Continue Reading →
          </a>
        </div>
      </section>

      {/* 8. Newsletter */}
      <Newsletter />
    </>
  );
}
