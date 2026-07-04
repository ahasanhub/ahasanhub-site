export type InsightFrontmatter = {
  title: string;
  description: string;
  slug: string;
  category: string;
  publishedAt: string;
  author: string;
  tags: string[];
};

export type InsightContent = InsightFrontmatter & {
  content: string;
};
