"use client";

import { useState } from "react";
import {
  Activity,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Network,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

type IntelligenceItem = {
  title: string;
  description: string;
  details: string;
  icon: typeof Bot;
};

type IntelligenceLayer = {
  label: string;
  accent: string;
  items: IntelligenceItem[];
};

type StatusRow = {
  label: string;
  status: string;
  accent: string;
};

const intelligenceLayers: IntelligenceLayer[] = [
  {
    label: "AI Core Layer",
    accent: "border-tech/30 bg-tech-muted/55 text-tech",
    items: [
      {
        title: "AI Integration Engine",
        description: "Embedding LLMs into business workflows",
        details:
          "Enterprise-grade LLM orchestration with retrieval-augmented generation, prompt engineering pipelines, and secure model deployment across cloud and on-premise infrastructure.",
        icon: BrainCircuit,
      },
      {
        title: "Agentic AI Systems",
        description: "Autonomous decision & task execution",
        details:
          "Multi-agent frameworks that decompose complex business tasks into autonomous actions — with human-in-the-loop governance, tool-calling capabilities, and real-time feedback loops.",
        icon: Bot,
      },
      {
        title: "Workflow Intelligence Layer",
        description: "Process automation & orchestration",
        details:
          "End-to-end intelligent process automation combining RPA, event-driven architecture, and AI-powered decision nodes to eliminate manual bottlenecks across operations.",
        icon: Workflow,
      },
    ],
  },
  {
    label: "System Modernization Layer",
    accent: "border-architecture/30 bg-architecture-muted/55 text-architecture",
    items: [
      {
        title: "Legacy System Modernization",
        description: "Upgrade and refactor enterprise systems",
        details:
          "Strangler-pattern migrations from monolithic architectures to cloud-native microservices — preserving business logic continuity while unlocking modern scalability.",
        icon: Cpu,
      },
      {
        title: "ERP Integration Layer",
        description: "Dynamics 365 Business Central / NAV",
        details:
          "Deep integration with Microsoft Dynamics 365 Business Central, including custom extensions (AL), Power Automate flows, Dataverse connectors, and migration from legacy NAV systems.",
        icon: Database,
      },
      {
        title: "API & Microservices Layer",
        description: "System-to-system connectivity",
        details:
          "RESTful and event-driven API design with gateway management, contract-first development, rate limiting, and comprehensive observability across distributed services.",
        icon: Network,
      },
    ],
  },
  {
    label: "Data & Analytics Layer",
    accent: "border-premium/35 bg-premium-muted/55 text-premium",
    items: [
      {
        title: "Data Processing Engine",
        description: "Clean pipelines for operational signals",
        details:
          "Scalable ETL/ELT pipelines with data quality validation, schema evolution, and automated lineage tracking — from raw ingestion to analytics-ready datasets.",
        icon: GitBranch,
      },
      {
        title: "BI & Dashboard Systems",
        description: "Executive visibility across systems",
        details:
          "Custom Power BI and analytics dashboards providing real-time KPI tracking, drill-down reporting, and embedded insights for stakeholders at every organizational level.",
        icon: Layers3,
      },
      {
        title: "Real-time Business Intelligence",
        description: "Decision-ready enterprise telemetry",
        details:
          "Streaming analytics with anomaly detection, predictive forecasting, and alerting — transforming operational data into actionable intelligence within seconds.",
        icon: Activity,
      },
    ],
  },
];

const statusRows: StatusRow[] = [
  {
    label: "AI Engine",
    status: "Active",
    accent: "bg-tech",
  },
  {
    label: "Integration Layer",
    status: "Stable",
    accent: "bg-architecture",
  },
  {
    label: "ERP Systems",
    status: "Connected",
    accent: "bg-primary",
  },
  {
    label: "Data Pipelines",
    status: "Processing",
    accent: "bg-premium",
  },
];

function CollapsibleItem({ item }: { item: IntelligenceItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div className="rounded-lg border border-border/70 bg-background/60 transition-colors duration-200 hover:border-border">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-start gap-3 p-3 text-left"
        aria-expanded={isOpen}
      >
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-architecture"
        >
          <Icon className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">
            {item.title}
          </p>
          <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
            {item.description}
          </p>
        </div>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border/60 px-3 pb-3 pt-2.5">
            <p className="text-xs leading-5 text-muted-foreground/90">
              {item.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroVisualCard() {
  return (
    <div className="relative mx-auto max-w-xl lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-architecture/12 via-tech/12 to-primary/10 blur-3xl"
      />

      <div className="relative rounded-2xl border border-white/55 bg-surface/76 p-3 shadow-[0_28px_90px_color-mix(in_srgb,var(--foreground)_14%,transparent)] backdrop-blur-2xl dark:border-white/10 dark:bg-surface/58 sm:p-4">
        <div className="rounded-xl border border-border/80 bg-background/72 p-4 backdrop-blur-xl dark:bg-background/50 sm:p-5">
          <div className="flex items-start justify-between gap-4 border-b border-border/80 pb-4">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase text-muted-foreground">
                AI + Enterprise Systems Layer
              </p>
              <p className="mt-2 text-xl font-bold leading-7 text-foreground">
                Enterprise intelligence across core operations
              </p>
            </div>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-tech/20 bg-tech-muted text-tech">
              <BrainCircuit aria-hidden="true" className="size-5" />
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {intelligenceLayers.map((layer) => (
              <section
                key={layer.label}
                aria-labelledby={layer.label
                  .toLowerCase()
                  .replaceAll(" ", "-")}
                className="rounded-xl border border-border/80 bg-surface/76 p-3 shadow-[0_12px_28px_color-mix(in_srgb,var(--foreground)_5%,transparent)] backdrop-blur-xl"
              >
                <div
                  className={cn(
                    "mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase",
                    layer.accent,
                  )}
                >
                  <h2
                    id={layer.label.toLowerCase().replaceAll(" ", "-")}
                    className="text-xs font-bold"
                  >
                    {layer.label}
                  </h2>
                </div>
                <div className="grid gap-2.5">
                  {layer.items.map((item) => (
                    <CollapsibleItem key={item.title} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-border/80 bg-surface/74 p-3 backdrop-blur-xl">
            <p className="mb-3 text-xs font-bold uppercase text-muted-foreground">
              System View
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {statusRows.map((row) => (
                <div
                  key={row.label}
                  className="flex min-w-0 items-center justify-between gap-3 rounded-lg bg-background/60 px-3 py-2.5"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className={cn("size-2 rounded-full", row.accent)}
                    />
                    <span className="truncate text-sm font-medium text-foreground">
                      {row.label}
                    </span>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                    <CheckCircle2 aria-hidden="true" className="size-3" />
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
