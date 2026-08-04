import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const CONTENT_DIRS = [
  path.join(process.cwd(), 'content', 'essays'),
  path.join(process.cwd(), 'content', 'cinema')
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

  // Sort by date descending
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getRecentArticles(limit = 10): Promise<MDXArticle[]> {
  const all = await getAllArticles();
  return all.slice(0, limit);
}

export async function getArticleBySlug(slug: string): Promise<MDXArticle | null> {
  const all = await getAllArticles();
  return all.find(a => a.slug === slug) || null;
}

export async function getAllArticleSlugs(): Promise<{ slug: string }[]> {
  const all = await getAllArticles();
  return all.map(a => ({ slug: a.slug }));
}
