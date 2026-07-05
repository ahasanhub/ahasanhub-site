export type ProjectCategory = "AI" | "ERP" | "Cloud" | "SaaS";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  status: "planned" | "in-progress" | "completed";
  problem: string;
  solution: string;
  architectureOverview: string;
  techStack: string[];
  outcomeMetric: string;
  impact: string;
};

export const projects: Project[] = [
  {
    id: "enterprise-erp-modernization",
    title: "Enterprise ERP Modernization",
    category: "ERP",
    status: "planned",
    problem:
      "Disconnected finance, inventory, and operational workflows created slow reporting cycles and inconsistent decision data.",
    solution:
      "Designed a modern ERP architecture with process alignment, integration boundaries, and a scalable Business Central foundation.",
    architectureOverview:
      "Business Central-centered ERP foundation with .NET integration services, Azure-hosted APIs, and process-aligned data boundaries.",
    techStack: ["Dynamics 365 Business Central", ".NET", "Azure", "REST APIs"],
    outcomeMetric: "40% faster reporting readiness",
    impact:
      "Prepared the organization for cleaner operations, stronger governance, and faster cross-functional reporting.",
  },
  {
    id: "ai-operations-platform",
    title: "AI Operations Platform",
    category: "AI",
    status: "planned",
    problem:
      "Teams relied on manual knowledge work, repeated document review, and fragmented operational context.",
    solution:
      "Planned an AI-enabled operations layer with workflow automation, retrieval-ready knowledge structures, and human review points.",
    architectureOverview:
      "Workflow automation layer connecting LLM-assisted knowledge retrieval, human review checkpoints, and operational data services.",
    techStack: ["LLM Workflows", "Next.js", "Azure", "PostgreSQL"],
    outcomeMetric: "35% automation efficiency target",
    impact:
      "Reduced manual effort patterns while keeping governance, traceability, and practical business adoption at the center.",
  },
  {
    id: "cloud-infrastructure-modernization",
    title: "Cloud Infrastructure Modernization",
    category: "Cloud",
    status: "planned",
    problem:
      "Growing platform needs required clearer deployment, reliability, and infrastructure governance before scaling production workloads.",
    solution:
      "Designed a cloud infrastructure roadmap covering Azure and AWS foundations, CI/CD pipelines, observability, and environment separation.",
    architectureOverview:
      "Cloud architecture model with container-ready services, automated deployment pipelines, monitoring boundaries, and scalable environment strategy.",
    techStack: ["Azure", "AWS", "Docker", "CI/CD"],
    outcomeMetric: "2x scalability improvement path",
    impact:
      "Established a more reliable path for scaling infrastructure while reducing deployment risk and operational ambiguity.",
  },
  {
    id: "cloud-saas-foundation",
    title: "Cloud SaaS Foundation",
    category: "SaaS",
    status: "planned",
    problem:
      "A product concept needed a scalable technical foundation before investing in feature-heavy delivery.",
    solution:
      "Defined a cloud-ready SaaS blueprint covering modular architecture, authentication boundaries, tenant strategy, and delivery workflow.",
    architectureOverview:
      "Multi-tenant product foundation with App Router frontend, .NET service boundaries, Azure deployment, and CI/CD delivery workflow.",
    techStack: ["Next.js", ".NET", "Azure", "CI/CD"],
    outcomeMetric: "25% lower rewrite risk",
    impact:
      "Created a clearer path from concept to production with fewer architecture rewrites and stronger delivery confidence.",
  },
];
