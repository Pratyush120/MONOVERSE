"use client";

interface SubmissionCategoryCardProps {
  name: string;
  description: string;
  expectedLength: string;
  expectations: string;
}

export function SubmissionCategoryCard({ name, description, expectedLength, expectations }: SubmissionCategoryCardProps) {
  return (
    <div className="border border-glass-border-light p-[24px] md:p-[32px] hover:bg-glass-overlay transition-colors duration-300">
      <h3 className="font-display text-[24px] text-foreground mb-[12px]">{name}</h3>
      <p className="font-body text-[16px] text-text-secondary leading-[1.6] mb-[24px]">
        {description}
      </p>
      <div className="space-y-[12px]">
        <div className="flex flex-col md:flex-row md:items-center gap-[4px] md:gap-[16px]">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-bronze-accent w-[120px]">Expected Length</span>
          <span className="font-mono text-[13px] text-foreground">{expectedLength}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-[4px] md:gap-[16px]">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-bronze-accent w-[120px] flex-shrink-0 pt-[4px]">Expectations</span>
          <span className="font-body text-[14px] text-foreground leading-[1.6]">{expectations}</span>
        </div>
      </div>
    </div>
  );
}
