export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  status: "planned" | "in-progress" | "completed";
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "enterprise-erp-modernization",
    title: "Enterprise ERP Modernization",
    category: "ERP Architecture",
    summary:
      "Placeholder project record for ERP modernization, integration, and business process transformation work.",
    status: "planned",
    tags: ["ERP", "Business Central", "Architecture"],
  },
  {
    id: "ai-operations-platform",
    title: "AI Operations Platform",
    category: "AI Engineering",
    summary:
      "Placeholder project record for AI-enabled workflows, automation, and operational intelligence.",
    status: "planned",
    tags: ["AI", "Automation", "Operations"],
  },
  {
    id: "cloud-saas-foundation",
    title: "Cloud SaaS Foundation",
    category: "SaaS Platform",
    summary:
      "Placeholder project record for scalable cloud product architecture and SaaS delivery foundations.",
    status: "planned",
    tags: ["Cloud", "SaaS", "Azure"],
  },
];
