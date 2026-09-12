import { ArrowDown, ArrowLeftRight } from "lucide-react";
import { Badge, Card, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export type ProductEcosystemSectionProps = {
  className?: string;
};

export function ProductEcosystemSection({
  className,
}: ProductEcosystemSectionProps) {
  return (
    <section
      id="product-ecosystem"
      aria-labelledby="product-ecosystem-title"
      className={cn(
        "border-b border-border bg-background py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-tech">
            System Boundaries
          </p>
          <h2
            id="product-ecosystem-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Connected Architecture Built Around Clear Integration Boundaries
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            AhasanHub platforms are designed for integration from the ground up. Rather than
            isolated silos, they define clean API contracts, webhook events, and data schemas
            allowing seamless operational synchronization between sales, core operations, and digital storefronts.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Ecosystem Flow 1: CRM to ERP to External Integrations */}
          <Card className="rounded-3xl border border-border bg-surface/60 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <Badge variant="tech">Operational Pipeline</Badge>
              <span className="text-xs font-mono text-muted-foreground">Flow 01</span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground">
                Revenue-to-Ledger Integration Flow
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                From initial customer inquiry in Custom CRM AI Enabled to governed ledger posting and stock deduction in Custom ERP AI Enabled.
              </p>
            </div>

            {/* Architecture Node Flow */}
            <div className="space-y-3 pt-2">
              {/* Custom CRM */}
              <div className="rounded-xl border border-tech/30 bg-tech-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-tech">Custom CRM AI Enabled</span>
                  <span className="text-[10px] font-mono text-muted-foreground">Front-Office</span>
                </div>
                <p className="mt-1 text-xs text-foreground/90 font-medium">
                  Lead Qualification &rarr; Opportunity Pipeline &rarr; Accepted Quotation
                </p>
              </div>

              {/* Connector */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground py-1">
                <ArrowDown className="size-4 text-primary" />
                <span>REST API Quote-to-Order Boundary</span>
              </div>

              {/* Custom ERP */}
              <div className="rounded-xl border border-primary/30 bg-primary-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary">Custom ERP AI Enabled</span>
                  <span className="text-[10px] font-mono text-muted-foreground">Core System of Record</span>
                </div>
                <p className="mt-1 text-xs text-foreground/90 font-medium">
                  Sales Order &rarr; Delivery Note &rarr; Sales Invoice &rarr; Double-Entry General Ledger
                </p>
              </div>

              {/* Connector */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground py-1">
                <ArrowLeftRight className="size-4 text-architecture" />
                <span>Webhooks, OData &amp; Event Relays</span>
              </div>

              {/* External Systems */}
              <div className="rounded-xl border border-border bg-surface-muted p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">External Business Systems</span>
                  <span className="text-[10px] font-mono text-muted-foreground">Extended Landscape</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Microsoft Dynamics 365 &bull; Banking APIs &bull; Enterprise Data Warehouses &bull; BI Dashboards
                </p>
              </div>
            </div>

            <p className="text-[11px] font-mono text-muted-foreground pt-2">
              * Integration-ready architecture designed to connect via standardized REST endpoints and webhooks.
            </p>
          </Card>

          {/* Ecosystem Flow 2: Ecommerce with AI Agent Boundaries */}
          <Card className="rounded-3xl border border-border bg-surface/60 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <Badge variant="premium">Commerce Gateway</Badge>
              <span className="text-xs font-mono text-muted-foreground">Flow 02</span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground">
                Ecommerce with AI Agent Integration Boundaries
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Engineered as a headless, API-first commerce engine designed to link storefront transactions with enterprise systems.
              </p>
            </div>

            {/* Architecture Node Flow */}
            <div className="space-y-3 pt-2">
              {/* Ecommerce with AI Agent */}
              <div className="rounded-xl border border-premium/30 bg-premium-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-premium">Ecommerce with AI Agent</span>
                  <span className="text-[10px] font-mono text-muted-foreground">Storefront &amp; Admin</span>
                </div>
                <p className="mt-1 text-xs text-foreground/90 font-medium">
                  Dynamic Catalog &rarr; Persistent Cart &rarr; Checkout Engine &rarr; Order Generation
                </p>
              </div>

              {/* Connector */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground py-1">
                <ArrowLeftRight className="size-4 text-premium" />
                <span>Bidirectional API Connectors</span>
              </div>

              {/* Connected Services Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-border bg-surface-muted p-3">
                  <span className="text-xs font-bold text-foreground block">ERP Systems</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Custom ERP / Dynamics 365 stock sync and sales order ingestion.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface-muted p-3">
                  <span className="text-xs font-bold text-foreground block">Payment Gateways</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Stripe, PayPal, and regional merchant payment providers.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface-muted p-3">
                  <span className="text-xs font-bold text-foreground block">Logistics &amp; 3PL</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Order dispatch webhooks and shipping tracking updates.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface-muted p-3">
                  <span className="text-xs font-bold text-foreground block">CRM Platforms</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Custom CRM customer account and purchase history synchronization.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] font-mono text-muted-foreground pt-2">
              * Modular commerce APIs allow custom connectors to be tailored for your specific tech stack.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
