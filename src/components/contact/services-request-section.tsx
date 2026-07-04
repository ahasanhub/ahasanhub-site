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
import { ServiceRequestCard } from "./service-request-card";

const services = [
  {
    title: "AI System Design & Automation",
    description:
      "AI-assisted workflows, automation engines, process intelligence, and practical integration planning.",
    icon: BrainCircuit,
  },
  {
    title: "ERP Architecture (Dynamics 365 / Custom ERP)",
    description:
      "Dynamics 365, Business Central, custom ERP boundaries, modernization paths, and platform strategy.",
    icon: Database,
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Cloud-ready architecture, deployment pipelines, observability, DevOps foundations, and secure operations.",
    icon: CloudCog,
  },
  {
    title: "SaaS Product Development",
    description:
      "Multi-tenant SaaS platforms, product modules, admin workflows, and scalable delivery foundations.",
    icon: Layers3,
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Responsive web applications, API integration, data-driven interfaces, and production-ready user flows.",
    icon: Code2,
  },
  {
    title: "Software Architecture Consulting",
    description:
      "System design reviews, technical direction, integration strategy, and maintainable engineering standards.",
    icon: GitBranch,
  },
  {
    title: "Digital Transformation Strategy",
    description:
      "Roadmaps for modernizing operations, connecting systems, and turning business needs into durable platforms.",
    icon: Workflow,
  },
];

export function ServicesRequestSection() {
  return (
    <section
      aria-label="Services You Can Request"
      className="border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg"
    >
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Services You Can Request"
            title="Request focused help across the systems that matter"
            headingLevel="h2"
            description="Choose the area closest to your current challenge. Each conversation can start broad and narrow into a practical scope."
          />

          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <li key={service.title} className="min-w-0">
                <ServiceRequestCard
                  description={service.description}
                  icon={service.icon}
                  title={service.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
