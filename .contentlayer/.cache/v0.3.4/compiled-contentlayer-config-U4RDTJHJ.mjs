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
var Movie = defineDocumentType(() => ({
  name: "Movie",
  filePathPattern: `cinema/movies/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    poster: { type: "string", required: true },
    releaseDate: { type: "date", required: true },
    status: { type: "string", required: true },
    // "Now Showing" | "Coming Soon"
    genres: { type: "list", of: { type: "string" }, required: true },
    synopsis: { type: "string", required: true },
    trailerUrl: { type: "string" },
    cast: { type: "list", of: { type: "string" } },
    director: { type: "string", required: true },
    studio: { type: "string" },
    platform: { type: "string" },
    // Theaters, Netflix, etc.
    expectedPlatform: { type: "string" },
    communityReviewCount: { type: "number", default: 0 },
    discussionCount: { type: "number", default: 0 },
    lifecycle: { type: "string", default: "Before Release" },
    // Before Release, Release Week, After Release, Archive
    draft: { type: "boolean", default: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("cinema/movies/", "")
    }
  }
}));
var CinemaArticle = defineDocumentType(() => ({
  name: "CinemaArticle",
  filePathPattern: `cinema/articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
    date: { type: "date", required: true },
    editorialType: { type: "string", required: true },
    // Review, Feature, News, Community
    format: { type: "string" },
    // Movie, Series, Anime, Documentary, OTT
    image: { type: "string", required: true },
    featured: { type: "boolean", default: false },
    movieRef: { type: "string" },
    // Optional slug of the movie it relates to
    draft: { type: "boolean", default: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("cinema/articles/", "")
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
    }
  }
}));
var CinemaList = defineDocumentType(() => ({
  name: "CinemaList",
  filePathPattern: `cinema/lists/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    movies: { type: "list", of: { type: "string" }, required: true },
    // List of Movie slugs
    draft: { type: "boolean", default: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("cinema/lists/", "")
    }
  }
}));
var CinemaPerson = defineDocumentType(() => ({
  name: "CinemaPerson",
  filePathPattern: `cinema/people/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    portrait: { type: "string", required: true },
    bio: { type: "string", required: true },
    role: { type: "string", required: true },
    // Director, Actor, etc.
    signatureStyle: { type: "string" },
    keyWorks: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("cinema/people/", "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Essay, Collection, Author, Movie, CinemaArticle, CinemaList, CinemaPerson],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  Author,
  CinemaArticle,
  CinemaList,
  CinemaPerson,
  Collection,
  Essay,
  Movie,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-U4RDTJHJ.mjs.map
