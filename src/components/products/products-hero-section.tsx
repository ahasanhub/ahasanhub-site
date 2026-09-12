import { ArrowRight, CheckCircle2, Layers, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { HeroBackground } from "@/components/sections/hero-background";
import { Badge, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export type ProductsHeroSectionProps = {
  className?: string;
};

export function ProductsHeroSection({ className }: ProductsHeroSectionProps) {
  return (
    <section
      aria-labelledby="products-hero-title"
      className={cn(
        "relative isolate overflow-hidden border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <HeroBackground />

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <Badge
            variant="neutral"
            className="border border-white/60 bg-surface/75 px-4 py-1.5 text-xs font-semibold text-foreground shadow-[0_12px_32px_color-mix(in_srgb,var(--foreground)_8%,transparent)] backdrop-blur-xl dark:border-white/10 dark:bg-surface/55"
          >
            AhasanHub Software Products
          </Badge>

          <h1
            id="products-hero-title"
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Enterprise Software Built for{" "}
            <span className="bg-gradient-to-r from-primary via-premium to-tech bg-clip-text text-transparent">
              Real Business Operations
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-8">
            Explore enterprise ERP, CRM and commerce platforms designed around governed
            workflows, secure architecture, extensibility and practical business operations.
            Available for demonstration, customization, deployment and commercial licensing.
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="#products-portfolio"
              aria-label="Explore enterprise software products"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Explore Products
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/contact?intent=demo"
              aria-label="Request a product demonstration"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/60 bg-surface/75 px-5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-surface/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:border-white/10 dark:bg-surface/55"
            >
              Request a Demo
            </Link>
          </div>

          {/* Factual trust & status indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              ERP Core Operations
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-tech" />
              Sales &amp; CRM Operations
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-premium" />
              Dynamic Catalog Commerce
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-architecture" />
              API-First &amp; Cloud-Ready
            </span>
          </div>

          {/* Abstract System Architecture Visual */}
          <div className="mt-12 w-full max-w-4xl rounded-2xl border border-border/80 bg-surface/40 p-4 shadow-sm backdrop-blur-sm sm:p-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 text-left">
              <div className="rounded-xl border border-border/70 bg-background/80 p-4 transition-all duration-200 hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-primary uppercase">
                    01 • System of Record
                  </span>
                  <Layers className="size-4 text-primary" />
                </div>
                <h4 className="mt-2 text-sm font-bold text-foreground">Custom ERP AI Enabled</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-5">
                  Order-to-Cash, Procure-to-Pay, multi-warehouse stock, and double-entry general ledger.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-primary">
                  <CheckCircle2 className="size-3.5" />
                  <span>Governed Accounting</span>
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/80 p-4 transition-all duration-200 hover:border-tech/40">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-tech uppercase">
                    02 • Revenue &amp; Pipeline
                  </span>
                  <Zap className="size-4 text-tech" />
                </div>
                <h4 className="mt-2 text-sm font-bold text-foreground">Custom CRM AI Enabled</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-5">
                  Lead qualification, Customer 360, visual pipeline, and quotation builder with PDF output.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-tech">
                  <CheckCircle2 className="size-3.5" />
                  <span>Lead-to-Quote Cycle</span>
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-background/80 p-4 transition-all duration-200 hover:border-premium/40">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-premium uppercase">
                    03 • Digital Commerce
                  </span>
                  <ShieldCheck className="size-4 text-premium" />
                </div>
                <h4 className="mt-2 text-sm font-bold text-foreground">Ecommerce with AI Agent</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-5">
                  Dynamic attributes, multi-SKU variants, inventory-aware checkout, and AI agent assistance.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-premium">
                  <CheckCircle2 className="size-3.5" />
                  <span>AI Agent Commerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
