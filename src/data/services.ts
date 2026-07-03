export type Service = {
  id: string;
  title: string;
  summary: string;
  focusAreas: string[];
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
    focusAreas: ["Product architecture", "Multi-tenant systems", "Delivery strategy"],
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
