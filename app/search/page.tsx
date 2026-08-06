import { getSearchItems } from "@/lib/actions/content";
import { SearchClient } from "../components/SearchClient";
import { Newsletter } from "../components/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Monoverse",
  description: "Search across essays, collections, authors, movies, reviews, and lists.",
};

export default async function SearchPage() {
  const searchItems = await getSearchItems();

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] md:mb-[120px] text-center">
        <h1 className="font-headline text-[64px] md:text-[96px] lg:text-[120px] leading-[1] text-foreground mb-[32px] tracking-tight">
          Search
        </h1>
        <p className="font-body text-[20px] md:text-[24px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
          Search across essays, collections, authors, movies, reviews, and lists.
        </p>
      </section>

      <section className="max-w-[1000px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SearchClient items={searchItems} />
      </section>
      
      <Newsletter />
    </div>
  );
}
