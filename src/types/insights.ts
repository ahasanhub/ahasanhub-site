export type InsightFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  readingTime: string;
  featured: boolean;
  image?: string;
  imageAlt?: string;
};

export type Insight = InsightFrontmatter & {
  content: string;
};

export type InsightListItem = InsightFrontmatter;
