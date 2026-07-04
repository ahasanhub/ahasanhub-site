import { Badge, Container } from "@/components/ui";

export function BrandIdentitySection() {
  return (
    <section
      aria-labelledby="brand-identity-title"
      className="border-b border-border bg-background py-section-y sm:py-section-y-sm"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <Badge variant="architecture">Brand Identity</Badge>
            <h2
              id="brand-identity-title"
              className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Who I am, through the AhasanHub brand
            </h2>
          </div>

          <div className="grid gap-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <p>
              AhasanHub represents senior engineering judgment for businesses
              that need enterprise systems to be understandable, maintainable,
              and ready for growth.
            </p>
            <p>
              The brand combines hands-on full-stack delivery with architecture
              thinking across AI automation, ERP platforms, cloud systems, SaaS
              products, and digital transformation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
