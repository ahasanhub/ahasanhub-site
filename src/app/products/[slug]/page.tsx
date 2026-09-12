import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Database,
  Layers,
  Network,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Badge, Card, Container } from "@/components/ui";
import { softwareProducts } from "@/data/products";
import { siteConfig } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return softwareProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = softwareProducts.find((p) => p.slug === slug);

  if (!product) {
    return {};
  }

  const title = `${product.displayName} | Enterprise Software Platform | AhasanHub`;
  const description = product.shortPositioning;
  const path = `/products/${product.slug}`;
  const canonicalUrl = new URL(path, siteConfig.url);
  const ogImage = new URL(siteConfig.logoPath, siteConfig.url);

  const keywords = [
    product.name,
    product.displayName,
    product.category,
    ...product.architectureTags,
    ...product.targetAudience,
    "enterprise software",
    "software licensing",
    "AI automation",
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${product.name} - AhasanHub`,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: siteConfig.socialHandle,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = softwareProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const productUrl = new URL(`/products/${product.slug}`, siteConfig.url);
  const ogImage = new URL(siteConfig.logoPath, siteConfig.url);

  // Factual JSON-LD Schema without fake reviews, ratings, or prices
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    headline: product.headline,
    description: product.description,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: product.category,
    operatingSystem: "Cloud, Web-based, Linux, Windows",
    url: productUrl.toString(),
    featureList: product.keyCapabilities.slice(0, 8),
    screenshot: ogImage.toString(),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      description: "Available for commercial licensing and dedicated enterprise deployment",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Products",
        item: new URL("/products", siteConfig.url).toString(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.displayName,
        item: productUrl.toString(),
      },
    ],
  };

  const badgeVariant =
    product.accentColor === "primary"
      ? "primary"
      : product.accentColor === "tech"
      ? "tech"
      : "premium";

  return (
    <main className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <Link href="/products" className="hover:text-foreground transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{product.displayName}</span>
        </nav>

        {/* 1. PRODUCT HERO */}
        <header className="border-b border-border pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={badgeVariant}>{product.category}</Badge>
            <span className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-mono text-muted-foreground">
              {product.commercialStatus}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {product.name}
          </h1>

          <p className="mt-3 text-xl font-semibold text-foreground/90 sm:text-2xl">
            {product.headline}
          </p>

          <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={product.primaryCta.href}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {product.primaryCta.label}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={product.secondaryCta.href}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {product.secondaryCta.label}
            </Link>
          </div>
        </header>

        {/* 2. OPERATIONAL WORKFLOWS (HOW IT WORKS) */}
        <section aria-labelledby="product-workflow-title" className="py-12 border-b border-border">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              Operational Sequence
            </p>
            <h2 id="product-workflow-title" className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Core Business Cycles &amp; Data Flow
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every operation follows an auditable, deterministic lifecycle ensuring data accuracy across each stage.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {product.businessCycles.map((cycle) => (
              <Card key={cycle.name} className="rounded-2xl border border-border bg-surface/50 p-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/60 pb-4">
                  <h3 className="text-base font-bold text-foreground">{cycle.name}</h3>
                  <span className="text-xs font-mono text-muted-foreground">Governed Flow</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {cycle.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                  {cycle.steps.map((step, idx) => (
                    <div key={step} className="inline-flex items-center gap-2">
                      <span className="rounded-md border border-border bg-background px-3 py-1.5 font-mono font-medium text-foreground">
                        <span className="text-muted-foreground mr-1.5">{idx + 1}.</span>
                        {step}
                      </span>
                      {idx < cycle.steps.length - 1 ? (
                        <ChevronRight className="size-3.5 text-muted-foreground shrink-0" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. CORE CAPABILITIES */}
        <section aria-labelledby="product-capabilities-title" className="py-12 border-b border-border">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-tech">
              Platform Features
            </p>
            <h2 id="product-capabilities-title" className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Key Platform Capabilities
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.keyCapabilities.map((cap) => (
              <Card key={cap} className="rounded-xl border border-border/80 bg-background/50 p-4 shadow-xs">
                <div className="flex items-start gap-2.5">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-surface-muted text-primary border border-border mt-0.5">
                    <Check className="size-3" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                    {cap}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. CORE PLATFORM MODULES */}
        <section aria-labelledby="product-modules-title" className="py-12 border-b border-border">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-architecture">
              Modular Design
            </p>
            <h2 id="product-modules-title" className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Core Modules &amp; Subsystems
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Organized into clear domain boundaries, allowing targeted configuration without monolithic rigidity.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {product.coreModules.map((mod, mIdx) => (
              <div
                key={mod}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-4 transition duration-200 hover:border-border-strong hover:bg-surface"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-[11px] font-mono font-bold text-foreground border border-border">
                  {mIdx + 1 < 10 ? `0${mIdx + 1}` : mIdx + 1}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground">
                  {mod}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PRODUCT-SPECIFIC DEPTH (Financial Principles / Buyer Outcomes / Commercial Adaptation) */}
        {product.financialPrinciples ? (
          <section aria-labelledby="product-financial-title" className="py-12 border-b border-border">
            <div className="max-w-3xl">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Accounting Governance
              </p>
              <h2 id="product-financial-title" className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Strict Financial Principles &amp; General Ledger Integrity
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.financialPrinciples.map((principle) => (
                <Card key={principle} className="rounded-xl border border-border bg-background/50 p-5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                      {principle}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ) : null}

        {product.buyerOutcomes ? (
          <section aria-labelledby="product-outcomes-title" className="py-12 border-b border-border">
            <div className="max-w-3xl">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-tech">
                Commercial Impact
              </p>
              <h2 id="product-outcomes-title" className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Commercial Outcomes &amp; Sales Process Ownership
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.buyerOutcomes.map((outcome) => (
                <Card key={outcome} className="rounded-xl border border-border bg-background/50 p-5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <Zap className="size-5 text-tech shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                      {outcome}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ) : null}

        {product.commercialAdaptation ? (
          <section aria-labelledby="product-adaptation-title" className="py-12 border-b border-border">
            <div className="max-w-3xl">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-premium">
                White-Label &amp; Extension
              </p>
              <h2 id="product-adaptation-title" className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Commercial Adaptation &amp; White-Label Capabilities
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.commercialAdaptation.map((adapt) => (
                <Card key={adapt} className="rounded-xl border border-border bg-background/50 p-5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <Layers className="size-5 text-premium shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                      {adapt}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ) : null}

        {/* 6. TARGET USERS & ORGANIZATIONS */}
        <section aria-labelledby="product-audience-title" className="py-12 border-b border-border">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
              Intended Audience
            </p>
            <h2 id="product-audience-title" className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Target Organizations &amp; Operating Roles
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {product.targetAudience.map((aud) => (
              <span
                key={aud}
                className="inline-flex items-center rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-medium text-foreground sm:text-sm shadow-2xs"
              >
                {aud}
              </span>
            ))}
          </div>
        </section>

        {/* 7. ARCHITECTURE & INTEGRATION CAPABILITIES */}
        <section aria-labelledby="product-architecture-title" className="py-12 border-b border-border">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="rounded-2xl border border-border bg-surface/50 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-architecture">
                <Database className="size-4" />
                <span>Architecture Characteristics</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Technical Stack &amp; Foundations
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {product.architectureTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-border bg-background px-3 py-1.5 text-xs font-mono text-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="rounded-2xl border border-border bg-surface/50 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-tech">
                <Network className="size-4" />
                <span>Integration Capabilities</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                APIs, Webhooks &amp; Data Connectors
              </h3>
              <ul className="space-y-2.5 pt-2">
                {product.integrationCapabilities.map((ic) => (
                  <li key={ic} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-tech mt-2 shrink-0" />
                    <span>{ic}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* 8. DEPLOYMENT & COMMERCIAL OPTIONS */}
        <section aria-labelledby="product-deployment-title" className="py-12 border-b border-border">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-premium">
              Deployment Models
            </p>
            <h2 id="product-deployment-title" className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Deployment &amp; Commercial Licensing Options
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.deploymentOptions.map((dep) => (
              <div
                key={dep}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 shadow-xs"
              >
                <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                  {dep}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. ROADMAP NOTE (IF APPLICABLE) */}
        {product.roadmapNotes ? (
          <section aria-labelledby="product-roadmap-title" className="py-8 border-b border-border">
            <div className="rounded-2xl border border-border/80 bg-surface-muted/60 p-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <span className="font-mono font-bold uppercase tracking-wider text-foreground block mb-1">
                Roadmap Note:
              </span>
              {product.roadmapNotes}
            </div>
          </section>
        ) : null}

        {/* 10. CLOSING SALES / DEMO ACTION BAR */}
        <section aria-labelledby="product-closing-cta-title" className="pt-12 text-center">
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 id="product-closing-cta-title" className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Evaluate {product.displayName} for Your Organization
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We provide tailored technical walkthroughs, proof-of-concept reviews, and clear commercial pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href={product.primaryCta.href}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {product.primaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={product.secondaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {product.secondaryCta.label}
              </Link>
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center px-4 text-xs font-semibold text-muted-foreground transition hover:text-foreground"
              >
                &larr; Back to Catalog
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
