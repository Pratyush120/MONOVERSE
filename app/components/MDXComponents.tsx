import Image from "next/image";
import { PullQuote } from "./PullQuote";
import { RevealImage } from "./RevealImage";
import { Quote } from "./Quote";
import { slug } from "github-slugger";

const generateId = (children: any) => {
  if (typeof children === "string") return slug(children);
  if (Array.isArray(children)) {
    return slug(children.map(c => typeof c === "string" ? c : "").join(""));
  }
  return "";
};

// Stitch: 0px border-radius, full width image
const RevealedImage = (props: any) => (
  <RevealImage className="my-[48px] w-full">
    <Image {...props} className="w-full h-auto" />
  </RevealImage>
);

// Stitch: Pull quotes use EB Garamond italic, 32px
const RevealedPullQuote = (props: any) => (
  <Quote>
    <p className="font-quote text-[32px] md:text-[40px] italic leading-[1.3] text-foreground font-normal text-center">
      &ldquo;{props.text}&rdquo;
    </p>
    {props.source && (
      <cite className="block mt-[24px] font-meta text-[11px] uppercase tracking-[0.2em] text-text-secondary not-italic font-semibold text-center">
        — {props.source}
      </cite>
    )}
  </Quote>
);

export const mdxComponents = {
  Image: RevealedImage,
  PullQuote: RevealedPullQuote,
  h2: ({ className, children, ...props }: any) => (
    <h2 id={generateId(children)} className="font-display text-[36px] md:text-[48px] mt-[80px] mb-[32px] font-normal text-foreground scroll-mt-32" {...props}>
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }: any) => (
    <h3 id={generateId(children)} className="font-display text-[28px] md:text-[36px] mt-[64px] mb-[24px] font-normal text-foreground scroll-mt-32" {...props}>
      {children}
    </h3>
  ),
  p: ({ className, ...props }: any) => (
    <p className="font-body text-[18px] md:text-[20px] leading-[1.8] text-text-secondary mb-[32px]" {...props} />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className="my-[32px] ml-[24px] list-none space-y-[16px]" {...props} />
  ),
  // Stitch: Small bronze square bullets
  li: ({ className, children, ...props }: any) => (
    <li className="font-body text-[18px] md:text-[20px] leading-[1.8] text-text-secondary relative pl-[32px] before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-[6px] before:h-[6px] before:bg-bronze-accent before:rounded-none" {...props}>
      {children}
    </li>
  ),
  // Stitch: Quotations have thin left border, EB Garamond italic
  blockquote: ({ className, ...props }: any) => (
    <blockquote className="elegant-blockquote" {...props} />
  ),
};
