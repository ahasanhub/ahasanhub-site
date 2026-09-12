import { productComparisonData, type ProductComparisonRow } from "@/data/products";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export type ProductComparisonSectionProps = {
  className?: string;
  comparisonData?: ProductComparisonRow[];
};

export function ProductComparisonSection({
  className,
  comparisonData = productComparisonData,
}: ProductComparisonSectionProps) {
  return (
    <section
      id="product-comparison"
      aria-labelledby="product-comparison-title"
      className={cn(
        "border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-tech">
            Platform Matrix
          </p>
          <h2
            id="product-comparison-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Choose the Right Platform for Your Business Workflow
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Compare scope, core boundaries, and operational capabilities across Custom ERP AI Enabled,
            Custom CRM AI Enabled, and Ecommerce with AI Agent.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-background shadow-xs">
          <table className="w-full min-w-[720px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted/60">
                <th className="p-4 sm:p-5 font-mono font-bold uppercase tracking-wider text-muted-foreground w-1/4">
                  Operational Dimension
                </th>
                <th className="p-4 sm:p-5 font-bold text-foreground w-1/4 border-l border-border">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-primary shrink-0" />
                    <span className="font-extrabold text-sm sm:text-base">Custom ERP AI Enabled</span>
                  </div>
                  <span className="text-[11px] font-normal text-muted-foreground block mt-0.5">
                    Operations &amp; Finance
                  </span>
                </th>
                <th className="p-4 sm:p-5 font-bold text-foreground w-1/4 border-l border-border">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-tech shrink-0" />
                    <span className="font-extrabold text-sm sm:text-base">Custom CRM AI Enabled</span>
                  </div>
                  <span className="text-[11px] font-normal text-muted-foreground block mt-0.5">
                    Sales &amp; Pipeline
                  </span>
                </th>
                <th className="p-4 sm:p-5 font-bold text-foreground w-1/4 border-l border-border">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-premium shrink-0" />
                    <span className="font-extrabold text-sm sm:text-base">Ecommerce with AI Agent</span>
                  </div>
                  <span className="text-[11px] font-normal text-muted-foreground block mt-0.5">
                    Digital Commerce
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/70">
              {comparisonData.map((row) => (
                <tr
                  key={row.dimension}
                  className="transition-colors hover:bg-surface-muted/30"
                >
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-surface/30">
                    {row.dimension}
                  </td>
                  <td className="p-4 sm:p-5 text-muted-foreground leading-relaxed border-l border-border/70">
                    {row.customErp}
                  </td>
                  <td className="p-4 sm:p-5 text-muted-foreground leading-relaxed border-l border-border/70">
                    {row.customCrm}
                  </td>
                  <td className="p-4 sm:p-5 text-muted-foreground leading-relaxed border-l border-border/70">
                    {row.ecommerceAi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
