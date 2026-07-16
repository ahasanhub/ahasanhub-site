import type { Metadata } from "next";
import { site } from "@/data/site";
import type { InsightFrontmatter } from "@/types/insights";

export const siteConfig = site;

type SeoMetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createSeoMetadata({
  title,
  description,
  path = "/",
}: SeoMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const url = new URL(canonicalPath, siteConfig.url);
  const image = new URL(siteConfig.logoPath, siteConfig.url);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.socialHandle,
    },
  };
}

export function createInsightSeoMetadata(
  insight: InsightFrontmatter,
): Metadata {
  const description =
    insight.description.trim() ||
    `Read AhasanHub insight: ${insight.title}.`;
  const path = `/insights/${insight.slug}`;
  const canonicalPath = path.replace(/\/$/, "");
  const url = new URL(canonicalPath, siteConfig.url);
  const image = new URL(insight.image ?? siteConfig.logoPath, siteConfig.url);

  return {
    title: insight.title,
    description,
    keywords: insight.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: insight.title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: insight.imageAlt ?? `${insight.title} | ${siteConfig.name}`,
        },
      ],
      locale: siteConfig.locale,
      type: "article",
      publishedTime: `${insight.date}T00:00:00.000Z`,
      modifiedTime: `${insight.updatedDate ?? insight.date}T00:00:00.000Z`,
      authors: [siteConfig.name],
      tags: insight.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description,
      images: [image],
      creator: siteConfig.socialHandle,
    },
  };
}
