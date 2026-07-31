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
