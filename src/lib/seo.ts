import type { Metadata } from "next";
import { site } from "@/data/site";

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
