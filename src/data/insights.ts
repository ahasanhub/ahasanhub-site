export type InsightCategory = "AI" | "ERP" | "Cloud";

export type Insight = {
  id: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  href: string;
  readingTime: string;
  publishedAt: string;
};

export const insights: Insight[] = [
  {
    id: "practical-ai-roadmaps",
    title: "How to Build a Practical AI Roadmap for Enterprise Teams",
    category: "AI",
    excerpt:
      "A structured approach to identifying high-value AI use cases, governance needs, adoption risks, and delivery milestones.",
    href: "/insights/practical-ai-roadmaps",
    readingTime: "6 min read",
    publishedAt: "2026-07-01",
  },
  {
    id: "erp-modernization-architecture",
    title: "ERP Modernization Starts With Architecture, Not Features",
    category: "ERP",
    excerpt:
      "Why successful ERP transformation depends on process boundaries, integration strategy, data quality, and operating model clarity.",
    href: "/insights/erp-modernization-architecture",
    readingTime: "7 min read",
    publishedAt: "2026-07-02",
  },
  {
    id: "cloud-foundation-for-saas",
    title: "Cloud Foundations Every SaaS Platform Needs Early",
    category: "Cloud",
    excerpt:
      "Core platform decisions that reduce future rework across identity, deployment, observability, tenancy, and security.",
    href: "/insights/cloud-foundation-for-saas",
    readingTime: "5 min read",
    publishedAt: "2026-07-03",
  },
];
