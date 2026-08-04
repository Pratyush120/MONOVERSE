import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Author Profile",
  description: "Editorial author identity on Monoverse.",
};

// Dummy Data for the Editorial Profile
const authorData = {
  name: "Pratyush Mohanty",
  role: "Senior Editor & Researcher",
  statement: "Writing about philosophy, technology and civilization through long-form essays.",
  bio: "Pratyush Mohanty explores the intersection of human psychology, emerging technology, and historical cycles. His research focuses on how algorithmic systems alter cultural memory and why ancient philosophical frameworks remain essential for navigating the digital age. Prior to Monoverse, he contributed to extensive research on systems theory and digital anthropology.",
  featuredWork: {
    title: "The Architecture of Silence",
    desk: "Essays",
    readingTime: "18 min read",
    date: "Sep 10, 2024",
    description: "An exploration of how modern digital environments systematically eliminate cognitive silence, and what that means for the future of deep thought.",
    image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=1200",
  },
  publications: [
    { title: "Why We Crave Dystopia", desk: "Cinema", readingTime: "12 min read", date: "Oct 15, 2024", summary: "Analyzing the psychological appeal of apocalyptic narratives in modern cinema.", cover: "https://images.unsplash.com/photo-1440407876336-62333a6f010f?auto=format&fit=crop&q=80&w=600" },
    { title: "Against Optimization", desk: "Technology", readingTime: "15 min read", date: "Aug 02, 2024", summary: "A critique of the modern obsession with productivity and algorithmic efficiency.", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" },
    { title: "The Philosophy of Dune's Sandworms", desk: "Cinema", readingTime: "20 min read", date: "Oct 28, 2024", summary: "An ecological and philosophical reading of Frank Herbert's desert leviathans.", cover: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=600" },
  ],
  collections: [
    { title: "Digital Anthropology", description: "Essays on how software shapes human behavior.", count: 4, readingTime: "60 min", cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600" },
    { title: "Cinematic Mirrors", description: "Reviews analyzing film as cultural reflection.", count: 7, readingTime: "120 min", cover: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600" },
  ],
  readingLists: [
    { title: "Foundations of Systems Theory", description: "Essential texts for understanding complex systems.", count: 5, type: "Books" },
    { title: "The New Wave", description: "A curation of defining French New Wave films.", count: 12, type: "Films" },
    { title: "Attention Economics", description: "Research papers on the commodification of human attention.", count: 8, type: "Research Papers" },
  ],
  interests: ["Philosophy", "History", "Cinema", "Artificial Intelligence", "Systems Theory", "Culture"],
  timeline: [
    { year: "2024", event: "Published 'The Architecture of Silence'", type: "Featured Essay" },
    { year: "2023", event: "Curated 'Digital Anthropology' Collection", type: "Editorial Pick" },
    { year: "2022", event: "Joined Monoverse Editorial Desk", type: "Milestone" },
  ],
  recommended: [
    { title: "The Shallows", author: "Nicholas Carr", type: "Book" },
    { title: "Stalker", director: "Andrei Tarkovsky", type: "Film" },
    { title: "Amusing Ourselves to Death", author: "Neil Postman", type: "Book" },
  ],
  quote: "Reality is never one-dimensional. The deeper you look, the more everything connects."
};

export async function generateStaticParams() {
  return [
    { slug: 'pratyush-mohanty' },
  ];
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const authorName = resolvedParams.slug === "pratyush-mohanty" ? authorData.name : resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <div className="bg-transparent overflow-hidden selection:bg-bronze-accent/20 pb-[120px]">
      
      {/* 
        SECTION 01: EDITORIAL HERO 
        Massive typography. Grayscale portrait.
      */}
      <section className="pt-[160px] pb-[80px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-b border-glass-border-light flex flex-col-reverse md:flex-row items-end justify-between gap-[40px]">
        <div className="w-full md:w-[60%]">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze-accent block mb-[24px]">
            {authorData.role}
          </span>
          <h1 className="font-display text-[64px] md:text-[96px] lg:text-[120px] text-foreground leading-[0.9] tracking-[-0.02em] mb-[40px]">
            {authorName}
          </h1>
          <p className="font-body text-[18px] md:text-[22px] text-text-secondary leading-[1.6] max-w-[500px]">
            {authorData.statement}
          </p>
        </div>
        <div className="w-full md:w-[35%] relative h-[400px] md:h-[600px] grayscale border border-glass-border-light">
          <Image 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
            alt={authorName}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 
        SECTION 02: AUTHOR INTRODUCTION 
        Editorial bio. Wide column.
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto">
        <div className="max-w-[800px] md:ml-[10%]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[32px]">Editorial Biography</span>
          <p className="font-body text-[20px] md:text-[24px] text-foreground leading-[1.8] first-letter:font-display first-letter:text-[80px] first-letter:text-bronze-accent first-letter:float-left first-letter:leading-[0.85] first-letter:mr-[16px] first-letter:mt-[4px]">
            {authorData.bio}
          </p>
        </div>
      </section>

      {/* 
        SECTION 03: FEATURED WORK 
        The editorial centerpiece.
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-t border-glass-border-light">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">Featured Publication</span>
        
        <div className="relative group cursor-pointer block">
          <div className="relative h-[400px] md:h-[700px] w-full grayscale group-hover:grayscale-0 transition-all duration-700">
            <Image 
              src={authorData.featuredWork.image}
              alt={authorData.featuredWork.title}
              fill
              className="object-cover brightness-[0.6] group-hover:brightness-[0.8] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          
          <div className="absolute bottom-[32px] left-[24px] md:bottom-[64px] md:left-[64px] md:w-[60%]">
            <div className="flex items-center gap-[16px] mb-[24px]">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-bronze-accent border border-bronze-accent/50 px-[12px] py-[4px] bg-black/40">Start Here</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/70">{authorData.featuredWork.desk}</span>
              <span className="font-mono text-[11px] text-white/30">•</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/70">{authorData.featuredWork.readingTime}</span>
            </div>
            <h2 className="font-display text-[48px] md:text-[80px] text-white leading-[1.05] tracking-[-0.01em] mb-[16px]">
              {authorData.featuredWork.title}
            </h2>
            <p className="font-body text-[18px] md:text-[22px] text-white/80 leading-[1.6]">
              {authorData.featuredWork.description}
            </p>
          </div>
        </div>
      </section>

      {/* 
        SECTION 04: PUBLICATIONS 
        Elegant grid.
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-t border-glass-border-light">
        <div className="flex justify-between items-end mb-[80px]">
          <h2 className="font-display text-[40px] md:text-[56px] text-foreground">Archive</h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary hidden md:block">3 Entries</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] md:gap-[64px]">
          {authorData.publications.map((pub, idx) => (
            <Link href="#" key={idx} className="group block">
              <div className="relative h-[250px] w-full mb-[24px] grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                <Image src={pub.cover} alt={pub.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex gap-[16px] font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary mb-[16px]">
                <span>{pub.desk}</span>
                <span>•</span>
                <span>{pub.readingTime}</span>
                <span>•</span>
                <span>{pub.date}</span>
              </div>
              <h3 className="font-display text-[28px] text-foreground leading-[1.2] mb-[12px] group-hover:text-bronze-accent transition-colors">
                {pub.title}
              </h3>
              <p className="font-body text-[16px] text-text-secondary leading-[1.6]">
                {pub.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 
        SECTION 05 & 06: COLLECTIONS & READING LISTS
        Curated exhibitions.
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-t border-glass-border-light flex flex-col lg:flex-row gap-[120px]">
        
        {/* Collections */}
        <div className="w-full lg:w-[55%]">
          <h2 className="font-display text-[40px] text-foreground mb-[64px]">Curated Collections</h2>
          <div className="space-y-[64px]">
            {authorData.collections.map((collection, idx) => (
              <div key={idx} className="flex gap-[32px] group cursor-pointer border-b border-glass-border-light pb-[40px]">
                <div className="relative h-[160px] w-[120px] flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image src={collection.cover} alt={collection.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bronze-accent mb-[8px]">
                    {collection.count} Essays • {collection.readingTime}
                  </span>
                  <h3 className="font-display text-[32px] text-foreground leading-[1.1] mb-[12px] group-hover:text-bronze-accent transition-colors">
                    {collection.title}
                  </h3>
                  <p className="font-body text-[16px] text-text-secondary leading-[1.6]">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reading Lists */}
        <div className="w-full lg:w-[45%]">
          <h2 className="font-display text-[40px] text-foreground mb-[64px]">Reading Lists</h2>
          <div className="space-y-[40px]">
            {authorData.readingLists.map((list, idx) => (
              <div key={idx} className="glass-panel p-[32px] hover:border-bronze-accent/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-[16px]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">{list.type}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bronze-accent">{list.count} Items</span>
                </div>
                <h3 className="font-display text-[24px] text-foreground mb-[8px] group-hover:text-bronze-accent transition-colors">{list.title}</h3>
                <p className="font-body text-[15px] text-text-secondary">{list.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 
        SECTION 07 & 08: RESEARCH INTERESTS & EDITORIAL TIMELINE
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-t border-glass-border-light flex flex-col md:flex-row gap-[120px]">
        
        {/* Research Interests */}
        <div className="w-full md:w-[40%]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">07. Research Domains</span>
          <div className="flex flex-wrap gap-x-[24px] gap-y-[16px] items-center">
            {authorData.interests.map((interest, idx) => (
              <div key={idx} className="flex items-center gap-[24px]">
                <span className="font-display text-[24px] md:text-[32px] text-foreground hover:text-bronze-accent transition-colors cursor-pointer">{interest}</span>
                {idx !== authorData.interests.length - 1 && (
                  <span className="text-bronze-accent/30 font-display text-[32px]">/</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="w-full md:w-[60%]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">08. Editorial Timeline</span>
          <div className="border-l border-glass-border-light ml-[16px] space-y-[48px] py-[24px]">
            {authorData.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-[40px] group cursor-default">
                <div className="absolute left-[-4px] top-[6px] w-[7px] h-[7px] bg-background border border-bronze-accent rounded-full group-hover:bg-bronze-accent transition-colors" />
                <div className="flex flex-col md:flex-row md:items-center gap-[8px] md:gap-[24px]">
                  <span className="font-mono text-[14px] text-text-secondary w-[60px]">{item.year}</span>
                  <div className="flex-1">
                    <h4 className="font-display text-[24px] text-foreground mb-[4px]">{item.event}</h4>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bronze-accent">{item.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 
        SECTION 09: RECOMMENDED READING
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-t border-glass-border-light">
        <div className="mb-[80px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[16px]">09. Influences</span>
          <h2 className="font-display text-[40px] text-foreground">Recommended Reading</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[80px] border-y border-glass-border-light py-[64px]">
          {authorData.recommended.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary mb-[16px] block">{item.type}</span>
              <h3 className="font-display text-[32px] text-foreground mb-[8px] italic leading-[1.1]">{item.title}</h3>
              <span className="font-body text-[15px] text-text-secondary">by {item.author || item.director}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 
        SECTION 10: CLOSING QUOTE
      */}
      <section className="py-[160px] md:py-[240px] px-[24px] md:px-[64px] text-center max-w-[1000px] mx-auto relative">
        <span className="absolute top-[80px] md:top-[120px] left-1/2 -translate-x-1/2 font-display text-[120px] md:text-[200px] text-bronze-accent/10 leading-none select-none z-0">
          "
        </span>
        <h2 className="font-display text-[40px] md:text-[64px] text-foreground leading-[1.1] relative z-10 italic">
          {authorData.quote}
        </h2>
      </section>

    </div>
  );
}
