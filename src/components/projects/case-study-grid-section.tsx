import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export type CaseStudyGridSectionProps = {
  className?: string;
  caseStudies?: Project[];
};

export function CaseStudyGridSection({
  className,
  caseStudies = projects,
}: CaseStudyGridSectionProps) {
  return (
    <section
      aria-labelledby="case-study-grid-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Detailed case study grid
          </p>
          <h2
            id="case-study-grid-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Every project is framed by problem, solution, stack, and outcome.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Case studies focus on the operational context and measurable
            improvement signals that matter to enterprise teams.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((project) => (
            <article
              key={project.id}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-architecture">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                </div>
                <div className="rounded-2xl border border-border bg-surface px-4 py-3 sm:max-w-44">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Outcome metric
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-foreground">
                    {project.outcomeMetric}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Problem summary
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Solution summary
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                  {project.techStack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
