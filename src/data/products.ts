export type FeaturedProduct = {
  name: string;
  category: string;
  description: string;
  status: string;
  value: string;
};

export type ProductCategory = {
  name: string;
  description: string;
};

export type ProductUseCase = {
  title: string;
  description: string;
};

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    name: "AI Operations Hub",
    category: "AI Automation",
    description:
      "A workflow intelligence layer for document review, operational routing, and decision support.",
    status: "Concept",
    value: "Reduce repeated knowledge work and improve operational consistency.",
  },
  {
    name: "ERP Integration Studio",
    category: "Microsoft ERP",
    description:
      "A structured integration system for Dynamics 365, APIs, reporting flows, and enterprise processes.",
    status: "Planned",
    value: "Connect ERP data with cleaner workflows and stronger governance.",
  },
  {
    name: "Cloud SaaS Foundation",
    category: "SaaS Platform",
    description:
      "A reusable platform blueprint for multi-tenant SaaS products, identity, APIs, and deployment workflows.",
    status: "Blueprint",
    value: "Accelerate product delivery without sacrificing architecture quality.",
  },
];

export const productCategories: ProductCategory[] = [
  {
    name: "AI Productivity Systems",
    description:
      "Enterprise copilots, workflow automation tools, and decision-support systems.",
  },
  {
    name: "ERP Extensions",
    description:
      "Microsoft ecosystem tools for integration, reporting, process automation, and operations.",
  },
  {
    name: "SaaS Platforms",
    description:
      "Reusable business platforms with tenant-aware architecture and API-first foundations.",
  },
  {
    name: "Cloud Operations Tools",
    description:
      "Deployment, observability, reliability, and environment management utilities.",
  },
];

export const productUseCases: ProductUseCase[] = [
  {
    title: "Operational automation",
    description:
      "Turn repeated manual workflows into structured digital systems with clear review points.",
  },
  {
    title: "ERP modernization",
    description:
      "Extend Microsoft ERP environments with cleaner integrations, reporting, and business workflows.",
  },
  {
    title: "SaaS product launch",
    description:
      "Move from product concept to scalable SaaS foundation with fewer architecture rewrites.",
  },
  {
    title: "Executive visibility",
    description:
      "Create decision-ready dashboards and system views for finance, operations, and leadership teams.",
  },
];

export const roadmapItems: RoadmapItem[] = [
  {
    phase: "Phase 01",
    title: "Product blueprints",
    description:
      "Define product concepts, system boundaries, target users, and enterprise value models.",
  },
  {
    phase: "Phase 02",
    title: "Pilot-ready tools",
    description:
      "Build focused SaaS and AI tools that validate workflow value with real business scenarios.",
  },
  {
    phase: "Phase 03",
    title: "Scalable ecosystem",
    description:
      "Expand validated products into reusable platforms with governance, integrations, and cloud operations.",
  },
];
