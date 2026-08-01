import { ArticleCard } from "./components/ArticleCard";
import { CategoryCard } from "./components/CategoryCard";
import { Newsletter } from "./components/Newsletter";
import { allArticles } from "contentlayer/generated";
import Image from "next/image";

const HeroBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#111111] z-0">
    {/* Faint paper grain (using a simple CSS noise pattern or SVG filter) */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    
    {/* Radial light behind logo */}
    <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-bronze/10 rounded-full blur-[120px] opacity-[0.05]"></div>
    
    {/* Celestial geometric SVG & Delicate construction lines */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04] text-bronze" preserveAspectRatio="xMidYMid slice">
      <circle cx="50%" cy="30%" r="400" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 8" />
      <circle cx="50%" cy="30%" r="600" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="30%" x2="100%" y2="30%" stroke="currentColor" strokeWidth="1" />
    </svg>
  </div>
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
    <div>
      {/* 1. Hero */}
      <section className="relative pt-[160px] pb-[80px] overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <HeroBackground />
        
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center text-center w-full">
          
          {/* Logo */}
          <div className="w-[240px] md:w-[360px] lg:w-[480px] mb-[48px] animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Image src="/images/monoverselogo.svg" alt="Monoverse" width={480} height={240} className="w-full h-auto drop-shadow-xl" priority />
          </div>

          {/* Headline */}
          <h1 className="font-hero text-[40px] md:text-[56px] lg:text-[68px] tracking-tight leading-[1.1] mb-[32px] text-foreground text-balance animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Understanding Reality Through<br className="hidden md:block"/> Philosophy, Science, History, Health & Technology
          </h1>

          {/* Supporting Copy */}
          <p className="font-body text-[20px] md:text-[22px] text-text-secondary leading-[1.6] max-w-[680px] mb-[40px] text-balance animate-fade-in opacity-0" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
            We publish deeply researched essays that connect ideas across disciplines, helping curious minds understand the systems shaping our world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-[80px] animate-fade-in opacity-0" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            <a href="/archive" className="font-meta text-[13px] uppercase tracking-[0.15em] text-foreground border border-border hover:border-bronze hover:text-bronze px-8 py-4 transition-all duration-300">
              Begin Reading
            </a>
            <a href="/about" className="font-meta text-[13px] uppercase tracking-[0.15em] text-text-secondary hover:text-bronze transition-all duration-300">
              Read the Manifesto
            </a>
          </div>

          {/* Edition Bar */}
          <div className="w-full flex flex-col items-center animate-fade-in opacity-0" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-4 text-bronze/40 mb-6 w-full max-w-[600px] mx-auto justify-center">
              <div className="h-px bg-bronze/30 flex-1 max-w-[120px]"></div>
              <span className="text-[18px]">✦</span>
              <div className="h-px bg-bronze/30 flex-1 max-w-[120px]"></div>
            </div>
            <div className="font-meta text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-text-secondary">
              Volume I • August 2026 • Independent Publication • Est. 2026
            </div>
            <div className="mt-12 text-bronze/40 text-[20px] animate-bounce">
              ↓
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. Editor's Note */}
      <section className="max-w-[1280px] mx-auto px-6 py-[120px]">
        <div className="max-w-[760px] mx-auto border-t border-border pt-12">
          <h2 className="font-meta text-[13px] uppercase tracking-[0.2em] text-bronze font-semibold mb-8 text-center">
            Editor&apos;s Note
          </h2>
          <div className="prose prose-lg dark:prose-invert prose-p:font-body prose-p:text-[20px] prose-p:leading-[1.8] prose-p:text-text-primary max-w-none">
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
          <div className="mt-16 text-center">
            <p className="font-signature text-4xl text-foreground mb-2">— Pratyush Mohanty</p>
            <p className="font-meta text-[13px] text-text-secondary uppercase tracking-widest">Founder & Editor</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Essay */}
      <section className="bg-surface border-y border-border py-[120px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px bg-border flex-1 max-w-[200px]" />
            <span className="font-meta text-[13px] uppercase tracking-[0.2em] text-text-secondary font-semibold">Featured Essay</span>
            <div className="h-px bg-border flex-1 max-w-[200px]" />
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
      <section className="max-w-[1280px] mx-auto px-6 py-[120px]">
        <div className="mb-16 text-center">
          <h2 className="font-section-heading text-[44px] tracking-tight">Latest Essays</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[80px]">
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
      <section className="bg-surface py-[120px] border-y border-border">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-section-heading text-[44px] tracking-tight">Topic Explorer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
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
      <section className="border-b border-border bg-background">
        <div className="max-w-[1280px] mx-auto px-6 py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-section-heading text-[44px] tracking-tight mb-8">
                About Monoverse
              </h2>
              <div className="w-12 h-px bg-text-secondary mb-8"></div>
              <p className="font-body text-[20px] text-foreground font-medium leading-[1.6]">
                Understanding reality through research, literature, philosophy, history, technology, and civilization.
              </p>
            </div>
            
            <div className="lg:col-span-7 prose prose-lg dark:prose-invert prose-p:font-body prose-p:text-[18px] prose-p:text-text-secondary prose-p:leading-[1.8]">
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
              <div className="mt-12">
                <a 
                  href="/about" 
                  className="inline-flex items-center gap-2 font-button text-[14px] uppercase tracking-[0.1em] text-text-primary hover:text-bronze transition-colors"
                >
                  Read our full philosophy
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Reading Journey (Start Here) */}
      <section className="max-w-[1280px] mx-auto px-6 py-[120px]">
        <div className="text-center max-w-[760px] mx-auto mb-[80px]">
          <h2 className="font-section-heading text-[44px] tracking-tight mb-6">Start Here</h2>
          <p className="font-body text-[20px] text-text-secondary">
            Begin your journey through Monoverse with these essential essays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mb-[80px]">
          {/* Card 1 */}
          <div className="flex flex-col h-full bg-card p-[40px] rounded-[16px] hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-border">
            <div className="text-text-secondary font-meta text-[13px] uppercase tracking-widest mb-6">Read First</div>
            <h3 className="font-article-title text-[32px] font-semibold mb-6 group-hover:text-bronze transition-colors leading-[1.2]">
              Why Monoverse Exists
            </h3>
            <p className="font-body text-[18px] text-text-secondary leading-[1.6] flex-1">
              A manifesto explaining why this publication was created and how understanding reality requires connecting philosophy, science, history, health, and technology.
            </p>
            <div className="mt-8 font-meta text-[13px] text-text-secondary flex items-center gap-2 uppercase tracking-widest">
              8 min read
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-full bg-card p-[40px] rounded-[16px] hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-border">
            <div className="text-text-secondary font-meta text-[13px] uppercase tracking-widest mb-6">Essential Concept</div>
            <h3 className="font-article-title text-[32px] font-semibold mb-6 group-hover:text-bronze transition-colors leading-[1.2]">
              The First Principles of Reality
            </h3>
            <p className="font-body text-[18px] text-text-secondary leading-[1.6] flex-1">
              An exploration of systems thinking, interconnectedness, and the hidden structures that shape our everyday lives.
            </p>
            <div className="mt-8 font-meta text-[13px] text-text-secondary flex items-center gap-2 uppercase tracking-widest">
              12 min read
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col h-full bg-card p-[40px] rounded-[16px] hover:shadow-2xl transition-all duration-300 group border border-transparent hover:border-border">
            <div className="text-text-secondary font-meta text-[13px] uppercase tracking-widest mb-6">Deep Dive</div>
            <h3 className="font-article-title text-[32px] font-semibold mb-6 group-hover:text-bronze transition-colors leading-[1.2]">
              The Age of Intelligent Machines
            </h3>
            <p className="font-body text-[18px] text-text-secondary leading-[1.6] flex-1">
              Artificial intelligence is not just another technological revolution—it is reshaping work, creativity, education, and civilization itself.
            </p>
            <div className="mt-8 font-meta text-[13px] text-text-secondary flex items-center gap-2 uppercase tracking-widest">
              15 min read
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="/archive" className="btn-minimal text-text-primary hover:text-bronze">
            Continue Reading →
          </a>
        </div>
      </section>

      {/* 8. Newsletter */}
      <Newsletter />
    </div>
  );
}
