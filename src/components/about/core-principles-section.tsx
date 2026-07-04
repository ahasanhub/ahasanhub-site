import { CheckCircle2 } from "lucide-react";
import { Card, Container, SectionHeading } from "@/components/ui";

const principles = [
  "Clarity before complexity",
  "Architecture that supports business change",
  "Maintainable systems over short-term shortcuts",
  "Practical automation with measurable value",
  "Trust, transparency, and long-term partnership",
];

export function CorePrinciplesSection() {
  return (
    <section
      aria-label="Core Principles"
      className="border-b border-border bg-surface-muted/45 py-section-y sm:py-section-y-sm"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <SectionHeading
            eyebrow="Core Principles"
            title="Principles that guide every engagement"
            headingLevel="h2"
            description="AhasanHub work is grounded in practical engineering discipline, enterprise reliability, and clear business outcomes."
          />

          <Card>
            <ul className="grid gap-4 p-card">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-success"
                  />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
