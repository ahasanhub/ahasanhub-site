import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getAllInsights } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url.replace(/\/$/, "");

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/insights",
    "/products",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("monthly" as const),
    priority:
      route === ""
        ? 1.0
        : route === "/privacy" || route === "/terms"
          ? 0.3
          : route === "/contact"
            ? 0.5
            : 0.8,
  }));

  // Dynamic insights routes
  let dynamicRoutes: MetadataRoute.Sitemap = [];
  try {
    const insights = getAllInsights();
    dynamicRoutes = insights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(insight.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error generating dynamic routes for sitemap:", error);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
