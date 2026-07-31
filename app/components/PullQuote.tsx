interface PullQuoteProps {
  text: string;
  source?: string;
}

export function PullQuote({ text, source }: PullQuoteProps) {
  return (
    <blockquote className="border-l-2 border-bronze pl-6 py-2 my-12">
      <p className="font-display text-xl md:text-2xl italic leading-snug text-bronze">
        {text}
      </p>
      {source && (
        <cite className="block mt-3 font-mono text-xs uppercase tracking-wider text-text-secondary not-italic">
          {source}
        </cite>
      )}
    </blockquote>
  );
}
