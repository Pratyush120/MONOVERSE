import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "../components/SectionLabel";
import { Newsletter } from "../components/Newsletter";

export const metadata: Metadata = {
  title: "About | Monoverse",
  description: "Understanding reality through research, literature, philosophy, history, technology, and civilization.",
};

export default function AboutPage() {
  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px]">
      
      {/* Hero section styled like Cinema */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] md:mb-[120px] text-center">
        <h1 className="font-headline text-[64px] md:text-[96px] lg:text-[120px] leading-[1] text-foreground mb-[32px] tracking-tight">
          About Us
        </h1>
        <p className="font-body text-[20px] md:text-[24px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
          An independent research publication dedicated to understanding reality through deep multidisciplinary inquiry.
        </p>
      </section>

      {/* SECTION 01: IDENTITY */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Identity" />
        <div className="flex flex-col md:flex-row items-end gap-[40px] md:gap-0">
          <div className="w-full md:w-[60%] md:pr-[64px]">
            <h2 className="font-display text-[48px] md:text-[64px] text-foreground leading-[1] tracking-tight">
              The pursuit of deeper understanding.
            </h2>
          </div>
          <div className="w-full md:w-[40%] md:pl-[64px] md:border-l border-glass-border-light pt-[24px] md:pt-0">
            <p className="font-body text-[18px] md:text-[20px] text-text-secondary leading-[1.6]">
              We live in an age overflowing with information yet increasingly starved of understanding. Monoverse exists to bridge those connections through careful inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02: MISSION */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Mission" />
        <div className="flex flex-col md:flex-row gap-[80px] md:gap-[120px] items-center">
          <div className="w-full md:w-[55%] relative">
            <span className="absolute -top-[60px] -left-[20px] md:-top-[80px] md:-left-[40px] font-display text-[160px] md:text-[240px] text-bronze-accent/20 leading-none select-none">
              &ldquo;
            </span>
            <h2 className="font-display text-[40px] md:text-[56px] text-foreground leading-[1.05] italic relative z-10">
              Every day, thousands of articles explain what happened. Few ask why it happened.
            </h2>
          </div>
          <div className="w-full md:w-[45%]">
            <p className="font-body text-[18px] text-text-secondary leading-[1.8] first-letter:font-display first-letter:text-[72px] first-letter:text-foreground first-letter:float-left first-letter:leading-[0.8] first-letter:mr-[16px] first-letter:mt-[8px]">
              This is an independent research publication dedicated to exploring the ideas that shape our world. Not through ideology or sensationalism, but through first-principles thinking. A technological breakthrough is also a story about economics. A political conflict is inseparable from history. Our goal is to uncover those invisible threads.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03: PHILOSOPHY */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Philosophy" />
        <div className="flex flex-col space-y-[40px] md:space-y-[64px]">
          <div className="w-full border-t border-bronze-accent pt-[24px] flex flex-col md:flex-row md:items-start gap-[24px] md:gap-[120px]">
            <h3 className="font-display text-[32px] md:text-[48px] text-foreground w-full md:w-1/2 leading-[1.1]">Depth over Speed</h3>
            <p className="font-body text-[16px] md:text-[18px] text-text-secondary leading-[1.6] w-full md:w-1/2 md:pt-[12px]">
              We do not race to publish takes on the news of the day. We publish pieces that contextualize the present through the deep past, designed to remain valuable years from now.
            </p>
          </div>
          <div className="w-full md:w-[80%] md:ml-auto border-t border-glass-border-light pt-[24px] flex flex-col md:flex-row md:items-start gap-[24px] md:gap-[80px]">
            <h3 className="font-display text-[32px] md:text-[40px] text-foreground w-full md:w-[45%] leading-[1.1]">Evidence over Opinion</h3>
            <p className="font-body text-[16px] text-text-secondary leading-[1.6] w-full md:w-[55%] md:pt-[8px]">
              Arguments must be grounded in rigorous research and historical precedent rather than mere sentiment. We cultivate understanding, not outrage.
            </p>
          </div>
          <div className="w-full md:w-[90%] border-t border-glass-border-light pt-[24px] flex flex-col md:flex-row md:items-start gap-[24px] md:gap-[100px]">
            <h3 className="font-display text-[32px] md:text-[40px] text-foreground w-full md:w-[50%] leading-[1.1]">Curiosity over Certainty</h3>
            <p className="font-body text-[16px] text-text-secondary leading-[1.6] w-full md:w-[50%] md:pt-[8px]">
              The objective is not to tell you what to think. It is to help you learn how to think. The best writing opens new avenues of inquiry rather than closing them with absolute declarations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04: DESKS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Desks" />
        <div className="space-y-[80px] md:space-y-[120px]">
          <div className="flex flex-col-reverse md:flex-row items-center gap-[40px] md:gap-[80px] border-b border-glass-border-light pb-[80px]">
            <div className="w-full md:w-1/2">
              <span className="font-mono text-[11px] text-bronze-accent block mb-[16px]">Domain I</span>
              <h3 className="font-display text-[48px] md:text-[64px] text-foreground mb-[24px] leading-[1]">Essays & Research</h3>
              <p className="font-body text-[18px] text-text-secondary mb-[32px] leading-[1.6]">
                Deep explorations of philosophy, history, science, and technology. Uncovering the invisible threads that connect distinct disciplines.
              </p>
              <Link href="/explore" className="font-label text-[12px] uppercase tracking-[0.2em] text-foreground hover:text-bronze-accent transition-colors">
                Explore Essays →
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200" 
                alt="Library archive"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[80px] border-b border-glass-border-light pb-[80px]">
            <div className="w-full md:w-[45%] relative h-[300px] md:h-[600px] grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200" 
                alt="Cinema projector"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-[55%] md:pl-[40px]">
              <span className="font-mono text-[11px] text-bronze-accent block mb-[16px]">Domain II</span>
              <h3 className="font-display text-[48px] md:text-[64px] text-foreground mb-[24px] leading-[1]">Cinema</h3>
              <p className="font-body text-[18px] text-text-secondary mb-[32px] leading-[1.6]">
                Treating film as a cultural, historical, and technological phenomenon. Reviews, festival coverage, and industry analysis.
              </p>
              <Link href="/cinema" className="font-label text-[12px] uppercase tracking-[0.2em] text-foreground hover:text-bronze-accent transition-colors">
                Read Cinema →
              </Link>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center gap-[40px] md:gap-[80px]">
            <div className="w-full md:w-1/2">
              <span className="font-mono text-[11px] text-bronze-accent block mb-[16px]">Domain III</span>
              <h3 className="font-display text-[48px] md:text-[64px] text-foreground mb-[24px] leading-[1]">Community</h3>
              <p className="font-body text-[18px] text-text-secondary mb-[32px] leading-[1.6]">
                Focused observations and emerging ideas from thoughtful readers. A curated space for intellectual dialogue.
              </p>
              <Link href="/community" className="font-label text-[12px] uppercase tracking-[0.2em] text-foreground hover:text-bronze-accent transition-colors">
                View Community →
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200" 
                alt="Community gathering"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: CLOSING */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Conclusion" />
        <div className="border border-glass-border-light p-12 text-center bg-surface-low/10 rounded-xl">
          <h2 className="font-display text-[32px] md:text-[56px] text-foreground leading-[1.1] mb-[24px]">
            The universe becomes more coherent when we learn to see the invisible threads.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-text-secondary mb-[48px]">
            Join us in cultivating understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-[24px] items-center justify-center">
            <Link href="/explore" className="btn-primary text-[12px] py-[16px] px-[40px]">
              Explore Monoverse
            </Link>
            <Link href="/write" className="font-label text-[11px] font-[700] uppercase tracking-[0.2em] text-bronze-accent hover:text-foreground transition-colors px-[24px] py-[16px] border border-bronze-accent/30 hover:border-bronze-accent">
              Write for Us
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
