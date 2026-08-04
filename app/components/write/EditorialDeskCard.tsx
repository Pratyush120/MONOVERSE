"use client";

interface EditorialDeskCardProps {
  name: string;
  purpose: string;
  publishes: string;
  length: string;
  examples: string[];
}

export function EditorialDeskCard({ name, purpose, publishes, length, examples }: EditorialDeskCardProps) {
  return (
    <div className="glass-panel p-[32px] md:p-[48px] hover:shadow-float-high transition-transform duration-500 hover:-translate-y-1">
      <span className="taxonomy-tag mb-[24px] inline-block">{name}</span>
      <div className="space-y-[24px]">
        <div>
          <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-[8px]">Purpose</h4>
          <p className="font-body text-[16px] leading-[1.6] text-foreground">{purpose}</p>
        </div>
        <div className="h-px bg-glass-border-light w-full" />
        <div>
          <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-[8px]">What We Publish</h4>
          <p className="font-body text-[16px] leading-[1.6] text-foreground">{publishes}</p>
        </div>
        <div className="h-px bg-glass-border-light w-full" />
        <div>
          <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-[8px]">Typical Length</h4>
          <p className="font-mono text-[13px] text-foreground">{length}</p>
        </div>
      </div>
    </div>
  );
}
