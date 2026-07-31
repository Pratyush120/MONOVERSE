# Monoverse — Production Blueprint

## Project Structure

```
monoverse/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, providers
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind + custom styles
│   ├── article/
│   │   └── [slug]/
│   │       └── page.tsx        # Article page (server component)
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx        # Category page
│   ├── author/
│   │   └── [slug]/
│   │       └── page.tsx        # Author profile page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── components/
│   │   ├── Header.tsx│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedEssays.tsx
│   │   ├── LatestResearch.tsx
│   │   ├── CategorySection.tsx
│   │   ├── EditorsNotes.tsx
│   │   ├── Newsletter.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleBody.tsx
│   │   ├── PullQuote.tsx
│   │   ├── ReadingProgress.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ConnectionLines.tsx
│   │   ├── DisciplineTags.tsx
│   │   ├── RelatedArticles.tsx
│   │   ├── AuthorBio.tsx
│   │   ├── ShareButtons.tsx
│   │   ├── BookmarkButton.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Toc.tsx # Table of Contents
│   ├── hooks/
│   │   ├── useReadingProgress.ts
│   │   └── useTheme.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── content.ts           # Content fetching layer
│   └── types/
│       └── index.ts
├── components/
│   └── ui/                      # shadcn/ui components│       ├── button.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       └── tooltip.tsx
├── content/
│   └── articles/                # MDX content files
│       ├── ai-consciousness-hard-problem.mdx
│       ├── invention-of-time-babylon.mdx
│       └── ...
├── lib/
│   └── contentlayer.config.ts   # Contentlayer MDX processing
├── public/
│   ├── images/
│   ├── fonts/                   # Self-hosted fonts if needed
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 1. Dependencies```json
// package.json
{
  "name": "monoverse",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "contentlayer build && next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x",
    "typescript": "5.x",
    "tailwindcss": "3.x",
    "autoprefixer": "10.x",
    "postcss": "8.x",
    "framer-motion": "11.x",
    "lucide-react": "0.x",
    "contentlayer": "0.x",
    "next-contentlayer": "0.x",
    "class-variance-authority": "0.x",
    "clsx": "2.x",
    "tailwind-merge": "2.x",
    "reading-time": "1.x",
    "shiki": "1.x"
  },
  "devDependencies": {
    "@types/node": "20.x",
    "@types/react": "18.x",
    "@types/react-dom": "18.x",
    "eslint": "8.x",
    "eslint-config-next": "14.x"
  }
}
```

---

## 2. TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"],
      "contentlayer/generated": ["./.contentlayer/generated"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".contentlayer/generated"],
 "exclude": ["node_modules"]
}
```

---

## 3. Tailwind Configuration

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF8F4",
          cool: "#F5F3EF",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
        },
        bronze: {
          DEFAULT: "#8C5E3C",
          dark: "#7A5031",
 light: "#A67B5B",
        },
        slate: {
          warm: "#6B6560",
        },
        dark: {
          bg: "#141210",
          card: "#1A1814",
          border: "#2A2622",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Source Serif 4", "serif"],
        ui: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
 "display-lg": ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
      },
      maxWidth: {
        "measure": "42rem", // 65-75 characters
 },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
 },
      transitionDuration: {
        "400": "400ms",
      },
      animation: {
        "connection-dash": "dash 8s ease-in-out forwards",
 },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

## 4. Global Styles```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

@layer base {
  :root {
    --bg-primary: #FAF8F4;
    --bg-secondary: #F5F3EF;
    --text-primary: #1A1A1A;
    --text-secondary: #6B6560;
    --accent: #8C5E3C;
    --border: #E5E0D8;
  }

  .dark {
    --bg-primary: #141210;
    --bg-secondary: #1A1814;
    --text-primary: #E8E4DE;
    --text-secondary: #A09990;
    --accent: #8C5E3C;
    --border: #2A2622;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Source Serif 4', serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  ::selection {
    background-color: rgba(140, 94, 60, 0.2);
    color: inherit;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(140, 94, 60, 0.3);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(140, 94, 60, 0.5);
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

@layer components {
  .drop-cap::first-letter {
    float: left;
    font-family: 'Playfair Display', serif;
    font-size: 4.5rem;
    line-height: 0.8;
    padding-right: 0.75rem;
    padding-top: 0.25rem;
    color: var(--accent);
  }

  @media (max-width: 768px) {
    .drop-cap::first-letter {
      font-size: 3rem;
    }
  }

  .font-mono-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.6875rem; /* 11px */
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .measure {
 max-width: 42rem;
  }

  /* Connection line system */
  .connection-line {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 6s ease-in-out forwards;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## 5. Root Layout (SEO + Metadata Foundation)

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: {
    default: "Monoverse | Understanding Reality",
    template: "%s | Monoverse",
  },
  description: "Monoverse is an intellectual publication dedicated to understanding reality through interdisciplinary inquiry. We publish essays connecting philosophy, history, science, technology, and culture.",
  keywords: ["philosophy", "science", "history", "technology", "AI", "literature", "economics", "culture", "intellectual magazine"],
  authors: [{ name: "Monoverse Editorial" }],
  creator: "Monoverse",
  publisher: "Monoverse",
  metadataBase: new URL("https://monoverse.pub"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monoverse.pub",
    siteName: "Monoverse",
    title: "Monoverse | Understanding Reality",
    description: "An intellectual publication dedicated to interdisciplinary inquiry.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monoverse — Understanding Reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monoverse | Understanding Reality",
    description: "An intellectual publication dedicated to interdisciplinary inquiry.",
    images: ["/og-image.jpg"],
    creator: "@monoversemag",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
 <link rel="manifest" href="/manifest.json" />
 <meta name="theme-color" content="#FAF8F4" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body>
 <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

---

## 6. Theme Provider Component

```tsx
// app/components/Providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
```

---

## 7. Contentlayer Configuration

```ts
// lib/contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import { slug } from "github-slugger";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
    authorRole: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "string", required: true },
    disciplines: { type: "list", of: { type: "string" }, required: true },
    featured: { type: "boolean", default: false },
    image: { type: "string", required: true },
 pullQuote: { type: "string" },
    draft: { type: "boolean", default: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("articles/", ""),
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: (doc) => {
        // Parse headings for table of contents
        const regXHeader = /\n(?<flag>#{1,3})\s+(?<content>.+)/g;
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }) => {
 const flag = groups?.flag?.length;
          const content = groups?.content;
          return { level: flag, text: content, slug: slug(content ?? "") };
        });
        return headings;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
```

---

## 8. Types```ts
// app/types/index.ts
export interface Article {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  disciplines: string[];
  featured?: boolean;
  image: string;
  pullQuote?: string;
  readingTime: { text: string; minutes: number };
 toc: { level: number; text: string; slug: string }[];
  body: {
    code: string;
  };
}

export interface CategoryInfo {
  name: string;
  description: string;
  layout: "philosophy" | "history" | "technology" | "standard";
 disciplineConnections: string[];
}

export const CATEGORY_LAYOUTS: Record<string, CategoryInfo["layout"]> = {
  philosophy: "philosophy",
  history: "history",
  "artificial-intelligence": "technology",
  technology: "technology",
  science: "standard",
  literature: "standard",
  civilizations: "standard",
  economics: "standard",
  psychology: "standard",
  culture: "standard",
};
```

---

## 9. Core Components (Signatures)

### ReadingProgress```tsx
// app/components/ReadingProgress.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-bronze z-50 origin-left"
      style={{ scaleX }}
    />
  );
}
```

### ThemeToggle
```tsx
// app/components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full hover:bg-bronze/10 transition-colors flex items-center justify-center text-text-secondary hover:text-bronze"
      aria-label="Toggle theme"
 >
      <AnimatePresence mode="wait">
 {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
 exit={{ opacity: 0, rotate: 90 }}
 transition={{ duration: 0.2 }}
          >
            <Sun size={16} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
```

### PullQuote
```tsx
// app/components/PullQuote.tsx
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
```

### ArticleBody (MDX Renderer)
```tsx
// app/components/ArticleBody.tsx
import { useMDXComponent } from "next-contentlayer/hooks";
import { PullQuote } from "./PullQuote";

const components = {
  h2: (props: any) => (
    <h2 
      className="font-display text-2xl md:text-3xl font-semibold mt-16 mb-6 tracking-tight scroll-mt-24" 
      {...props} 
    />
  ),
  h3: (props: any) => (
    <h3 
      className="font-display text-xl md:text-2xl font-semibold mt-12 mb-4 tracking-tight" 
      {...props} 
    />
  ),
  p: (props: any) => (
    <p 
      className="font-body text-lg leading-[1.75] mb-6 text-text-primary" 
      {...props} 
    />
  ),
  blockquote: (props: any) => <PullQuote text={props.children} />,
  // ... other components
};

export function ArticleBody({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);
  return <MDXContent components={components} />;
}
```

---

## 10. MDX Sample Content

```mdx
---
title: "Why the \"Hard Problem\" of Consciousness Misses the Point"
description: "Consciousness is not a puzzle to be solved but a reality to be experienced."
author: "Dr. Alina Mercer"
authorRole: "Cognitive Scientist & Philosopher"
date: 2026-07-28
category: "Artificial Intelligence"
disciplines: ["AI", "Philosophy", "Psychology"]
featured: true
image: "/images/ai-consciousness.jpg"
pullQuote: "We do not ask whether a mirror experiences the light it reflects. Yet we cannot stop asking if AI experiences the thoughts it generates."
---

For decades, philosophers of mind have circled a single question: why does subjective experience exist at all? This is the "hard problem," posed by David Chalmers in the 1990s, and it has generated an academic industry of speculation, experiment, and debate.

<PullQuote>
The leap from "arranges tokens" to "has experiences" is a leap not justified by the architecture itself.
</PullQuote>

If a machine can think, then perhaps thinking is not so special.
```

---

## 11. Article Page (Server Component)

```tsx
// app/article/[slug]/page.tsx
import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";
import { ArticleBody } from "@/app/components/ArticleBody";
import { ReadingProgress } from "@/app/components/ReadingProgress";
import { RelatedArticles } from "@/app/components/RelatedArticles";
import { AuthorBio } from "@/app/components/AuthorBio";
import { DisciplineTags } from "@/app/components/DisciplineTags";
import { BookmarkButton } from "@/app/components/BookmarkButton";
import { ShareButtons } from "@/app/components/ShareButtons";
import { Metadata } from "next";

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = allArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Not Found" };

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug && a.disciplines.some((d) => article.disciplines.includes(d)))
 .slice(0, 3);

  return (
    <article className="min-h-screen">
      <ReadingProgress />
      
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Article Header */}
        <header className="max-w-2xl mx-auto">
          <DisciplineTags disciplines={article.disciplines} />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mt-4 mb-8 leading-[1.1]">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-border">
            <AuthorBio compact author={article.author} role={article.authorRole} />
            <div className="h-6 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-3 font-mono-meta text-text-secondary">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="w-1 h-1 rounded-full bg-bronze" />
              <span>{article.readingTime.text}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <BookmarkButton slug={article.slug} />
              <ShareButtons title={article.title} slug={article.slug} />
            </div>
          </div>
        </header>

        {/* Hero Image */}
 <div className="max-w-3xl mx-auto mb-12">
          <figure className="aspect-[16/9] overflow-hidden rounded-xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          {/* Pull Quote (if set) */}
          {article.pullQuote && (
            <PullQuote text={article.pullQuote} />
          )}
          
          {/* Article Body */}
          <div className="drop-cap">
            <ArticleBody code={article.body.code} />
          </div>

          {/* Footer Actions */}
          <div className="mt-20 pt-8 border-t border-border">
            <div className="flex items-center justify-between mb-12">
              <BookmarkButton slug={article.slug} showLabel />
              <ShareButtons title={article.title} slug={article.slug} showLabel />
 </div>

            <AuthorBio author={article.author} role={article.authorRole} expanded />
            
            <RelatedArticles articles={relatedArticles} currentSlug={article.slug} />
          </div>
        </div>
      </div>
    </article>
  );
}
```

---

## 12. Structured Data (JSON-LD)

```tsx
// Add to layout.tsx or article page
function ArticleStructuredData(article: any) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Monoverse",
      logo: {
        "@type": "ImageObject",
        url: "https://monoverse.pub/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://monoverse.pub/article/${article.slug}`,
    },
    articleSection: article.category,
    keywords: article.disciplines.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

---

## 13. Next.js Config for Performance

```js
// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // For static export; use next/image provider for Vercel
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
```

---

## 14. Robots.txt & Manifest

```txt
# public/robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://monoverse.pub/sitemap.xml
```

```json
// public/manifest.json
{
  "short_name": "Monoverse",
  "name": "Monoverse | Understanding Reality",
  "description": "An intellectual publication connecting philosophy, science, history, and technology.",
  "icons": [
 { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#FAF8F4",
  "background_color": "#FAF8F4"
}
```

---

## 15. Performance & Accessibility Checklist

| Target | Method |
|--------|--------|
| **Lighthouse > 95** | `next/image` optimization, font subsetting, minimal JS, CSS containment |
| **WCAG AA** | Focus-visible styles, color contrast ratios > 4.5:1, semantic HTML, `aria-label` on all interactive elements |
| **CLS < 0.1** | `aspect-ratio` on all images, no layout shifts on font loading |
| **TTI < 3.5s** | Code splitting, lazy load below-fold, preconnect to critical domains |
| **Screen Reader** | Landmarks (`<main>`, `<nav>`, `<article>`), skip links, alt text on all images |
| **Motion Reduction** | `prefers-reduced-motion` media query disables all animations |
| **Dark Mode** | `next-themes` with system preference detection, no flash on load |

---

## 16. Deployment (Vercel)

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables if needed
4. Build command: `contentlayer build && next build`
5. Enable Analytics and Speed Insights
6. Configure Edge Network caching for `/` and `/article/*`

---

## Architectural Decisions Summary

| Decision | Rationale |
|----------|-----------|
| **MDX + Contentlayer** | Type-safe content, computed fields (reading time, TOC), MDX flexibility |
| **Server Components default** | Minimal client JS; only interactive parts are client components |
| **next-themes over custom** | Handles flash-of-unstyled-content, system preference, perfect accessibility |
| **Framer Motion surgical use** | Only on theme toggle, page transitions, reading progress. No gratuitous animations |
| **CSS custom properties for theme** | Zero-JS theme switching, instant response, works before React hydrates |
| **JetBrains Mono for metadata** | Third voice creates research-journal identity; avoids serif+sans cliché |
| **Connection Lines as SVG** | Ownable visual artifact; thesis made visible; works in both modes |
| **No sidebar TOC on desktop** | Cleaner reading well; TOC appears on mobile as bottom sheet or is omitted entirely for focus |

---

## Sample Run Commands

```bash
# Initialize
npx create-next-app@latest monoverse --typescript --tailwind --app# Install dependencies
cd monoverse
npm install framer-motion lucide-react contentlayer next-contentlayer reading-time next-themes class-variance-authority clsx tailwind-merge

# Install shadcn/ui components
npx shadcn-ui@latest initnpx shadcn-ui@latest add button input separator tooltip

# Install dev dependencies
npm install -D @types/node @types/react @types/react-dom tailwindcss-animate

# Development
npm run dev

# Build
npm run build# Deploy to Vercel
vercel --prod
```

---

End of Blueprint. This architecture supports100+ articles, full MDX authoring, dark mode, reading progress, SEO/OG/Rich Snippets, and the distinct Monoverse identity.