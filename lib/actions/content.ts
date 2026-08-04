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

export async function getSearchItems() {
  try {
    const articles = await prisma.content.findMany({
      where: { status: 'PUBLISHED' },
      include: { desk: true }
    });

    const people = await prisma.person.findMany();
    const entities = await prisma.entity.findMany();
    const collections = await prisma.collection.findMany();

    const searchItems = [
      ...articles.map(a => ({
        id: `article-${a.slug}`,
        title: a.title,
        description: a.summary || "",
        type: a.desk?.name || "Article",
        url: `/essay/${a.slug}`
      })),
      ...people.map(p => ({
        id: `person-${p.slug}`,
        title: p.name,
        description: p.bio || "",
        type: "Person",
        url: `/cinema/person/${p.slug}` 
      })),
      ...entities.map(e => ({
        id: `entity-${e.slug}`,
        title: e.title,
        description: e.description || "",
        type: e.entityType || "Entity",
        url: `/cinema/movie/${e.slug}`
      })),
      ...collections.map(c => ({
        id: `collection-${c.slug}`,
        title: c.title,
        description: c.description || "",
        type: "Collection",
        url: `/collections/${c.slug}`
      }))
    ];

    return searchItems;
  } catch (error) {
    console.error("Error fetching search items:", error);
    return [];
  }
}
