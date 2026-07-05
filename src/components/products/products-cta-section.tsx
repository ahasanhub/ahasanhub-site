import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";

export type ProductsCTASectionProps = {
  className?: string;
};

export function ProductsCTASection({ className }: ProductsCTASectionProps) {
  return (
    <section
      aria-labelledby="products-cta-title"
      className={cn(
        "relative isolate overflow-hidden bg-surface-inverse py-section-y text-background sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      {/* Stripe-style Ambient Background Glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none select-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[36rem] rounded-full bg-tech/20 blur-[120px]" />
      </div>

      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-tech">
              Get Started
            </p>
            <h2
              id="products-cta-title"
              className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Build Your Own Digital Product Ecosystem
            </h2>
            <p className="mt-5 text-base leading-7 text-white/80 max-w-2xl mx-auto lg:mx-0">
              Partner with AhasanHub to design, engineer, and deploy high-performance SaaS platforms,
              ERP integrations, and custom automated tools tailored for modern business growth.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/contact"
              aria-label="Start a Project with AhasanHub"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_16px_36px_color-mix(in_srgb,var(--primary)_30%,transparent)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[0_20px_42px_color-mix(in_srgb,var(--primary)_40%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              aria-label="Explore AhasanHub Services"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
