import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

export function SubmissionSection() {
  return (
    <div className="glass-panel p-[48px] md:p-[80px] border border-bronze-accent/20">
      <SectionLabel label="Write for Cinema" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px]">
        <div>
          <h2 className="font-display text-[32px] md:text-[40px] leading-[1.15] text-foreground mb-[24px]">
            Contribute to the Archive
          </h2>
          <p className="font-body text-[18px] leading-[1.75] text-text-secondary mb-[32px]">
            Monoverse values rigorous, thoughtful essays over quick opinions. We are looking for writers who explore the deeper mechanics of reality through the lens of cinema.
          </p>
          <Link href="/write" className="btn-primary text-[12px] py-[12px] px-[32px] inline-block">
            View Submission Guidelines
          </Link>
        </div>
        <div className="flex flex-col gap-[24px] justify-center">
          <div className="border-l border-bronze-accent pl-[24px]">
            <h4 className="font-meta text-[11px] uppercase tracking-[0.2em] text-foreground mb-[8px]">Editorial Standards</h4>
            <p className="font-body text-[14px] text-text-secondary leading-[1.6]">We prioritize analytical rigor, historical contextualization, and clear philosophical arguments over subjective ratings.</p>
          </div>
          <div className="border-l border-bronze-accent pl-[24px]">
            <h4 className="font-meta text-[11px] uppercase tracking-[0.2em] text-foreground mb-[8px]">Review Process</h4>
            <p className="font-body text-[14px] text-text-secondary leading-[1.6]">Every submission is peer-reviewed by our editorial team to ensure it aligns with the Monoverse ethos before publication.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
