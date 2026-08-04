// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import { slug } from "github-slugger";
var Essay = defineDocumentType(() => ({
  name: "Essay",
  filePathPattern: `essays/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
    authorRole: { type: "string", required: true },
    date: { type: "date", required: true },
    domain: { type: "string", required: true },
    // Replaces category
    editorialType: { type: "string", required: true, default: "Essay" },
    // Featured, Editor's Pick, Long Read, etc.
    series: { type: "string" },
    // Optional series name
    disciplines: { type: "list", of: { type: "string" }, required: true },
    featured: { type: "boolean", default: false },
    image: { type: "string", required: true },
    pullQuote: { type: "string" },
    draft: { type: "boolean", default: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("essays/", "")
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
    },
    toc: {
      type: "json",
      resolve: (doc) => {
        const regXHeader = /\n(?<flag>#{1,3})\s+(?<content>.+)/g;
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }) => {
          const flag = groups?.flag?.length;
          const content = groups?.content;
          return { level: flag, text: content, slug: slug(content ?? "") };
        });
        return headings;
      }
    }
  }
}));
var Collection = defineDocumentType(() => ({
  name: "Collection",
  filePathPattern: `collections/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    whyItExists: { type: "string", required: true },
    whatToLearn: { type: "list", of: { type: "string" }, required: true },
    recommendedOrder: { type: "list", of: { type: "string" }, required: true },
    // List of essay slugs
    image: { type: "string", required: true },
    draft: { type: "boolean", default: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("collections/", "")
    }
  }
}));
var Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    bio: { type: "string", required: true },
    expertise: { type: "list", of: { type: "string" }, required: true },
    socialLinks: { type: "json" },
    // e.g. { twitter: "...", website: "..." }
    avatar: { type: "string", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("authors/", "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Essay, Collection, Author],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  Author,
  Collection,
  Essay,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PJKT4Y6P.mjs.map
