import { SectionReveal } from "../components/SectionReveal";

export const metadata = {
  title: "The Lexicon",
  description: "A glossary of concepts and terminology.",
};

const TERMS = [
  { term: "First Principles", type: "philosophy", def: "A foundational proposition or assumption that stands alone and cannot be deduced any further. The bedrock of clear thinking." },
  { term: "Digital Vellum", type: "technology", def: "The conceptual material of the Monoverse interface—a digital medium treated with the permanence and reverence of archival animal skin." },
  { term: "Entropy", type: "physics", def: "The measure of a system's thermal energy per unit temperature that is unavailable for doing useful work; the inevitable degradation of structured information." },
  { term: "The Marginalia", type: "editorial", def: "Notes, annotations, and editorial commentary situated in the margins of a primary text; the conversation occurring outside the main narrative." },
];

export default function LexiconPage() {
  return (
    <div className="bg-background min-h-screen">
      <SectionReveal>
        <header className="max-w-[1440px] mx-auto px-[64px] py-[120px] border-b border-outline-variant">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-[16px] mb-[32px]">
              <span className="font-meta text-[11px] uppercase tracking-[0.2em] text-bronze font-semibold">
                Glossary
              </span>
              <span className="w-[40px] h-[0.5px] bg-bronze" />
            </div>
            
            <h1 className="font-display font-normal text-foreground mb-[32px]"
                style={{ fontSize: "clamp(64px, 8vw, 112px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
              The Lexicon
            </h1>
            
            <p className="font-body text-[20px] md:text-[24px] text-text-secondary leading-[1.6] max-w-[600px]">
              A precise catalog of terminology, concepts, and intellectual frameworks utilized throughout the Monoverse archive.
            </p>
          </div>
        </header>
      </SectionReveal>

      <SectionReveal delay={80}>
        <section className="py-[120px]">
          <div className="max-w-[1440px] mx-auto px-[64px]">
            <div className="max-w-[800px]">
              {TERMS.map((item, index) => (
                <div key={item.term} className={`py-[48px] ${index !== 0 ? 'border-t border-outline-variant' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-[16px] mb-[24px]">
                    <h2 className="font-display text-[36px] text-foreground font-normal">
                      {item.term}
                    </h2>
                    <span className="taxonomy-tag hidden md:inline-block">
                      {item.type}
                    </span>
                  </div>
                  <span className="taxonomy-tag inline-block md:hidden mb-[16px]">
                    {item.type}
                  </span>
                  <p className="font-body text-[20px] leading-[1.8] text-text-secondary">
                    {item.def}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </div>
  );
}
