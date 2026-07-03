import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Badge, Container } from "@/components/ui";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export type ContactCTASectionProps = {
  className?: string;
};

export function ContactCTASection({ className }: ContactCTASectionProps) {
  return (
    <section
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.72fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <Badge variant="primary">Consulting invitation</Badge>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
                Let&apos;s design the next intelligent system your business can
                depend on.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Bring AhasanHub into strategic planning, architecture review, AI
                adoption, ERP modernization, cloud delivery, or full-stack
                product execution.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  Email AhasanHub
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Contact page
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>

            <aside className="border-t border-border bg-surface-muted p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-success/10 text-success">
                    <ShieldCheck aria-hidden="true" className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Enterprise-ready engagement
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">
                      Strategy, architecture, and execution in one practical
                      consulting flow.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 text-sm text-muted-foreground">
                  <div className="rounded-xl border border-border bg-surface p-4">
                    Architecture-first discovery
                  </div>
                  <div className="rounded-xl border border-border bg-surface p-4">
                    AI, ERP, cloud, and software delivery alignment
                  </div>
                  <div className="rounded-xl border border-border bg-surface p-4">
                    Clear roadmap for executive and technical teams
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
