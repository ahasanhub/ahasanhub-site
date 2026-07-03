export type Service = {
  id: string;
  title: string;
  summary: string;
  focusAreas: string[];
};

export const services: Service[] = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    summary:
      "Practical AI strategy, workflow automation, and intelligent software systems for business operations.",
    focusAreas: ["AI strategy", "Automation", "Applied LLM systems"],
  },
  {
    id: "erp-architecture",
    title: "ERP Architecture",
    summary:
      "Enterprise ERP solution design with a focus on Dynamics 365 Business Central, NAV, integrations, and process alignment.",
    focusAreas: ["Business Central", "NAV", "ERP integrations"],
  },
  {
    id: "cloud-saas",
    title: "Cloud and SaaS Platforms",
    summary:
      "Cloud-native architecture, scalable SaaS foundations, and secure product delivery practices.",
    focusAreas: ["Azure", "SaaS architecture", "Platform engineering"],
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    summary:
      "Maintainable full-stack systems, architecture reviews, modernization planning, and delivery leadership.",
    focusAreas: [".NET", "Next.js", "System design"],
  },
];
