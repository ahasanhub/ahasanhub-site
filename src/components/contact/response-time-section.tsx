import { Timer } from "lucide-react";
import { Badge, Card, Container } from "@/components/ui";

export function ResponseTimeSection() {
  return (
    <section
      aria-labelledby="response-commitment-title"
      className="bg-surface-muted/45 py-section-y sm:py-section-y-sm"
    >
      <Container>
        <Card className="border-border/80 bg-surface shadow-sm">
          <div className="grid gap-5 p-card sm:grid-cols-[auto_1fr] sm:items-start">
            <div className="flex size-11 items-center justify-center rounded-xl bg-premium-muted text-premium">
              <Timer aria-hidden="true" className="size-5" />
            </div>

            <div>
              <Badge variant="premium">Response Commitment</Badge>
              <h2
                id="response-commitment-title"
                className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Response Commitment
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                All serious inquiries are responded to within 24&ndash;48 hours.
                Enterprise projects include a discovery call to understand
                requirements before proposal.
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
