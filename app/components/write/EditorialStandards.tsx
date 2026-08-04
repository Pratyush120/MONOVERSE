"use client";

export function EditorialStandards() {
  const standards = [
    { title: "Originality", text: "Work must be original. We do not publish syndicated content or pieces that have appeared in other publications in their entirety." },
    { title: "Accuracy & Research", text: "All factual claims must be verifiable. We expect rigorous research and appropriate citations for statistical claims or historical events." },
    { title: "Writing Quality", text: "Prose should be elegant, precise, and accessible. Avoid overly academic jargon unless strictly necessary for the discipline being discussed." },
    { title: "AI Usage", text: "We do not publish AI-generated essays. AI may be used for research assistance, outlining, or editing, but the prose and intellectual arguments must be strictly human." },
    { title: "Plagiarism", text: "We maintain a zero-tolerance policy for plagiarism. Any submitted work found to contain plagiarized material will result in a permanent ban from contributing." },
    { title: "Ethics & Disclosure", text: "Writers must disclose any conflicts of interest related to the subject matter they are covering (e.g., financial ties, professional relationships)." }
  ];

  return (
    <section id="guidelines" className="py-[64px] md:py-[120px] relative z-10 px-[24px] max-w-[1440px] mx-auto">
      <div className="mb-[48px] md:mb-[80px]">
        <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] text-foreground mb-[24px]">
          Editorial Standards
        </h2>
        <p className="font-body text-[18px] text-text-secondary max-w-[700px]">
          By submitting to Monoverse, you are agreeing to uphold the following standards of editorial integrity.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[40px]">
        {standards.map((s, idx) => (
          <div key={idx} className="flex gap-[24px]">
            <div className="font-mono text-[14px] text-bronze-accent pt-[4px]">0{idx + 1}</div>
            <div>
              <h4 className="font-display text-[20px] text-foreground mb-[12px]">{s.title}</h4>
              <p className="font-body text-[16px] text-text-secondary leading-[1.6]">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
