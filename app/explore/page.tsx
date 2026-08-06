import { getAllArticles } from "@/lib/mdx";
import { ExploreFilter } from "../components/ExploreFilter";
import { SectionLabel } from "../components/SectionLabel";
import { EssayCard } from "../components/EssayCard";
import { Newsletter } from "../components/Newsletter";
import { Metadata } from "next";
import Link from "next/link";
import { Clock, Eye, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore | Monoverse",
  description: "A curated map of ideas spanning Philosophy, Science, History, Technology, and beyond.",
};

export default async function ExplorePage() {
  const articles = await getAllArticles();

  // 1. Trending Reads (Mock editorial selections)
  const trendingReads = articles.slice(0, 3);

  // 2. Editor's Picks (High-quality selections)
  const editorsPicks = articles.filter(a => a.slug.includes("silence") || a.slug.includes("consciousness")).slice(0, 2);

  // 3. Desk gate cards
  const desks = [
    {
      name: "Essays & Research",
      description: "Deep civilizational research examining philosophy, technology networks, and systems biology.",
      slug: "essays",
      count: articles.filter(a => a.domain?.toLowerCase() === "essays" || a.domain?.toLowerCase() === "philosophy").length,
    },
    {
      name: "Cinema",
      description: "Critical analysis of films, director retrospectives, and the philosophy of the moving image.",
      slug: "cinema",
      count: articles.filter(a => a.domain?.toLowerCase() === "cinema").length,
    },
    {
      name: "Community",
      description: "Reader observations, prompt responses, and peer-reviewed observations.",
      slug: "community",
      count: articles.filter(a => a.domain?.toLowerCase() === "community").length,
    }
  ];

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      {/* 1. HERO */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] md:mb-[120px] text-center">
        <h1 className="font-headline text-[64px] md:text-[96px] lg:text-[120px] leading-[1] text-foreground mb-[32px] tracking-tight">
          Explore
        </h1>
        <p className="font-body text-[20px] md:text-[24px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
          Deep civilizational research, cinema critiques, and community conversations. Discover publications instantly.
        </p>
      </section>

      {/* 2. TRENDING READS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Trending Publications" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trendingReads.map((read, idx) => (
            <Link 
              key={read.slug} 
              href={`/essay/${read.slug}`}
              className="border border-glass-border-light bg-surface-low/10 p-6 rounded-xl flex flex-col justify-between group hover:border-bronze-accent/50 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-bronze-accent">#0{idx + 1} {read.domain}</span>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-text-secondary">
                    <Clock size={10} />
                    <span>{read.readingTime}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl text-foreground group-hover:text-bronze-accent transition-colors mb-2 leading-tight">
                  {read.title}
                </h3>
                <p className="font-body text-sm text-text-secondary mb-4 line-clamp-2">
                  {read.description}
                </p>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-text-secondary flex justify-between items-center pt-4 border-t border-glass-border-light/50">
                <span>By {read.author}</span>
                <span>{read.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE DISCOVERY ENGINE (Quick Filters & Publications Feed) */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Discovery Engine" />
        <ExploreFilter initialArticles={articles} />
      </section>

      {/* 4. BROWSE BY EDITORIAL DESK */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Browse Desks" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {desks.map(desk => (
            <div key={desk.slug} className="border border-glass-border-light bg-surface-low/20 p-8 rounded-xl flex flex-col justify-between group">
              <div>
                <h3 className="font-display text-2xl text-foreground mb-3">{desk.name}</h3>
                <p className="font-body text-sm text-text-secondary mb-6 leading-relaxed">
                  {desk.description}
                </p>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-glass-border-light/50">
                <span className="font-mono text-xs text-text-secondary uppercase">{desk.count} Publications</span>
                <Link 
                  href={`/explore?desk=${desk.slug}`}
                  className="font-mono text-xs uppercase tracking-wider text-bronze-accent hover:text-foreground transition-colors"
                >
                  Open Desk →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EDITOR'S PICKS */}
      {editorsPicks.length > 0 && (
        <section className="bg-surface-low py-[80px] md:py-[120px] mb-[120px]">
          <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
            <SectionLabel label="Editor's Curated Picks" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {editorsPicks.map(pick => (
                <EssayCard
                  key={pick.slug}
                  slug={pick.slug}
                  title={pick.title}
                  description={pick.description}
                  category={pick.domain}
                  author={pick.author}
                  image={pick.image}
                  date={pick.date}
                  readTime={pick.readingTime}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. NEWSLETTER */}
      <Newsletter />
    </div>
  );
}
