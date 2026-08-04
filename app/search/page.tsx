import { getSearchItems } from "@/lib/actions/content";
import { SearchClient } from "../components/SearchClient";

export default async function SearchPage() {
  const searchItems = await getSearchItems();

  return (
    <div className="pt-[160px] min-h-screen px-[24px] md:px-[64px] max-w-[1440px] mx-auto mb-[120px]">
      <h1 className="font-display text-[48px] md:text-[64px] text-foreground mb-8 text-center">Search the Archive</h1>
      <p className="font-body text-text-secondary text-[20px] max-w-[600px] mx-auto text-center mb-[64px]">
        Search across essays, collections, authors, movies, reviews, and lists.
      </p>
      
      <SearchClient items={searchItems} />
    </div>
  );
}
