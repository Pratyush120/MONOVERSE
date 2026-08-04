"use client";

import { EssayCard } from "./components/EssayCard";
import { Newsletter } from "./components/Newsletter";
import { Hero } from "./components/Hero";
import { SectionLabel } from "./components/SectionLabel";
import { allEssays } from "contentlayer/generated";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const DOMAINS = [
  { name: "Philosophy",        href: "/explore/philosophy",         description: "On existence, ethics, and the nature of reality." },
  { name: "Science",           href: "/explore/science",            description: "From quantum mechanics to the edge of the cosmos." },
  { name: "History",           href: "/explore/history",            description: "The past as a lens to read the present." },
  { name: "Technology",        href: "/explore/technology",         description: "On tools, systems, and what they make of us." },
  { name: "Health",            href: "/explore/health",             description: "The body as a system, not a collection of symptoms." },
  { name: "Literature",        href: "/explore/literature",         description: "Analyzing the modern mythologies of text and society." },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Parallax: Fade and move down slightly as user scrolls past
    gsap.to(".hero-parallax", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "800px top",
        scrub: 1.5,
      },
      y: 200,
      opacity: 0,
      scale: 0.95,
      ease: "power2.inOut",
    });

    // 2. Cinematic Parallax for Background Panels (Subtle Floating effect)
    const glassPanels = gsap.utils.toArray<HTMLElement>(".glass-panel");
    glassPanels.forEach((panel) => {
      gsap.fromTo(
        panel,
        { y: 30 },
        {
          y: -10,
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    });

    // Fade-up and stagger reveal for all standard sections — Cinematic timing
    const sections = gsap.utils.toArray<HTMLElement>(".gsap-reveal-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Staggered entrances for card grids — Rhythm and restraint
    const grids = gsap.utils.toArray<HTMLElement>(".gsap-stagger-grid");
    grids.forEach((grid) => {
      const cards = grid.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const sortedEssays = allEssays.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const featuredEssays = sortedEssays.filter(e => e.editorialType === "Featured");
  const editorsPicks = sortedEssays.filter(e => e.editorialType === "Editor's Pick");
  const communityEssays = sortedEssays.filter(e => e.editorialType === "Community");
  
  // Fallbacks if data not yet migrated perfectly
  const heroEssay = featuredEssays.length > 0 ? featuredEssays[0] : sortedEssays[0];
  const picksList = editorsPicks.length > 0 ? editorsPicks.slice(0, 4) : sortedEssays.slice(1, 5);

  return (
    <div ref={containerRef} className="bg-transparent overflow-hidden pb-[120px]">

      {/* 1. HERO */}
      <div className="hero-parallax will-change-transform">
        <Hero />
      </div>

      {/* 2. MANIFESTO */}
      <section className="gsap-reveal-section py-[64px] md:py-[120px] relative z-10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="glass-panel p-[32px] md:p-[64px] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[48px] lg:gap-[80px] items-start">
            <div className="lg:pt-[6px]">
              <span className="section-label block mb-[32px]">Manifesto</span>
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

      {/* 3. WHY MONOVERSE EXISTS */}
      <section className="gsap-reveal-section py-[64px] md:py-[120px] relative z-10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="glass-panel p-[32px] md:p-[80px] grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px] items-start">
            <div>
              <span className="section-label block mb-[24px]">Why Monoverse Exists</span>
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
                <Link href="/about" className="font-label text-[11px] font-[700] uppercase tracking-[0.2em] text-bronze-accent flex items-center gap-[10px] hover:text-foreground transition-colors">
                  Read our full editorial philosophy
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.33 7H11.67M7 2.33L11.67 7L7 11.67" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE KNOWLEDGE (DOMAINS) */}
      <section className="py-[64px] md:py-[160px] relative z-0 perspective-[2000px]">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="gsap-reveal-section text-center mb-[80px]">
            <SectionLabel label="Explore Knowledge" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {DOMAINS.map((domain) => (
              <Link
                key={domain.name}
                href={domain.href}
                className="glass-panel group flex flex-col p-[32px] md:p-[48px] hover:translate-y-[-10px] hover:shadow-float-high transition-transform duration-500 ease-out"
              >
                <span className="taxonomy-tag block mb-[16px]">{domain.name}</span>
                <p className="font-body text-[16px] leading-[1.65] text-text-secondary group-hover:text-foreground transition-colors duration-[200ms]">
                  {domain.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED ESSAYS */}
      {heroEssay && (
        <section className="gsap-reveal-section py-[48px] md:py-[80px] relative z-10">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <SectionLabel label="Featured Essay" />
            <EssayCard
              slug={heroEssay.slug}
              title={heroEssay.title}
              description={heroEssay.description}
              author={heroEssay.author}
              image={heroEssay.image}
              date={heroEssay.date}
              readTime={heroEssay.readingTime.text}
              category={heroEssay.domain}
              variant="featured"
            />
          </div>
        </section>
      )}

      {/* 6. EDITOR'S PICKS */}
      <section className="py-[64px] md:py-[120px] relative z-10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="gsap-reveal-section">
            <SectionLabel label="Editor's Picks" />
          </div>
          <div className="gsap-stagger-grid grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
            {picksList.map((essay) => (
              <EssayCard
                key={essay.slug}
                slug={essay.slug}
                title={essay.title}
                description={essay.description}
                author={essay.author}
                image={essay.image}
                date={essay.date}
                readTime={essay.readingTime.text}
                category={essay.domain}
              />
            ))}
          </div>
          <div className="gsap-reveal-section mt-[80px] flex justify-center">
            <Link href="/essays" className="glass-panel px-[32px] py-[16px] font-label text-[12px] uppercase tracking-[0.2em] hover:text-bronze-accent transition-colors">
              View All Essays
            </Link>
          </div>
        </div>
      </section>

      {/* 7. COLLECTIONS */}
      <section className="gsap-reveal-section py-[64px] md:py-[120px] relative z-10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="glass-panel p-[48px] md:p-[80px] flex flex-col items-center text-center">
            <SectionLabel label="Curated Collections" />
            <h2 className="font-display font-normal text-foreground mb-[24px]" style={{ fontSize: "clamp(36px, 3vw, 48px)", lineHeight: "1.15" }}>
              Journeys in Thought
            </h2>
            <p className="font-body text-[18px] leading-[1.75] text-text-secondary max-w-[600px] mb-[40px]">
              Explore deep dives into specific themes, meticulously curated to guide you from foundational concepts to advanced insights.
            </p>
            <Link href="/collections" className="btn-primary text-[12px] py-[12px] px-[32px]">
              Browse Collections
            </Link>
          </div>
        </div>
      </section>

      {/* 8. COMMUNITY ESSAYS */}
      <section className="gsap-reveal-section py-[64px] md:py-[120px] relative z-10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[56px]">
            <SectionLabel label="From the Community" />
            <Link href="/community" className="font-label text-[11px] font-[700] uppercase tracking-[0.2em] text-bronze-accent hover:text-foreground transition-colors mb-[40px] md:mb-0">
              View All Community Essays
            </Link>
          </div>
          {communityEssays.length > 0 ? (
            <div className="gsap-stagger-grid grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
              {/* map community essays here */}
            </div>
          ) : (
            <div className="glass-panel p-[32px] text-center text-text-secondary font-body">
              The community archive is currently being cultivated. Check back soon.
            </div>
          )}
        </div>
      </section>

      {/* 9. WRITE FOR MONOVERSE */}
      <section className="gsap-reveal-section py-[64px] md:py-[120px] relative z-10">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <div className="glass-panel p-[48px] md:p-[80px] flex flex-col md:flex-row justify-between items-center border border-bronze-accent/20">
            <div className="max-w-[600px] mb-[40px] md:mb-0">
              <SectionLabel label="Contribute" />
              <h2 className="font-display font-normal text-foreground mb-[24px]" style={{ fontSize: "clamp(32px, 3vw, 40px)", lineHeight: "1.15" }}>
                Write for the Archive
              </h2>
              <p className="font-body text-[18px] leading-[1.75] text-text-secondary">
                We are always seeking rigorous, thoughtful essays that explore the deeper mechanics of reality. Become a contributor and share your perspective.
              </p>
            </div>
            <Link href="/write" className="btn-primary text-[12px] py-[12px] px-[32px] flex-shrink-0">
              Submission Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="gsap-reveal-section relative z-10">
        <Newsletter />
      </section>
    </div>
  );
}
