import {
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Layers3,
} from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle, Container, SectionHeading } from "@/components/ui";

const expertiseAreas = [
  {
    title: "AI Engineering",
    description: "Automation systems, workflow intelligence, and practical AI integration.",
    icon: BrainCircuit,
  },
  {
    title: "ERP Architecture",
    description: "Dynamics 365, Business Central, custom ERP strategy, and process design.",
    icon: Database,
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud infrastructure, deployment pipelines, observability, and operations.",
    icon: CloudCog,
  },
  {
    title: "SaaS Platforms",
    description: "Multi-tenant products, modular systems, admin flows, and scalable delivery.",
    icon: Layers3,
  },
  {
    title: "Full-Stack Systems",
    description: "Modern web applications, APIs, data workflows, and user-facing platforms.",
    icon: Code2,
  },
  {
    title: "Software Architecture",
    description: "System boundaries, integration patterns, technical direction, and reviews.",
    icon: GitBranch,
  },
];

export function ExpertiseAreasSection() {
  return (
    <section
      aria-label="Expertise Areas"
      className="border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg"
    >
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Expertise Areas"
            title="Technology depth across the enterprise stack"
            headingLevel="h2"
            description="AhasanHub connects strategy, architecture, and implementation across the systems modern businesses depend on."
          />

          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {expertiseAreas.map((area) => {
              const Icon = area.icon;

              return (
                <li key={area.title} className="min-w-0">
                  <Card className="h-full transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md">
                    <CardHeader>
                      <div className="flex size-11 items-center justify-center rounded-xl bg-architecture-muted text-architecture">
                        <Icon aria-hidden="true" className="size-5" />
                      </div>
                      <CardTitle>{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
