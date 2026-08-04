import { getCinemaLists } from "@/lib/actions/cinema";
import { CollectionCard } from "../../components/CollectionCard";
import { SectionLabel } from "../../components/SectionLabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lists | Monoverse Cinema",
  description: "Curated watch guides, rankings, and editorial picks.",
};

export default async function ListsPage() {
  const lists = await getCinemaLists(20);

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] text-center">
        <h1 className="font-headline text-[48px] md:text-[80px] leading-[1] text-foreground mb-[24px]">Lists & Guides</h1>
        <p className="font-body text-[20px] text-text-secondary max-w-[600px] mx-auto">
          Curated watch guides, rankings, and editorial picks.
        </p>
      </section>

      {lists.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="All Lists" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
            {lists.map((list) => (
              <CollectionCard
                key={list.slug}
                href={`/cinema/list/${list.slug}`}
                title={list.title}
                overview={list.description}
                image={list.image}
                itemCount={list.movies.length}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
