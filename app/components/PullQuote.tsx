interface PullQuoteProps {
  text: string;
  source?: string;
}

export function PullQuote({ text, source }: PullQuoteProps) {
  return (
    <blockquote className="border-l-[1px] border-bronze/30 pl-8 py-2 my-16 max-w-[640px] mx-auto">
      <p className="font-pull-quote text-[28px] md:text-[36px] italic leading-[1.4] text-foreground font-medium">
        "{text}"
      </p>
      {source && (
        <cite className="block mt-6 font-meta text-[13px] uppercase tracking-[0.2em] text-text-secondary not-italic font-semibold">
          — {source}
        </cite>
      )}
    </blockquote>
  );
}
