import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { InsightCard } from "@/components/insights/InsightCard";
import { Badge, Container } from "@/components/ui";
import {
  getAllInsights,
  getInsightBySlug,
  getRelatedInsights,
} from "@/lib/mdx";
import { createInsightSeoMetadata, siteConfig } from "@/lib/seo";
import { InsightMdxContent } from "./insight-mdx-content";

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

function formatInsightDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function generateStaticParams() {
  return getAllInsights().map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {};
  }

  return createInsightSeoMetadata(insight);
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = getRelatedInsights(insight);
  const articleUrl = new URL(`/insights/${insight.slug}`, siteConfig.url);
  const articleImage = new URL(
    insight.image ?? siteConfig.logoPath,
    siteConfig.url,
  );
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    image: articleImage.toString(),
    datePublished: insight.date,
    dateModified: insight.updatedDate ?? insight.date,
    inLanguage: "en",
    articleSection: insight.category,
    keywords: insight.tags.join(", "),
    mainEntityOfPage: articleUrl.toString(),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: new URL(siteConfig.logoPath, siteConfig.url).toString(),
      },
    },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Insights",
        item: new URL("/insights", siteConfig.url).toString(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: insight.title,
        item: articleUrl.toString(),
      },
    ],
  };

  return (
    <article className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Container size="md">
        <header className="border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="architecture">{insight.category}</Badge>
            <time
              dateTime={insight.date}
              className="text-sm font-medium text-muted-foreground"
            >
              Published {formatInsightDate(insight.date)}
            </time>
            {insight.updatedDate && insight.updatedDate !== insight.date ? (
              <time
                dateTime={insight.updatedDate}
                className="text-sm font-medium text-muted-foreground"
              >
                Updated {formatInsightDate(insight.updatedDate)}
              </time>
            ) : null}
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            {insight.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {insight.description}
          </p>

          {insight.image ? (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-sm">
              <Image
                src={insight.image}
                alt={insight.imageAlt ?? insight.title}
                fill
                priority
                className="object-contain p-10"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </div>
          ) : null}
        </header>

        <div className="mt-10 max-w-none text-foreground">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-muted-foreground shadow-sm">
                Loading insight...
              </div>
            }
          >
            <InsightMdxContent content={insight.content} />
          </Suspense>
        </div>
      </Container>

      {relatedInsights.length > 0 ? (
        <Container className="mt-16" size="xl">
          <section
            aria-labelledby="related-insights-title"
            className="border-t border-border pt-10"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-normal text-primary">
                Related insights
              </p>
              <h2
                id="related-insights-title"
                className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Continue exploring this topic
              </h2>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedInsights.map((relatedInsight) => (
                <InsightCard key={relatedInsight.slug} insight={relatedInsight} />
              ))}
            </div>
          </section>
        </Container>
      ) : null}
    </article>
  );
}
