import { notFound } from "next/navigation";
import { getAllArticles } from "@/lib/mdx";
import { CollectionJourney } from "../../components/CollectionJourney";
import { Newsletter } from "../../components/Newsletter";
import { Metadata } from "next";

interface CollectionPageProps {
  params: { slug: string };
}

const COLLECTIONS_METADATA = {
  "essential-sci-fi": {
    title: "Essential Sci-Fi of the 21st Century",
    description: "A curated journey through the most mind-bending and philosophically rich science fiction blockbusters and concepts of our century.",
    readingTime: "120 min",
    articleFilter: (slug: string) => slug.includes("dune") || slug.includes("sci-fi") || slug.includes("odyssey"),
  },
  "systems-theory": {
    title: "Foundations of Systems Theory",
    description: "Learn how to view the world through interconnected biological, technical, and socio-economic systems.",
    readingTime: "90 min",
    articleFilter: (slug: string) => slug.includes("consciousness") || slug.includes("time") || slug.includes("architecture"),
  },
  "digital-anthropology": {
    title: "Digital Anthropology",
    description: "A deep dive into how algorithms, user feeds, and networked communication interfaces shape human cultural memory and social dynamics.",
    readingTime: "60 min",
    articleFilter: (slug: string) => slug.includes("money") || slug.includes("silence") || slug.includes("alexandria"),
  },
  "ancient-history": {
    title: "Ancient Historiography & Cyclical Time",
    description: "Exploring civilizational rises and falls, ancient memory structures, and cyclical historic models.",
    readingTime: "110 min",
    articleFilter: (slug: string) => slug.includes("odisha") || slug.includes("india") || slug.includes("invention"),
  }
};

export async function generateStaticParams() {
  return [
    { slug: "essential-sci-fi" },
    { slug: "systems-theory" },
    { slug: "digital-anthropology" },
    { slug: "ancient-history" }
  ];
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const p = await params;
  const data = COLLECTIONS_METADATA[p.slug as keyof typeof COLLECTIONS_METADATA];
  if (!data) return { title: "Collection Not Found" };

  return {
    title: `${data.title} | Monoverse Collection`,
    description: data.description,
  };
}

export default async function CollectionDetailPage({ params }: CollectionPageProps) {
  const p = await params;
  const collectionInfo = COLLECTIONS_METADATA[p.slug as keyof typeof COLLECTIONS_METADATA];
  if (!collectionInfo) notFound();

  const allArticles = await getAllArticles();
  
  // Filter articles associated with this collection
  const collectionArticles = allArticles.filter(a => collectionInfo.articleFilter(a.slug));

  // Determine related collections
  const related = Object.keys(COLLECTIONS_METADATA)
    .filter(k => k !== p.slug)
    .map(key => ({
      title: COLLECTIONS_METADATA[key as keyof typeof COLLECTIONS_METADATA].title,
      slug: key,
      itemCount: 4 // default estimated count
    }));

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px] theme-seaside">
      <CollectionJourney
        collectionTitle={collectionInfo.title}
        description={collectionInfo.description}
        readingTime={collectionInfo.readingTime}
        articles={collectionArticles}
        relatedCollections={related}
      />
      <Newsletter />
    </div>
  );
}
