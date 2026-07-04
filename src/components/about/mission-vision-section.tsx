import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  SectionHeading,
} from "@/components/ui";

const missionVision = [
  {
    title: "Mission",
    description:
      "To design and build scalable, intelligent, and high-performance digital systems that solve real enterprise problems.",
  },
  {
    title: "Vision",
    description:
      "To become a global technology consulting brand recognized for excellence in AI, ERP, SaaS, and software architecture.",
  },
];

export function MissionVisionSection() {
  return (
    <section
      aria-label="Mission and Vision"
      className="border-b border-border bg-surface-muted/45 py-section-y sm:py-section-y-sm"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionHeading
            eyebrow="Mission & Vision"
            title="Built for clarity, scale, and durable execution"
            headingLevel="h2"
            description="AhasanHub focuses on technology decisions that make systems easier to operate, extend, and trust."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {missionVision.map((item) => (
              <Card key={item.title} className="h-full border-border/80 bg-surface">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
