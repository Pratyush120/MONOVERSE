import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "../components/SectionLabel";
import { Newsletter } from "../components/Newsletter";

export const metadata: Metadata = {
  title: "Community Desk | Monoverse",
  description: "Monoverse Community: An editorial desk dedicated to meaningful participation.",
};

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
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      
      {/* 1. HERO */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] md:mb-[120px] text-center">
        <h1 className="font-headline text-[64px] md:text-[96px] lg:text-[120px] leading-[1] text-foreground mb-[32px] tracking-tight">
          Community
        </h1>
        <p className="font-body text-[20px] md:text-[24px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
          An editorial desk dedicated to meaningful reader participation, intellectual dialogue, and shared research.
        </p>
      </section>

      {/* 2. MONTHLY THEME */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Monthly Theme" />
        <div className="border border-glass-border-light bg-surface-low/10 p-8 md:p-12 rounded-xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">{communityData.theme.title}</h2>
          <p className="font-body text-lg text-text-secondary leading-relaxed max-w-[800px]">
            {communityData.theme.description}
          </p>
        </div>
      </section>

      {/* 3. FEATURED DISCUSSION */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Featured Discussion" />
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <span className="font-mono text-xs text-bronze-accent block mb-2">Question from {communityData.featuredDiscussion.author}</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-snug">
              &ldquo;{communityData.featuredDiscussion.question}&rdquo;
            </h2>
          </div>
          <div className="w-full md:w-1/2 border-l border-glass-border-strong pl-6 py-2">
            <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
              {communityData.featuredDiscussion.response}
            </p>
            <span className="font-mono text-xs text-foreground">— {communityData.featuredDiscussion.responseAuthor} ({communityData.featuredDiscussion.role})</span>
          </div>
        </div>
      </section>

      {/* 4. OPEN QUESTIONS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Open Questions" />
        <div className="space-y-6">
          {communityData.openQuestions.map((q, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-glass-border-light pb-6 group">
              <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-bronze-accent transition-colors leading-snug">
                {q.title}
              </h3>
              <div className="flex items-center gap-6 shrink-0">
                <span className="font-mono text-xs text-text-secondary">{q.responses} contributions</span>
                <Link href="#" className="btn-primary py-2 px-6 text-xs">Contribute</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMMUNITY ESSAYS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Community Essays" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityData.essays.map((essay, idx) => (
            <Link href="#" key={idx} className="group block border border-glass-border-light bg-surface-low/10 p-4 rounded-xl hover:border-bronze-accent/50 transition-all duration-300">
              <div className="relative h-[200px] w-full mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden rounded-lg">
                <Image src={essay.cover} alt={essay.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-wider text-text-secondary mb-3">
                <span className="text-bronze-accent">{essay.desk}</span>
                <span>{essay.readingTime}</span>
              </div>
              <h3 className="font-display text-xl text-foreground group-hover:text-bronze-accent transition-colors mb-2 line-clamp-2">
                {essay.title}
              </h3>
              <span className="font-body text-xs text-text-secondary">By {essay.author}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. READING CIRCLE & FILM CLUB */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Intellectual Circles" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reading Circle */}
          <div className="border border-glass-border-light bg-surface-low/20 p-6 md:p-8 rounded-xl flex flex-col sm:flex-row gap-6">
            <div className="relative h-[200px] w-[140px] shrink-0 grayscale rounded-lg overflow-hidden">
              <Image src={communityData.readingCircle.cover} alt={communityData.readingCircle.book} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase text-bronze-accent block mb-2">Reading Circle</span>
                <h3 className="font-display text-2xl text-foreground leading-tight mb-1">{communityData.readingCircle.book}</h3>
                <span className="font-body text-sm text-text-secondary block mb-4">by {communityData.readingCircle.author}</span>
                <span className="font-mono text-xs text-foreground bg-glass-border-light/20 border border-glass-border-light px-3 py-1 rounded inline-block">
                  {communityData.readingCircle.schedule}
                </span>
              </div>
              <Link href="#" className="font-mono text-xs uppercase tracking-wider text-bronze-accent hover:text-foreground transition-colors pt-4">
                Join Seminar Discussion →
              </Link>
            </div>
          </div>

          {/* Film Club */}
          <div className="border border-glass-border-light bg-surface-low/20 p-6 md:p-8 rounded-xl flex flex-col sm:flex-row gap-6">
            <div className="relative h-[200px] w-[140px] shrink-0 grayscale rounded-lg overflow-hidden">
              <Image src={communityData.filmClub.cover} alt={communityData.filmClub.film} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase text-bronze-accent block mb-2">Film Club</span>
                <h3 className="font-display text-2xl text-foreground leading-tight mb-1">{communityData.filmClub.film}</h3>
                <span className="font-body text-sm text-text-secondary block mb-4">dir. {communityData.filmClub.director}</span>
                <span className="font-mono text-xs text-foreground bg-glass-border-light/20 border border-glass-border-light px-3 py-1 rounded inline-block line-clamp-1">
                  {communityData.filmClub.theme}
                </span>
              </div>
              <Link href="#" className="font-mono text-xs uppercase tracking-wider text-bronze-accent hover:text-foreground transition-colors pt-4">
                Read Review & Discuss →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EVENTS & CONTRIBUTORS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contributors */}
          <div>
            <SectionLabel label="Contributors" />
            <div className="space-y-4">
              {communityData.contributors.map((c, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-glass-border-light pb-4">
                  <h4 className="font-display text-xl text-foreground">{c.name}</h4>
                  <span className="font-mono text-xs text-text-secondary">{c.focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <SectionLabel label="Upcoming Events" />
            <div className="space-y-6">
              {communityData.events.map((e, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <span className="font-mono text-sm text-bronze-accent pt-1 shrink-0">{e.date}</span>
                  <div>
                    <h4 className="font-display text-xl text-foreground group-hover:text-bronze-accent transition-colors leading-tight mb-1">{e.title}</h4>
                    <p className="font-body text-sm text-text-secondary">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. WRITING CHALLENGE */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Writing Challenge" />
        <div className="border border-glass-border-light p-8 md:p-12 bg-surface-low/10 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-[800px]">
            <h3 className="font-display text-3xl text-foreground mb-4">{communityData.challenge.title}</h3>
            <p className="font-body text-base text-text-secondary leading-relaxed mb-6">{communityData.challenge.description}</p>
            <div className="flex gap-6 font-mono text-xs">
              <span className="text-text-secondary">Deadline: <strong className="text-foreground">{communityData.challenge.deadline}</strong></span>
            </div>
          </div>
          <Link href="/write/studio/editor" className="btn-primary py-3 px-8 text-xs uppercase tracking-widest font-mono shrink-0">Submit Entry</Link>
        </div>
      </section>

      {/* 9. PRINCIPLES */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Principles" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="font-mono text-sm text-bronze-accent block mb-2">01</span>
            <h4 className="font-display text-xl text-foreground mb-2">Respect</h4>
            <p className="font-body text-sm text-text-secondary leading-relaxed">Address the argument, never the individual. Maintain civilizational grace.</p>
          </div>
          <div>
            <span className="font-mono text-sm text-bronze-accent block mb-2">02</span>
            <h4 className="font-display text-xl text-foreground mb-2">Evidence</h4>
            <p className="font-body text-sm text-text-secondary leading-relaxed">Anchor claims in historical context, raw text, or logical deductions.</p>
          </div>
          <div>
            <span className="font-mono text-sm text-bronze-accent block mb-2">03</span>
            <h4 className="font-display text-xl text-foreground mb-2">Curiosity</h4>
            <p className="font-body text-sm text-text-secondary leading-relaxed">Listen to understand before replying to contradict. Prioritize civil truth.</p>
          </div>
          <div>
            <span className="font-mono text-sm text-bronze-accent block mb-2">04</span>
            <h4 className="font-display text-xl text-foreground mb-2">Constructive</h4>
            <p className="font-body text-sm text-text-secondary leading-relaxed">Disagreement is crucial, but empty cynicism is rejected. Build conversations.</p>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
