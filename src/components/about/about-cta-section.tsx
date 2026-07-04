import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui";

export function AboutCTASection() {
  return (
    <section
      aria-labelledby="about-cta-title"
      className="bg-foreground py-section-y text-background sm:py-section-y-sm"
    >
      <Container>
        <div className="rounded-2xl border border-white/10 bg-foreground p-card shadow-[0_18px_44px_color-mix(in_srgb,var(--foreground)_14%,transparent)] dark:bg-surface">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="min-w-0">
              <h2
                id="about-cta-title"
                className="text-3xl font-semibold tracking-tight text-background dark:text-foreground sm:text-4xl"
              >
                Let&rsquo;s Build Enterprise-Grade Systems Together
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-background/70 dark:text-muted-foreground">
                Start a focused conversation about AI automation, ERP strategy,
                cloud platforms, SaaS products, or full-stack system delivery.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                aria-label="Start a conversation with AhasanHub"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Start a Conversation
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="/services"
                aria-label="View AhasanHub services"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 text-base font-semibold text-background shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:text-foreground"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
