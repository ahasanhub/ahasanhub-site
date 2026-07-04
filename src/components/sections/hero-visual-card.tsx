import {
  Bot,
  Boxes,
  Cloud,
  Database,
  GitBranch,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type DashboardBlock = {
  label: string;
  value: string;
  icon: typeof Bot;
  className: string;
};

type SystemRow = {
  label: string;
  status: string;
  accent: string;
};

const dashboardBlocks: DashboardBlock[] = [
  {
    label: "AI Automation",
    value: "Workflow intelligence",
    icon: Bot,
    className: "bg-tech-muted text-tech",
  },
  {
    label: "ERP Architecture",
    value: "Operational core",
    icon: Database,
    className: "bg-primary-muted text-primary",
  },
  {
    label: "Cloud Systems",
    value: "Azure-ready scale",
    icon: Cloud,
    className: "bg-architecture-muted text-architecture",
  },
  {
    label: "SaaS Modules",
    value: "Composable delivery",
    icon: Boxes,
    className: "bg-premium-muted text-premium",
  },
];

const systemRows: SystemRow[] = [
  {
    label: "Multi-tenant ERP system",
    status: "Mapped",
    accent: "bg-primary",
  },
  {
    label: "AI workflow engine",
    status: "Active",
    accent: "bg-tech",
  },
  {
    label: "Cloud deployment pipeline",
    status: "Ready",
    accent: "bg-premium",
  },
];

const floatingTags = [
  "AI Systems",
  "ERP Architecture",
  "Cloud SaaS",
  "Automation Engine",
];

export function HeroVisualCard() {
  return (
    <div className="relative mx-auto max-w-xl lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/14 via-premium/12 to-tech/16 blur-3xl"
      />

      <div className="relative rounded-2xl border border-white/55 bg-surface/72 p-3 shadow-[0_28px_90px_color-mix(in_srgb,var(--foreground)_16%,transparent)] backdrop-blur-2xl dark:border-white/10 dark:bg-surface/58 sm:p-4">
        <div className="rounded-xl border border-border/80 bg-background/70 p-4 backdrop-blur-xl dark:bg-background/50 sm:p-5">
          <div className="flex items-center justify-between gap-3 border-b border-border/80 pb-4">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">
                AhasanHub Systems
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Enterprise delivery command layer
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-tech/20 bg-tech-muted px-2.5 py-1 text-xs font-semibold text-tech">
              <ShieldCheck aria-hidden="true" className="size-3.5" />
              Live
            </span>
          </div>

          <div
            aria-label="Search AhasanHub systems"
            className="mt-4 flex h-11 items-center gap-3 rounded-xl border border-border bg-surface/78 px-3 text-sm text-muted-foreground shadow-[0_10px_24px_color-mix(in_srgb,var(--foreground)_7%,transparent)] backdrop-blur-xl"
            role="search"
          >
            <Search aria-hidden="true" className="size-4 text-architecture" />
            <span className="truncate">Search AhasanHub systems...</span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {dashboardBlocks.map((block) => {
              const Icon = block.icon;

              return (
                <div
                  key={block.label}
                  className="rounded-xl border border-border/80 bg-surface/74 p-4 shadow-[0_12px_28px_color-mix(in_srgb,var(--foreground)_6%,transparent)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-surface/92"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-lg",
                        block.className,
                      )}
                    >
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        {block.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {block.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 space-y-2.5 rounded-xl border border-border/80 bg-surface/72 p-3 backdrop-blur-xl">
            {systemRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-3 rounded-lg bg-background/58 px-3 py-2.5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={cn("size-2 rounded-full", row.accent)}
                  />
                  <span className="truncate text-sm font-medium text-foreground">
                    {row.label}
                  </span>
                </div>
                <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {row.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 hidden grid-cols-2 gap-2 sm:grid">
            {floatingTags.map((tag, index) => (
              <span
                key={tag}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-surface/76 px-3 py-2 text-xs font-semibold text-foreground shadow-[0_10px_24px_color-mix(in_srgb,var(--foreground)_6%,transparent)] backdrop-blur-xl dark:border-white/10",
                  index % 2 === 0 ? "justify-self-start" : "justify-self-end",
                )}
              >
                {index === 0 ? (
                  <Sparkles aria-hidden="true" className="size-3.5 text-tech" />
                ) : (
                  <GitBranch
                    aria-hidden="true"
                    className="size-3.5 text-architecture"
                  />
                )}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
