"use client";

export function ContributorBenefits() {
  const benefits = [
    { title: "Author Profile", text: "Every contributor receives a dedicated author page showcasing their biography and complete body of work." },
    { title: "Permanent Portfolio", text: "Your work is preserved in the Monoverse archive permanently, free of paywalls and ad tracking." },
    { title: "Editorial Feedback", text: "Receive constructive, rigorous feedback from experienced editors committed to improving your craft." },
    { title: "Featured Placement", text: "Exceptional essays are highlighted on the Monoverse homepage and promoted to our newsletter subscribers." },
  ];

  return (
    <section className="py-[64px] md:py-[120px] relative z-10 px-[24px] max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-[64px]">
        <div className="md:w-1/3">
          <span className="section-label block mb-[24px]">Value</span>
          <h2 className="font-display text-[32px] md:text-[40px] leading-[1.15] text-foreground mb-[24px]">
            Why Publish With Us
          </h2>
          <p className="font-body text-[18px] text-text-secondary leading-[1.6]">
            We view publication as a partnership. We provide the platform, the editorial polish, and the audience. You provide the ideas.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-secondary mt-[24px] opacity-70">
            * Note: At this time, Monoverse is an independent project and does not offer financial compensation for submissions.
          </p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {benefits.map((b, idx) => (
            <div key={idx} className="glass-panel p-[32px]">
              <h4 className="font-display text-[20px] text-foreground mb-[12px]">{b.title}</h4>
              <p className="font-body text-[15px] text-text-secondary leading-[1.6]">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
