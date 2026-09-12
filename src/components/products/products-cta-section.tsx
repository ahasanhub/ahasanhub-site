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
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-tech">
              Commercial Discussion
            </p>
            <h2
              id="products-cta-title"
              className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ready to See the Product in Action?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 max-w-2xl mx-auto lg:mx-0 sm:text-base">
              Tell us which platform you are evaluating and what business process you want to improve.
              We can discuss product fit, customization, deployment, integration and commercial options.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/contact?intent=demo"
              aria-label="Request a product demonstration"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact?intent=pricing"
              aria-label="Get commercial pricing and licensing details"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Pricing
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
