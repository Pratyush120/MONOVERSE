"use server";

import prisma from "@/lib/prisma";

// Map Prisma Content to Frontend Article shape
function mapContentToArticle(content: any) {
  const author = content.authors?.[0]?.person;
  return {
    slug: content.slug,
    title: content.title,
    description: content.summary || "",
    author: author ? author.name : "Monoverse",
    image: content.coverImage?.url || "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200",
    date: content.publishedAt ? new Date(content.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : new Date(content.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readingTime: { text: `${content.readingTime || 5} min read` },
    editorialType: content.type?.name || "Article",
    featured: false // We can add featured logic later, or determine by a specific tag
  };
}

export async function getLatestCinemaContent(limit = 4) {
  const content = await prisma.content.findMany({
    where: {
      desk: { slug: "cinema" },
      status: "PUBLISHED",
    },
    orderBy: { createdAt: "desc" },
    take: limit,
    include: {
      authors: { include: { person: { include: { portrait: true } } } },
      coverImage: true,
      type: true,
    },
  });
  return content.map(mapContentToArticle);
}

export async function getFeaturedCinemaContent() {
  // Just get the latest one as featured for now
  const content = await prisma.content.findFirst({
    where: {
      desk: { slug: "cinema" },
      status: "PUBLISHED",
    },
    orderBy: { createdAt: "desc" },
    include: {
      authors: { include: { person: { include: { portrait: true } } } },
      coverImage: true,
      type: true,
    },
  });
  return content ? mapContentToArticle(content) : null;
}

export async function getCinemaContentByType(typeSlug: string, limit = 4) {
  const content = await prisma.content.findMany({
    where: {
      desk: { slug: "cinema" },
      status: "PUBLISHED",
      type: { slug: typeSlug }
    },
    orderBy: { createdAt: "desc" },
    take: limit,
    include: {
      authors: { include: { person: { include: { portrait: true } } } },
      coverImage: true,
      type: true,
    },
  });
  return content.map(mapContentToArticle);
}

export async function getMoviesByStatus(status: string, limit = 4) {
  const movies = await prisma.entity.findMany({
    where: {
      entityType: "MOVIE",
      movieDetails: { status: status },
    },
    take: limit,
    include: {
      image: true,
      movieDetails: true,
    },
  });

  return movies.map((m) => ({
    title: m.title,
    slug: m.slug,
    poster: m.image?.url || "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=800",
    status: m.movieDetails?.status || "Unknown",
    releaseDate: m.movieDetails?.releaseDate ? m.movieDetails.releaseDate.toISOString() : new Date().toISOString(),
    synopsis: m.description || "",
    director: "Unknown Director", // Could fetch from EntityPerson with role 'DIRECTOR'
    cast: [],
    platform: m.movieDetails?.studio || "Theaters",
    genres: ["Sci-Fi"], // Add genres to Schema later if needed
  }));
}

export async function getCinemaLists(limit = 2) {
  const lists = await prisma.collection.findMany({
    take: limit,
    include: {
      items: { include: { entity: { include: { image: true } } } }
    },
    orderBy: { id: "desc" }
  });

  return lists.map(l => ({
    title: l.title,
    slug: l.slug,
    description: l.description || "",
    image: l.items[0]?.entity?.image?.url || "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200",
    movies: l.items.map(item => item.entity)
  }));
}

export async function getCinemaPeople(limit = 2) {
  const people = await prisma.person.findMany({
    take: limit,
    include: { portrait: true }
  });

  return people.map(p => ({
    name: p.name,
    slug: p.slug,
    bio: p.bio || "",
    portrait: p.portrait?.url || "https://images.unsplash.com/photo-1588636734139-23c897f75d04?auto=format&fit=crop&q=80&w=400",
    role: "Critic / Filmmaker",
    signatureStyle: "",
    keyWorks: []
  }));
}

export async function getAllMovies() {
  return await getMoviesByStatus("Now Showing", 100); // Hacky way for all for now
}

export async function getMovieBySlug(slug: string) {
  const m = await prisma.entity.findUnique({
    where: { slug },
    include: { image: true, movieDetails: true }
  });
  if (!m) return null;
  
  // Dummy lifecycle logic based on status
  let lifecycle = "After Release";
  if (m.movieDetails?.status === "Coming Soon") lifecycle = "Before Release";
  if (m.movieDetails?.status === "Now Showing") lifecycle = "Release Week";
  
  return {
    title: m.title,
    slug: m.slug,
    poster: m.image?.url || "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=800",
    status: m.movieDetails?.status || "Unknown",
    releaseDate: m.movieDetails?.releaseDate ? m.movieDetails.releaseDate.toISOString() : undefined,
    synopsis: m.description || "",
    director: "Unknown Director",
    cast: [],
    platform: m.movieDetails?.studio || "Theaters",
    genres: ["Sci-Fi"],
    lifecycle: lifecycle,
    trailerUrl: m.movieDetails?.trailerUrl || null
  };
}

export async function getCoverageForMovie(slug: string) {
  const content = await prisma.content.findMany({
    where: {
      status: "PUBLISHED",
      entityReferences: { some: { entity: { slug } } }
    },
    include: {
      authors: { include: { person: { include: { portrait: true } } } },
      coverImage: true,
      type: true,
    }
  });
  return content.map(mapContentToArticle);
}
