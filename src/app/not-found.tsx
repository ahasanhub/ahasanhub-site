import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on AhasanHub.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <article className="flex min-h-[70vh] flex-col items-center justify-center py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container size="md" className="text-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Error 404
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Page Not Found
          </h1>

          <p className="mx-auto max-w-lg text-lg text-muted-foreground">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back to creating and growing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground shadow-[0_18px_38px_color-mix(in_srgb,var(--primary)_28%,transparent)] transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_22px_46px_color-mix(in_srgb,var(--primary)_34%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
            >
              Go to Homepage
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-border bg-surface px-5 text-base font-semibold text-foreground shadow-[0_14px_34px_color-mix(in_srgb,var(--foreground)_7%,transparent)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-surface/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
