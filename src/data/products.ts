export type FeaturedProduct = {
  name: string;
  category: string;
  description: string;
  useCase: string;
  techStack: string[];
  targetUsers: "Enterprise" | "Business" | "Developers";
};

export type ProductCategory = {
  name: string;
  description: string;
};

export type ProductUseCase = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
};

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    name: "AI Automation Engine",
    category: "AI Systems",
    description:
      "An intelligent workflow automation layer designed to extract context, structure unstructured documents, and execute logical routing rules.",
    useCase: "Automating repetitive data entry, content categorization, and operational decision-making.",
    techStack: ["Next.js", "Python", "OpenAI API", "LangChain"],
    targetUsers: "Enterprise",
  },
  {
    name: "ERP Integration Toolkit",
    category: "ERP & Integrations",
    description:
      "A highly governed, modular framework built to connect custom web services and databases directly with Microsoft Dynamics 365 environments.",
    useCase: "Syncing transactional web-store or SaaS data seamlessly with ERP general ledgers.",
    techStack: ["TypeScript", "Azure Integrations", "Dynamics 365 API", "OData"],
    targetUsers: "Developers",
  },
  {
    name: "Cloud Deployment Platform",
    category: "DevOps & Cloud",
    description:
      "An infrastructure-as-code orchestration tool that automates the deployment of secure, multitenant, and compliant environments.",
    useCase: "Automated provisioning of customer staging environments and isolated cluster deployments.",
    techStack: ["Terraform", "Docker", "AWS / Azure", "GitHub Actions"],
    targetUsers: "Developers",
  },
  {
    name: "SaaS Starter Architecture",
    category: "SaaS Systems",
    description:
      "A production-ready multi-tenant software boilerplate configured with role-based auth, secure subscription pipelines, and organization schemas.",
    useCase: "Accelerating the development and launch of secure software-as-a-service portals.",
    techStack: ["Next.js App Router", "Tailwind CSS", "Prisma / Postgres", "Stripe API"],
    targetUsers: "Business",
  },
  {
    name: "Business Workflow Automation System",
    category: "Digital Transformation",
    description:
      "A human-in-the-loop workflow management framework designed to govern multi-stage operational approvals and track audit logs.",
    useCase: "Governing complex procurement, compliance reviews, and financial approval processes.",
    techStack: ["React", "Node.js", "PostgreSQL", "Temporal.io"],
    targetUsers: "Enterprise",
  },
];

export const productCategories: ProductCategory[] = [
  {
    name: "AI & Automation Tools",
    description:
      "Process automation engines, cognitive workflows, and intelligent decision systems.",
  },
  {
    name: "ERP Systems & Integrations",
    description:
      "Integration connectors, custom dashboards, and data sync layers for Microsoft Dynamics 365.",
  },
  {
    name: "Cloud Infrastructure Tools",
    description:
      "Multi-tenant orchestration scripts, automated staging deployment, and compliance pipelines.",
  },
  {
    name: "SaaS Starter Kits",
    description:
      "Production-ready architectural blueprints, multi-tenant templates, and billing-integrated portals.",
  },
  {
    name: "Developer Tools & APIs",
    description:
      "API-first services, webhook handlers, SDK wrappers, and backend microservices.",
  },
];

export const productUseCases: ProductUseCase[] = [
  {
    title: "Enterprise Automation",
    problem: "Manual data operations and legacy human-in-the-loop workflows create operational bottlenecks, delay transaction speeds, and increase human errors.",
    solution: "Deploying automated approval matrices, cognitive context parsers, and system-level orchestrations to streamline operational steps.",
    impact: "Operational latency reduced by 70%, with audit-ready logs for every workflow transition.",
  },
  {
    title: "ERP Modernization",
    problem: "Core Dynamics 365 or legacy ERP systems remain siloed, locking business data away and preventing real-time integration with modern SaaS frontends.",
    solution: "Connecting secure OData API gateways, lightweight database sync managers, and streamlined reporting views directly to ledger systems.",
    impact: "Real-time visibility into ledger adjustments and unified API access across custom business systems.",
  },
  {
    title: "SaaS Product Acceleration",
    problem: "SaaS startups and enterprise spin-offs waste months rebuilding auth, billing, organizations, and tenancy models, delaying time-to-market.",
    solution: "Deploying pre-configured, battle-tested SaaS templates with multi-tenancy, Stripe billing pipelines, and clean App Router structures.",
    impact: "Time-to-market cut by 60%, allowing engineering to focus on custom core features immediately.",
  },
  {
    title: "AI-Driven Workflows",
    problem: "Enterprise document parsing, email processing, and ticket categorization require expensive manual labor and lack consistent decision logic.",
    solution: "Integrating Large Language Model agents with automated validation gates and direct integration into operational ticket systems.",
    impact: "Average ticket resolution times down from hours to minutes, with over 90% accuracy in categorization.",
  },
  {
    title: "Cloud System Scaling",
    problem: "Manual cloud infrastructure configurations lead to environment drift, slow staging builds, high infrastructure costs, and deployment failures.",
    solution: "Structuring infrastructure-as-code pipelines using Terraform, Docker cluster packaging, and automated GitHub Actions workflows.",
    impact: "Deploying client staging clusters on-demand in under 5 minutes with zero environment configuration drift.",
  },
];

export const roadmapItems: RoadmapItem[] = [
  {
    phase: "Phase 01",
    title: "Internal tools & automation systems",
    description:
      "Building secure internal tools, script automation libraries, and admin command stations to eliminate manual operational waste.",
  },
  {
    phase: "Phase 02",
    title: "SaaS platform development",
    description:
      "Expanding standalone tools into multi-tenant SaaS environments complete with user authentication, billing, and tenancy isolation.",
  },
  {
    phase: "Phase 03",
    title: "Enterprise integrations (ERP + Cloud)",
    description:
      "Syncing our SaaS engines with legacy core platforms, ERP databases like Dynamics 365, and secure cloud deployment architectures.",
  },
  {
    phase: "Phase 04",
    title: "AI-powered autonomous systems",
    description:
      "Deploying autonomous AI agents capable of semantic reasoning, error correction, and independent multi-step task execution.",
  },
];
