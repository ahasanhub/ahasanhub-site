import { Container, SectionHeading } from "@/components/ui";

const journeyItems = [
  {
    period: "Foundation",
    title: "Enterprise software engineering",
    description:
      "Built strong delivery foundations across full-stack systems, business workflows, and production software quality.",
  },
  {
    period: "Expansion",
    title: "ERP and architecture leadership",
    description:
      "Moved deeper into ERP modernization, platform boundaries, Dynamics 365, and architecture-level decision making.",
  },
  {
    period: "Now",
    title: "AI-first enterprise consulting",
    description:
      "Focused on AI automation, cloud-native SaaS, ERP strategy, and scalable systems for modern businesses.",
  },
];

export function JourneyTimelineSection() {
  return (
    <section
      aria-label="Experience and Journey Timeline"
      className="border-b border-border bg-background py-section-y sm:py-section-y-sm"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionHeading
            eyebrow="Experience / Journey"
            title="A practical journey from delivery to architecture"
            headingLevel="h2"
            description="The AhasanHub approach is shaped by hands-on engineering, enterprise system design, and long-term platform thinking."
          />

          <ol className="grid gap-5">
            {journeyItems.map((item) => (
              <li
                key={item.period}
                className="rounded-2xl border border-border bg-surface p-card"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
