export type SoftwareProduct = {
  slug: "custom-erp-ai-enabled" | "custom-crm-ai-enabled" | "ecommerce-with-ai-agent";
  name: string;
  displayName: string;
  category: string;
  headline: string;
  shortPositioning: string;
  description: string;
  commercialStatus: string;
  workflowSteps: string[];
  businessCycles: {
    name: string;
    description: string;
    steps: string[];
  }[];
  keyCapabilities: string[];
  previewCapabilities: string[];
  coreModules: string[];
  targetAudience: string[];
  architectureTags: string[];
  financialPrinciples?: string[];
  buyerOutcomes?: string[];
  commercialAdaptation?: string[];
  roadmapNotes?: string;
  integrationCapabilities: string[];
  deploymentOptions: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  accentColor: "primary" | "tech" | "premium";
};

export const softwareProducts: SoftwareProduct[] = [
  {
    slug: "custom-erp-ai-enabled",
    name: "Custom ERP AI Enabled",
    displayName: "Custom ERP AI Enabled",
    category: "ERP • Business Operations & AI",
    headline: "One Integrated ERP Foundation for Core Business Operations",
    shortPositioning:
      "Manage sales, procurement, inventory, finance, and operational controls from one governed, AI-enabled ERP platform.",
    description:
      "Custom ERP AI Enabled is a modular ERP platform designed for small and mid-sized organizations that need an integrated operational system of record. Its core business cycle connects purchasing, receiving, inventory, selling, invoicing, payments, accounting and management reporting with embedded AI automation capabilities.",
    commercialStatus: "Available for Demo / Commercial Discussion",
    workflowSteps: [
      "Purchase",
      "Receive",
      "Inventory",
      "Sell",
      "Invoice",
      "Payment",
      "Accounting",
      "AI Dashboard",
    ],
    businessCycles: [
      {
        name: "Order-to-Cash (O2C)",
        description:
          "End-to-end operational sequence from customer quotation through fulfillment and revenue recognition in double-entry books.",
        steps: [
          "Quotation",
          "Sales Order",
          "Delivery",
          "Sales Invoice",
          "Customer Receipt",
          "General Ledger Posting",
        ],
      },
      {
        name: "Procure-to-Pay (P2P)",
        description:
          "Governed purchasing flow with multi-level approval hierarchies, goods receipt validation, and accounts payable control.",
        steps: [
          "Purchase Order",
          "Approval Workflow",
          "Goods Receipt Note",
          "Supplier Invoice",
          "Payment Voucher",
          "Accounting Reconciliation",
        ],
      },
    ],
    keyCapabilities: [
      "Sales & quotation management with price books and customer terms",
      "Procurement & purchase orders with structured approval rules",
      "Inventory & warehouse management with multi-location stock tracking",
      "Customer & supplier master data with historical transaction context",
      "Finance & double-entry accounting with real-time balance validation",
      "Accounts Receivable (AR) & Accounts Payable (AP) subledgers",
      "Governed approval workflows for requisitions, orders, and adjustments",
      "AI-assisted executive dashboards and operational reporting for management oversight",
      "Multi-company, branch, and warehouse support within one database",
      "Role-based access control (RBAC) and immutable audit log trails",
      "REST API and integration-ready architecture for external software sync",
    ],
    previewCapabilities: [
      "Sales & quotation management",
      "Procurement & purchase orders",
      "Inventory & multi-warehouse tracking",
      "Double-entry finance & accounting",
      "Accounts Receivable & Accounts Payable",
      "AI-assisted executive reporting & RBAC",
    ],
    coreModules: [
      "Core Platform & Administration",
      "Organization & Company Setup",
      "Identity & Role-Based Access Control",
      "Master Data Management",
      "Customer & Supplier Management",
      "Sales & Quotation Processing",
      "Procurement & Vendor Orders",
      "Inventory & Multi-Warehouse Tracking",
      "Finance & Double-Entry Accounting",
      "AI-Powered Dashboards & Operational Reports",
      "Approval Workflows & Audit Trails",
    ],
    targetAudience: [
      "Small and Mid-Sized Enterprises (SMEs)",
      "Finance & Accounting Departments",
      "Sales & Commercial Operations Teams",
      "Procurement & Vendor Management Teams",
      "Warehouse & Inventory Controllers",
      "Operational & Executive Leadership",
    ],
    architectureTags: [
      "AI-Enabled",
      "Modular Architecture",
      "API-First",
      "Multi-Tenant Capable",
      "Ledger-Centric",
      "Auditable",
      "Integration-Ready",
    ],
    financialPrinciples: [
      "Strict double-entry bookkeeping with balanced debit and credit enforcement",
      "Controlled and immutable posted transaction history with audited reversal flows",
      "Real-time Accounts Receivable (AR) and Accounts Payable (AP) subledgers",
      "Automated Trial Balance, Profit & Loss (P&L), and Balance Sheet generation",
      "Multi-currency support with standardized exchange rate valuation",
    ],
    integrationCapabilities: [
      "RESTful API endpoints for master catalog and ledger record extraction",
      "Bidirectional webhook notifications for order and invoice state transitions",
      "Batch synchronization connectors for enterprise data warehouses",
      "Direct integration boundary with Custom CRM AI Enabled for instant quote-to-order creation",
    ],
    deploymentOptions: [
      "Cloud SaaS deployment with dedicated tenant schemas",
      "Private cloud deployment on Azure, AWS, or Google Cloud",
      "Dedicated on-premise installation for compliance-bound infrastructure",
      "Tailored workflow configuration and custom ERP integration services",
    ],
    primaryCta: {
      label: "Request Custom ERP Demo",
      href: "/contact?product=custom-erp-ai-enabled&intent=demo",
    },
    secondaryCta: {
      label: "Get Pricing",
      href: "/contact?product=custom-erp-ai-enabled&intent=pricing",
    },
    accentColor: "primary",
  },
  {
    slug: "custom-crm-ai-enabled",
    name: "Custom CRM AI Enabled",
    displayName: "Custom CRM AI Enabled",
    category: "CRM • Sales Operations & AI",
    headline: "Turn Leads Into Revenue Without Losing Context or Follow-Up",
    shortPositioning:
      "Manage lead qualification, visual pipeline stages, Customer 360, and AI-enabled follow-ups with total commercial visibility.",
    description:
      "Custom CRM AI Enabled is a sales-focused customer relationship management platform designed to manage the complete lead-to-quote workflow while giving teams a trusted view of customer relationships, pipeline health and sales activities.",
    commercialStatus: "Available for Demo / Commercial Discussion",
    workflowSteps: [
      "Lead",
      "Qualify",
      "Convert",
      "Opportunity",
      "Pipeline",
      "Quotation",
      "Close",
      "Customer 360",
    ],
    businessCycles: [
      {
        name: "Lead-to-Close Cycle",
        description:
          "Disciplined sales pipeline progression ensuring every prospect has documented ownership, follow-ups, and clear quotation tracking.",
        steps: [
          "Inbound Lead Capture",
          "Lead Qualification",
          "Contact & Account Conversion",
          "Opportunity Creation",
          "Visual Pipeline Progression",
          "Quotation & PDF Generation",
          "Deal Close & Handoff",
          "Unified Customer 360",
        ],
      },
    ],
    keyCapabilities: [
      "Lead capture, source attribution, and qualification criteria",
      "Structured contact and company accounts directory",
      "Unified Customer 360 view consolidating notes, deals, and touchpoints",
      "Opportunity management with stage probability and expected close dates",
      "Visual drag-and-drop sales pipeline board for deal velocity tracking",
      "AI-assisted activity scheduling, reminder notifications, and call/meeting logs",
      "Configurable product and service price book catalog",
      "Quotation generation with line-item discounts and branded PDF output",
      "Sales dashboards with stage conversion and pipeline value reporting",
      "Role-based permissions, territory assignments, and change audit trails",
      "REST APIs and event webhooks for third-party communication tools",
    ],
    previewCapabilities: [
      "Lead qualification & scoring",
      "Unified Customer 360 profile",
      "Visual sales pipeline board",
      "AI-assisted reminders & meeting logs",
      "Quotation builder with PDF export",
      "REST APIs & webhook triggers",
    ],
    coreModules: [
      "Executive Sales & Velocity Dashboard",
      "Leads Management & Qualification",
      "Contacts & Decision-Maker Directory",
      "Accounts & Enterprise Organizations",
      "Unified Customer 360 Profile",
      "Opportunities & Deal Value Tracking",
      "Visual Kanban Pipeline Board",
      "AI Activities, Tasks & Reminders",
      "Products & Services Catalog",
      "Quotation Builder & Branded PDF Output",
      "Sales Analytics & Stage Reports",
      "Team Administration & Audit Trail",
      "REST API & Webhooks Integration",
    ],
    targetAudience: [
      "B2B Sales Teams & Account Executives",
      "Commercial Directors & Sales Leadership",
      "Business Development & Growth Representatives",
      "Client Relationship & Account Managers",
      "Executive Leaders Needing Pipeline Visibility",
    ],
    architectureTags: [
      "AI-Enabled",
      "Sales-Process First",
      "REST API & Webhooks",
      "Role-Based Access",
      "Customer 360 Ready",
      "PDF Engine",
      "Auditable",
    ],
    buyerOutcomes: [
      "Centralized customer data replacing fragmented spreadsheets and notes",
      "Unbroken lead ownership eliminating forgotten prospects and missed follow-ups",
      "Measurable pipeline velocity and stage drop-off analytics",
      "Standardized quotations created in minutes with governed discount levels",
      "Leadership visibility into daily sales rep activities and forecast health",
    ],
    roadmapNotes:
      "Advanced multi-channel marketing campaigns, automated customer service helpdesk ticketing, and deep conversational intelligence are scheduled for subsequent product editions.",
    integrationCapabilities: [
      "Event webhooks triggering on lead creation, stage advancement, and deal closure",
      "REST API for synchronizing contact, company, and deal records",
      "Direct integration pathway into Custom ERP AI Enabled for instant quote-to-order creation",
      "CSV and structured JSON data migration tools for legacy CRM transitions",
    ],
    deploymentOptions: [
      "Managed Cloud deployment with daily automated backups and monitoring",
      "Single-tenant private cloud instance deployed within your virtual network",
      "Custom field mapping and CRM process alignment for specialized teams",
      "Commercial software licensing with implementation engineering support",
    ],
    primaryCta: {
      label: "Request Custom CRM Demo",
      href: "/contact?product=custom-crm-ai-enabled&intent=demo",
    },
    secondaryCta: {
      label: "Get Pricing",
      href: "/contact?product=custom-crm-ai-enabled&intent=pricing",
    },
    accentColor: "tech",
  },
  {
    slug: "ecommerce-with-ai-agent",
    name: "Ecommerce with AI Agent",
    displayName: "Ecommerce with AI Agent",
    category: "E-Commerce • Digital Commerce & AI Agents",
    headline: "A Modern Commerce Platform Built for Complex Product Catalogs",
    shortPositioning:
      "A modular digital-commerce platform engineered around dynamic attributes, sellable variants, inventory-aware pricing, and AI agent assistance.",
    description:
      "Ecommerce with AI Agent is a modular digital-commerce platform designed around structured products, dynamic attributes, sellable variants, inventory-aware pricing, customer accounts, order management and intelligent AI agent workflows. Positioned as a reference commerce platform that can be adapted, customized or white-labeled for modern commerce businesses.",
    commercialStatus: "Active Development / Commercial Customization Available",
    workflowSteps: [
      "Catalog",
      "Attributes",
      "Variants",
      "Inventory",
      "Cart",
      "AI Checkout",
      "Order Processing",
      "Fulfillment",
    ],
    businessCycles: [
      {
        name: "Product-to-Order Sequence",
        description:
          "Modular commerce pipeline spanning attribute-driven catalog modeling, real-time inventory checks, persistent carting, and transactional checkout.",
        steps: [
          "Product Type Definition",
          "Dynamic Attributes Configuration",
          "Sellable Variant Generation (SKU)",
          "Inventory Allocation & Pricing",
          "Faceted Catalog Navigation",
          "Persistent Cart Persistence",
          "Guest / Authenticated Checkout",
          "Order & Dispatch Processing",
        ],
      },
    ],
    keyCapabilities: [
      "High-performance responsive storefront built on modern server-rendered frameworks",
      "Product type architecture for reusable attribute sets and structured specs",
      "Category hierarchy with merchandising and navigation controls",
      "Dynamic multi-attribute support (materials, dimensions, colors, specifications)",
      "Sellable variant matrix with dedicated SKU, pricing, inventory, and media",
      "Real-time stock awareness with out-of-stock guards and reservation rules",
      "Product media gallery with multi-image variant asset management",
      "Faceted search, multi-parameter filtering, and side-by-side product comparison",
      "Persistent cart synchronized across guest and authenticated user sessions",
      "Streamlined guest checkout and authenticated customer account portal",
      "Merchant administration panel for catalog, variant, and order fulfillment",
      "AI agent assistance for catalog structuring and automated customer inquiry handling",
    ],
    previewCapabilities: [
      "Dynamic attribute & variant management",
      "Inventory-aware pricing & stock reservation",
      "High-performance responsive storefront",
      "Persistent cart & multi-step checkout",
      "Merchant catalog & order admin",
      "AI agent integration for commerce assistance",
    ],
    coreModules: [
      "Next.js Storefront Application",
      "Next.js Merchant Admin Portal",
      "Express / Node.js API Service Core",
      "Product Type & Dynamic Taxonomy Engine",
      "Attribute & SKU Variant Matrix",
      "Inventory Management & Stock Reservation",
      "Persistent Cart & Promotion Calculator",
      "Checkout & Payment Provider Interfaces",
      "Customer Accounts & Order History Portal",
      "Media Pipeline (Cloudflare R2 Storage)",
      "AI Agent Commerce & Support Integration",
    ],
    targetAudience: [
      "Retailers with Complex, Multi-Attribute Catalogs",
      "Direct-to-Consumer (D2C) Brands Requiring Dedicated Storefront Control",
      "B2B Distributors Managing Variant-Dense Inventories",
      "Commerce Businesses Requiring Custom ERP and Warehouse Integration",
      "Enterprises Seeking an Adaptable, White-Label Commerce Engine",
    ],
    architectureTags: [
      "AI Agent Assisted",
      "Next.js Storefront",
      "Next.js Admin",
      "Express API",
      "PostgreSQL",
      "Cloudflare R2",
      "Monorepo Architecture",
    ],
    commercialAdaptation: [
      "White-label storefront theme customization tailored to corporate visual identity",
      "Custom product taxonomy and attribute configuration for specialized sectors",
      "Integration with corporate payment processors, invoicing, and escrow services",
      "Automated stock and order integration with ERP or third-party logistics (3PL)",
      "Full turnkey deployment or licensed source-code base for in-house engineering",
    ],
    integrationCapabilities: [
      "RESTful commerce endpoints for external ERP catalog and inventory synchronization",
      "Payment gateway webhook interfaces for transactional order status updates",
      "Cloudflare R2 and S3-compatible media asset storage pipelines",
      "Direct connectivity architecture into Custom ERP AI Enabled for unified sales order posting",
    ],
    deploymentOptions: [
      "Turnkey cloud deployment on managed container and serverless infrastructure",
      "Dedicated single-tenant private cloud within your organization's cloud perimeter",
      "Full custom commercial implementation and branded storefront engineering",
      "Monorepo codebase licensing for organizations requiring full code ownership",
    ],
    primaryCta: {
      label: "Discuss AI Commerce Platform",
      href: "/contact?product=ecommerce-with-ai-agent&intent=demo",
    },
    secondaryCta: {
      label: "Get Pricing",
      href: "/contact?product=ecommerce-with-ai-agent&intent=pricing",
    },
    accentColor: "premium",
  },
];

export type ProductComparisonRow = {
  dimension: string;
  customErp: string;
  customCrm: string;
  ecommerceAi: string;
};

export const productComparisonData: ProductComparisonRow[] = [
  {
    dimension: "Primary Focus",
    customErp: "Core business operations, ERP system of record, and financial control with AI",
    customCrm: "B2B sales pipelines, lead qualification, and customer relationships with AI",
    ecommerceAi: "Multi-variant digital commerce, storefront catalog, and AI agent assistance",
  },
  {
    dimension: "Target Organization",
    customErp: "SMEs & mid-sized businesses with purchasing, inventory, and accounting",
    customCrm: "Sales-led B2B organizations needing pipeline discipline and follow-up",
    ecommerceAi: "Brands, distributors, and commerce operators with complex catalogs",
  },
  {
    dimension: "Sales Workflow",
    customErp: "Quotations, sales orders, delivery notes, and invoicing",
    customCrm: "Lead capture, qualification, deal pipeline, and proposal generation",
    ecommerceAi: "Digital storefront browse, persistent cart, and self-service checkout",
  },
  {
    dimension: "Customer Management",
    customErp: "Customer master ledger, credit terms, and transaction ledger",
    customCrm: "Customer 360 profile, decision-maker contacts, and interaction logs",
    ecommerceAi: "Customer self-service portal, address book, and order tracking",
  },
  {
    dimension: "Procurement & Vendors",
    customErp: "Purchase requisitions, vendor purchase orders, and goods receipt",
    customCrm: "Not in scope (handled via Custom ERP integration boundary)",
    ecommerceAi: "Supplier reference data and replenishment tracking interfaces",
  },
  {
    dimension: "Inventory Management",
    customErp: "Multi-warehouse tracking, stock movements, and ledger valuation",
    customCrm: "Product price book catalog reference",
    ecommerceAi: "Variant-level SKU stock allocation and out-of-stock prevention",
  },
  {
    dimension: "Finance & Accounting",
    customErp: "Full double-entry general ledger, AR/AP, Trial Balance, P&L, Balance Sheet",
    customCrm: "Deal values, expected revenue forecasting, and quote values",
    ecommerceAi: "Transactional payment gateway capture and tax calculation rules",
  },
  {
    dimension: "Storefront / Public Portal",
    customErp: "Internal employee operational portal and secure administrative console",
    customCrm: "Internal sales team workspace and pipeline dashboard",
    ecommerceAi: "Public customer-facing responsive storefront and merchant admin",
  },
  {
    dimension: "AI Capabilities",
    customErp: "AI-assisted executive dashboards, anomaly detection, and reporting",
    customCrm: "AI follow-up reminders, lead context scoring, and activity logging",
    ecommerceAi: "Autonomous AI agent assistance for cataloging and customer inquiries",
  },
  {
    dimension: "API & Integration",
    customErp: "REST API, webhook notifications, and ERP synchronization connectors",
    customCrm: "REST API, webhook events, and direct Custom ERP quote-to-order bridge",
    ecommerceAi: "RESTful commerce APIs, payment webhooks, and media asset pipelines",
  },
  {
    dimension: "Customization & Licensing",
    customErp: "Dedicated deployment, workflow tailoring, and commercial licensing",
    customCrm: "Custom stage modeling, team setup, and commercial licensing",
    ecommerceAi: "White-label branding, catalog taxonomy adaptation, and source license",
  },
];

export const commercialOptions = [
  {
    title: "Product Demo",
    badge: "Evaluation",
    tagline: "Explore the platform and evaluate fit with your workflows.",
    description:
      "Schedule a technical walkthrough focused on your specific business processes. We demonstrate how core cycles (Order-to-Cash, Lead-to-Close, or Catalog-to-Order) function in real operating scenarios.",
    actionLabel: "Request a Demo",
    href: "/contact?intent=demo",
  },
  {
    title: "Custom Implementation",
    badge: "Deployment",
    tagline: "Configure and extend the platform around your organization.",
    description:
      "Tailor user roles, permission hierarchies, custom data fields, document templates, and operational approval chains to match your team's existing governance without starting from zero.",
    actionLabel: "Discuss Implementation",
    href: "/contact?intent=custom",
  },
  {
    title: "Commercial Licensing",
    badge: "Licensing",
    tagline: "Flexible software licensing and organization-specific deployment.",
    description:
      "Discuss commercial licensing models for enterprise deployment—including dedicated single-tenant cloud hosting, private network installations, or white-label foundation options.",
    actionLabel: "Discuss Licensing",
    href: "/contact?intent=pricing",
  },
  {
    title: "Integration & Modernization",
    badge: "Connectivity",
    tagline: "Connect the product with ERP, APIs, databases, and business systems.",
    description:
      "Bridge your product deployment with Microsoft Dynamics 365, legacy SQL databases, third-party logistics providers, or custom microservice backends through hardened API connectors.",
    actionLabel: "Explore Integrations",
    href: "/contact?intent=integration",
  },
];

export const whyProductPrinciples = [
  {
    title: "Business-Process First",
    description:
      "Engineered around established operational cycles—Order-to-Cash, Procure-to-Pay, and Lead-to-Close—rather than surface-level dashboard metrics.",
  },
  {
    title: "Secure Role-Based Architecture",
    description:
      "Fine-grained permissions and strict role isolation protect sensitive commercial data, financial balances, and customer accounts.",
  },
  {
    title: "API & Integration Ready",
    description:
      "Built with clean REST interfaces and webhook events designed to connect with existing enterprise systems without brittle hacks.",
  },
  {
    title: "Auditability & Governance",
    description:
      "Every financial entry, deal progression, and catalog modification maintains an auditable record of who initiated the action and when.",
  },
  {
    title: "Modular Architecture",
    description:
      "Adopt the modules your organization requires today, with clear boundaries that allow expansion as your operational scope grows.",
  },
  {
    title: "Deployment Flexibility",
    description:
      "Available across cloud SaaS, dedicated private cloud clusters, or on-premise infrastructure based on your security compliance needs.",
  },
  {
    title: "Customization Support",
    description:
      "Backed by AhasanHub's senior engineering team to tailor taxonomies, custom calculations, and unique operational logic.",
  },
  {
    title: "Long-Term Maintainability",
    description:
      "Built with strict TypeScript, modern App Router patterns, and battle-tested databases to minimize technical debt and maintenance costs.",
  },
];

/* -------------------------------------------------------------------------- */
/* Retained Conceptual Capabilities (Moved to Platform Capabilities Labs)     */
/* -------------------------------------------------------------------------- */

export type FeaturedProduct = {
  name: string;
  category: string;
  description: string;
  useCase: string;
  techStack: string[];
  targetUsers: "Enterprise" | "Business" | "Developers";
};

export type ProductCategory = {
  name: string;
  description: string;
};

export type ProductUseCase = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
};

export type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    name: "AI Automation Engine",
    category: "AI Systems",
    description:
      "An intelligent workflow automation layer designed to extract context, structure unstructured documents, and execute logical routing rules.",
    useCase: "Automating repetitive data entry, content categorization, and operational decision-making.",
    techStack: ["Next.js", "Python", "OpenAI API", "LangChain"],
    targetUsers: "Enterprise",
  },
  {
    name: "ERP Integration Toolkit",
    category: "ERP & Integrations",
    description:
      "A highly governed, modular framework built to connect custom web services and databases directly with Microsoft Dynamics 365 environments.",
    useCase: "Syncing transactional web-store or SaaS data seamlessly with ERP general ledgers.",
    techStack: ["TypeScript", "Azure Integrations", "Dynamics 365 API", "OData"],
    targetUsers: "Developers",
  },
  {
    name: "Cloud Deployment Platform",
    category: "DevOps & Cloud",
    description:
      "An infrastructure-as-code orchestration tool that automates the deployment of secure, multitenant, and compliant environments.",
    useCase: "Automated provisioning of customer staging environments and isolated cluster deployments.",
    techStack: ["Terraform", "Docker", "AWS / Azure", "GitHub Actions"],
    targetUsers: "Developers",
  },
  {
    name: "SaaS Starter Architecture",
    category: "SaaS Systems",
    description:
      "A production-ready multi-tenant software boilerplate configured with role-based auth, secure subscription pipelines, and organization schemas.",
    useCase: "Accelerating the development and launch of secure software-as-a-service portals.",
    techStack: [
      "Next.js App Router",
      "Tailwind CSS",
      ".NET",
      "SQL Server",
      "Azure",
      "Prisma / Postgres",
      "Stripe API",
    ],
    targetUsers: "Business",
  },
  {
    name: "Business Workflow Automation System",
    category: "Digital Transformation",
    description:
      "A human-in-the-loop workflow management framework designed to govern multi-stage operational approvals and track audit logs.",
    useCase: "Governing complex procurement, compliance reviews, and financial approval processes.",
    techStack: ["React", "Node.js", "PostgreSQL", "Temporal.io"],
    targetUsers: "Enterprise",
  },
];

export const productCategories: ProductCategory[] = [
  {
    name: "AI & Automation Tools",
    description:
      "Process automation engines, cognitive workflows, and intelligent decision systems.",
  },
  {
    name: "ERP Systems & Integrations",
    description:
      "Integration connectors, custom dashboards, and data sync layers for Microsoft Dynamics 365.",
  },
  {
    name: "Cloud Infrastructure Tools",
    description:
      "Multi-tenant orchestration scripts, automated staging deployment, and compliance pipelines.",
  },
  {
    name: "SaaS Starter Kits",
    description:
      "Production-ready architectural blueprints, multi-tenant templates, and billing-integrated portals.",
  },
  {
    name: "Developer Tools & APIs",
    description:
      "API-first services, webhook handlers, SDK wrappers, and backend microservices.",
  },
];

export const productUseCases: ProductUseCase[] = [
  {
    title: "Enterprise Automation",
    problem:
      "Manual data operations and legacy human-in-the-loop workflows create operational bottlenecks, delay transaction speeds, and increase human errors.",
    solution:
      "Deploying automated approval matrices, cognitive context parsers, and system-level orchestrations to streamline operational steps.",
    impact:
      "Operational latency reduced by 70%, with audit-ready logs for every workflow transition.",
  },
  {
    title: "ERP Modernization",
    problem:
      "Core Dynamics 365 or legacy ERP systems remain siloed, locking business data away and preventing real-time integration with modern SaaS frontends.",
    solution:
      "Connecting secure OData API gateways, lightweight database sync managers, and streamlined reporting views directly to ledger systems.",
    impact:
      "Real-time visibility into ledger adjustments and unified API access across custom business systems.",
  },
  {
    title: "SaaS Product Acceleration",
    problem:
      "SaaS startups and enterprise spin-offs waste months rebuilding auth, billing, organizations, and tenancy models, delaying time-to-market.",
    solution:
      "Deploying pre-configured, battle-tested SaaS templates with multi-tenancy, Stripe billing pipelines, and clean App Router structures.",
    impact:
      "Time-to-market cut by 60%, allowing engineering to focus on custom core features immediately.",
  },
  {
    title: "AI-Driven Workflows",
    problem:
      "Enterprise document parsing, email processing, and ticket categorization require expensive manual labor and lack consistent decision logic.",
    solution:
      "Integrating Large Language Model agents with automated validation gates and direct integration into operational ticket systems.",
    impact:
      "Average ticket resolution times down from hours to minutes, with over 90% accuracy in categorization.",
  },
  {
    title: "Cloud System Scaling",
    problem:
      "Manual cloud infrastructure configurations lead to environment drift, slow staging builds, high infrastructure costs, and deployment failures.",
    solution:
      "Structuring infrastructure-as-code pipelines using Terraform, Docker cluster packaging, and automated GitHub Actions workflows.",
    impact:
      "Deploying client staging clusters on-demand in under 5 minutes with zero environment configuration drift.",
  },
];

export const roadmapItems: RoadmapItem[] = [
  {
    phase: "Phase 01",
    title: "Internal tools & automation systems",
    description:
      "Building secure internal tools, script automation libraries, and admin command stations to eliminate manual operational waste.",
  },
  {
    phase: "Phase 02",
    title: "SaaS platform development",
    description:
      "Expanding standalone tools into multi-tenant SaaS environments complete with user authentication, billing, and tenancy isolation.",
  },
  {
    phase: "Phase 03",
    title: "Enterprise integrations (ERP + Cloud)",
    description:
      "Syncing our SaaS engines with legacy core platforms, ERP databases like Dynamics 365, and secure cloud deployment architectures.",
  },
  {
    phase: "Phase 04",
    title: "AI-powered autonomous systems",
    description:
      "Deploying autonomous AI agents capable of semantic reasoning, error correction, and independent multi-step task execution.",
  },
];
