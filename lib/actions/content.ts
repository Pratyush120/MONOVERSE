'use server'

import prisma from '@/lib/prisma'

export async function getArticleBySlug(slug: string) {
  try {
    const article = await prisma.content.findUnique({
      where: { slug },
      include: {
        authors: {
          include: {
            person: true
          }
        },
        desk: true,
        type: true,
        coverImage: true,
        tags: {
          include: {
            tag: true
          }
        }
      }
    });
    
    return article;
  } catch (error) {
    console.error("Error fetching article by slug:", error);
    return null;
  }
}

export async function getRecentArticles(limit = 10) {
  try {
    const articles = await prisma.content.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { publishedAt: 'desc' },
      take: limit,
      include: {
        desk: true,
        type: true,
        coverImage: true,
        authors: {
          include: {
            person: true
          }
        }
      }
    });
    
    return articles;
  } catch (error) {
    console.error("Error fetching recent articles:", error);
    return [];
  }
}

export async function getAllArticleSlugs() {
  try {
    const articles = await prisma.content.findMany({
      where: { status: 'PUBLISHED' },
      select: { slug: true }
    });
    return articles;
  } catch (error) {
    console.error("Error fetching all article slugs:", error);
    return [];
  }
}
