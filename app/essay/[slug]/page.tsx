import { notFound } from "next/navigation";
import { allEssays } from "contentlayer/generated";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../components/MDXComponents";
import { ReadingProgress } from "../../components/ReadingProgress";
import { BookmarkButton } from "../../components/BookmarkButton";
import { ShareButtons } from "../../components/ShareButtons";
import { AuthorBio } from "../../components/AuthorBio";
import { TopicTags } from "../../components/TopicTags";
import { Newsletter } from "../../components/Newsletter";
import { TableOfContents } from "../../components/TableOfContents";
import { RevealImage } from "../../components/RevealImage";
import { Section } from "../../components/Section";
import Image from "next/image";

export async function generateStaticParams() {
  return allEssays.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = allEssays.find((a) => a.slug === resolvedParams.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = allEssays.find((a) => a.slug === resolvedParams.slug);

  if (!article) notFound();

  // Stitch Design: Drop cap logic wrapper
  // We'll apply the .drop-cap class to the markdown container
  
  return (
    <div className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            image: article.image ? `https://monoverse.com${article.image}` : undefined,
            datePublished: new Date(article.date).toISOString(),
            author: [
              {
                "@type": "Person",
                name: article.author,
              },
            ],
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
      <ReadingProgress 
        title={article.title} 
        readingTime={article.readingTime.text} 
      />
      
      {/* ═══════════════════════════════════════════════════════
          ARTICLE HEADER
          EB Garamond 84px max, centered, Libre Franklin meta
          ══════════════════════════════════════════════════════ */}
      <article className="pt-[120px] pb-[120px]">
        <header className="max-w-[960px] mx-auto px-[64px] text-center mb-[80px]">
          
          <div className="mb-[32px] flex items-center justify-center gap-[16px]">
            <span className="text-bronze text-[14px]">◆</span>
            <span className="font-meta text-[11px] uppercase tracking-[0.2em] text-bronze font-semibold">
              Vol. I — Issue 1
            </span>
            <span className="text-bronze text-[14px]">◆</span>
          </div>
          
          <h1 className="font-display font-normal text-foreground mb-[32px] text-balance"
              style={{ fontSize: "clamp(48px, 6vw, 84px)", lineHeight: "1.1", letterSpacing: "-0.01em" }}>
            {article.title}
          </h1>
          
          <p className="font-body text-[20px] md:text-[24px] text-text-secondary leading-[1.6] mb-[48px] max-w-[760px] mx-auto text-balance">
            {article.description}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-[24px]">
            <div className="flex items-center gap-[16px] font-meta text-[11px] uppercase tracking-[0.15em] text-outline">
              <span className="text-foreground">{article.author}</span>
              <span className="text-outline-variant text-[8px]">◆</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <span className="text-outline-variant text-[8px]">◆</span>
              <span>{article.readingTime.text}</span>
            </div>
          </div>
        </header>
        
        {/* ═══════════════════════════════════════════════════════
            HERO IMAGE
            0px radius (orthogonal), full width of container
            ══════════════════════════════════════════════════════ */}
        <div className="max-w-[1440px] mx-auto px-[64px] mb-[120px]">
          <RevealImage className="aspect-[21/9] relative w-full border border-outline-variant">
            <Image src={article.image} alt={article.title} fill className="object-cover" priority />
          </RevealImage>
        </div>
        
        {/* ═══════════════════════════════════════════════════════
            CONTENT AREA
            Source Serif 4, drop caps, wide margins
            ══════════════════════════════════════════════════════ */}
        <div className="max-w-[1440px] mx-auto px-[64px]">
          <div className="flex flex-col xl:flex-row gap-[64px] relative items-start justify-center">
            
            {/* Left sidebar: Navigation / TOC */}
            <div className="hidden xl:block w-[280px] flex-shrink-0 sticky top-[120px]">
              <TableOfContents toc={article.toc} />
            </div>

            {/* Main Content */}
            <div className="max-w-[680px] w-full flex-shrink-0">
              <Section className="prose prose-lg dark:prose-invert prose-headings:font-display prose-a:text-bronze-accent mx-auto">
                <MDXRemote source={article.body.raw} components={mdxComponents as any} />
              </Section>
              
              <Section>
                <footer className="mt-[120px] pt-[64px] border-t border-outline-variant">
                  <div className="flex justify-between items-center mb-[48px]">
                    <div className="flex items-center gap-[16px]">
                      <BookmarkButton slug={article.slug} />
                      <ShareButtons slug={article.slug} title={article.title} />
                    </div>
                  </div>
                  
                  <div className="mb-[64px]">
                    <h4 className="font-meta text-[11px] uppercase tracking-[0.2em] text-outline mb-[24px] font-semibold">
                      Connecting Disciplines
                    </h4>
                    <TopicTags disciplines={article.disciplines} />
                  </div>
                  
                  <div className="my-[64px]">
                    <AuthorBio author={article.author} role={article.authorRole} expanded />
                  </div>
                </footer>
              </Section>
            </div>
            
            {/* Right sidebar: The Marginalia (Citations/Notes) */}
            <div className="hidden xl:block w-[280px] flex-shrink-0 sticky top-[120px]">
              <div className="font-label text-[10px] font-[700] uppercase tracking-[0.2em] text-outline mb-[24px]">
                The Marginalia
              </div>
              <div className="text-[14px] font-body leading-[1.6] text-text-secondary p-[24px] bg-surface-low border border-outline-variant">
                <em>Editor&apos;s Note:</em> Citations, scholarly references, and cross-disciplinary connections appear here during reading, bringing the depth of the Monoverse archive to the forefront.
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
