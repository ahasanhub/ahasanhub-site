export type PageSeo = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
};

export const pageSeo: Record<string, PageSeo> = {
  home: {
    path: "/",
    title: "AhasanHub | Enterprise AI Systems, ERP Architecture & Software Platforms",
    description:
      "AhasanHub engineers intelligent enterprise systems, ERP architecture, cloud systems, and proprietary software platforms (Custom ERP, Custom CRM, AI Commerce).",
    keywords: [
      "enterprise technology consulting",
      "AI engineering",
      "ERP architecture",
      "Dynamics 365 Business Central",
      "cloud DevOps",
      "custom enterprise software",
    ],
  },
  about: {
    path: "/about",
    title: "About AhasanHub | Enterprise Technology Consulting & Engineering",
    description:
      "Learn about AhasanHub, a premium technology consulting practice specializing in AI systems, ERP architecture, cloud platforms, and software transformation.",
  },
  services: {
    path: "/services",
    title: "Enterprise Technology Consulting & Engineering Services | AhasanHub",
    description:
      "Specialized engineering and architecture consulting: AI system development, Dynamics 365 ERP architecture, cloud DevOps, SaaS platform engineering, and custom software systems.",
    keywords: [
      "AI system development",
      "ERP architecture consulting",
      "Dynamics 365 Business Central integration",
      "cloud infrastructure DevOps",
      "SaaS platform engineering",
      "software architecture consulting",
      "enterprise digital transformation",
      "full-stack application development",
    ],
  },
  projects: {
    path: "/projects",
    title: "Projects & Engineering Case Studies | AhasanHub",
    description:
      "Review selected AhasanHub projects, delivery outcomes, engineering architectures, and enterprise technology implementations.",
  },
  insights: {
    path: "/insights",
    title: "Technology Insights & Engineering Articles | AhasanHub",
    description:
      "In-depth analysis and technical writing on AI systems, ERP modernization, cloud architecture, and SaaS software engineering.",
  },
  products: {
    path: "/products",
    title: "Enterprise Software Products | AI ERP, CRM & Commerce Platforms | AhasanHub",
    description:
      "Production-ready enterprise software platforms: Custom ERP AI Enabled for operations and ledger accounting, Custom CRM AI Enabled for B2B sales pipelines, and Ecommerce with AI Agent for modular digital commerce.",
    keywords: [
      "enterprise software products",
      "Custom ERP AI Enabled",
      "Custom CRM AI Enabled",
      "Ecommerce with AI Agent",
      "AI ERP platform",
      "B2B CRM software",
      "headless commerce AI agent",
      "business software licensing",
      "order to cash ERP",
      "double entry accounting software",
    ],
  },
  contact: {
    path: "/contact",
    title: "Contact",
    description:
      "Contact AhasanHub for enterprise technology consulting, AI initiatives, ERP architecture, cloud systems, and software delivery partnerships.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "Review AhasanHub's Privacy Policy, cookie details, and data protection practices.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Service",
    description:
      "Review AhasanHub's Terms of Service, user agreements, and engineering consultation rules.",
  },
};
