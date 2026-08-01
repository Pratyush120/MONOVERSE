// The Observatory — Monoverse Homepage
// Faithful implementation of Stitch Design: The Monoverse System
// 
// Design spec: 
// - Ivory #FCF9F3 background, never pure white
// - EB Garamond for display headings (84px, 400 weight, -0.02em tracking)
// - Source Serif 4 for body (18px, 32px line-height)
// - Libre Franklin for labels, meta, nav (uppercase, 0.15em tracking)
// - 0px border-radius everywhere
// - Bronze #B68A4A for accents
// - Paper grain at 8% opacity
// - Astronomical construction lines at 5-8% opacity
// - Cards = journal pages with 1px ghost charcoal border
// - Category labels = (Philosophy) format with parentheses

import { ArticleCard } from "./components/ArticleCard";
import { Newsletter } from "./components/Newsletter";
import { SectionReveal } from "./components/SectionReveal";
import { HeroScrollEffect } from "./components/HeroScrollEffect";
import { ComplexBackground } from "./components/ComplexBackground";
import { allArticles } from "contentlayer/generated";
import Image from "next/image";

// Stitch: Categories with parenthetical taxonomy display
const CATEGORIES = [
  { name: "Philosophy",   href: "/category/philosophy",   description: "On existence, ethics, and the nature of reality." },
  { name: "Science",      href: "/category/science",      description: "From quantum mechanics to the edge of the cosmos." },
  { name: "History",      href: "/category/history",      description: "The past as a lens to read the present." },
  { name: "Technology",   href: "/category/technology",   description: "On tools, systems, and what they make of us." },
  { name: "Health",       href: "/category/health",       description: "The body as a system, not a collection of symptoms." },
  { name: "The Marginalia", href: "/about",               description: "Notes from the editor, dispatches from the margins." },
];

// Stitch: Ornamental diamond divider
function OrnamentDivider({ label }: { label?: string }) {
  return (
    <div className="ornament-divider my-0 w-full">
      {label ? (
        <span className="font-label text-[11px] font-[700] uppercase tracking-[0.2em] text-text-secondary px-[16px] whitespace-nowrap">
          {label}
        </span>
      ) : (
        <span className="text-bronze text-[14px] px-[16px]">◆</span>
      )}
    </div>
  );
}

export default function Home() {
  const sortedArticles = allArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featuredArticle = sortedArticles[0];
  const latestArticles  = sortedArticles.slice(1, 5);
  const moreArticles    = sortedArticles.slice(5, 7);

  return (
    <div className="bg-background">

      {/* ═══════════════════════════════════════════════════════
          1. HERO — The Observatory
          EB Garamond display, Ivory base, paper grain + astro SVG
          ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-start pt-[160px] pb-[160px]">
        
        {/* Background system: Dark charcoal + grain + astronomical SVG + soft light (max 7%) */}
        <div className="absolute inset-0 bg-[#111111] z-0">
          <div
            className="absolute inset-0 paper-grain opacity-[0.06]"
            style={{ mixBlendMode: "overlay" }}
          />
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            style={{ opacity: 0.04, color: "#EDE8DF" }}
          >
            <circle cx="50%" cy="40%" r="480" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="50%" cy="40%" r="300" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="3 14" />
            <circle cx="50%" cy="40%" r="140" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0%" y1="40%" x2="100%" y2="40%" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <div
            className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(237,232,223,0.07) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] px-[64px] flex flex-col items-center text-center">
          
          {/* Logo — SVG masthead, 290px desktop */}
          <div
            className="mb-[56px] opacity-0"
            style={{ animation: "fade-in 900ms ease-in forwards", animationDelay: "0ms" }}
          >
            <Image
              src="/images/monoverselogo.svg"
              alt="Monoverse"
              width={290}
              height={80}
              className="w-[170px] md:w-[220px] lg:w-[290px] h-auto brightness-0 invert"
              priority
            />
          </div>

          {/* Display headline — Ramillas (var(--font-display)), 84-92px */}
          <h1
            className="font-display font-normal text-[#EDE8DF] opacity-0"
            style={{
              fontSize: "clamp(48px, 6vw, 92px)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              marginBottom: "36px",
              animation: "fade-in 900ms ease-in forwards",
              animationDelay: "200ms"
            }}
          >
            Understanding Reality
          </h1>

          {/* Supporting paragraph — Pure Serif Pro (var(--font-body)), 22px */}
          <p
            className="font-body text-[#B8AFA4] opacity-0"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              maxWidth: "620px",
              marginBottom: "48px",
              animation: "fade-in 900ms ease-in forwards",
              animationDelay: "400ms"
            }}
          >
            An independent research publication dedicated to philosophy, science, history, technology, and the forces that shape civilizations.
          </p>

          {/* CTA buttons — Thin borders, 20px gap */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-[20px] mb-[72px] opacity-0"
            style={{ animation: "fade-in 900ms ease-in forwards", animationDelay: "600ms" }}
          >
            <a href="/archive" className="font-nav text-[14px] uppercase tracking-[0.15em] px-[28px] py-[14px] border border-[#EDE8DF] text-[#EDE8DF] hover:bg-bronze hover:border-bronze hover:text-white transition-all duration-[250ms]">
              Begin Reading
            </a>
            <a href="/about" className="font-nav text-[14px] uppercase tracking-[0.15em] px-[28px] py-[14px] border border-[#3D3630] text-[#B8AFA4] hover:border-bronze hover:text-bronze transition-all duration-[250ms]">
              Read the Manifesto
            </a>
          </div>

          {/* Editorial Divider */}
          <div
            className="flex items-center justify-center gap-[16px] mb-[24px] opacity-0"
            style={{ animation: "fade-in 900ms ease-in forwards", animationDelay: "800ms" }}
          >
            <span className="w-[48px] h-[0.5px] bg-[#B8AFA4]" />
            <span className="text-bronze text-[14px]">✦</span>
            <span className="w-[48px] h-[0.5px] bg-[#B8AFA4]" />
          </div>

          {/* Publication Line — Ovo (var(--font-meta)) */}
          <div
            className="font-meta text-[12px] text-[#8A7B6E] tracking-widest opacity-0"
            style={{ animation: "fade-in 900ms ease-in forwards", animationDelay: "800ms" }}
          >
            Volume I • Independent Publication • Est. 2026
          </div>

        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-[80px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[12px] opacity-0"
          style={{ animation: "fade-in 900ms ease-in forwards", animationDelay: "800ms" }}
        >
          <span className="font-nav text-[10px] uppercase tracking-[0.2em] text-[#8A7B6E]">
            Scroll
          </span>
          <span className="text-[#8A7B6E] text-[12px]">↓</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. EDITOR'S NOTE
          Max 760px, Source Serif 4 body, centered
          ══════════════════════════════════════════════════════ */}
      <SectionReveal>
        <section className="border-t border-outline-variant py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[64px]">
            <div className="max-w-[680px] mx-auto">
              <div className="font-label text-[11px] font-[700] uppercase tracking-[0.2em] text-bronze mb-[32px] text-center">
                Editor&apos;s Note
              </div>
              <div className="space-y-[24px] text-center">
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
              <div className="mt-[48px] text-center">
                <p className="font-signature text-[40px] text-foreground mb-[4px]">— Pratyush Mohanty</p>
                <p className="font-meta text-[11px] uppercase tracking-[0.2em] text-text-secondary">Founder & Editor</p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════════════
          3. FEATURED ESSAY
          Full-width with large image, ornament divider header
          ══════════════════════════════════════════════════════ */}
      {featuredArticle && (
        <SectionReveal delay={80}>
          <section className="bg-surface-low border-y border-outline-variant py-[80px]">
            <div className="max-w-[1440px] mx-auto px-[64px]">
              <div className="flex items-center justify-center mb-[56px]">
                <OrnamentDivider label="Featured Essay" />
              </div>
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
          4. LATEST ESSAYS — 2-column journal grid
          ══════════════════════════════════════════════════════ */}
      <SectionReveal delay={80}>
        <section className="py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[64px]">
            <div className="flex items-center mb-[56px]">
              <OrnamentDivider label="Latest Essays" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-outline-variant border border-outline-variant">
              {latestArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  {...article}
                  readTime={article.readingTime.text}
                  variant="default"
                />
              ))}
            </div>
            <div className="mt-[40px] flex justify-center">
              <a href="/archive" className="btn-ghost">
                View the Full Archive
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════════════
          5. PULL QUOTE — Large EB Garamond italic
          Centered, max 760px, bronze rule above/below
          ══════════════════════════════════════════════════════ */}
      <SectionReveal delay={80}>
        <section className="bg-surface-low border-y border-outline-variant py-[120px]">
          <div className="max-w-[760px] mx-auto px-[64px] text-center">
            <div className="text-bronze text-[18px] mb-[32px]">◆</div>
            <blockquote
              className="font-quote italic font-normal text-foreground leading-[1.4] mb-[32px]"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.01em" }}
            >
              &ldquo;The observatory is not a room, but a perspective — a lens
              through which we view the permanence of ideas.&rdquo;
            </blockquote>
            <div className="text-bronze text-[18px]">◆</div>
          </div>
        </section>
      </SectionReveal>

      {/* ═══════════════════════════════════════════════════════
          6. TOPIC EXPLORER — Taxonomy grid
          Labels in parentheses per Stitch spec
          ══════════════════════════════════════════════════════ */}
      <SectionReveal delay={80}>
        <section className="py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[64px]">
            <div className="flex items-center mb-[56px]">
              <OrnamentDivider label="Explore by Subject" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-outline-variant border border-outline-variant">
              {CATEGORIES.map((cat) => (
                <a
                  key={cat.name}
                  href={cat.href}
                  className="group bg-background p-[40px] hover:bg-surface-low transition-colors duration-[250ms]"
                >
                  <span className="taxonomy-tag block mb-[16px]">{cat.name}</span>
                  <p className="font-body text-[16px] leading-[1.65] text-text-secondary group-hover:text-foreground transition-colors duration-[180ms]">
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
        <section className="bg-surface-low border-y border-outline-variant py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[64px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
              <div>
                <div className="font-label text-[11px] font-[700] uppercase tracking-[0.2em] text-bronze mb-[24px]">
                  About Monoverse
                </div>
                <h2 className="font-display font-normal text-foreground mb-[24px]"
                  style={{ fontSize: "clamp(36px, 3vw, 48px)", lineHeight: "1.15", letterSpacing: "-0.015em" }}>
                  Understanding Reality
                </h2>
                <div className="w-[40px] h-[0.5px] bg-bronze mb-[24px]" />
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
        <section className="py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[64px]">
            <div className="flex items-center mb-[56px]">
              <OrnamentDivider label="Start Here" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-outline-variant border border-outline-variant mb-[40px]">
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
                  className="group bg-background p-[40px] flex flex-col hover:bg-surface-low transition-colors duration-[250ms]"
                >
                  <span className="taxonomy-tag block mb-[16px]">{card.label}</span>
                  <h3 className="font-display text-[28px] font-normal leading-[1.25] text-foreground group-hover:text-bronze transition-colors duration-[180ms] mb-[16px]">
                    {card.title}
                  </h3>
                  <p className="font-body text-[16px] leading-[1.7] text-text-secondary flex-1">{card.desc}</p>
                  <div className="font-meta text-[11px] uppercase tracking-[0.12em] text-outline mt-[24px] pt-[16px] border-t border-outline-variant">
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
