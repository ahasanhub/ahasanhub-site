export type ProjectCategoryIcon =
  | "ai"
  | "erp"
  | "cloud"
  | "saas"
  | "fullStack"
  | "architecture";

export type ProjectCategory = {
  name: string;
  description: string;
  icon: ProjectCategoryIcon;
};

export const projectCategories: ProjectCategory[] = [
  {
    name: "AI Systems",
    description:
      "Enterprise automation, predictive workflows, intelligent decision support, and AI-enabled operating models.",
    icon: "ai",
  },
  {
    name: "ERP Solutions",
    description:
      "Microsoft ecosystem solutions for process modernization, enterprise workflows, integrations, and operational control.",
    icon: "erp",
  },
  {
    name: "Cloud Infrastructure",
    description:
      "Cloud foundations, scalable deployment models, DevOps pipelines, reliability planning, and infrastructure governance.",
    icon: "cloud",
  },
  {
    name: "SaaS Platforms",
    description:
      "Multi-tenant platforms, API-first products, subscription-ready systems, and scalable backend foundations.",
    icon: "saas",
  },
  {
    name: "Full-Stack Applications",
    description:
      "Production-grade applications with modern frontend experiences, secure backend services, and maintainable delivery patterns.",
    icon: "fullStack",
  },
  {
    name: "System Architecture",
    description:
      "Architecture strategy, system boundaries, integration models, technical governance, and long-term scalability planning.",
    icon: "architecture",
  },
];
