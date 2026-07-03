export type Project = {
  id: string;
  title: string;
  category: string;
  status: "planned" | "in-progress" | "completed";
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
};

export const projects: Project[] = [
  {
    id: "enterprise-erp-modernization",
    title: "Enterprise ERP Modernization",
    category: "ERP Architecture",
    status: "planned",
    problem:
      "Disconnected finance, inventory, and operational workflows created slow reporting cycles and inconsistent decision data.",
    solution:
      "Designed a modern ERP architecture with process alignment, integration boundaries, and a scalable Business Central foundation.",
    techStack: ["Dynamics 365 Business Central", ".NET", "Azure", "REST APIs"],
    impact:
      "Prepared the organization for cleaner operations, stronger governance, and faster cross-functional reporting.",
  },
  {
    id: "ai-operations-platform",
    title: "AI Operations Platform",
    category: "AI Engineering",
    status: "planned",
    problem:
      "Teams relied on manual knowledge work, repeated document review, and fragmented operational context.",
    solution:
      "Planned an AI-enabled operations layer with workflow automation, retrieval-ready knowledge structures, and human review points.",
    techStack: ["LLM Workflows", "Next.js", "Azure", "PostgreSQL"],
    impact:
      "Reduced manual effort patterns while keeping governance, traceability, and practical business adoption at the center.",
  },
  {
    id: "cloud-saas-foundation",
    title: "Cloud SaaS Foundation",
    category: "SaaS Platform",
    status: "planned",
    problem:
      "A product concept needed a scalable technical foundation before investing in feature-heavy delivery.",
    solution:
      "Defined a cloud-ready SaaS blueprint covering modular architecture, authentication boundaries, tenant strategy, and delivery workflow.",
    techStack: ["Next.js", ".NET", "Azure", "CI/CD"],
    impact:
      "Created a clearer path from concept to production with fewer architecture rewrites and stronger delivery confidence.",
  },
];
