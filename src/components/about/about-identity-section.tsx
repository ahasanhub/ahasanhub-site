import { ShieldCheck } from "lucide-react";
import { Badge, Card, Container } from "@/components/ui";

const identityPoints = [
  "We connect business strategy with practical engineering decisions.",
  "We design AI, ERP, cloud, and SaaS systems around real operational needs.",
  "We help teams move from unclear technology ideas to scalable delivery plans.",
];

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
              AhasanHub is a premium enterprise technology consulting platform
              for organizations that need stronger systems, clearer technical
              direction, and practical execution across AI, ERP, cloud, SaaS,
              and modern software architecture.
            </p>
          </div>

          <Card className="border-architecture/20 bg-surface/85 p-card shadow-[0_18px_44px_color-mix(in_srgb,var(--foreground)_7%,transparent)] backdrop-blur-xl">
            <div className="flex size-11 items-center justify-center rounded-xl bg-architecture-muted text-architecture">
              <ShieldCheck aria-hidden="true" className="size-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
              Consulting built around business outcomes
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              The work is shaped for leaders and teams who need systems that
              are maintainable, scalable, automation-ready, and aligned with
              measurable operational value.
            </p>

            <ul className="mt-6 space-y-3">
              {identityPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm font-medium leading-6 text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-architecture"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
