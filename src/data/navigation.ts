export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/", description: "AhasanHub overview" },
  { label: "About", href: "/about", description: "Brand and expertise" },
  { label: "Services", href: "/services", description: "Consulting services" },
  { label: "Projects", href: "/projects", description: "Selected work" },
  { label: "Insights", href: "/insights", description: "Technology writing" },
  { label: "Products", href: "/products", description: "Digital offerings" },
  { label: "Contact", href: "/contact", description: "Start a conversation" },
];

export const footerNavigation: NavigationItem[] = [
  { label: "Privacy", href: "/privacy", description: "Privacy policy" },
  { label: "Terms", href: "/terms", description: "Terms of service" },
];
