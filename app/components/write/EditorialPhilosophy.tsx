"use client";

interface EditorialPhilosophyProps {}

export function EditorialPhilosophy({}: EditorialPhilosophyProps) {
  const principles = [
    { title: "Depth over speed", description: "We do not race to publish takes on the news of the day. We publish pieces that contextualize the present through the deep past." },
    { title: "Evidence over opinion", description: "Arguments must be grounded in research, historical precedent, or rigorous logical deduction rather than mere sentiment." },
    { title: "Curiosity over certainty", description: "The best writing opens new avenues of inquiry rather than closing them with absolute declarations." },
    { title: "Quality over quantity", description: "We publish less, but we ensure every piece that enters the archive is of lasting value." },
    { title: "Respectful disagreement", description: "We welcome contrarian ideas and critiques of existing structures, provided they are argued constructively." },
    { title: "Clarity before complexity", description: "Complex ideas should be rendered accessible through elegant prose, not obscured by academic jargon." },
  ];

  return (
    <section className="py-[64px] md:py-[120px] relative z-10 px-[24px] max-w-[1440px] mx-auto">
      <div className="glass-panel p-[40px] md:p-[80px]">
        <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] text-foreground mb-[48px] border-b border-glass-border-light pb-[24px]">
          Editorial Philosophy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] md:gap-[64px]">
          {principles.map((principle, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="font-display text-[24px] text-foreground mb-[16px]">{principle.title}</h3>
              <p className="font-body text-[17px] leading-[1.75] text-text-secondary">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
