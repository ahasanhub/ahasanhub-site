import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui";

export function AboutCtaSection() {
  return (
    <section
      aria-labelledby="about-cta-title"
      className="bg-background py-section-y sm:py-section-y-sm"
    >
      <Container>
        <div className="rounded-2xl border border-border bg-surface p-card shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="min-w-0">
              <h2
                id="about-cta-title"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Build systems with enterprise clarity.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Start a focused conversation about AI automation, ERP strategy,
                cloud platforms, SaaS products, or full-stack system delivery.
              </p>
            </div>

            <Link
              href="/contact"
              aria-label="Contact AhasanHub about an enterprise technology project"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Contact AhasanHub
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
