import Image from "next/image";
import { PullQuote } from "./PullQuote";
import { RevealImage } from "./RevealImage";
import { RevealQuote } from "./RevealQuote";
import { slug } from "github-slugger";

const generateId = (children: any) => {
  if (typeof children === "string") return slug(children);
  if (Array.isArray(children)) {
    return slug(children.map(c => typeof c === "string" ? c : "").join(""));
  }
  return "";
};

// Wrap next/image in RevealImage for scroll-reveal
const RevealedImage = (props: any) => (
  <RevealImage className="rounded-[8px] my-12">
    <Image {...props} className="w-full h-auto" />
  </RevealImage>
);

// Wrap PullQuote in RevealQuote for animated border
const RevealedPullQuote = (props: any) => (
  <RevealQuote>
    <p className="font-pull-quote text-[28px] md:text-[36px] italic leading-[1.4] text-foreground font-medium">
      &ldquo;{props.text}&rdquo;
    </p>
    {props.source && (
      <cite className="block mt-6 font-meta text-[13px] uppercase tracking-[0.2em] text-text-secondary not-italic font-semibold">
        — {props.source}
      </cite>
    )}
  </RevealQuote>
);

export const mdxComponents = {
  Image: RevealedImage,
  PullQuote: RevealedPullQuote,
  h2: ({ className, children, ...props }: any) => (
    <h2 id={generateId(children)} className="font-section-heading text-[32px] md:text-[44px] mt-20 mb-8 font-semibold text-foreground scroll-mt-32" {...props}>
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }: any) => (
    <h3 id={generateId(children)} className="font-section-heading text-[24px] md:text-[32px] mt-16 mb-6 font-medium text-foreground scroll-mt-32" {...props}>
      {children}
    </h3>
  ),
  p: ({ className, ...props }: any) => (
    <p className="font-body text-[18px] md:text-[20px] leading-[1.8] text-text-secondary mb-8" {...props} />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className="my-8 ml-6 list-none space-y-4" {...props} />
  ),
  li: ({ className, children, ...props }: any) => (
    <li className="font-body text-[18px] md:text-[20px] leading-[1.8] text-text-secondary relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-bronze before:rounded-full" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote className="border-l-[1px] border-bronze/50 pl-8 py-2 my-12 italic font-body text-[22px] text-foreground leading-[1.6]" {...props} />
  ),
};

