import { Container } from "@/components/ui";
import { technologyStackGroups } from "@/data/services";

export function TechnologyStackSection() {
  return (
    <section
      className="border-y border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="services-stack-title"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-premium">
            Technology stack
          </p>
          <h2
            id="services-stack-title"
            className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl"
          >
            Technology choices aligned to enterprise maintainability.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            The stack remains pragmatic: modern where it creates leverage,
            conservative where reliability matters.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {technologyStackGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-4 py-5 md:grid-cols-[14rem_1fr]"
            >
              <h3 className="text-base font-semibold text-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-border bg-surface px-3 py-1 text-sm text-muted-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
