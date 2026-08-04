import { SectionLabel } from "./SectionLabel";

export function EditorNote({ content }: { content: string }) {
  return (
    <div className="glass-panel p-[48px] md:p-[80px] border border-bronze-accent/20 text-center flex flex-col items-center">
      <SectionLabel label="Editor's Note" />
      <div className="font-body text-[18px] md:text-[22px] leading-[1.75] text-text-secondary max-w-[700px]">
        {content}
      </div>
    </div>
  );
}
