import { getRecentArticles } from "@/lib/mdx";
import HomeClient from "./page.client";

export const metadata = {
  title: "Monoverse | Where Ideas Intersect",
  description: "A digital sanctuary for philosophy, science, and the human condition.",
};

export default async function Home() {
  const articles = await getRecentArticles(10);
  
  return <HomeClient allEssays={articles} />;
}
