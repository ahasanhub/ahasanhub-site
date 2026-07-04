import { ArrowRight, Layers3, ShieldCheck } from "lucide-react";
import { Card, Container, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ContactInfoCard } from "./contact-info-card";

export type ValuePropositionSectionProps = {
  className?: string;
};

const valueProps = [
  {
    title: "Scalable systems",
    description:
      "Design foundations that support long-term growth, integration, automation, and operational change.",
    icon: <Layers3 aria-hidden="true" className="size-5" />,
  },
  {
    title: "Enterprise performance",
    description:
      "Prioritize maintainability, reliability, security, and clear delivery paths from the first conversation.",
    icon: <ShieldCheck aria-hidden="true" className="size-5" />,
  },
  {
    title: "Practical execution",
    description:
      "Turn strategic goals into architecture decisions, delivery milestones, and implementation-ready priorities.",
    icon: <ArrowRight aria-hidden="true" className="size-5" />,
  },
];

export function ValuePropositionSection({
  className,
}: ValuePropositionSectionProps) {
  return (
    <section
      className={cn(
        "border-b border-border bg-surface-muted/45 py-section-y sm:py-section-y-sm",
        className,
      )}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Value Proposition"
              title="Enterprise-Grade Technology Consulting"
              headingLevel="h2"
              description="AhasanHub helps businesses design scalable AI systems, ERP platforms, cloud infrastructure, and SaaS solutions focused on long-term value and performance."
            />
            <Card className="mt-8 border-primary/20 bg-surface/80 p-5 shadow-[0_18px_44px_color-mix(in_srgb,var(--foreground)_7%,transparent)] backdrop-blur-xl">
              <p className="text-sm font-medium leading-7 text-muted-foreground">
                Built for leaders and teams who need architecture clarity,
                modern engineering judgment, and durable systems rather than
                short-lived technical patches.
              </p>
            </Card>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {valueProps.map((item) => (
              <ContactInfoCard
                key={item.title}
                description={item.description}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
