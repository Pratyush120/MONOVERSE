import Image from "next/image";
import { PullQuote } from "./PullQuote";

export const mdxComponents = {
  Image,
  PullQuote,
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display text-3xl mt-12 mb-6 font-semibold" {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display text-2xl mt-8 mb-4 font-semibold" {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-body text-lg leading-relaxed text-text-secondary mb-6 text-balance" {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
  ),
  li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="font-body text-lg leading-relaxed text-text-secondary" {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-bronze pl-6 py-2 my-8 italic font-body text-xl text-foreground" {...props} />
  ),
};
