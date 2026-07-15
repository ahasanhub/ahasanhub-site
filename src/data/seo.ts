export type PageSeo = {
  path: string;
  title: string;
  description: string;
};

export const pageSeo: Record<string, PageSeo> = {
  home: {
    path: "/",
    title: "AhasanHub",
    description:
      "AhasanHub is a premium enterprise technology consulting platform for AI, ERP, cloud, SaaS, and software architecture.",
  },
  about: {
    path: "/about",
    title: "About AhasanHub",
    description:
      "Learn about AhasanHub, a premium consulting brand focused on AI, ERP, cloud architecture, SaaS platforms, and digital transformation.",
  },
  services: {
    path: "/services",
    title: "Services",
    description:
      "Explore AhasanHub consulting and engineering services across AI, ERP, cloud, SaaS, full-stack development, and software architecture.",
  },
  projects: {
    path: "/projects",
    title: "Projects",
    description:
      "Review selected AhasanHub projects, delivery outcomes, engineering work, and future enterprise technology case studies.",
  },
  insights: {
    path: "/insights",
    title: "Insights",
    description:
      "Read AhasanHub insights on AI, ERP, cloud systems, SaaS architecture, software engineering, and digital transformation strategy.",
  },
  products: {
    path: "/products",
    title: "Products",
    description:
      "Discover future AhasanHub products, SaaS concepts, digital tools, and reusable systems for modern business operations.",
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
