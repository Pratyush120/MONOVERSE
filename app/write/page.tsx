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

export default function WriteLandingPage() {
  return (
    <div className="bg-transparent overflow-hidden pb-[120px]">
      <WriteHero />

      {/* WHY WRITE FOR MONOVERSE */}
      <section className="py-[64px] md:py-[120px] relative z-10 px-[24px] max-w-[1440px] mx-auto">
        <div className="glass-panel p-[40px] md:p-[80px] text-center max-w-[900px] mx-auto">
          <span className="section-label block mb-[24px]">Our Promise</span>
          <p className="font-body text-[20px] md:text-[24px] leading-[1.75] text-foreground font-medium mb-[24px]">
            We offer a home for writing that refuses to compromise on depth.
          </p>
          <p className="font-body text-[18px] leading-[1.8] text-text-secondary">
            In an ecosystem optimized for virality and engagement algorithms, Monoverse is engineered for permanence. 
            We do not publish content; we build an editorial archive. When you write for Monoverse, you are not posting 
            to a feed—you are contributing to a long-term body of knowledge built on editorial integrity and curated publishing.
          </p>
        </div>
      </section>

      <EditorialPhilosophy />

      {/* EDITORIAL DESKS */}
      <section className="py-[64px] md:py-[120px] relative z-10 px-[24px] max-w-[1440px] mx-auto">
        <div className="text-center mb-[64px]">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] text-foreground mb-[24px]">
            Editorial Desks
          </h2>
          <p className="font-body text-[18px] text-text-secondary max-w-[600px] mx-auto">
            Monoverse is organized into distinct editorial domains. Ensure your submission aligns with the mandate of the desk you are pitching.
          </p>
        </div>
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
      <section className="py-[64px] md:py-[120px] relative z-10 px-[24px] max-w-[1440px] mx-auto">
        <div className="mb-[64px]">
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] text-foreground mb-[24px]">
            Submission Categories
          </h2>
        </div>
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

      <EditorialStandards />
      
      <EditorialTimeline />
      
      <ContributorBenefits />
      
      <FAQSection />

      {/* FINAL CTA */}
      <section className="py-[120px] relative z-10 px-[24px] text-center max-w-[800px] mx-auto">
        <div className="glass-panel p-[64px] flex flex-col items-center">
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
    </div>
  );
}
