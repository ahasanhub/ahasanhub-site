import { Badge, Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { FounderImageCard } from "./founder-image-card";

const founderFocusAreas = [
  "AI Systems & Automation",
  "ERP Architecture (Microsoft Ecosystem)",
  "Cloud-Native Engineering (AWS / Azure)",
  "SaaS Platform Development",
  "Enterprise System Design",
];

export type AboutFounderSectionProps = {
  className?: string;
};

export function AboutFounderSection({ className }: AboutFounderSectionProps) {
  return (
    <section
      aria-labelledby="about-founder-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <div className="order-2 min-w-0 lg:order-1">
            <Badge variant="architecture">About the Founder</Badge>

            <div className="mt-6">
              <h2
                id="about-founder-title"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Ahasan Habib
              </h2>
              <p className="mt-3 text-base font-semibold text-primary">
                Founder &amp; CEO, AhasanHub
              </p>
            </div>

            <div className="mt-7 max-w-3xl space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              <p>
                Ahasan Habib is a technology entrepreneur and system architect
                specializing in AI-driven enterprise systems, ERP solutions,
                cloud infrastructure, and scalable SaaS platforms.
              </p>
              <p>
                He founded AhasanHub to help organizations design and build
                intelligent digital systems that improve efficiency, automation,
                and long-term business scalability.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-primary pl-5 text-lg font-semibold leading-8 text-foreground">
              My vision is to build intelligent, scalable systems that empower
              businesses to operate with automation, precision, and global
              efficiency.
            </blockquote>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-architecture">
                Key focus areas
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {founderFocusAreas.map((focusArea) => (
                  <li
                    key={focusArea}
                    className="flex min-w-0 items-start gap-3 text-sm font-medium leading-6 text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-2 shrink-0 rounded-full bg-primary"
                    />
                    <span>{focusArea}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <FounderImageCard className="lg:mr-0" />
          </div>
        </div>
      </Container>
    </section>
  );
}
