import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "../../components/MDXComponents";
import { ReadingProgress } from "../../components/ReadingProgress";
import { BookmarkButton } from "../../components/BookmarkButton";
import { ShareButtons } from "../../components/ShareButtons";
import { AuthorBio } from "../../components/AuthorBio";
import { DisciplineTags } from "../../components/DisciplineTags";
import { Newsletter } from "../../components/Newsletter";
import { TableOfContents } from "../../components/TableOfContents";
import { RevealImage } from "../../components/RevealImage";
import { SectionReveal } from "../../components/SectionReveal";
import Image from "next/image";

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = allArticles.find((a) => a.slug === resolvedParams.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = allArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) notFound();

  return (
    <>
      <ReadingProgress />
      
      <article className="pt-16 pb-24">
        {/* Header */}
        <header className="max-w-[760px] mx-auto px-6 text-center mb-16">
          <div className="mb-8">
            <span className="font-meta text-[13px] uppercase tracking-[0.2em] text-bronze font-semibold">{article.category}</span>
          </div>
          
          <h1 className="font-article-title text-[48px] md:text-[60px] font-semibold leading-[1.1] mb-8 text-foreground text-balance">
            {article.title}
          </h1>
          
          <p className="font-body text-[20px] text-text-secondary leading-[1.6] mb-12 text-balance">
            {article.description}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <AuthorBio author={article.author} role={article.authorRole} compact />
            
            <div className="hidden md:block w-[4px] h-[4px] rounded-full bg-border" />
            
            <div className="flex items-center gap-6 font-meta text-[13px] uppercase tracking-widest text-text-secondary">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <div className="flex items-center gap-2">
                <span>{article.readingTime.text}</span>
              </div>
            </div>
            
            <div className="hidden md:block w-[4px] h-[4px] rounded-full bg-border" />
            
            <div className="flex items-center gap-4">
              <BookmarkButton slug={article.slug} />
              <ShareButtons slug={article.slug} title={article.title} />
            </div>
          </div>
        </header>
        
        {/* Hero Image — scale 1.06 → 1 on scroll */}
        <div className="max-w-[1280px] mx-auto px-6 mb-24">
          <RevealImage className="aspect-[21/9] md:aspect-[2.5/1] rounded-[16px] relative w-full">
            <Image src={article.image} alt={article.title} fill className="object-cover" priority />
          </RevealImage>
        </div>
        
        {/* Content Area with TOC */}
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16 relative items-start justify-center">
            
            {/* Left sidebar: TOC */}
            <div className="hidden xl:block w-[240px] flex-shrink-0">
              <TableOfContents toc={article.toc} />
            </div>

            {/* Main Content */}
            <div className="max-w-[760px] w-full flex-shrink-0">
              <div className="prose prose-lg dark:prose-invert max-w-none 
                              prose-a:text-bronze prose-a:no-underline hover:prose-a:underline">
                <MDXRemote source={article.body.raw} components={mdxComponents as any} />
              </div>
              
              <SectionReveal>
                <footer className="mt-24 pt-12 border-t border-border">
                  <div className="mb-12">
                    <h4 className="font-meta text-[13px] uppercase tracking-[0.2em] text-text-secondary mb-6 font-semibold">Connecting Disciplines</h4>
                    <DisciplineTags disciplines={article.disciplines} />
                  </div>
                  <div className="my-16">
                    <AuthorBio author={article.author} role={article.authorRole} expanded />
                  </div>
                </footer>
              </SectionReveal>
            </div>
            
            {/* Right spacer for centering in grid */}
            <div className="hidden xl:block w-[240px] flex-shrink-0"></div>
          </div>
        </div>
      </article>

      <Newsletter />
    </>
  );
}
