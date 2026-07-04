import { ShieldCheck } from "lucide-react";
import { Badge, Card, Container } from "@/components/ui";

export function AboutIdentitySection() {
  return (
    <section
      aria-labelledby="about-identity-title"
      className="border-b border-border bg-background py-section-y sm:py-section-y-sm"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="min-w-0">
            <Badge variant="architecture">Brand Identity</Badge>
            <h2
              id="about-identity-title"
              className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Who We Are
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              AhasanHub is a modern consulting-focused technology brand
              specializing in system design, enterprise architecture, and
              scalable software engineering.
            </p>
          </div>

          <Card className="border-architecture/20 bg-surface/85 p-card shadow-[0_18px_44px_color-mix(in_srgb,var(--foreground)_7%,transparent)] backdrop-blur-xl">
            <div className="flex size-11 items-center justify-center rounded-xl bg-architecture-muted text-architecture">
              <ShieldCheck aria-hidden="true" className="size-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
              Trusted enterprise thinking
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              The brand is built for organizations that need clear technical
              direction, reliable architecture decisions, and delivery practices
              that support long-term growth.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
