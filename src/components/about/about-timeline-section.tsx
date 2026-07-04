import { Container, SectionHeading } from "@/components/ui";

const timelineItems = [
  {
    phase: "Early Career",
    title: "Software Development",
    description:
      "Built foundational software delivery skills across business applications, data workflows, and production-ready code.",
  },
  {
    phase: "Growth Phase",
    title: "Full-Stack Engineering",
    description:
      "Expanded into end-to-end web systems, APIs, integrations, and user-facing platforms for practical business use cases.",
  },
  {
    phase: "Architecture Phase",
    title: "System Design & ERP",
    description:
      "Focused on enterprise architecture, ERP modernization, system boundaries, and scalable platform decisions.",
  },
  {
    phase: "Current",
    title: "AI + SaaS + Enterprise Consulting",
    description:
      "Combining AI systems, SaaS engineering, ERP strategy, and consulting delivery for modern enterprise needs.",
  },
];

export function AboutTimelineSection() {
  return (
    <section
      aria-label="Experience Timeline"
      className="border-b border-border bg-background py-section-y sm:py-section-y-sm"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionHeading
            eyebrow="Experience Timeline"
            title="A steady progression toward enterprise consulting"
            headingLevel="h2"
            description="The AhasanHub approach is shaped by practical delivery, full-stack engineering, system architecture, and consulting-focused technology leadership."
          />

          <ol className="relative grid gap-5 lg:gap-0 lg:border-l lg:border-border">
            {timelineItems.map((item) => (
              <li key={item.phase} className="relative lg:pl-8 lg:pb-8 last:lg:pb-0">
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute -left-[7px] top-6 size-3 rounded-full border-2 border-background bg-primary"
                />
                <div className="rounded-2xl border border-border bg-surface p-card">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {item.phase}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
