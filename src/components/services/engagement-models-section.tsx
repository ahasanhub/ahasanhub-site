import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Container,
  SectionHeading,
} from "@/components/ui";
import { engagementModels } from "@/data/services";

export function EngagementModelsSection() {
  return (
    <section
      className="bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg"
      aria-labelledby="services-engagement-title"
    >
      <Container>
        <div className="flex flex-col gap-12">
          <SectionHeading
            id="services-engagement-title"
            eyebrow="Engagement models"
            title="Flexible ways to bring enterprise technology leadership into the work."
            description="Choose the collaboration model that fits the level of strategic guidance, architecture ownership, and delivery support your initiative needs."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {engagementModels.map((model) => (
              <Card
                key={model.name}
                className="flex h-full flex-col rounded-2xl transition-all duration-200 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-md"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{model.name}</CardTitle>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {model.description}
                  </p>
                </CardHeader>

                <CardContent className="mt-auto space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-architecture">
                      Ideal client
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {model.idealClient}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Value proposition
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground">
                      {model.valueProposition}
                    </p>
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
