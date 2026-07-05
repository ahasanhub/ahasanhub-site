import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui";

export function ServicesCTASection() {
  return (
    <section
      className="bg-surface-inverse py-section-y text-background sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="services-cta-title"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-tech">
              Enterprise delivery starts here
            </p>
            <h2
              id="services-cta-title"
              className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Build Your Next Enterprise System
            </h2>
            <p className="mt-5 text-base leading-7 text-background/75 sm:text-lg">
              Bring clarity to AI, ERP, cloud, SaaS, and full-stack initiatives
              with architecture-first consulting and production-grade delivery.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech"
            >
              Start a Project
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-background/25 bg-background/10 px-6 text-sm font-semibold text-background transition-colors hover:bg-background/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech"
            >
              Contact Us
              <MessageSquare aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
