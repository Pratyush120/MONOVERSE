import { Metadata } from "next";
import { allEssays } from "contentlayer/generated";
import { EssayCard } from "../components/EssayCard";
import { Section } from "../components/Section";
import { SectionLabel } from "../components/SectionLabel";
import { EditorNote } from "../components/EditorNote";
import { ThemeCard } from "../components/ThemeCard";
import { DirectorCard } from "../components/DirectorCard";
import { CollectionCard } from "../components/CollectionCard";
import { SubmissionSection } from "../components/SubmissionSection";
import { Newsletter } from "../components/Newsletter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cinema | Monoverse",
  description: "Stories that shaped civilizations. We study films beyond entertainment—as a mirror to our culture, history, and philosophical evolution.",
};

export default function CinemaPage() {
  // Fetch cinema essays if available, otherwise use placeholders from allEssays
  const cinemaEssays = allEssays.filter(e => e.domain?.toLowerCase() === "cinema");
  // Fallback if no specific cinema essays exist yet
  const displayEssays = cinemaEssays.length > 0 ? cinemaEssays : allEssays.slice(0, 4);
  
  const featuredEssay = displayEssays[0];
  const reviews = displayEssays.slice(1, 3);
  const analysis = displayEssays.slice(0, 4); // Just reusing for layout demonstration
  const community = displayEssays.slice(2, 4);

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: "Cinema | Monoverse",
            description: metadata.description,
            publisher: {
              "@type": "Organization",
              name: "Monoverse",
              logo: {
                "@type": "ImageObject",
                url: "https://monoverse.com/images/monoverselogo.svg",
              },
            },
          }),
        }}
      />

      {/* 1. HERO */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] md:mb-[120px] text-center">
        <h1 className="font-headline text-[64px] md:text-[96px] lg:text-[120px] leading-[1] text-foreground mb-[32px] tracking-tight">
          Cinema
        </h1>
        <p className="font-body text-[20px] md:text-[24px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
          Stories that shaped civilizations. We study films beyond entertainment—as a mirror to our culture, history, and philosophical evolution.
        </p>
      </section>

      {/* 2. EDITOR'S NOTE */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <EditorNote 
          content="Cinema is not merely an industry of entertainment; it is the most influential storytelling medium of the modern era. In this section, we treat film as a vital artifact of human history, a canvas for philosophical inquiry, and a reflection of our collective psychology. We believe that by understanding how we tell stories on screen, we can better understand ourselves."
        />
      </section>

      {/* 3. FEATURED FILM ESSAY */}
      {featuredEssay && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="Featured Film Essay" />
          <EssayCard
            slug={featuredEssay.slug}
            title={featuredEssay.title}
            description={featuredEssay.description}
            author={featuredEssay.author}
            image={featuredEssay.image}
            date={featuredEssay.date}
            readTime={featuredEssay.readingTime.text}
            category={featuredEssay.domain || "Cinema"}
            variant="featured"
          />
        </section>
      )}

      {/* 4. LATEST REVIEWS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Latest Reviews" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
          {reviews.map((essay, idx) => (
            <EssayCard
              key={idx}
              slug={essay.slug}
              title={essay.title}
              description={essay.description}
              author={essay.author}
              image={essay.image}
              date={essay.date}
              readTime={essay.readingTime.text}
              category="Review"
            />
          ))}
        </div>
      </section>

      {/* 5. FILM ANALYSIS */}
      <section className="bg-surface-low py-[80px] md:py-[120px] mb-[120px]">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <SectionLabel label="Film Analysis" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
            {analysis.map((essay, idx) => (
              <EssayCard
                key={idx}
                slug={essay.slug}
                title={essay.title}
                description={essay.description}
                author={essay.author}
                image={essay.image}
                date={essay.date}
                readTime={essay.readingTime.text}
                category="Analysis"
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. THEMES */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Explore by Theme" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          <ThemeCard title="War" href="/explore/war" />
          <ThemeCard title="Identity" href="/explore/identity" />
          <ThemeCard title="Artificial Intelligence" href="/explore/ai" />
          <ThemeCard title="Faith" href="/explore/faith" />
          <ThemeCard title="Power" href="/explore/power" />
          <ThemeCard title="Memory" href="/explore/memory" />
          <ThemeCard title="Justice" href="/explore/justice" />
          <ThemeCard title="Mortality" href="/explore/mortality" />
        </div>
      </section>

      {/* 7. DIRECTORS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Director Studies" />
        <div className="flex flex-col gap-[48px]">
          <DirectorCard
            name="Andrei Tarkovsky"
            portrait="/images/tarkovsky.jpg"
            bio="A visionary Russian filmmaker whose work is characterized by spiritual depth, long takes, and a profound philosophical inquiry into the human condition."
            signatureStyle="Poetic Cinema, Slow Pacing, Elemental Imagery"
            keyWorks={["Stalker", "Solaris", "Mirror", "The Sacrifice"]}
            href="/author/andrei-tarkovsky"
          />
          <DirectorCard
            name="Stanley Kubrick"
            portrait="/images/kubrick.jpg"
            bio="An American film director known for his meticulous attention to detail, pioneering cinematography, and dark, cynical explorations of human nature."
            signatureStyle="One-Point Perspective, Classical Music Integration, Perfectionism"
            keyWorks={["2001: A Space Odyssey", "The Shining", "A Clockwork Orange"]}
            href="/author/stanley-kubrick"
          />
        </div>
      </section>

      {/* 8. COLLECTIONS */}
      <section className="bg-surface-low py-[80px] md:py-[120px] mb-[120px]">
        <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px]">
          <SectionLabel label="Curated Collections" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
            <CollectionCard
              title="Understanding Humanity Through Cinema"
              overview="A curated journey through films that expose the raw truths of human nature, society, and our place in the cosmos."
              essayCount={12}
              readTime="3h 45m"
              image="/images/humanity-cinema.jpg"
              href="/collections/humanity-through-cinema"
            />
            <CollectionCard
              title="The Evolution of Science Fiction"
              overview="Tracing the philosophical themes of sci-fi cinema, from early existential dread to modern explorations of artificial intelligence."
              essayCount={8}
              readTime="2h 15m"
              image="/images/scifi-cinema.jpg"
              href="/collections/evolution-of-sci-fi"
            />
          </div>
        </div>
      </section>

      {/* 9. COMMUNITY ESSAYS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-[32px]">
          <SectionLabel label="Community Essays" />
          <Link href="/community" className="font-label text-[11px] font-[700] uppercase tracking-[0.2em] text-bronze-accent hover:text-foreground transition-colors mb-[40px] md:mb-0">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
          {community.map((essay, idx) => (
            <EssayCard
              key={idx}
              slug={essay.slug}
              title={essay.title}
              description={essay.description}
              author={essay.author}
              image={essay.image}
              date={essay.date}
              readTime={essay.readingTime.text}
              category="Community Essay"
            />
          ))}
        </div>
      </section>

      {/* 10. WRITE FOR CINEMA */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SubmissionSection />
      </section>

      {/* 11. NEWSLETTER */}
      <Newsletter />
    </div>
  );
}
