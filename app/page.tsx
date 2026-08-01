import { ArticleCard } from "./components/ArticleCard";
import { CategoryCard } from "./components/CategoryCard";
import { Newsletter } from "./components/Newsletter";
import { SectionReveal } from "./components/SectionReveal";
import { ComplexBackground } from "./components/ComplexBackground";
import { HeroScrollEffect } from "./components/HeroScrollEffect";
import { allArticles } from "contentlayer/generated";
import Image from "next/image";

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

      {/* ─── 1. HERO ───────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">

        {/* Multi-layer drifting background */}
        <ComplexBackground />

        {/* Scroll-aware logo scale + headline translate */}
        <HeroScrollEffect>
          <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center text-center w-full pt-[160px] pb-[80px]">

            {/* Logo — fades in first at 0.2s */}
            <div
              data-hero-logo
              className="w-[240px] md:w-[360px] lg:w-[480px] mb-[48px] animate-fade-in opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <Image
                src="/images/monoverselogo.svg"
                alt="Monoverse"
                width={480}
                height={240}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Headline — fades in at 0.6s */}
            <h1
              data-hero-headline
              className="font-hero text-[40px] md:text-[56px] lg:text-[68px] tracking-tight leading-[1.1] mb-[32px] text-foreground text-balance animate-fade-in opacity-0"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              Understanding Reality Through
              <br className="hidden md:block" />
              {" "}Philosophy, Science, History, Health & Technology
            </h1>

            {/* Supporting copy — fades in at 1.0s */}
            <p
              className="font-body text-[20px] md:text-[22px] text-text-secondary leading-[1.6] max-w-[680px] mb-[40px] text-balance animate-fade-in opacity-0"
              style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}
            >
              We publish deeply researched essays that connect ideas across disciplines, helping curious minds understand the systems shaping our world.
            </p>

            {/* Buttons — fade in at 1.4s, thin border, bronze hover at 180ms */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-[80px] animate-fade-in opacity-0"
              style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
            >
              <a
                href="/archive"
                className="font-meta text-[13px] uppercase tracking-[0.15em] text-foreground border border-border hover:border-bronze hover:text-bronze px-8 py-4 transition-colors duration-[180ms]"
              >
                Begin Reading
              </a>
              <a
                href="/about"
                className="font-meta text-[13px] uppercase tracking-[0.15em] text-text-secondary hover:text-bronze transition-colors duration-[180ms]"
              >
                Read the Manifesto
              </a>
            </div>

            {/* Edition bar + scroll indicator — fades in last at 1.8s */}
            <div
              className="w-full flex flex-col items-center animate-fade-in opacity-0"
              style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-4 mb-6 w-full max-w-[600px] mx-auto justify-center">
                <div className="h-px bg-bronze/30 flex-1 max-w-[120px]" />
                <span className="text-[16px] text-bronze/50">✦</span>
                <div className="h-px bg-bronze/30 flex-1 max-w-[120px]" />
              </div>
              <div className="font-meta text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-text-secondary">
                Volume I • August 2026 • Independent Publication • Est. 2026
              </div>
              <div className="mt-12 text-bronze/30 text-[18px] animate-bounce">↓</div>
            </div>

          </div>
        </HeroScrollEffect>
      </section>

      {/* ─── 2. EDITOR'S NOTE ────────────────────────── */}
      <SectionReveal>
        <section className="max-w-[1280px] mx-auto px-6 py-[120px]">
          <div className="max-w-[760px] mx-auto border-t border-border pt-12">
            <h2 className="font-meta text-[13px] uppercase tracking-[0.2em] text-bronze font-semibold mb-8 text-center">
              Editor&apos;s Note
            </h2>
            <div className="prose prose-lg dark:prose-invert prose-p:font-body prose-p:text-[20px] prose-p:leading-[1.8] prose-p:text-text-primary max-w-none">
              <p>
                We live in an age overflowing with information yet increasingly starved of understanding. Every day, we consume thousands of opinions, headlines, and fragments of knowledge, but rarely pause to ask how they connect.
              </p>
              <p>Monoverse exists to bridge those connections.</p>
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
      </SectionReveal>

      {/* ─── 3. FEATURED ESSAY ────────────────────────── */}
      <SectionReveal delay={80}>
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
      </SectionReveal>

      {/* ─── 4. LATEST ESSAYS ─────────────────────────── */}
      <SectionReveal delay={80}>
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
      </SectionReveal>

      {/* ─── 5. TOPIC EXPLORER ────────────────────────── */}
      <SectionReveal delay={80}>
        <section className="bg-surface py-[120px] border-y border-border">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="font-section-heading text-[44px] tracking-tight">Topic Explorer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {CATEGORIES.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── 6. ABOUT MONOVERSE ───────────────────────── */}
      <SectionReveal delay={80}>
        <section className="border-b border-border bg-background">
          <div className="max-w-[1280px] mx-auto px-6 py-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              <div className="lg:col-span-5">
                <h2 className="font-section-heading text-[44px] tracking-tight mb-8">About Monoverse</h2>
                <div className="w-12 h-px bg-text-secondary mb-8" />
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
                    className="inline-flex items-center gap-2 font-button text-[14px] uppercase tracking-[0.1em] text-text-primary hover:text-bronze transition-colors duration-[180ms]"
                  >
                    Read our full philosophy
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── 7. START HERE ────────────────────────────── */}
      <SectionReveal delay={80}>
        <section className="max-w-[1280px] mx-auto px-6 py-[120px]">
          <div className="text-center max-w-[760px] mx-auto mb-[80px]">
            <h2 className="font-section-heading text-[44px] tracking-tight mb-6">Start Here</h2>
            <p className="font-body text-[20px] text-text-secondary">
              Begin your journey through Monoverse with these essential essays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mb-[80px]">
            {[
              {
                label: "Read First",
                title: "Why Monoverse Exists",
                desc: "A manifesto explaining why this publication was created and how understanding reality requires connecting philosophy, science, history, health, and technology.",
                time: "8 min read",
              },
              {
                label: "Essential Concept",
                title: "The First Principles of Reality",
                desc: "An exploration of systems thinking, interconnectedness, and the hidden structures that shape our everyday lives.",
                time: "12 min read",
              },
              {
                label: "Deep Dive",
                title: "The Age of Intelligent Machines",
                desc: "Artificial intelligence is not just another technological revolution—it is reshaping work, creativity, education, and civilization itself.",
                time: "15 min read",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col h-full bg-card p-[40px] rounded-[16px] group border border-transparent hover:border-border transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-xl"
                style={{ willChange: "transform" }}
              >
                <div className="text-text-secondary font-meta text-[13px] uppercase tracking-widest mb-6">{card.label}</div>
                <h3 className="font-article-title text-[32px] font-semibold mb-6 group-hover:text-bronze transition-colors duration-[180ms] leading-[1.2]">
                  {card.title}
                </h3>
                <p className="font-body text-[18px] text-text-secondary leading-[1.6] flex-1">{card.desc}</p>
                <div className="mt-8 font-meta text-[13px] text-text-secondary uppercase tracking-widest">{card.time}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/archive"
              className="font-meta text-[13px] uppercase tracking-[0.15em] text-text-secondary border border-border hover:border-bronze hover:text-bronze px-8 py-4 transition-colors duration-[180ms]"
            >
              Continue Reading
            </a>
          </div>
        </section>
      </SectionReveal>

      {/* ─── 8. NEWSLETTER ────────────────────────────── */}
      <SectionReveal delay={80}>
        <Newsletter />
      </SectionReveal>

    </div>
  );
}
