import { ArrowUpRight, CheckCircle2, Layers3, Wrench } from "lucide-react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  SectionHeading,
} from "@/components/ui";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export type ProjectsSectionProps = {
  className?: string;
};

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section
      className={cn(
        "border-b border-border bg-surface-muted py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Case studies"
            title="Enterprise consulting outcomes"
            description="Representative case-study structures showing how AhasanHub frames business problems, technical solutions, delivery architecture, and measurable impact."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="flex h-full flex-col overflow-hidden bg-surface"
              >
                <CardHeader className="border-b border-border">
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="architecture">{project.category}</Badge>
                    <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium capitalize text-muted-foreground">
                      {project.status.replace("-", " ")}
                    </span>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    Consulting case study framework for strategic planning,
                    architecture, and delivery confidence.
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-5 pt-card">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 text-primary"
                        />
                        Problem
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Wrench
                          aria-hidden="true"
                          className="size-4 text-tech"
                        />
                        Solution
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Layers3
                          aria-hidden="true"
                          className="size-4 text-architecture"
                        />
                        Tech stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((technology) => (
                          <Badge key={technology} variant="neutral">
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto rounded-xl border border-border bg-background p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-success"
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Impact
                        </p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
