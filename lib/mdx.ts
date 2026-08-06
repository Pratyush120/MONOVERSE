import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import prisma from "@/lib/prisma";

const CONTENT_DIRS = [
  path.join(process.cwd(), 'content', 'essays'),
  path.join(process.cwd(), 'content', 'cinema', 'articles'),
  path.join(process.cwd(), 'content', 'cinema', 'lists'),
  path.join(process.cwd(), 'content', 'cinema', 'movies'),
  path.join(process.cwd(), 'content', 'cinema', 'people')
];

export interface MDXArticle {
  slug: string;
  title: string;
  description: string;
  author: string;
  image: string;
  date: string;
  readingTime: string;
  domain: string;
  disciplines: string[];
  body: string;
}

export async function getAllArticles(): Promise<MDXArticle[]> {
  const articles: MDXArticle[] = [];

  for (const dir of CONTENT_DIRS) {
    try {
      const files = await fs.readdir(dir);
      
      for (const file of files) {
        if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue;
        
        const fullPath = path.join(dir, file);
        const fileContent = await fs.readFile(fullPath, 'utf8');
        const { data, content } = matter(fileContent);
        
        const slug = file.replace(/\.mdx?$/, '');
        
        articles.push({
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          author: data.author || 'Unknown',
          image: data.image || 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200',
          date: data.date ? new Date(data.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          readingTime: data.readingTime || readingTime(content).text,
          domain: data.domain || 'Essays',
          disciplines: data.disciplines || [],
          body: content
        });
      }
    } catch (e) {
      // Directory might not exist, silently skip
      console.warn(`Could not read directory ${dir}`, e);
    }
  }

  // Load from database as fallback/additional content
  try {
    const dbContents = await prisma.content.findMany({
      include: {
        authors: { include: { person: true } },
        coverImage: true,
        type: true,
        desk: true,
      }
    });

    for (const c of dbContents) {
      if (articles.some(a => a.slug === c.slug)) continue;

      const author = c.authors?.[0]?.person;
      articles.push({
        slug: c.slug,
        title: c.title,
        description: c.summary || "",
        author: author ? author.name : "Monoverse",
        image: c.coverImage?.url || "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200",
        date: c.publishedAt ? new Date(c.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : new Date(c.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        readingTime: `${c.readingTime || 5} min read`,
        domain: c.desk?.name || "Cinema",
        disciplines: [],
        body: c.body || ""
      });
    }
  } catch (e) {
    console.error("Error loading articles from database in getAllArticles:", e);
  }

  // Sort by date descending
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getRecentArticles(limit = 10): Promise<MDXArticle[]> {
  const all = await getAllArticles();
  return all.slice(0, limit);
}

export async function getArticleBySlug(slug: string): Promise<MDXArticle | null> {
  const all = await getAllArticles();
  const mdxArticle = all.find(a => a.slug === slug);
  if (mdxArticle) return mdxArticle;

  try {
    const c = await prisma.content.findUnique({
      where: { slug },
      include: {
        authors: { include: { person: true } },
        coverImage: true,
        type: true,
        desk: true,
      }
    });
    if (c) {
      const author = c.authors?.[0]?.person;
      return {
        slug: c.slug,
        title: c.title,
        description: c.summary || "",
        author: author ? author.name : "Monoverse",
        image: c.coverImage?.url || "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200",
        date: c.publishedAt ? new Date(c.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : new Date(c.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        readingTime: `${c.readingTime || 5} min read`,
        domain: c.desk?.name || "Cinema",
        disciplines: [],
        body: c.body || ""
      };
    }
  } catch (e) {
    console.error(`Error loading article by slug from database (${slug}):`, e);
  }

  return null;
}

export async function getAllArticleSlugs(): Promise<{ slug: string }[]> {
  const all = await getAllArticles();
  return all.map(a => ({ slug: a.slug }));
}

