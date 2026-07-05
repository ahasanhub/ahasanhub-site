import Link from "next/link";
import { cn } from "@/lib/utils";

export type ProductsCTASectionProps = {
  className?: string;
};

export function ProductsCTASection({ className }: ProductsCTASectionProps) {
  return (
    <section
      aria-labelledby="products-cta-title"
      className={cn(
        "bg-surface-inverse py-section-y text-background sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-page-x sm:px-page-x-sm lg:grid-cols-[1fr_auto] lg:items-end lg:px-page-x-lg">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-tech">
            Build product systems
          </p>
          <h2
            id="products-cta-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Turn an enterprise workflow into a scalable SaaS product.
          </h2>
          <p className="mt-4 text-base leading-7 text-background/75">
            AhasanHub helps shape product strategy, system design, and
            engineering foundations for digital tools built around real
            operational needs.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech"
        >
          Discuss a product idea
        </Link>
      </div>
    </section>
  );
}
