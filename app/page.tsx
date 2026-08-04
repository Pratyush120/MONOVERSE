import { getRecentArticles } from "@/lib/actions/content";
import HomeClient from "./page.client";

export default async function Home() {
  const articles = await getRecentArticles(10);
  
  // Format articles for the client component which expects the old contentlayer structure
  const formattedEssays = articles.map(article => ({
    slug: article.slug,
    title: article.title,
    description: article.summary,
    author: article.authors && article.authors.length > 0 ? article.authors[0].person?.name : "Unknown",
    image: article.coverImage?.url,
    date: (article.publishedAt || article.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readingTime: article.readingTime ? `${article.readingTime} min read` : "10 min read",
    domain: article.desk?.name || "Essays",
    editorialType: article.desk?.name === "Essays" ? "Featured" : "Editor's Pick"
  }));

  return <HomeClient allEssays={formattedEssays} />;
}
