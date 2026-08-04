"use client";

export function EditorialTimeline() {
  const steps = [
    { name: "Write & Submit", description: "Submit your manuscript via the Contributor Studio. Ensure it aligns with our editorial guidelines." },
    { name: "Editorial Review", description: "Our editors review submissions. Expect an initial response within 14-21 days." },
    { name: "Revision", description: "If the piece shows promise, editors will request structural or thematic revisions." },
    { name: "Editing", description: "Once accepted, the piece goes through copyediting and formatting." },
    { name: "Publication", description: "The article is scheduled and published to the permanent Monoverse archive." }
  ];

  return (
    <section className="py-[64px] md:py-[120px] relative z-10 px-[24px] max-w-[1440px] mx-auto">
      <div className="glass-panel p-[40px] md:p-[80px]">
        <h2 className="font-display text-[32px] md:text-[48px] leading-[1.15] text-foreground mb-[48px] text-center">
          Submission Workflow
        </h2>
        
        <div className="relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-bronze-accent/30 md:hidden" />
          
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-[24px] left-0 right-0 h-px bg-bronze-accent/30" />
          
          <div className="flex flex-col md:flex-row justify-between gap-[40px] md:gap-[24px] relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-row md:flex-col relative pl-[48px] md:pl-0 md:flex-1">
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-[12px] w-[32px] h-[32px] md:w-[24px] md:h-[24px] rounded-full bg-background border-[2px] border-bronze-accent flex items-center justify-center font-mono text-[10px] text-bronze-accent z-20">
                  {idx + 1}
                </div>
                
                {/* Content */}
                <div className="md:mt-[48px] md:text-center">
                  <h4 className="font-display text-[20px] text-foreground mb-[8px]">{step.name}</h4>
                  <p className="font-body text-[14px] text-text-secondary leading-[1.6]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
