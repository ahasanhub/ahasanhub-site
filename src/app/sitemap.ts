import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { softwareProducts } from "@/data/products";
import { getAllInsights } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url.replace(/\/$/, "");

  // Core static routes
  const staticRoutes = [
    "",
    "/products",
    "/services",
    "/about",
    "/projects",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/products" || route === "/services"
        ? ("daily" as const)
        : ("monthly" as const),
    priority:
      route === ""
        ? 1.0
        : route === "/products" || route === "/services"
          ? 0.9
          : route === "/privacy" || route === "/terms"
            ? 0.3
            : route === "/contact"
              ? 0.6
              : 0.8,
  }));

  // Dedicated product detail routes
  const productRoutes: MetadataRoute.Sitemap = softwareProducts.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic insights routes
  let dynamicRoutes: MetadataRoute.Sitemap = [];
  try {
    const insights = getAllInsights();
    dynamicRoutes = insights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(insight.updatedDate ?? insight.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating dynamic routes for sitemap:", error);
  }

  return [...staticRoutes, ...productRoutes, ...dynamicRoutes];
}
