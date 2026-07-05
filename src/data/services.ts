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

export type WorkProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type TechnologyStackGroup = {
  category: string;
  technologies: string[];
};

export type EngagementModel = {
  name: string;
  description: string;
  fit: string;
};

export const services: Service[] = [
  {
    id: "ai-consulting",
    title: "AI Consulting",
    summary:
      "Practical AI strategy, workflow automation, and applied intelligent systems aligned with business outcomes.",
    focusAreas: ["AI strategy", "Workflow automation", "Applied LLM systems"],
  },
  {
    id: "erp-architecture",
    title: "ERP Architecture",
    summary:
      "Enterprise ERP solution design with a focus on Dynamics 365 Business Central, NAV, integrations, and process alignment.",
    focusAreas: ["Business Central", "NAV", "ERP integrations"],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    summary:
      "Secure cloud architecture, platform modernization, and scalable infrastructure foundations.",
    focusAreas: ["Azure", "Cloud architecture", "Platform modernization"],
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    summary:
      "Product-ready SaaS foundations, subscription workflows, tenant-aware architecture, and scalable delivery models.",
    focusAreas: [
      "Product architecture",
      "Multi-tenant systems",
      "Delivery strategy",
    ],
  },
  {
    id: "full-stack-engineering",
    title: "Full Stack Engineering",
    summary:
      "Maintainable web applications, APIs, integration layers, and modern frontend experiences.",
    focusAreas: [".NET", "Next.js", "API design"],
  },
  {
    id: "system-integration",
    title: "System Integration",
    summary:
      "Reliable integration design across ERP, SaaS, cloud services, APIs, data flows, and operational systems.",
    focusAreas: ["APIs", "Data flows", "Enterprise systems"],
  },
];

export const serviceDetails: ServiceDetail[] = services.map((service) => {
  const details: Record<string, Omit<ServiceDetail, keyof Service>> = {
    "ai-consulting": {
      outcomes: [
        "AI adoption roadmap",
        "Workflow automation design",
        "Applied LLM system architecture",
      ],
      bestFor: "Teams turning AI interest into governed business capability.",
    },
    "erp-architecture": {
      outcomes: [
        "ERP modernization plan",
        "Business Central architecture",
        "Integration and process alignment",
      ],
      bestFor: "Organizations improving operational systems and ERP delivery.",
    },
    "cloud-solutions": {
      outcomes: [
        "Secure Azure foundation",
        "Cloud migration direction",
        "Platform reliability improvements",
      ],
      bestFor: "Businesses scaling infrastructure without adding fragility.",
    },
    "saas-development": {
      outcomes: [
        "SaaS product architecture",
        "Tenant-aware platform foundations",
        "Subscription-ready delivery model",
      ],
      bestFor: "Founders and teams building reusable software products.",
    },
    "full-stack-engineering": {
      outcomes: [
        "Modern web application delivery",
        "API and integration layers",
        "Maintainable frontend foundations",
      ],
      bestFor: "Teams that need production-grade engineering execution.",
    },
    "system-integration": {
      outcomes: [
        "API integration architecture",
        "Reliable data flow design",
        "Connected enterprise workflows",
      ],
      bestFor: "Organizations connecting ERP, SaaS, cloud, and data systems.",
    },
  };

  return {
    ...service,
    ...details[service.id],
  };
});

export const workProcessSteps: WorkProcessStep[] = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "Clarify the business problem, operational constraints, users, risks, and measurable outcomes before recommending a solution.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Define system boundaries, platform choices, integration flows, delivery phases, and the simplest path to production value.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Build the foundation with clean implementation standards, review loops, documentation, and production readiness in mind.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Improve reliability, automation, analytics, and future expansion paths as the system matures.",
  },
];

export const technologyStackGroups: TechnologyStackGroup[] = [
  {
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  },
  {
    category: "Backend",
    technologies: [".NET", "API design", "SQL", "Integration services"],
  },
  {
    category: "Cloud",
    technologies: ["Azure", "DevOps", "CI/CD", "Observability"],
  },
  {
    category: "ERP",
    technologies: ["Dynamics 365", "Business Central", "NAV", "AL"],
  },
  {
    category: "AI",
    technologies: [
      "LLM systems",
      "Automation",
      "Knowledge workflows",
      "AI governance",
    ],
  },
];

export const engagementModels: EngagementModel[] = [
  {
    name: "Advisory Sprint",
    description:
      "A focused strategy and architecture engagement for decisions that need executive clarity before investment.",
    fit: "Best for discovery, validation, audits, and roadmap creation.",
  },
  {
    name: "Architecture Partnership",
    description:
      "Ongoing technical leadership for teams shaping ERP, SaaS, AI, cloud, or integration platforms.",
    fit: "Best for complex initiatives that need senior architecture guidance.",
  },
  {
    name: "Delivery Collaboration",
    description:
      "Hands-on implementation support for production foundations, integrations, full-stack systems, and modernization work.",
    fit: "Best for teams that need strategy connected directly to execution.",
  },
];
