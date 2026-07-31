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
      
      <article className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">{article.category}</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8 text-balance">
            {article.title}
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-text-secondary leading-relaxed mb-10 text-balance">
            {article.description}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <AuthorBio author={article.author} role={article.authorRole} compact />
            
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            
            <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <div className="flex items-center gap-2">
                <span>{article.readingTime.text}</span>
              </div>
            </div>
            
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            
            <div className="flex items-center gap-4">
              <BookmarkButton slug={article.slug} />
              <ShareButtons slug={article.slug} title={article.title} />
            </div>
          </div>
        </header>
        
        <div className="aspect-[21/9] md:aspect-[2.5/1] overflow-hidden rounded-2xl mb-24 max-w-5xl mx-auto relative">
          <Image src={article.image} alt={article.title} fill className="object-cover" priority />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none 
                          prose-p:font-body prose-p:text-lg prose-p:leading-relaxed prose-p:text-text-secondary
                          prose-headings:font-display prose-headings:text-foreground
                          prose-a:text-bronze prose-a:no-underline hover:prose-a:underline">
            <MDXRemote source={article.body.raw} components={mdxComponents as any} />
          </div>
        </div>
        
        <footer className="max-w-3xl mx-auto mt-24 pt-12 border-t border-border">
          <div className="mb-12">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-4">Connecting Disciplines</h4>
            <DisciplineTags disciplines={article.disciplines} />
          </div>
          
          <div className="my-16">
            <AuthorBio author={article.author} role={article.authorRole} expanded />
          </div>
        </footer>
      </article>

      <Newsletter />
    </>
  );
}
