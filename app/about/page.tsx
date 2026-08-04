import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Understanding reality through research, literature, philosophy, history, technology, and civilization.",
};

export default function AboutPage() {
  return (
    <div className="bg-transparent overflow-hidden selection:bg-bronze-accent/20">
      
      {/* 
        SECTION 01: EDITORIAL HERO 
        Massive typography. Asymmetrical. Whitespace is the hero. 
      */}
      <section className="min-h-[90vh] flex flex-col justify-center relative pt-[120px] pb-[80px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto">
        
        {/* Subtle Section Label */}
        <div className="absolute top-[120px] left-[24px] md:left-[64px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary">01. Identity</span>
        </div>

        {/* Massive Offset Headline */}
        <div className="mt-[80px] md:mt-[40px] md:w-[85%] lg:w-[75%] md:ml-auto">
          <h1 className="font-display text-[56px] md:text-[96px] lg:text-[120px] text-foreground leading-[1] tracking-[-0.02em] mb-[40px]">
            The pursuit of<br className="hidden md:block" /> deeper understanding.
          </h1>
        </div>

        {/* Offset Intro */}
        <div className="md:w-[40%] mt-[24px] md:mt-[80px]">
          <p className="font-body text-[18px] md:text-[20px] text-text-secondary leading-[1.7]">
            We live in an age overflowing with information yet increasingly starved of understanding. Monoverse exists to bridge those connections through careful inquiry.
          </p>
        </div>

        {/* Thin Architectural Line */}
        <div className="absolute bottom-0 left-[24px] right-[24px] md:left-[64px] md:right-[64px] h-px bg-glass-border-light" />
      </section>


      {/* 
        SECTION 02: MISSION
        Magazine spread. Large pull quote. Drop cap. 
      */}
      <section className="py-[120px] md:py-[200px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto relative">
        <div className="flex flex-col md:flex-row gap-[80px] md:gap-[120px] items-start">
          
          {/* Large Pull Quote */}
          <div className="md:w-1/2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze-accent block mb-[40px]">02. Mission</span>
            <h2 className="font-display text-[40px] md:text-[56px] text-foreground leading-[1.1] italic">
              "Every day, thousands of articles explain what happened. Few ask why it happened."
            </h2>
          </div>

          {/* Narrow Text Column with Drop Cap */}
          <div className="md:w-[40%] md:pt-[120px]">
            <p className="font-body text-[18px] text-text-secondary leading-[1.8] first-letter:font-display first-letter:text-[72px] first-letter:text-foreground first-letter:float-left first-letter:leading-[0.8] first-letter:mr-[16px] first-letter:mt-[8px]">
              This is an independent research publication dedicated to exploring the ideas that shape our world. Not through ideology or sensationalism, but through first-principles thinking. A technological breakthrough is also a story about economics. A political conflict is inseparable from history. Our goal is to uncover those invisible threads.
            </p>
          </div>

        </div>
      </section>


      {/* 
        SECTION 03: EDITORIAL PRINCIPLES
        Asymmetrical rhythm. Thin dividers. No stacked cards.
      */}
      <section className="py-[120px] md:py-[200px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto relative border-t border-glass-border-light">
        <div className="mb-[120px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary block">03. Philosophy</span>
        </div>

        <div className="flex flex-col space-y-[120px] md:space-y-[160px]">
          
          {/* Principle 1: Left Aligned, Narrow */}
          <div className="md:w-1/3 border-t border-bronze-accent/30 pt-[24px]">
            <span className="font-mono text-[12px] text-bronze-accent block mb-[16px]">I.</span>
            <h3 className="font-display text-[32px] md:text-[40px] text-foreground mb-[24px]">Depth over Speed</h3>
            <p className="font-body text-[16px] text-text-secondary leading-[1.8]">
              We do not race to publish takes on the news of the day. We publish pieces that contextualize the present through the deep past, designed to remain valuable years from now.
            </p>
          </div>

          {/* Principle 2: Right Aligned, Medium */}
          <div className="md:w-[45%] md:ml-auto border-t border-glass-border-light pt-[24px]">
            <span className="font-mono text-[12px] text-text-secondary block mb-[16px]">II.</span>
            <h3 className="font-display text-[32px] md:text-[40px] text-foreground mb-[24px]">Evidence over Opinion</h3>
            <p className="font-body text-[16px] text-text-secondary leading-[1.8]">
              Arguments must be grounded in rigorous research and historical precedent rather than mere sentiment. We cultivate understanding, not outrage.
            </p>
          </div>

          {/* Principle 3: Offset Left, Wide */}
          <div className="md:w-[60%] md:ml-[10%] border-t border-glass-border-light pt-[24px]">
            <span className="font-mono text-[12px] text-text-secondary block mb-[16px]">III.</span>
            <h3 className="font-display text-[32px] md:text-[40px] text-foreground mb-[24px]">Curiosity over Certainty</h3>
            <p className="font-body text-[18px] text-text-secondary leading-[1.8]">
              The objective is not to tell you what to think. It is to help you learn how to think. The best writing opens new avenues of inquiry rather than closing them with absolute declarations.
            </p>
          </div>

          {/* Principle 4: Right Aligned, Narrow */}
          <div className="md:w-1/3 md:ml-auto border-t border-glass-border-light pt-[24px]">
            <span className="font-mono text-[12px] text-text-secondary block mb-[16px]">IV.</span>
            <h3 className="font-display text-[32px] md:text-[40px] text-foreground mb-[24px]">Dialogue over Noise</h3>
            <p className="font-body text-[16px] text-text-secondary leading-[1.8]">
              We welcome contrarian ideas and critiques of existing structures, provided they are argued constructively and elegantly.
            </p>
          </div>

          {/* Principle 5: Left Aligned, Medium */}
          <div className="md:w-[45%] border-t border-glass-border-light pt-[24px]">
            <span className="font-mono text-[12px] text-text-secondary block mb-[16px]">V.</span>
            <h3 className="font-display text-[32px] md:text-[40px] text-foreground mb-[24px]">Quality over Quantity</h3>
            <p className="font-body text-[16px] text-text-secondary leading-[1.8]">
              We publish less, ensuring every piece that enters the archive is of lasting value. Knowledge should not be consumed—it should be explored.
            </p>
          </div>

          {/* Principle 6: Centered, Heroic */}
          <div className="md:w-2/3 mx-auto text-center border-t border-bronze-accent/30 pt-[40px]">
            <span className="font-mono text-[12px] text-bronze-accent block mb-[24px]">VI.</span>
            <h3 className="font-display text-[40px] md:text-[56px] text-foreground mb-[32px]">Ideas over Virality</h3>
            <p className="font-body text-[20px] text-text-secondary leading-[1.8]">
              Better questions create better thinking. And better thinking shapes better civilizations.
            </p>
          </div>

        </div>
      </section>


      {/* 
        SECTION 04: EDITORIAL DESKS
        Massive whitespace. Minimal text. 
      */}
      <section className="py-[160px] md:py-[240px] px-[24px] md:px-[64px] max-w-[1440px] mx-auto relative border-t border-glass-border-light">
        <div className="flex flex-col md:flex-row justify-between items-start mb-[160px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-[40px] md:mb-0">04. Desks</span>
          <p className="font-body text-[18px] text-text-secondary md:w-1/3">
            Monoverse is organized into distinct editorial domains, drawing from philosophy, history, science, cinema, and systems thinking.
          </p>
        </div>

        <div className="space-y-[40px] md:space-y-[80px]">
          
          <div className="group">
            <h3 className="font-display text-[48px] md:text-[80px] text-foreground mb-[16px] group-hover:text-bronze-accent transition-colors duration-500">
              Essays
            </h3>
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-glass-border-light pb-[40px] md:pb-[80px] gap-[24px]">
              <p className="font-body text-[16px] md:text-[18px] text-text-secondary md:w-1/2">
                Deep explorations of philosophy, history, science, and technology.
              </p>
              <Link href="/explore" className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground hover:text-bronze-accent transition-colors">
                Read the Archive ↗
              </Link>
            </div>
          </div>

          <div className="group">
            <h3 className="font-display text-[48px] md:text-[80px] text-foreground mb-[16px] group-hover:text-bronze-accent transition-colors duration-500">
              Cinema
            </h3>
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-glass-border-light pb-[40px] md:pb-[80px] gap-[24px]">
              <p className="font-body text-[16px] md:text-[18px] text-text-secondary md:w-1/2">
                Treating film as a cultural, historical, and technological phenomenon.
              </p>
              <Link href="/cinema" className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground hover:text-bronze-accent transition-colors">
                Explore Cinema ↗
              </Link>
            </div>
          </div>

          <div className="group">
            <h3 className="font-display text-[48px] md:text-[80px] text-foreground mb-[16px] group-hover:text-bronze-accent transition-colors duration-500">
              Community
            </h3>
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-glass-border-light pb-[40px] md:pb-[80px] gap-[24px]">
              <p className="font-body text-[16px] md:text-[18px] text-text-secondary md:w-1/2">
                Focused observations and emerging ideas from thoughtful readers.
              </p>
              <Link href="/community" className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground hover:text-bronze-accent transition-colors">
                View Community ↗
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* 
        SECTION 05: CLOSING STATEMENT
        Cinematic ending. High negative space.
      */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center py-[120px] px-[24px] md:px-[64px] text-center border-t border-glass-border-light">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-[64px]">05. Conclusion</span>
        
        <h2 className="font-display text-[40px] md:text-[64px] lg:text-[80px] text-foreground leading-[1.1] max-w-[1000px] mb-[40px]">
          The universe becomes more coherent when we learn to see the invisible threads connecting everything.
        </h2>
        
        <p className="font-body text-[18px] text-text-secondary mb-[80px]">
          Join us in cultivating understanding.
        </p>

        <div className="flex flex-col sm:flex-row gap-[24px] items-center">
          <Link href="/explore" className="btn-primary text-[14px] py-[16px] px-[48px]">
            Explore Monoverse
          </Link>
          <Link href="/write" className="font-label text-[12px] font-[700] uppercase tracking-[0.2em] text-bronze-accent hover:text-foreground transition-colors px-[24px] py-[16px]">
            Write for Us
          </Link>
        </div>
      </section>

    </div>
  );
}
