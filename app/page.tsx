// The Observatory — Monoverse Homepage
// Design spec:
// - Ivory #FCF9F3 background, never pure white
// - EB Garamond for display headings
// - Source Serif 4 for body
// - Libre Franklin for labels, meta, nav
// - 0px border-radius everywhere
// - Bronze #B68A4A for accents

import { ArticleCard } from "./components/ArticleCard";
import { Newsletter } from "./components/Newsletter";
import { SectionReveal } from "./components/SectionReveal";
import { Hero } from "./components/Hero";
import { allArticles } from "contentlayer/generated";

const CATEGORIES = [
  { name: "Philosophy",        href: "/category/philosophy",         description: "On existence, ethics, and the nature of reality." },
  { name: "Science",           href: "/category/science",            description: "From quantum mechanics to the edge of the cosmos." },
  { name: "History",           href: "/category/history",            description: "The past as a lens to read the present." },
  { name: "Technology",        href: "/category/technology",         description: "On tools, systems, and what they make of us." },
  { name: "Health",            href: "/category/health",             description: "The body as a system, not a collection of symptoms." },
  { name: "Pop Culture & Cinema", href: "/category/pop-culture-&-cinema", description: "Analyzing the modern mythologies of screen and society." },
];

// Clean editorial section label — no ornamental flanking lines
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-[40px] md:mb-[56px]">
      <span className="section-label">{label}</span>
    </div>
  );
}

export default function Home() {
  const sortedArticles = allArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featuredArticle = sortedArticles[0];
  const latestArticles  = sortedArticles.slice(1, 5);

  return (
    <div className="bg-background">

      {/* ═══════════════════════════════════════════════════════
          1. HERO
          ══════════════════════════════════════════════════════ */}
      <Hero />

      {/* ═══════════════════════════════════════════════════════
          2. EDITOR'S NOTE — Left-aligned, not centered
          ══════════════════════════════════════════════════════ */}
      <SectionReveal>
        <section className="border-t border-outline-variant py-[64px] md:py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[48px] lg:gap-[80px] items-start">
              {/* Left: Label + signature */}
              <div className="lg:pt-[6px]">
                <span className="section-label block mb-[32px]">Editor&apos;s Note</span>
                <p className="font-signature text-[36px] text-foreground mb-[4px]">— Pratyush Mohanty</p>
                <p className="font-meta text-[10px] uppercase tracking-[0.2em] text-text-secondary">Founder & Editor</p>
              </div>
              {/* Right: Body copy */}
              <div className="space-y-[24px]">
                <p className="font-body text-[20px] leading-[1.75] text-foreground">
                  We live in an age overflowing with information yet increasingly starved of understanding.
                  Every day, we consume thousands of opinions, headlines, and fragments of knowledge,
                  but rarely pause to ask how they connect.
                </p>
                <p className="font-body text-[20px] leading-[1.75] text-foreground font-semibold">
                  Monoverse exists to bridge those connections.
                </p>
                <p className="font-body text-[18px] leading-[1.8] text-text-secondary">
                  Here, philosophy meets science, history informs technology, and ideas are explored
                  through research instead of trends. Every essay is an invitation to think more deeply,
                  question assumptions, and understand the forces shaping our world.
                </p>
                <p className="font-body text-[18px] leading-[1.8] text-text-secondary">
                  This is not a publication built for endless scrolling.
                  It is built for careful reading, intellectual curiosity, and conversations
                  that endure long after the page is closed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════════════
          3. FEATURED ESSAY
          ══════════════════════════════════════════════════════ */}
      {featuredArticle && (
        <SectionReveal delay={80}>
          <section className="bg-surface-low border-y border-outline-variant py-[48px] md:py-[80px]">
            <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
              <SectionLabel label="Featured Essay" />
              <ArticleCard
                {...featuredArticle}
                readTime={featuredArticle.readingTime.text}
                variant="featured"
              />
            </div>
          </section>
        </SectionReveal>
      )}

      {/* ═══════════════════════════════════════════════════════
          4. LATEST ESSAYS — 2-column grid, spaced cards
          ══════════════════════════════════════════════════════ */}
      <SectionReveal delay={80}>
        <section className="py-[64px] md:py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <SectionLabel label="Latest Essays" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
              {latestArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  {...article}
                  readTime={article.readingTime.text}
                  variant="default"
                />
              ))}
            </div>
            <div className="mt-[40px] flex justify-start">
              <a href="/archive" className="btn-ghost">
                View the Full Archive
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════════════
          5. PULL QUOTE — no diamond ornaments, just clean rule
          ══════════════════════════════════════════════════════ */}
      <SectionReveal delay={80}>
        <section className="bg-surface-low border-y border-outline-variant py-[64px] md:py-[120px]">
          <div className="max-w-[760px] mx-auto px-[24px] md:px-[64px]">
            <div className="w-[40px] h-px bg-bronze mb-[40px]" />
            <blockquote
              className="font-quote italic font-normal text-foreground leading-[1.4] mb-[40px]"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.01em" }}
            >
              &ldquo;The observatory is not a room, but a perspective — a lens
              through which we view the permanence of ideas.&rdquo;
            </blockquote>
            <div className="w-[40px] h-px bg-outline-variant" />
          </div>
        </section>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════════════
          6. TOPIC EXPLORER — Taxonomy grid
          ══════════════════════════════════════════════════════ */}
      <SectionReveal delay={80}>
        <section className="py-[64px] md:py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <SectionLabel label="Explore by Subject" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] md:gap-[64px]">
              {CATEGORIES.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.href}
                  className="group flex flex-col border-t border-outline-variant pt-[24px]"
                >
                  <span className="taxonomy-tag block mb-[16px]">{cat.name}</span>
                  <p className="font-body text-[16px] leading-[1.65] text-text-secondary group-hover:text-foreground transition-colors duration-[200ms]">
                    {cat.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════════════
          7. ABOUT MONOVERSE — 2-column editorial layout
          ══════════════════════════════════════════════════════ */}
      <SectionReveal delay={80}>
        <section className="bg-surface-low border-y border-outline-variant py-[64px] md:py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] items-start">
              <div>
                <span className="section-label block mb-[24px]">About Monoverse</span>
                <h2 className="font-display font-normal text-foreground mb-[24px]"
                  style={{ fontSize: "clamp(36px, 3vw, 48px)", lineHeight: "1.15", letterSpacing: "-0.015em" }}>
                  Understanding Reality
                </h2>
                <div className="w-[40px] h-px bg-bronze mb-[24px]" />
                <p className="font-body text-[18px] leading-[1.75] text-foreground font-medium">
                  Through research, literature, philosophy, history, technology, and the study of civilizations.
                </p>
              </div>
              <div className="space-y-[20px]">
                <p className="font-body text-[17px] leading-[1.8] text-text-secondary">
                  We live in an age of unlimited information and diminishing understanding.
                  Every day, thousands of articles explain <em>what</em> happened. Few ask <em>why</em> it happened.
                  Even fewer connect today&apos;s headlines with centuries of history, human psychology,
                  philosophy, economics, science, and the long arc of civilization.
                </p>
                <p className="font-body text-[17px] leading-[1.8] text-text-secondary">
                  Monoverse exists to close that gap. This is an independent research publication
                  dedicated to exploring the ideas that shape our world — not through ideology or
                  sensationalism, but through careful inquiry, evidence, and first-principles thinking.
                </p>
                <div className="pt-[16px]">
                  <a href="/about" className="btn-ghost inline-flex items-center gap-[10px]">
                    Read our full philosophy
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.33 7H11.67M7 2.33L11.67 7L7 11.67" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════════════
          8. START HERE — Reading Journey
          ══════════════════════════════════════════════════════ */}
      <SectionReveal delay={80}>
        <section className="py-[64px] md:py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <SectionLabel label="Start Here" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[64px]">
              {[
                {
                  label: "Read First",
                  title: "Why Monoverse Exists",
                  desc: "A manifesto explaining why this publication was created and how understanding reality requires connecting philosophy, science, history, health, and technology.",
                  time: "8 min read",
                  href: "/about",
                },
                {
                  label: "Essential Concept",
                  title: "The First Principles of Reality",
                  desc: "An exploration of systems thinking, interconnectedness, and the hidden structures that shape our everyday lives.",
                  time: "12 min read",
                  href: "/archive",
                },
                {
                  label: "Deep Dive",
                  title: "The Age of Intelligent Machines",
                  desc: "Artificial intelligence is not just another technological revolution — it is reshaping work, creativity, education, and civilization itself.",
                  time: "15 min read",
                  href: "/category/technology",
                },
              ].map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group flex flex-col pt-[24px] border-t border-outline-variant"
                >
                  <span className="taxonomy-tag block mb-[16px]">{card.label}</span>
                  <h3 className="font-display text-[28px] font-normal leading-[1.25] text-foreground group-hover:text-bronze transition-colors duration-[200ms] mb-[16px]">
                    {card.title}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.7] text-text-secondary flex-1">{card.desc}</p>
                  <div className="font-meta text-[10px] uppercase tracking-[0.15em] text-outline mt-[24px] pt-[16px] border-t border-outline-variant">
                    {card.time}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════════════
          9. NEWSLETTER
          ══════════════════════════════════════════════════════ */}
      <SectionReveal delay={80}>
        <Newsletter />
      </SectionReveal>
    </div>
  );
}
