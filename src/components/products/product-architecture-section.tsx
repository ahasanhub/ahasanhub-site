import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";
import { ArrowDown } from "lucide-react";

export type ProductArchitectureSectionProps = {
  className?: string;
};

export function ProductArchitectureSection({
  className,
}: ProductArchitectureSectionProps) {
  return (
    <section
      aria-labelledby="product-architecture-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:items-start">
          {/* Editorial Context */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-architecture">
              Architecture &amp; System Design
            </p>
            <h2
              id="product-architecture-title"
              className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Product architecture designed for SaaS growth and enterprise fit
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Every AhasanHub product is engineered around a clean separation of concerns.
              We decoupling the client interface from high-speed database layers, business logic engines,
              intelligent AI utilities, and core ERP environments.
            </p>
          </div>

          {/* System Diagram Stack */}
          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="flex flex-col gap-3">
              {/* Layer 1: Frontend (Next.js) */}
              <div className="rounded-xl border border-border bg-surface p-5 transition duration-200 hover:border-border-strong hover:bg-surface-elevated/40">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-architecture block mb-1">
                  Layer 01 &mdash; Frontend Experience
                </span>
                <h3 className="text-sm font-bold text-foreground">
                  Frontend (Next.js)
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Client-side rendering, responsive portals, unified design tokens, and localized API state caching.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">React</span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">Next.js</span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">Tailwind CSS</span>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center my-0.5 text-muted-foreground opacity-55">
                <ArrowDown aria-hidden="true" className="size-4" />
              </div>

              {/* Middle Tier: AI Core, Backend API, Integration Gateway */}
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {/* AI Layer (LLM + automation) */}
                <div className="rounded-xl border border-border bg-surface p-5 transition duration-200 hover:border-border-strong hover:bg-surface-elevated/40 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-tech block mb-1">
                      Layer 02 &mdash; Cognitive
                    </span>
                    <h3 className="text-sm font-bold text-foreground">
                      AI Layer (LLM + automation)
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Semantic context extraction, prompt templates, and validation filters.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">OpenAI API</span>
                    <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">LangChain</span>
                  </div>
                </div>

                {/* Backend Core */}
                <div className="rounded-xl border border-border bg-surface p-5 transition duration-200 hover:border-border-strong hover:bg-surface-elevated/40 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary block mb-1">
                      Layer 03 &mdash; Service Core
                    </span>
                    <h3 className="text-sm font-bold text-foreground">
                      Backend (.NET / Node.js)
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      API gateways, secure authentication, and transactional business logic.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">.NET Core</span>
                    <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">Node.js</span>
                  </div>
                </div>

                {/* Integration Layer */}
                <div className="rounded-xl border border-border bg-surface p-5 transition duration-200 hover:border-border-strong hover:bg-surface-elevated/40 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-premium block mb-1">
                      Layer 04 &mdash; Integration
                    </span>
                    <h3 className="text-sm font-bold text-foreground">
                      Integration (ERP / APIs)
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Microsoft Dynamics 365 OData streams, ledger syncing, and secure webhooks.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">D365 API</span>
                    <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">OData</span>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center my-0.5 text-muted-foreground opacity-55">
                <ArrowDown aria-hidden="true" className="size-4" />
              </div>

              {/* Database layer */}
              <div className="rounded-xl border border-border bg-surface p-5 transition duration-200 hover:border-border-strong hover:bg-surface-elevated/40">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-architecture block mb-1">
                  Layer 05 &mdash; Database &amp; Cache
                </span>
                <h3 className="text-sm font-bold text-foreground">
                  Database Layer
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Structured transaction storage, fast key-value caching, and vector indexing for AI context.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">PostgreSQL</span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">Redis</span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">Vector DB</span>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center my-0.5 text-muted-foreground opacity-55">
                <ArrowDown aria-hidden="true" className="size-4" />
              </div>

              {/* Cloud layer (AWS / Azure) */}
              <div className="rounded-xl border border-border bg-surface p-5 transition duration-200 hover:border-border-strong hover:bg-surface-elevated/40">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-architecture block mb-1">
                  Layer 06 &mdash; Infrastructure
                </span>
                <h3 className="text-sm font-bold text-foreground">
                  Cloud Layer (AWS / Azure)
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Infrastructure-as-code orchestration, container cluster isolation, and automated CI/CD staging pipelines.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">AWS</span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">Azure</span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">Terraform</span>
                  <span className="rounded bg-surface-muted px-2 py-0.5 text-[10px] font-mono border border-border/60 text-foreground">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
