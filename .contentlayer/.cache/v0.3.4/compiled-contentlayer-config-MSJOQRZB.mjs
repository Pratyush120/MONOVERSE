// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import { slug } from "github-slugger";
var Article = defineDocumentType(() => ({
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
    draft: { type: "boolean", default: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("articles/", "")
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
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MSJOQRZB.mjs.map
