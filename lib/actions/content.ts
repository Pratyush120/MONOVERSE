'use server'

import prisma from '@/lib/prisma'
import { getAllArticles } from '@/lib/mdx';

export async function getSearchItems() {
  try {
    const articles = await getAllArticles();

    const people = await prisma.person.findMany();
    const entities = await prisma.entity.findMany();
    const collections = await prisma.collection.findMany();

    const searchItems = [
      ...articles.map(a => ({
        id: `article-${a.slug}`,
        title: a.title,
        description: a.description || "",
        type: a.domain || "Article",
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

