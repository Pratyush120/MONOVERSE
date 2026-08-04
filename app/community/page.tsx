import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community Desk",
  description: "Monoverse Community: An editorial desk dedicated to meaningful participation.",
};

// Dummy Data for the Community Desk
const communityData = {
  theme: {
    title: "The Architecture of Silence",
    description: "This month, we explore how modern digital environments systematically eliminate cognitive silence, and what that means for the future of deep thought. All open questions and writing challenges are centered around this theme.",
  },
  featuredDiscussion: {
    question: "Is 'boredom' a prerequisite for original thought?",
    author: "Pratyush Mohanty",
    response: "We have conflated lack of stimulation with lack of productivity. Boredom is not the absence of thought; it is the incubation period for it. When we fill every micro-moment with algorithmic feeds, we are effectively preventing our brains from synthesizing disparate ideas. The architecture of silence isn't just about quiet—it's about the cognitive space required for profound realization.",
    responseAuthor: "Elena Rostova",
    role: "Contributor",
  },
  openQuestions: [
    { title: "Can a completely digitized archive preserve cultural memory?", responses: 14 },
    { title: "What is the psychological cost of constant optimization?", responses: 22 },
    { title: "Are we losing the ability to read non-linearly?", responses: 8 },
  ],
  essays: [
    { title: "In Defense of the Long Sentence", author: "Julian Barnes", desk: "Language", readingTime: "8 min read", date: "Oct 12, 2024", cover: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&q=80&w=600" },
    { title: "The Erosion of Context", author: "Sarah Chen", desk: "Culture", readingTime: "12 min read", date: "Oct 05, 2024", cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600" },
    { title: "Notes on Post-Cinematic Viewing", author: "David Wallace", desk: "Cinema", readingTime: "15 min read", date: "Sep 28, 2024", cover: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=600" },
  ],
  readingCircle: {
    book: "Amusing Ourselves to Death",
    author: "Neil Postman",
    schedule: "Week 3: Chapters 5-7",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
  },
  filmClub: {
    film: "Stalker",
    director: "Andrei Tarkovsky",
    theme: "The Zone and the Architecture of Desire",
    cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600"
  },
  challenge: {
    title: "Essay Prompt: The Cost of Speed",
    description: "Write a 1,500-word essay examining a specific instance where the acceleration of a process (technological, social, or artistic) has demonstrably degraded its value. The best submissions will be published on the main editorial desk.",
    deadline: "November 15, 2024",
  },
  picks: [
    { type: "Essay Comment", title: "On 'The Myth of the Apolitical Algorithm'", author: "Marcus Reed", snippet: "Algorithms are essentially codified opinions. To claim they are neutral is to misunderstand how human bias is translated into mathematics." },
    { type: "Film Review", title: "A reflection on 'Dune: Part Two'", author: "Aisha Patel", snippet: "Villeneuve understands scale, not just visually, but temporally. The desert isn't just a location; it's a measure of time passing." },
  ],
  contributors: [
    { name: "Elena Rostova", focus: "Philosophy of Technology" },
    { name: "Julian Barnes", focus: "Linguistics & Culture" },
    { name: "Sarah Chen", focus: "Digital Anthropology" },
  ],
  events: [
    { date: "Oct 24", title: "Reading Circle: Live Discussion", desc: "A live text-based seminar on Postman's epistemology of television." },
    { date: "Nov 02", title: "Author Q&A: Pratyush Mohanty", desc: "Discussing the themes of 'The Architecture of Silence'." },
  ]
};

export default function CommunityPage() {
  return (
    <div className="bg-transparent overflow-hidden selection:bg-bronze-accent/20 pb-[120px]">
      
      {/* 
        SECTION 01: HERO & MONTHLY THEME
        Massive typography defining the desk, followed by the current theme.
      */}
      <section className="pt-[160px] pb-[80px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-b border-glass-border-light">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze-accent block mb-[24px]">
          Editorial Desk
        </span>
        <h1 className="font-display text-[64px] md:text-[120px] lg:text-[160px] text-foreground leading-[0.85] tracking-[-0.02em] mb-[40px]">
          Community
        </h1>
        <p className="font-body text-[20px] md:text-[28px] text-text-secondary leading-[1.6] max-w-[800px] mb-[80px]">
          A space dedicated to meaningful participation, collaborative research, and long-form intellectual exchange.
        </p>

        <div className="glass-panel p-[40px] md:p-[80px] border-l-4 border-l-bronze-accent">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary block mb-[16px]">Current Theme</span>
          <h2 className="font-display text-[40px] md:text-[64px] text-foreground leading-[1.1] mb-[24px]">
            {communityData.theme.title}
          </h2>
          <p className="font-body text-[18px] md:text-[22px] text-text-secondary max-w-[800px] leading-[1.6]">
            {communityData.theme.description}
          </p>
        </div>
      </section>

      {/* 
        SECTION 02: FEATURED DISCUSSION
        Massive pull quote prompt with a curated response. No upvotes.
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-b border-glass-border-light">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">Featured Discussion</span>
        
        <div className="flex flex-col lg:flex-row gap-[80px]">
          <div className="w-full lg:w-[50%]">
            <span className="font-display text-[80px] md:text-[120px] text-bronze-accent/20 leading-none absolute -ml-[40px] -mt-[20px]">"</span>
            <h3 className="font-display text-[40px] md:text-[56px] text-foreground leading-[1.1] relative z-10 mb-[24px]">
              {communityData.featuredDiscussion.question}
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary">— Prompt by {communityData.featuredDiscussion.author}</span>
          </div>
          
          <div className="w-full lg:w-[50%] pt-[20px] lg:pt-[80px]">
            <p className="font-body text-[20px] md:text-[24px] text-foreground leading-[1.8] border-l border-glass-border-light pl-[32px] mb-[32px]">
              {communityData.featuredDiscussion.response}
            </p>
            <div className="pl-[32px]">
              <span className="font-display text-[24px] text-foreground block mb-[4px]">{communityData.featuredDiscussion.responseAuthor}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bronze-accent">{communityData.featuredDiscussion.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 03: OPEN QUESTIONS
        Minimalist list of prompts.
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-b border-glass-border-light">
        <div className="flex justify-between items-end mb-[80px]">
          <h2 className="font-display text-[40px] md:text-[64px] text-foreground">Open Prompts</h2>
          <Link href="#" className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze-accent hover:text-foreground transition-colors hidden md:block">View All Archive →</Link>
        </div>

        <div className="space-y-[40px]">
          {communityData.openQuestions.map((q, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-[24px] border-b border-glass-border-light pb-[40px] group">
              <h3 className="font-display text-[28px] md:text-[40px] text-text-secondary group-hover:text-foreground transition-colors max-w-[900px] leading-[1.2]">
                {q.title}
              </h3>
              <div className="flex items-center gap-[32px] shrink-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">{q.responses} Contributions</span>
                <Link href="#" className="btn-primary py-[8px] px-[24px] text-[11px]">Contribute</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        SECTION 04: COMMUNITY ESSAYS
        Elegant grid of reader submissions.
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-b border-glass-border-light">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-secondary block mb-[80px]">Community Essays</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[64px]">
          {communityData.essays.map((essay, idx) => (
            <Link href="#" key={idx} className="group block">
              <div className="relative h-[280px] w-full mb-[24px] grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                <Image src={essay.cover} alt={essay.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex gap-[16px] font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary mb-[16px]">
                <span className="text-bronze-accent">{essay.desk}</span>
                <span>•</span>
                <span>{essay.readingTime}</span>
              </div>
              <h3 className="font-display text-[32px] text-foreground leading-[1.1] mb-[12px] group-hover:text-bronze-accent transition-colors">
                {essay.title}
              </h3>
              <span className="font-body text-[15px] text-text-secondary">By {essay.author}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 
        SECTION 05 & 06: READING CIRCLES & FILM CLUBS
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-b border-glass-border-light flex flex-col lg:flex-row gap-[80px]">
        
        {/* Reading Circle */}
        <div className="w-full lg:w-[50%] glass-panel p-[40px] md:p-[64px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze-accent block mb-[48px]">Reading Circle</span>
          <div className="flex flex-col sm:flex-row gap-[40px]">
            <div className="relative h-[240px] w-[160px] shrink-0 grayscale">
              <Image src={communityData.readingCircle.cover} alt={communityData.readingCircle.book} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-[40px] text-foreground leading-[1.1] mb-[8px]">{communityData.readingCircle.book}</h3>
              <span className="font-body text-[18px] text-text-secondary block mb-[24px]">by {communityData.readingCircle.author}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground border border-glass-border-light px-[16px] py-[8px] self-start mb-[32px]">
                {communityData.readingCircle.schedule}
              </span>
              <Link href="#" className="font-mono text-[11px] uppercase tracking-[0.1em] text-bronze-accent hover:text-foreground transition-colors">
                Join Discussion →
              </Link>
            </div>
          </div>
        </div>

        {/* Film Club */}
        <div className="w-full lg:w-[50%] glass-panel p-[40px] md:p-[64px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze-accent block mb-[48px]">Film Club</span>
          <div className="flex flex-col sm:flex-row gap-[40px]">
            <div className="relative h-[240px] w-[160px] shrink-0 grayscale">
              <Image src={communityData.filmClub.cover} alt={communityData.filmClub.film} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-[40px] text-foreground leading-[1.1] mb-[8px]">{communityData.filmClub.film}</h3>
              <span className="font-body text-[18px] text-text-secondary block mb-[24px]">dir. {communityData.filmClub.director}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground border border-glass-border-light px-[16px] py-[8px] self-start mb-[32px]">
                {communityData.filmClub.theme}
              </span>
              <Link href="#" className="font-mono text-[11px] uppercase tracking-[0.1em] text-bronze-accent hover:text-foreground transition-colors">
                Read Review & Discuss →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 07 & 08: WRITING CHALLENGES & EDITORIAL PICKS
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-b border-glass-border-light flex flex-col lg:flex-row gap-[120px]">
        
        {/* Writing Challenge */}
        <div className="w-full lg:w-[40%]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">Writing Challenge</span>
          <h3 className="font-display text-[48px] text-foreground leading-[1.1] mb-[24px]">{communityData.challenge.title}</h3>
          <p className="font-body text-[18px] text-text-secondary leading-[1.6] mb-[40px]">{communityData.challenge.description}</p>
          <div className="border-t border-glass-border-light pt-[24px] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary mb-[4px]">Deadline</span>
              <span className="font-mono text-[12px] text-foreground">{communityData.challenge.deadline}</span>
            </div>
            <Link href="/write/studio/editor" className="btn-primary py-[10px] px-[32px] text-[11px]">Submit</Link>
          </div>
        </div>

        {/* Editorial Picks */}
        <div className="w-full lg:w-[60%]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">Editorial Picks</span>
          <div className="space-y-[40px]">
            {communityData.picks.map((pick, idx) => (
              <div key={idx} className="border-l border-bronze-accent/30 pl-[32px] py-[8px]">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bronze-accent block mb-[12px]">{pick.type}</span>
                <p className="font-body text-[20px] text-foreground leading-[1.6] italic mb-[16px]">"{pick.snippet}"</p>
                <div className="flex items-center gap-[16px]">
                  <span className="font-display text-[20px] text-text-secondary">{pick.author}</span>
                  <span className="text-glass-border-light">—</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">{pick.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        SECTION 09 & 10: CONTRIBUTORS & EVENTS
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-b border-glass-border-light flex flex-col md:flex-row gap-[120px]">
        
        {/* Contributors */}
        <div className="w-full md:w-[50%]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">Featured Contributors</span>
          <div className="grid grid-cols-1 gap-[32px]">
            {communityData.contributors.map((c, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-glass-border-light pb-[16px]">
                <h4 className="font-display text-[28px] text-foreground">{c.name}</h4>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary text-right">{c.focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="w-full md:w-[50%]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">Upcoming Events</span>
          <div className="space-y-[40px]">
            {communityData.events.map((e, idx) => (
              <div key={idx} className="flex gap-[32px] group">
                <span className="font-mono text-[14px] text-bronze-accent pt-[4px] shrink-0">{e.date}</span>
                <div>
                  <h4 className="font-display text-[28px] text-foreground mb-[8px] group-hover:text-bronze-accent transition-colors cursor-pointer">{e.title}</h4>
                  <p className="font-body text-[16px] text-text-secondary">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        SECTION 11: COMMUNITY GUIDELINES
      */}
      <section className="py-[120px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto border-b border-glass-border-light text-center">
        <h2 className="font-display text-[48px] md:text-[80px] text-foreground mb-[64px]">Editorial Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px] text-left">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze-accent block mb-[16px]">01</span>
            <h4 className="font-display text-[28px] text-foreground mb-[12px]">Respect</h4>
            <p className="font-body text-[15px] text-text-secondary">Address the argument, never the individual. Maintain intellectual grace.</p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze-accent block mb-[16px]">02</span>
            <h4 className="font-display text-[28px] text-foreground mb-[12px]">Evidence</h4>
            <p className="font-body text-[15px] text-text-secondary">Anchor your claims in text, history, or logic. Opinions must be substantiated.</p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze-accent block mb-[16px]">03</span>
            <h4 className="font-display text-[28px] text-foreground mb-[12px]">Curiosity</h4>
            <p className="font-body text-[15px] text-text-secondary">Listen to understand before replying to contradict. Prioritize truth over being right.</p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze-accent block mb-[16px]">04</span>
            <h4 className="font-display text-[28px] text-foreground mb-[12px]">Constructive</h4>
            <p className="font-body text-[15px] text-text-secondary">Disagreement is encouraged, but cynicism is not. Build upon the conversation.</p>
          </div>
        </div>
      </section>

      {/* 
        SECTION 12: JOIN CTA
      */}
      <section className="py-[160px] px-[24px] md:px-[64px] text-center max-w-[800px] mx-auto">
        <h2 className="font-display text-[56px] md:text-[80px] text-foreground leading-[1.1] mb-[32px]">
          Join the Conversation
        </h2>
        <p className="font-body text-[20px] text-text-secondary mb-[64px]">
          Become a part of the Monoverse intellectual ecosystem. Read deeply, respond thoughtfully, and submit your own essays for review.
        </p>
        <Link href="/write" className="btn-primary py-[16px] px-[48px] text-[12px] hover:scale-105 transition-transform duration-300">
          Become a Contributor
        </Link>
      </section>

    </div>
  );
}
