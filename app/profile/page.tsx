import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Settings, Bookmark, Edit3, BookOpen, Clock, Archive, PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: "My Profile",
  description: "Private member profile on Monoverse.",
};

// Dummy Data for the Private Member Profile
const memberData = {
  name: "Pratyush Mohanty",
  role: "Contributor",
  joined: "October 2022",
  bio: "Exploring systems theory, cinema, and digital anthropology.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  about: "I am a researcher and writer based in India, focusing on the intersection of human psychology, emerging technology, and historical cycles. My current research investigates how algorithmic systems alter cultural memory.",
  links: {
    website: "pratyush.xyz",
    location: "Odisha, India"
  },
  interests: ["Philosophy", "Cinema", "Digital Anthropology", "Systems Theory"],
  contributions: {
    essays: [
      { title: "The Architecture of Silence", status: "Published", date: "Sep 10, 2024", readingTime: "18 min read" },
      { title: "Against Optimization", status: "Published", date: "Aug 02, 2024", readingTime: "15 min read" },
    ],
    reviews: [
      { title: "The Philosophy of Dune's Sandworms", status: "Published", date: "Oct 28, 2024", readingTime: "20 min read" },
    ],
    community: [],
    lists: [
      { title: "Foundations of Systems Theory", status: "Published", date: "Jan 12, 2024", count: "5 Items" }
    ]
  },
  savedLibrary: [
    { title: "The Decay of Digital Artifacts", type: "Essay", author: "Elena Rostova", savedOn: "Oct 15, 2024" },
    { title: "Stalker", type: "Film", author: "Andrei Tarkovsky", savedOn: "Sep 20, 2024" },
    { title: "Post-Cinematic Viewing", type: "Collection", author: "David Wallace", savedOn: "Aug 11, 2024" }
  ],
  activity: [
    { date: "Oct 28, 2024", event: "Published a Cinema Review: The Philosophy of Dune's Sandworms" },
    { date: "Oct 15, 2024", event: "Saved 'The Decay of Digital Artifacts' to Library" },
    { date: "Oct 12, 2024", event: "Joined the Reading Circle: 'Amusing Ourselves to Death'" },
    { date: "Sep 10, 2024", event: "Published an Essay: The Architecture of Silence" }
  ],
  writerTools: [
    { title: "The End of Asynchronous Communication", status: "Under Review", lastEdited: "2 days ago" },
    { title: "Notes on Artificial Empathy", status: "Draft", lastEdited: "1 week ago" },
    { title: "Cinematic Mirrors", status: "Revision Requested", lastEdited: "3 weeks ago" }
  ]
};

export default function PrivateProfilePage() {
  const isContributor = memberData.role === "Contributor" || memberData.role === "Editor";

  return (
    <div className="bg-background min-h-screen pb-[120px] selection:bg-bronze-accent/20">
      
      {/* 
        SECTION 01: HERO & SECTION 02: ABOUT 
        Clean, horizontal profile header merging into the bio.
      */}
      <section className="pt-[160px] pb-[80px] px-[24px] md:px-[64px] max-w-[1000px] mx-auto border-b border-glass-border-light">
        <div className="flex flex-col md:flex-row gap-[48px] items-start">
          
          <div className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] shrink-0 grayscale border border-glass-border-light rounded-full overflow-hidden">
            <Image src={memberData.avatar} alt={memberData.name} fill className="object-cover" />
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[24px] mb-[24px]">
              <div>
                <h1 className="font-display text-[40px] md:text-[56px] text-foreground leading-[1.1] mb-[8px]">{memberData.name}</h1>
                <div className="flex items-center gap-[16px] font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary">
                  <span className="text-bronze-accent">{memberData.role}</span>
                  <span>•</span>
                  <span>Joined {memberData.joined}</span>
                </div>
              </div>
              <button className="btn-primary py-[10px] px-[24px] text-[11px] flex items-center gap-[8px]">
                <Edit3 size={14} /> Edit Profile
              </button>
            </div>
            
            <p className="font-body text-[18px] md:text-[22px] text-foreground leading-[1.6] mb-[24px] max-w-[600px]">
              {memberData.bio}
            </p>

            <div className="font-body text-[16px] text-text-secondary leading-[1.8] max-w-[700px] mb-[32px]">
              {memberData.about}
            </div>

            <div className="flex flex-wrap gap-[24px] font-mono text-[11px] uppercase tracking-[0.1em]">
              {memberData.links.website && (
                <a href={`https://${memberData.links.website}`} target="_blank" rel="noopener noreferrer" className="text-bronze-accent hover:text-foreground transition-colors">
                  {memberData.links.website}
                </a>
              )}
              {memberData.links.location && (
                <span className="text-text-secondary">{memberData.links.location}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 03: INTERESTS
      */}
      <section className="py-[80px] px-[24px] md:px-[64px] max-w-[1000px] mx-auto border-b border-glass-border-light">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[32px]">Editorial Interests</span>
        <div className="flex flex-wrap gap-x-[24px] gap-y-[16px] items-center">
          {memberData.interests.map((interest, idx) => (
            <div key={idx} className="flex items-center gap-[24px]">
              <span className="font-display text-[24px] text-foreground">{interest}</span>
              {idx !== memberData.interests.length - 1 && (
                <span className="text-bronze-accent/30 font-display text-[24px]">/</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 
        SECTION 08: PRIVATE WRITER TOOLS (Conditional)
      */}
      {isContributor && (
        <section className="py-[80px] px-[24px] md:px-[64px] max-w-[1000px] mx-auto border-b border-glass-border-light bg-surface-low/30">
          <div className="flex justify-between items-end mb-[40px]">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze-accent block mb-[16px]">Contributor Studio</span>
              <h2 className="font-display text-[32px] text-foreground">Active Work</h2>
            </div>
            <Link href="/write/studio/editor" className="font-mono text-[11px] uppercase tracking-[0.1em] text-bronze-accent hover:text-foreground transition-colors flex items-center gap-[8px]">
              <PenTool size={14} /> Open Editor
            </Link>
          </div>
          
          <div className="space-y-[16px]">
            {memberData.writerTools.map((work, idx) => (
              <div key={idx} className="glass-panel p-[24px] flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] hover:border-bronze-accent/50 transition-colors cursor-pointer">
                <div>
                  <h3 className="font-display text-[24px] text-foreground mb-[8px]">{work.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">Last Edited: {work.lastEdited}</span>
                </div>
                <div className="shrink-0">
                  <span className={`font-mono text-[10px] uppercase tracking-[0.1em] px-[12px] py-[6px] border ${
                    work.status === 'Draft' ? 'border-glass-border-light text-text-secondary' :
                    work.status === 'Under Review' ? 'border-bronze-accent/50 text-bronze-accent bg-bronze-accent/5' :
                    'border-red-900/50 text-red-400 bg-red-900/10'
                  }`}>
                    {work.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 
        SECTION 04: MY CONTRIBUTIONS
        The most important section. Displaying published work.
      */}
      <section className="py-[80px] px-[24px] md:px-[64px] max-w-[1000px] mx-auto border-b border-glass-border-light">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">Published Contributions</span>
        
        <div className="space-y-[64px]">
          {/* Essays */}
          <div>
            <h3 className="font-display text-[28px] text-foreground mb-[24px] flex items-center gap-[12px]">
              <BookOpen size={20} className="text-bronze-accent" /> Essays
            </h3>
            {memberData.contributions.essays.length > 0 ? (
              <div className="space-y-[16px]">
                {memberData.contributions.essays.map((item, idx) => (
                  <div key={idx} className="glass-panel p-[24px] flex justify-between items-center group cursor-pointer hover:border-bronze-accent/50 transition-colors">
                    <div>
                      <h4 className="font-display text-[24px] text-foreground mb-[8px] group-hover:text-bronze-accent transition-colors">{item.title}</h4>
                      <div className="flex gap-[16px] font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readingTime}</span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-bronze-accent hidden sm:block">Published</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-panel p-[40px] text-center">
                <span className="font-body text-[16px] text-text-secondary">No essays published yet.</span>
              </div>
            )}
          </div>

          {/* Cinema Reviews */}
          <div>
            <h3 className="font-display text-[28px] text-foreground mb-[24px] flex items-center gap-[12px]">
              <Clock size={20} className="text-bronze-accent" /> Cinema Reviews
            </h3>
            {memberData.contributions.reviews.length > 0 ? (
              <div className="space-y-[16px]">
                {memberData.contributions.reviews.map((item, idx) => (
                  <div key={idx} className="glass-panel p-[24px] flex justify-between items-center group cursor-pointer hover:border-bronze-accent/50 transition-colors">
                    <div>
                      <h4 className="font-display text-[24px] text-foreground mb-[8px] group-hover:text-bronze-accent transition-colors">{item.title}</h4>
                      <div className="flex gap-[16px] font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readingTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass-panel p-[40px] text-center">
                <span className="font-body text-[16px] text-text-secondary">No reviews published yet.</span>
              </div>
            )}
          </div>

          {/* Community Posts - Empty State Example */}
          <div>
            <h3 className="font-display text-[28px] text-foreground mb-[24px] flex items-center gap-[12px]">
              <Archive size={20} className="text-bronze-accent" /> Community Posts
            </h3>
            <div className="glass-panel p-[48px] text-center flex flex-col items-center border-dashed border-glass-border-light">
              <span className="font-display text-[24px] text-text-secondary mb-[16px]">Your voice matters.</span>
              <p className="font-body text-[16px] text-text-secondary max-w-[400px] mb-[24px]">
                Join the ongoing discussions in the Community Desk or respond to an open prompt.
              </p>
              <Link href="/community" className="font-mono text-[11px] uppercase tracking-[0.1em] text-bronze-accent hover:text-foreground transition-colors">
                Explore Prompts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SECTION 05: SAVED LIBRARY
      */}
      <section className="py-[80px] px-[24px] md:px-[64px] max-w-[1000px] mx-auto border-b border-glass-border-light">
        <div className="flex justify-between items-end mb-[40px]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[16px]">Private Space</span>
            <h2 className="font-display text-[40px] text-foreground flex items-center gap-[16px]">
              <Bookmark size={28} className="text-bronze-accent" /> Saved Library
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
          {memberData.savedLibrary.map((item, idx) => (
            <div key={idx} className="glass-panel p-[24px] hover:border-bronze-accent/50 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-[16px]">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">{item.type}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary/50">Saved {item.savedOn}</span>
              </div>
              <h3 className="font-display text-[24px] text-foreground mb-[8px] group-hover:text-bronze-accent transition-colors">{item.title}</h3>
              <p className="font-body text-[15px] text-text-secondary">By {item.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 
        SECTION 06: ACTIVITY
      */}
      <section className="py-[80px] px-[24px] md:px-[64px] max-w-[1000px] mx-auto border-b border-glass-border-light">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[48px]">Activity Log</span>
        
        <div className="border-l border-glass-border-light ml-[16px] space-y-[40px] py-[16px]">
          {memberData.activity.map((item, idx) => (
            <div key={idx} className="relative pl-[40px]">
              <div className="absolute left-[-4px] top-[6px] w-[7px] h-[7px] bg-background border border-glass-border-light rounded-full" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-[8px] sm:gap-[32px]">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary shrink-0 w-[100px]">{item.date}</span>
                <p className="font-body text-[18px] text-foreground leading-[1.4]">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        SECTION 07: SETTINGS
      */}
      <section className="py-[80px] px-[24px] md:px-[64px] max-w-[1000px] mx-auto">
        <div className="flex justify-between items-end mb-[40px]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block mb-[16px]">Account Management</span>
            <h2 className="font-display text-[40px] text-foreground flex items-center gap-[16px]">
              <Settings size={28} className="text-text-secondary" /> Settings
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
          {["Profile Information", "Password & Security", "Notifications", "Theme Preferences", "Privacy", "Manage Account"].map((setting, idx) => (
            <div key={idx} className="border border-glass-border-light p-[24px] hover:border-bronze-accent/50 transition-colors cursor-pointer group">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground group-hover:text-bronze-accent transition-colors block text-center">
                {setting}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
