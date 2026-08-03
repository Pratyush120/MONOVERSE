"use client";

// The Observatory — Monoverse Homepage
// Design spec: Antigravity UI & Motion Design
// - Deep background with glassmorphic cards
// - Spatial 3D layouts, GSAP ScrollTrigger

import { ArticleCard } from "./components/ArticleCard";
import { Newsletter } from "./components/Newsletter";
import { Hero } from "./components/Hero";
import { allArticles } from "contentlayer/generated";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CATEGORIES = [
  { name: "Philosophy",        href: "/category/philosophy",         description: "On existence, ethics, and the nature of reality." },
  { name: "Science",           href: "/category/science",            description: "From quantum mechanics to the edge of the cosmos." },
  { name: "History",           href: "/category/history",            description: "The past as a lens to read the present." },
  { name: "Technology",        href: "/category/technology",         description: "On tools, systems, and what they make of us." },
  { name: "Health",            href: "/category/health",             description: "The body as a system, not a collection of symptoms." },
  { name: "Pop Culture & Cinema", href: "/category/pop-culture-&-cinema", description: "Analyzing the modern mythologies of screen and society." },
];

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-[40px] md:mb-[56px] text-center md:text-left">
      <span className="section-label">{label}</span>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-up and stagger reveal for all standard sections
    const sections = gsap.utils.toArray<HTMLElement>(".gsap-reveal-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60, rotateX: 5 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Staggered entrances for card grids
    const grids = gsap.utils.toArray<HTMLElement>(".gsap-stagger-grid");
    grids.forEach((grid) => {
      const cards = grid.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Isometric Scroll Parallax for Taxonomy Grid
    const isoGrid = document.querySelector(".iso-grid");
    if (isoGrid) {
      gsap.to(isoGrid, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: isoGrid,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const sortedArticles = allArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featuredArticle = sortedArticles[0];
  const latestArticles  = sortedArticles.slice(1, 5);

  return (
    <div ref={containerRef} className="bg-transparent overflow-hidden pb-[120px]">

      {/* 1. HERO */}
      <Hero />

      {/* 2. EDITOR'S NOTE */}
      <section className="gsap-reveal-section py-[64px] md:py-[120px] relative z-10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="glass-panel p-[32px] md:p-[64px] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[48px] lg:gap-[80px] items-start">
            <div className="lg:pt-[6px]">
              <span className="section-label block mb-[32px]">Editor&apos;s Note</span>
              <p className="font-signature text-[36px] text-foreground mb-[4px]">— Pratyush Mohanty</p>
              <p className="font-meta text-[10px] uppercase tracking-[0.2em] text-text-secondary">Founder & Editor</p>
            </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ESSAY */}
      {featuredArticle && (
        <section className="gsap-reveal-section py-[48px] md:py-[80px] relative z-10">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <SectionLabel label="Featured Essay" />
            <ArticleCard
              {...featuredArticle}
              readTime={featuredArticle.readingTime.text}
              variant="featured"
            />
          </div>
        </section>
      )}

      {/* 4. LATEST ESSAYS */}
      <section className="py-[64px] md:py-[120px] relative z-10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="gsap-reveal-section">
            <SectionLabel label="Latest Essays" />
          </div>
          <div className="gsap-stagger-grid grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                {...article}
                readTime={article.readingTime.text}
                variant="default"
              />
            ))}
          </div>
          <div className="gsap-reveal-section mt-[80px] flex justify-center">
            <a href="/archive" className="glass-panel px-[32px] py-[16px] font-label text-[12px] uppercase tracking-[0.2em] hover:text-bronze-accent transition-colors">
              View the Full Archive
            </a>
          </div>
        </div>
      </section>

      {/* 5. TOPIC EXPLORER — ISOMETRIC 3D GRID */}
      <section className="py-[64px] md:py-[160px] relative z-0 perspective-[2000px]">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="gsap-reveal-section text-center mb-[80px]">
            <SectionLabel label="Explore by Subject" />
          </div>
          {/* Topic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className="glass-panel group flex flex-col p-[32px] md:p-[48px] hover:translate-y-[-10px] hover:shadow-float-high transition-transform duration-500 ease-out"
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

      {/* 6. ABOUT MONOVERSE */}
      <section className="gsap-reveal-section py-[64px] md:py-[120px] relative z-10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="glass-panel p-[32px] md:p-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] items-start">
            <div>
              <span className="section-label block mb-[24px]">About Monoverse</span>
              <h2 className="font-display font-normal text-foreground mb-[24px]"
                style={{ fontSize: "clamp(36px, 3vw, 48px)", lineHeight: "1.15", letterSpacing: "-0.015em" }}>
                Understanding Reality
              </h2>
              <div className="w-[40px] h-px bg-bronze-accent mb-[24px]" />
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
              <div className="pt-[16px]">
                <a href="/about" className="font-label text-[11px] font-[700] uppercase tracking-[0.2em] text-bronze-accent flex items-center gap-[10px] hover:text-foreground transition-colors">
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

      {/* 7. NEWSLETTER */}
      <section className="gsap-reveal-section relative z-10">
        <Newsletter />
      </section>
    </div>
  );
}
