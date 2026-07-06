export type Service = {
  id: string;
  title: string;
  summary: string;
  focusAreas: string[];
};

export type ServiceDetail = Service & {
  outcomes: string[];
  bestFor: string;
};

export type ServiceDetailSection = {
  id: string;
  title: string;
  description: string;
  deliveryScope: {
    label: string;
    value: string;
  }[];
  expectedOutcomes: string[];
  keyFeatures: string[];
  businessValue: string;
  valueFlow: {
    trigger: string;
    delivery: string;
    outcome: string;
  };
};

export type WorkProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TechnologyStackGroup = {
  id: string;
  category: string;
  description: string;
  technologies: string[];
};

export type EngagementModel = {
  name: string;
  description: string;
  idealClient: string;
  valueProposition: string;
};

export const services: Service[] = [
  {
    id: "ai-system-development",
    title: "AI System Development",
    summary:
      "Applied AI systems, workflow automation, and intelligent product features designed around measurable business value.",
    focusAreas: ["LLM systems", "Automation", "AI product features"],
  },
  {
    id: "erp-architecture-integration",
    title: "ERP Architecture & Integration",
    summary:
      "Enterprise ERP solution design, Dynamics 365 Business Central architecture, process alignment, and reliable integrations.",
    focusAreas: ["Business Central", "NAV", "ERP integrations"],
  },
  {
    id: "cloud-infrastructure-devops",
    title: "Cloud Infrastructure & DevOps",
    summary:
      "Secure cloud foundations, DevOps automation, observability, and scalable infrastructure for production systems.",
    focusAreas: ["Azure", "CI/CD", "Observability"],
  },
  {
    id: "saas-platform-engineering",
    title: "SaaS Platform Engineering",
    summary:
      "Product-ready SaaS foundations, tenant-aware architecture, subscription workflows, and scalable delivery models.",
    focusAreas: [
      "Product architecture",
      "Multi-tenant systems",
      "Delivery strategy",
    ],
  },
  {
    id: "full-stack-application-development",
    title: "Full-Stack Application Development",
    summary:
      "Maintainable web applications, APIs, integration layers, and polished user experiences built with modern engineering standards.",
    focusAreas: [".NET", "Next.js", "API design"],
  },
  {
    id: "software-architecture-consulting",
    title: "Software Architecture Consulting",
    summary:
      "Architecture reviews, system design, technical roadmaps, and delivery guidance for complex software initiatives.",
    focusAreas: ["System design", "Architecture reviews", "Roadmaps"],
  },
  {
    id: "digital-transformation-strategy",
    title: "Digital Transformation Strategy",
    summary:
      "Pragmatic modernization strategy connecting business goals, operating models, platforms, and execution priorities.",
    focusAreas: ["Modernization", "Operating model", "Execution planning"],
  },
];

export const serviceDetails: ServiceDetail[] = services.map((service) => {
  const details: Record<string, Omit<ServiceDetail, keyof Service>> = {
    "ai-system-development": {
      outcomes: [
        "Applied AI system architecture",
        "Workflow automation delivery",
        "AI product capability roadmap",
      ],
      bestFor: "Teams turning AI opportunities into governed product and workflow capability.",
    },
    "erp-architecture-integration": {
      outcomes: [
        "ERP modernization plan",
        "Business Central architecture",
        "Integration and process alignment",
      ],
      bestFor: "Organizations improving operational systems and ERP delivery.",
    },
    "cloud-infrastructure-devops": {
      outcomes: [
        "Secure Azure foundation",
        "DevOps and CI/CD operating model",
        "Reliability and observability improvements",
      ],
      bestFor: "Businesses scaling infrastructure without adding fragility.",
    },
    "saas-platform-engineering": {
      outcomes: [
        "SaaS product architecture",
        "Tenant-aware platform foundations",
        "Subscription-ready delivery model",
      ],
      bestFor: "Founders and teams building reusable software products.",
    },
    "full-stack-application-development": {
      outcomes: [
        "Modern web application delivery",
        "API and integration layers",
        "Maintainable frontend foundations",
      ],
      bestFor: "Teams that need production-grade engineering execution.",
    },
    "software-architecture-consulting": {
      outcomes: [
        "Architecture review and recommendations",
        "System design decisions",
        "Technical roadmap clarity",
      ],
      bestFor: "Teams making technical decisions with long-term platform impact.",
    },
    "digital-transformation-strategy": {
      outcomes: [
        "Modernization strategy",
        "Operating model alignment",
        "Prioritized execution roadmap",
      ],
      bestFor: "Organizations connecting technology investment to business change.",
    },
  };

  return {
    ...service,
    ...details[service.id],
  };
});

export const serviceDetailSections: ServiceDetailSection[] = [
  {
    id: "ai-systems",
    title: "AI Systems",
    description:
      "Design and build applied AI capabilities that connect models, business rules, data, and human workflows into dependable operating systems.",
    deliveryScope: [
      {
        label: "Model layer",
        value: "LLM orchestration, prompts, retrieval, and guardrails.",
      },
      {
        label: "Workflow layer",
        value: "Human approvals, automation triggers, and operational handoffs.",
      },
      {
        label: "Governance",
        value: "Usage boundaries, monitoring, and practical rollout controls.",
      },
    ],
    expectedOutcomes: [
      "AI features connected to real workflows",
      "Reduced manual review and repeat work",
      "Clear path from prototype to production use",
    ],
    keyFeatures: ["Automation", "Predictive systems", "Workflows"],
    businessValue:
      "Reduces manual effort, improves decision speed, and turns AI initiatives into practical business capability instead of isolated experiments.",
    valueFlow: {
      trigger: "Manual work slows decisions",
      delivery: "AI workflows connect rules, data, and users",
      outcome: "Faster decisions with governed execution",
    },
  },
  {
    id: "erp",
    title: "ERP",
    description:
      "Shape ERP architecture, integrations, and process flows around real operating needs across finance, inventory, sales, projects, and service teams.",
    deliveryScope: [
      {
        label: "Process mapping",
        value: "Finance, sales, inventory, projects, and service flows.",
      },
      {
        label: "Platform design",
        value: "Business Central/NAV architecture and extension strategy.",
      },
      {
        label: "Integration",
        value: "APIs, data boundaries, automation, and system handoffs.",
      },
    ],
    expectedOutcomes: [
      "Cleaner ERP operating model",
      "Reliable integrations across core systems",
      "Better visibility for business teams",
    ],
    keyFeatures: ["Integration", "Enterprise workflows", "Optimization"],
    businessValue:
      "Improves operational visibility, removes disconnected processes, and creates a cleaner foundation for scalable enterprise execution.",
    valueFlow: {
      trigger: "Disconnected operations limit visibility",
      delivery: "ERP architecture aligns process and integration",
      outcome: "Cleaner execution across enterprise teams",
    },
  },
  {
    id: "cloud",
    title: "Cloud",
    description:
      "Create secure cloud foundations with infrastructure patterns, delivery automation, monitoring, and DevOps practices built for production growth.",
    deliveryScope: [
      {
        label: "Foundation",
        value: "Cloud environments, networking, security, and access controls.",
      },
      {
        label: "Delivery",
        value: "CI/CD pipelines, release workflows, and deployment standards.",
      },
      {
        label: "Reliability",
        value: "Observability, alerts, backup posture, and runtime confidence.",
      },
    ],
    expectedOutcomes: [
      "More predictable release cycles",
      "Production-ready infrastructure baseline",
      "Improved monitoring and operational control",
    ],
    keyFeatures: ["Scaling", "Infrastructure", "DevOps pipelines"],
    businessValue:
      "Increases platform reliability, shortens release cycles, and gives teams the infrastructure confidence to scale without avoidable complexity.",
    valueFlow: {
      trigger: "Fragile infrastructure slows releases",
      delivery: "Cloud foundations automate delivery and monitoring",
      outcome: "Reliable scaling with shorter release cycles",
    },
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    description:
      "Build product-ready SaaS foundations with tenant-aware architecture, account models, subscription paths, and reusable platform capabilities.",
    deliveryScope: [
      {
        label: "Product core",
        value: "Tenant model, account structure, roles, and feature boundaries.",
      },
      {
        label: "Platform systems",
        value: "Billing readiness, onboarding flows, APIs, and admin surfaces.",
      },
      {
        label: "Scale path",
        value: "Reusable modules, data separation, and maintainable release flow.",
      },
    ],
    expectedOutcomes: [
      "SaaS foundation ready for real users",
      "Architecture that supports pricing and growth",
      "Reusable platform capabilities for future modules",
    ],
    keyFeatures: ["Tenant models", "Product foundations", "Delivery systems"],
    businessValue:
      "Accelerates product delivery while keeping the platform maintainable as users, pricing models, and operational demands grow.",
    valueFlow: {
      trigger: "Product growth adds platform pressure",
      delivery: "Reusable SaaS foundations support tenants and plans",
      outcome: "Faster releases without structural rework",
    },
  },
  {
    id: "full-stack-applications",
    title: "Full-Stack Applications",
    description:
      "Deliver polished web applications, APIs, integration layers, and frontend experiences with maintainable engineering standards.",
    deliveryScope: [
      {
        label: "Frontend",
        value: "Responsive interfaces, reusable components, and user workflows.",
      },
      {
        label: "Backend",
        value: "APIs, business logic, data access, and integration services.",
      },
      {
        label: "Quality",
        value: "Type safety, validation, accessibility, and deployment readiness.",
      },
    ],
    expectedOutcomes: [
      "Maintainable application architecture",
      "Polished user experience across devices",
      "APIs and integrations ready for extension",
    ],
    keyFeatures: ["Web apps", "APIs", "User experience"],
    businessValue:
      "Turns business requirements into reliable software that users can adopt quickly and teams can extend without constant rework.",
    valueFlow: {
      trigger: "Requirements need reliable product execution",
      delivery: "Applications, APIs, and UX ship as one system",
      outcome: "Adoptable software teams can keep extending",
    },
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    description:
      "Provide architecture reviews, system design, platform direction, and technical roadmap decisions for complex software initiatives.",
    deliveryScope: [
      {
        label: "Assessment",
        value: "Current-state review, constraints, risks, and delivery blockers.",
      },
      {
        label: "Design",
        value: "System boundaries, integration patterns, and technical tradeoffs.",
      },
      {
        label: "Roadmap",
        value: "Sequenced recommendations that teams can execute without churn.",
      },
    ],
    expectedOutcomes: [
      "Clear architectural decision record",
      "Lower technical and delivery risk",
      "Roadmap aligned with business priorities",
    ],
    keyFeatures: ["System design", "Architecture reviews", "Technical roadmaps"],
    businessValue:
      "Clarifies tradeoffs early, reduces delivery risk, and helps teams make decisions that remain sound beyond the first release.",
    valueFlow: {
      trigger: "Technical choices carry long-term risk",
      delivery: "Architecture review clarifies tradeoffs and direction",
      outcome: "Decisions hold up beyond the first release",
    },
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Connect modernization goals with operating models, platform choices, data flows, and execution priorities that teams can actually deliver.",
    deliveryScope: [
      {
        label: "Strategy",
        value: "Business goals, operating model, capability gaps, and priorities.",
      },
      {
        label: "Modernization",
        value: "Platform choices, process redesign, data flows, and adoption path.",
      },
      {
        label: "Execution",
        value: "Phased roadmap, ownership model, risks, and success measures.",
      },
    ],
    expectedOutcomes: [
      "Technology roadmap tied to business value",
      "Practical execution plan for leadership",
      "Better alignment across teams and systems",
    ],
    keyFeatures: ["Modernization", "Operating models", "Execution planning"],
    businessValue:
      "Aligns technology investment with measurable business change and gives leadership a practical roadmap from strategy to adoption.",
    valueFlow: {
      trigger: "Strategy needs an executable operating path",
      delivery: "Modernization roadmap connects platforms and teams",
      outcome: "Technology investment maps to business change",
    },
  },
];

export const workProcessSteps: WorkProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "Clarify business goals, operating constraints, user needs, risks, and the measurable outcomes the system must support.",
  },
  {
    step: "02",
    title: "System Architecture Design",
    description:
      "Define platform choices, system boundaries, data flows, integration points, and the simplest architecture that can scale.",
  },
  {
    step: "03",
    title: "Development & Engineering",
    description:
      "Build the core experience, APIs, integrations, automation, and reusable foundations with clean engineering standards.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description:
      "Validate functionality, performance, accessibility, reliability, and operational quality before production release.",
  },
  {
    step: "05",
    title: "Deployment & Scaling",
    description:
      "Release with production readiness, monitoring, documentation, and a clear path for scaling the platform after launch.",
  },
];

export const technologyStackGroups: TechnologyStackGroup[] = [
  {
    id: "frontend-engineering",
    category: "Frontend Engineering",
    description:
      "Modern web interfaces built with App Router architecture, type safety, and reusable component systems.",
    technologies: ["Next.js (App Router)", "TypeScript", "React"],
  },
  {
    id: "backend-enterprise-development",
    category: "Backend & Enterprise Development",
    description:
      "Enterprise-grade application foundations for APIs, integrations, domain logic, and scalable service boundaries.",
    technologies: [
      ".NET / ASP.NET Core",
      "C#",
      "RESTful API development",
      "Microservices architecture",
      "Clean Architecture pattern",
    ],
  },
  {
    id: "cloud-infrastructure",
    category: "Cloud & Infrastructure",
    description:
      "Cloud architecture and delivery systems designed for reliability, security, automation, and long-term scale.",
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Cloud Architecture Design",
      "DevOps & CI/CD pipelines",
      "Docker & containerization",
    ],
  },
  {
    id: "enterprise-systems",
    category: "Enterprise Systems",
    description:
      "ERP-focused system design across Microsoft platforms, business workflows, automation, and integration layers.",
    technologies: [
      "Microsoft Dynamics 365",
      "Custom ERP development",
      "Business process automation",
      "Enterprise system integration",
      "Microsoft ecosystem solutions",
    ],
  },
  {
    id: "ai-machine-learning",
    category: "AI & Machine Learning",
    description:
      "Applied AI capabilities for enterprise workflows, prediction, decision support, and intelligent automation.",
    technologies: [
      "AI-powered enterprise systems",
      "LLM integration",
      "Intelligent automation workflows",
      "Predictive analytics systems",
      "Data-driven decision systems",
    ],
  },
  {
    id: "saas-platform-engineering",
    category: "SaaS & Platform Engineering",
    description:
      "Platform architecture for multi-tenant products, API-first systems, and distributed software foundations.",
    technologies: [
      "Multi-tenant SaaS architecture",
      "Scalable backend systems",
      "API-first development",
      "System design & distributed architecture",
    ],
  },
];

export const engagementModels: EngagementModel[] = [
  {
    name: "Hourly Consulting",
    description:
      "Flexible expert support for targeted technical decisions, architecture questions, ERP guidance, cloud planning, or implementation blockers.",
    idealClient:
      "Teams that need senior technical input without committing to a full project.",
    valueProposition:
      "Fast access to practical enterprise expertise for decisions that need clarity now.",
  },
  {
    name: "Project-Based Development",
    description:
      "End-to-end delivery for defined AI, ERP, cloud, SaaS, or full-stack initiatives with clear scope, milestones, and production outcomes.",
    idealClient:
      "Businesses with a specific product, platform, integration, or modernization initiative.",
    valueProposition:
      "Turns strategic requirements into production-ready software with accountable delivery.",
  },
  {
    name: "Long-Term Enterprise Partnership",
    description:
      "Ongoing architecture, engineering, platform evolution, and technical leadership across multiple enterprise workstreams.",
    idealClient:
      "Organizations scaling systems over time and needing a trusted senior technology partner.",
    valueProposition:
      "Provides continuity, governance, and strategic execution across long-running digital initiatives.",
  },
  {
    name: "Architecture Advisory",
    description:
      "Focused review and guidance for system architecture, cloud strategy, ERP integration, SaaS foundations, and engineering standards.",
    idealClient:
      "Leaders and engineering teams validating important technical decisions before investment.",
    valueProposition:
      "Reduces technical risk by clarifying architecture tradeoffs before they become expensive constraints.",
  },
];
