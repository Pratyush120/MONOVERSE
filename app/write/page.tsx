"use client";

import Link from "next/link";
import { WriteHero } from "../components/write/WriteHero";
import { EditorialPhilosophy } from "../components/write/EditorialPhilosophy";
import { EditorialDeskCard } from "../components/write/EditorialDeskCard";
import { SubmissionCategoryCard } from "../components/write/SubmissionCategoryCard";
import { EditorialStandards } from "../components/write/EditorialStandards";
import { EditorialTimeline } from "../components/write/EditorialTimeline";
import { ContributorBenefits } from "../components/write/ContributorBenefits";
import { FAQSection } from "../components/write/FAQSection";
import { SectionLabel } from "../components/SectionLabel";
import { Newsletter } from "../components/Newsletter";

export default function WriteLandingPage() {
  return (
    <div className="bg-background pt-[120px] md:pt-[160px] pb-[80px] theme-seaside">
      {/* 1. HERO */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[80px] md:mb-[120px] text-center">
        <h1 className="font-headline text-[64px] md:text-[96px] lg:text-[120px] leading-[1] text-foreground mb-[32px] tracking-tight">
          Write
        </h1>
        <p className="font-body text-[20px] md:text-[24px] leading-[1.6] text-text-secondary max-w-[700px] mx-auto">
          Monoverse is a home for writing that refuses to compromise on depth. Learn how to pitch your work.
        </p>
      </section>

      {/* WHY WRITE FOR MONOVERSE */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Our Promise" />
        <div className="border border-glass-border-light bg-surface-low/10 p-8 md:p-12 rounded-xl text-center max-w-[900px] mx-auto">
          <p className="font-body text-[20px] md:text-[24px] leading-[1.75] text-foreground font-medium mb-[24px]">
            We offer a home for writing that refuses to compromise on depth.
          </p>
          <p className="font-body text-[18px] leading-[1.8] text-text-secondary">
            In an ecosystem optimized for virality and engagement algorithms, Monoverse is engineered for permanence. 
            We do not publish content; we build an editorial archive. When you write for Monoverse, you are not posting 
            to a feed—you are contributing to a long-term body of knowledge built on editorial integrity.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Philosophy" />
        <EditorialPhilosophy />
      </section>

      {/* EDITORIAL DESKS */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Editorial Desks" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
          <EditorialDeskCard 
            name="Essays & Research"
            purpose="Deep explorations of philosophy, history, science, and technology."
            publishes="Research articles, historical analyses, philosophical inquiries, and technological critiques."
            length="1,500 - 4,000 words"
            examples={[]}
          />
          <EditorialDeskCard 
            name="Cinema"
            purpose="Treating film as a cultural, historical, and technological phenomenon."
            publishes="Film reviews, industry analysis, director retrospectives, and thematic explorations."
            length="800 - 2,500 words"
            examples={[]}
          />
          <EditorialDeskCard 
            name="Community"
            purpose="Shorter, focused observations and emerging ideas from readers."
            publishes="Reading recommendations, brief observations, cultural commentary, and responses to existing essays."
            length="400 - 1,000 words"
            examples={[]}
          />
        </div>
      </section>

      {/* SUBMISSION CATEGORIES */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Submission Categories" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <SubmissionCategoryCard 
            name="Research Article"
            description="Heavily cited, structured explorations of a specific historical or scientific thesis."
            expectedLength="2,500+ words"
            expectations="Requires bibliography, primary sources, and academic rigor translated for a general audience."
          />
          <SubmissionCategoryCard 
            name="Cultural Essay"
            description="Observations connecting modern societal trends with deeper philosophical or historical roots."
            expectedLength="1,500 - 3,000 words"
            expectations="Must present a clear, original thesis rather than summarizing existing discourse."
          />
          <SubmissionCategoryCard 
            name="Cinema Review"
            description="Critical analysis of a newly released or archival film."
            expectedLength="800 - 1,500 words"
            expectations="Avoid pure plot summary. Focus on cinematic technique, thematic resonance, and cultural context."
          />
          <SubmissionCategoryCard 
            name="Community Note"
            description="Brief, focused thoughts or responses."
            expectedLength="Under 800 words"
            expectations="Concise and precise. Ideal for single-issue observations or curated recommendations."
          />
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Standards" />
        <EditorialStandards />
      </section>
      
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Timeline" />
        <EditorialTimeline />
      </section>
      
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Benefits" />
        <ContributorBenefits />
      </section>
      
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="FAQ" />
        <FAQSection />
      </section>

      {/* FINAL CTA */}
      <section className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] mb-[120px]">
        <SectionLabel label="Apply" />
        <div className="glass-panel p-[64px] flex flex-col items-center max-w-[800px] mx-auto">
          <h2 className="font-display text-[32px] md:text-[40px] leading-[1.15] text-foreground mb-[24px]">
            Ready to Publish?
          </h2>
          <p className="font-body text-[18px] text-text-secondary leading-[1.6] mb-[40px] max-w-[500px]">
            If your work contributes meaningfully to public understanding, we invite you to submit it for editorial review.
          </p>
          <div className="flex flex-col sm:flex-row gap-[16px]">
            <Link href="/write/studio" className="btn-primary text-[14px] py-[16px] px-[40px]">
              Submit Your Work
            </Link>
            <Link href="#guidelines" className="font-label text-[12px] font-[700] uppercase tracking-[0.2em] text-bronze-accent hover:text-foreground transition-colors px-[24px] py-[16px]">
              Read Guidelines
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
