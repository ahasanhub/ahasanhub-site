import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export type FeaturedCaseStudiesSectionProps = {
  className?: string;
  caseStudies?: Project[];
};

const caseStudyFields = [
  {
    label: "Problem",
    getValue: (project: Project) => project.problem,
  },
  {
    label: "Solution",
    getValue: (project: Project) => project.solution,
  },
  {
    label: "Architecture overview",
    getValue: (project: Project) => project.architectureOverview,
  },
  {
    label: "Business impact",
    getValue: (project: Project) => project.impact,
  },
];

export function FeaturedCaseStudiesSection({
  className,
  caseStudies = projects,
}: FeaturedCaseStudiesSectionProps) {
  return (
    <section
      aria-labelledby="featured-case-studies-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-page-x sm:px-page-x-sm lg:px-page-x-lg">
        <div className="grid gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-architecture">
              Featured case studies
            </p>
            <h2
              id="featured-case-studies-title"
              className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Selected systems shaped around business outcomes.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Each engagement is framed by the operational problem, architecture
              model, engineering solution, and measurable business value.
            </p>
          </div>

          <div className="space-y-4">
            {caseStudies.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-border bg-background p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md focus-within:border-border-strong sm:p-6"
              >
                <div className="grid gap-6 xl:grid-cols-[14rem_1fr]">
                  <div className="border-b border-border pb-5 xl:border-b-0 xl:border-r xl:pb-0 xl:pr-6">
                    <p className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-architecture">
                      {project.category}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium capitalize text-muted-foreground">
                      {project.status.replace("-", " ")}
                    </p>
                  </div>

                  <dl className="grid gap-5 md:grid-cols-2">
                    {caseStudyFields.map((field) => (
                      <div key={field.label}>
                        <dt className="text-sm font-semibold text-foreground">
                          {field.label}
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                          {field.getValue(project)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
