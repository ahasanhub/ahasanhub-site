import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

export function ServicesCTASection() {
  return (
    <section
      className="bg-surface-inverse py-section-y text-background sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="services-cta-title"
    >
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-tech">
            Start with clarity
          </p>
          <h2
            id="services-cta-title"
            className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl"
          >
            Turn an enterprise technology goal into an executable plan.
          </h2>
          <p className="mt-4 text-base leading-7 text-background/75">
            Use AhasanHub to clarify the architecture, reduce delivery risk, and
            move from scattered initiatives to a system your business can operate
            with confidence.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech"
        >
          Discuss a service need
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </Container>
    </section>
  );
}
