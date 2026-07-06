export type SiteProfile = {
  name: string;
  tagline: string;
  url: string;
  logoPath: string;
  description: string;
  contactEmail: string;
  locale: string;
  socialHandle: string;
  focusAreas: string[];
};

export const site: SiteProfile = {
  name: "AhasanHub",
  tagline: "Connect. Create. Grow.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahasanhub.com",
  logoPath: "/ahasanhub-logo.png",
  description:
    "AhasanHub is a premium enterprise technology consulting platform for AI, ERP, cloud, SaaS, and software architecture.",
  contactEmail: "ahasan.cse03@gmail.com",
  locale: "en_US",
  socialHandle: "@ahasanhub",
  focusAreas: [
    "AI Engineering",
    "ERP Architecture",
    "Cloud Systems",
    "SaaS Platforms",
    "Full-Stack Development",
    "Software Architecture",
    "Digital Transformation",
  ],
};
