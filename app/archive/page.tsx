import { getAllArticles } from "@/lib/actions/content";
import { EssayCard } from "../components/EssayCard";
import { Section } from "../components/Section";

// Stitch Design: The Archive Index
// Clean ivory surface, giant EB Garamond header, 2-column journal card layout
// "A digital sanctuary for those who seek..."

export const metadata = {
  title: "The Editorial Archive",
  description: "A complete index of Monoverse publications.",
};

export default async function ArchivePage() {
  const rawArticles = await getAllArticles();
  
  const allEssays = rawArticles.map(article => ({
    slug: article.slug,
    title: article.title,
    description: article.summary,
    author: article.authors && article.authors.length > 0 ? article.authors[0].person?.name : "Unknown",
    image: article.coverImage?.url || "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200",
    date: (article.publishedAt || article.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readingTime: { text: article.readingTime ? `${article.readingTime} min read` : "10 min read" },
    domain: article.desk?.name || "Essays",
  }));

  const sortedArticles = allEssays.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-background min-h-screen">
      <Section>
        <header className="max-w-[1440px] mx-auto px-[64px] py-[120px] border-b border-outline-variant">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-[16px] mb-[32px]">
              <span className="font-meta text-[11px] uppercase tracking-[0.2em] text-bronze font-semibold">
                Index
              </span>
              <span className="w-[40px] h-[0.5px] bg-bronze" />
            </div>
            
            <h1 className="font-display font-normal text-foreground mb-[32px] text-balance"
                style={{ fontSize: "clamp(64px, 8vw, 112px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
              The Editorial<br />Archive
            </h1>
            
            <p className="font-body text-[20px] md:text-[24px] text-text-secondary leading-[1.6] max-w-[600px] text-balance">
              A digital sanctuary for those who seek the intersection of antique wisdom and future science. 
              Curating the finest explorations in the human condition, one meticulously crafted page at a time.
            </p>
          </div>
        </header>
      </Section>

      <Section>
        <section className="py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[64px]">
            {/* Top metadata bar */}
            <div className="flex justify-between items-center mb-[40px] font-meta text-[11px] uppercase tracking-[0.15em] text-outline">
              <span>{sortedArticles.length} Documents</span>
              <div className="flex gap-[24px]">
                <span className="text-foreground cursor-pointer hover:text-bronze">Chronological</span>
                <span className="cursor-pointer hover:text-bronze">Thematic</span>
              </div>
            </div>

            {/* Stitch 2-column journal grid with 1px border map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-outline-variant border border-outline-variant">
              {sortedArticles.map((article) => (
                <EssayCard
                  key={article.slug}
                  slug={article.slug}
                  title={article.title}
                  description={article.description}
                  category={article.domain}
                  author={article.author}
                  readTime={article.readingTime.text}
                  date={article.date}
                  image={article.image}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </section>
      </Section>
    </div>
  );
}
