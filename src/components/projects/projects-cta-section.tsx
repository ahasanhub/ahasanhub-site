import Link from "next/link";
import { cn } from "@/lib/utils";

export type ProjectsCTASectionProps = {
  className?: string;
};

export function ProjectsCTASection({ className }: ProjectsCTASectionProps) {
  return (
    <section
      aria-labelledby="projects-cta-title"
      className={cn(
        "bg-surface-inverse py-section-y text-background sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-tech">
              Build with AhasanHub
            </p>
            <h2
              id="projects-cta-title"
              className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Build Your Next Enterprise System
            </h2>
            <p className="mt-4 text-base leading-7 text-background/75 sm:text-lg">
              Bring the business problem, and AhasanHub will help shape the
              architecture, delivery model, and engineering path for a scalable
              enterprise solution.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech"
            >
              Start a Project
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-background/20 bg-background/10 px-6 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-background/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech"
            >
              Contact AhasanHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
