import prisma from "@/lib/prisma";
import { CollectionsFilter } from "../components/CollectionsFilter";
import { SectionLabel } from "../components/SectionLabel";
import { Newsletter } from "../components/Newsletter";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Collections | Monoverse",
  description: "Curated reading journeys designed to explore specific themes in depth.",
};

// Mock Collections Database with proper metadata
const COLLECTIONS_DB = [
  {
    title: "Essential Sci-Fi of the 21st Century",
    slug: "essential-sci-fi",
    description: "A curated list of mind-bending science fiction films redefining the intellectual boundaries of cinema.",
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1200",
    topics: ["Cinema", "Sci-Fi", "Philosophy"],
    readingTime: "120 min",
    category: "Cinema",
    lastUpdated: "June 2024",
    itemCount: 5,
  },
  {
    title: "Foundations of Systems Theory",
    slug: "systems-theory",
    description: "Essential texts and frameworks for understanding complex, interconnected socio-technological networks.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    topics: ["Systems-Theory", "Complexity", "Cybernetics"],
    readingTime: "90 min",
    category: "Deep Dives",
    lastUpdated: "July 2024",
    itemCount: 4,
  },
  {
    title: "Digital Anthropology",
    slug: "digital-anthropology",
    description: "Exploring how software architectures, feeds, and algorithmic systems actively reshape human cultural memory and social behaviors.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    topics: ["Technology", "Society", "Culture"],
    readingTime: "60 min",
    category: "Technology",
    lastUpdated: "August 2024",
    itemCount: 6,
  },
  {
    title: "Ancient Historiography & Cyclical Time",
    slug: "ancient-history",
    description: "Understanding civilization pathways through Babylonian, Greek, and Roman historical frameworks.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200",
    topics: ["History", "Philosophy", "Babylon"],
    readingTime: "110 min",
    category: "History",
    lastUpdated: "May 2024",
    itemCount: 5,
  }
];

export default async function CollectionsPage() {
  const featuredCollection = COLLECTIONS_DB[0];
  
  // Mock authentication check (defaults to true for rich interactive preview)
  const isAuthenticated = true; 
  
  const mockSavedCollections = [COLLECTIONS_DB[1], COLLECTIONS_DB[2]];
  const mockProgress = [
    { title: "Digital Anthropology", progress: 65, remainingTime: "21 min left", slug: "digital-anthropology" }
  ];

  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      {/* 1. HERO */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] md:mb-[120px] text-center">
        <h1 className="font-headline text-[64px] md:text-[96px] lg:text-[120px] leading-[1] text-foreground mb-[32px] tracking-tight">
          Collections
        </h1>
        <p className="font-body text-[20px] md:text-[24px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
          Curated reading journeys designed to explore specific themes in depth. Not just folders, but stories.
        </p>
      </section>

      {/* 2. PERSONALIZED READING HUB (Visible if authenticated) */}
      {isAuthenticated && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Continue Reading / Progress */}
            <div className="lg:col-span-2 border border-glass-border-light bg-surface-low/20 p-6 md:p-8 rounded-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-bronze-accent block mb-4">Continue Reading</span>
                {mockProgress.map(p => (
                  <div key={p.slug} className="mb-6">
                    <h3 className="font-display text-2xl text-foreground mb-2">{p.title}</h3>
                    <div className="flex justify-between font-mono text-xs text-text-secondary mb-3">
                      <span>{p.progress}% Completed</span>
                      <span>{p.remainingTime}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-glass-border-light rounded-full overflow-hidden">
                      <div className="h-full bg-bronze-accent" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                href={`/collections/${mockProgress[0].slug}`}
                className="btn-primary py-3 px-6 text-xs uppercase tracking-wider self-start flex items-center gap-2"
              >
                Resume Learning Journey
              </Link>
            </div>

            {/* Saved Library Collections */}
            <div className="border border-glass-border-light bg-surface-low/10 p-6 md:p-8 rounded-xl">
              <span className="font-mono text-[10px] uppercase tracking-wider text-text-secondary block mb-4">Saved Library</span>
              <div className="space-y-4">
                {mockSavedCollections.map(sc => (
                  <Link href={`/collections/${sc.slug}`} key={sc.slug} className="block group">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-display text-lg text-foreground group-hover:text-bronze-accent transition-colors line-clamp-1">{sc.title}</h4>
                      <Bookmark size={14} className="text-bronze-accent shrink-0 ml-2" />
                    </div>
                    <p className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">{sc.itemCount} Articles · {sc.readingTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. FEATURED COLLECTION */}
      {featuredCollection && (
        <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
          <SectionLabel label="Featured Journey" />
          <div className="glass-panel relative overflow-hidden group flex flex-col lg:flex-row p-[16px] md:p-[24px] gap-[24px] items-center hover:scale-[1.01] transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-bronze-accent z-20" />
            <div className="w-full lg:w-[60%] aspect-[16/9] relative grayscale group-hover:grayscale-0 transition-all duration-[600ms] overflow-hidden">
              <Image 
                src={featuredCollection.image} 
                alt={featuredCollection.title}
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full lg:w-[40%] flex flex-col justify-center py-[24px] lg:pr-[24px]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-bronze-accent block mb-4">Curated Collection</span>
              <h3 className="font-display text-[32px] md:text-[40px] font-normal leading-[1.15] tracking-tight text-foreground mb-4">
                {featuredCollection.title}
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-text-secondary mb-6">
                {featuredCollection.description}
              </p>
              <div className="flex gap-[16px] font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary mb-8">
                <span>{featuredCollection.itemCount} Publications</span>
                <span>•</span>
                <span>Est. {featuredCollection.readingTime}</span>
              </div>
              <Link 
                href={`/collections/${featuredCollection.slug}`}
                className="btn-primary py-4 px-8 text-xs uppercase tracking-widest self-start"
              >
                Start Learning Journey
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. BROWSE COLLECTIONS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="All Learning Journeys" />
        <CollectionsFilter collections={COLLECTIONS_DB} />
      </section>

      {/* 5. NEWSLETTER */}
      <Newsletter />
    </div>
  );
}
