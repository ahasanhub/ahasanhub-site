import {
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Workflow,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { ExpertiseCard } from "./expertise-card";

const expertiseAreas = [
  {
    title: "Artificial Intelligence Systems",
    description:
      "AI-assisted workflows, automation engines, process intelligence, and practical enterprise AI integration.",
    icon: BrainCircuit,
  },
  {
    title: "ERP Architecture (Dynamics / Custom ERP)",
    description:
      "Dynamics 365, Business Central, custom ERP strategy, modernization paths, and process architecture.",
    icon: Database,
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Cloud-ready infrastructure, deployment pipelines, observability, DevOps foundations, and secure operations.",
    icon: CloudCog,
  },
  {
    title: "SaaS Platform Engineering",
    description:
      "Multi-tenant SaaS platforms, modular product systems, admin workflows, and scalable delivery foundations.",
    icon: Layers3,
  },
  {
    title: "Full-Stack Development",
    description:
      "Modern web applications, APIs, integrations, data workflows, and production-ready user-facing systems.",
    icon: Code2,
  },
  {
    title: "System Design & Architecture",
    description:
      "System boundaries, integration patterns, architecture reviews, technical direction, and maintainable standards.",
    icon: GitBranch,
  },
  {
    title: "Digital Transformation Consulting",
    description:
      "Strategic roadmaps for modernizing operations, connecting platforms, and turning business needs into durable systems.",
    icon: Workflow,
  },
];

export function ExpertiseSection() {
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
            {expertiseAreas.map((area) => (
              <li key={area.title} className="min-w-0">
                <ExpertiseCard
                  description={area.description}
                  icon={area.icon}
                  title={area.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
