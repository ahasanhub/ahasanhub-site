# AGENTS.md

# AhasanHub — Engineering Source of Truth (v4.0)

> This is the single authoritative instruction set for all AI coding agents and developers working on AhasanHub.

---

# 1. Project Identity

## Name
AhasanHub

## Brand Position
Premium enterprise technology consulting platform.

## Brand Concept
Connect • Create • Grow

## Core Domains

- AI Engineering & Consulting
- ERP Architecture & Dynamics 365
- Cloud & DevOps Systems
- SaaS Platform Engineering
- Full-Stack Development
- Software Architecture
- Digital Transformation

---

# 2. Product Philosophy (Stripe-Level Standard)

AhasanHub must behave like a **high-end SaaS + consulting platform**, not a portfolio.

Every feature must:

- Solve a real business problem
- Improve credibility or conversion
- Be scalable and reusable
- Follow enterprise UX standards

---

# 3. Engineering Principles

## Non-Negotiable Principles

- Simplicity over complexity
- Composition over duplication
- Scalability over shortcuts
- Maintainability over speed hacks
- Consistency over creativity

---

# 4. Tech Stack Rules

## Required Stack

- Next.js (App Router only)
- TypeScript (strict mode)
- Tailwind CSS
- next-themes
- Lucide React
- Vercel deployment

## Forbidden

- Pages Router
- JavaScript (.js files)
- Inline CSS
- jQuery / Bootstrap
- Heavy UI frameworks
- Unnecessary dependencies

---

# 5. Architecture (Multi-Page System)

## Pages

/
about
services
projects
insights
products
contact
privacy
terms
404

## Future Expansion

- case-studies
- courses
- booking
- newsletter
- SaaS dashboard

---

# 6. App Router Structure

app/
  layout.tsx
  page.tsx
  about/
  services/
  projects/
  insights/
  products/
  contact/

---

# 7. Layered Architecture

## 1. UI Layer (Primitive Components)

- Button
- Card
- Badge
- Input
- Container
- SectionHeading

## 2. Layout Layer

- Navbar
- Footer
- ThemeToggle
- MobileMenu

## 3. Section Layer

- HeroSection
- ServicesSection
- ProjectsSection
- AboutSection
- InsightsSection
- ContactSection

## 4. Data Layer

src/data/
- site.ts
- services.ts
- projects.ts
- navigation.ts
- seo.ts

## 5. Config Layer

src/config/
- theme.ts
- site.ts
- constants.ts

---

# 8. Component Rules

- One component = one responsibility
- Keep components < 200 lines
- Use TypeScript props for everything
- No duplicated UI logic
- Prefer composition over inheritance

Naming:

- PascalCase for components
- camelCase for functions
- UPPER_CASE for constants

---

# 9. Design System Enforcement

## Visual Style

- Premium
- Clean
- Enterprise-grade
- Minimal
- Technical

## Inspired By

- Stripe
- Vercel
- Microsoft
- Linear
- OpenAI

## Forbidden UI Styles

- Gamer UI
- Over-animated interfaces
- Cluttered dashboards
- Excessive gradients
- Random color usage

---

# 10. Theme System

Must support:

- Light
- Dark
- System (default)

Rules:

- All components must adapt automatically
- No hardcoded colors outside design system
- Use CSS variables + Tailwind

---

# 11. Color System

## Primary

Red → Actions / CTAs

## Premium

Gold → Highlights / achievements

## Tech

Cyan → technical UI elements

## Architecture

Blue → links / structure

---

# 12. Responsive Design Rules

Mobile-first approach.

Breakpoints:

320px
375px
640px
768px
1024px
1280px
1536px

No desktop-only design allowed.

---

# 13. Performance Rules (Critical)

Must:

- Use Server Components by default
- Use Client Components only when required
- Use next/image for all images
- Minimize JS bundle size
- Lazy load sections when needed
- Optimize fonts

Target:

Lighthouse score ≥ 90

---

# 14. SEO Rules (Enterprise Standard)

Each page must include:

- title
- description
- OpenGraph metadata
- Twitter cards
- canonical URL

Rules:

- Every page must have unique SEO metadata
- Use semantic HTML
- Avoid duplicate metadata

---

# 15. Accessibility Rules (WCAG-aligned)

Mandatory:

- Semantic HTML only
- Keyboard navigation support
- Visible focus states
- aria-label where needed
- Proper heading hierarchy (one H1 per page)
- Alt text for all images

---

# 16. Motion & Animation Rules

Allowed:

- fade
- slide
- scale
- opacity transitions

Forbidden:

- bouncing animations
- spinning loaders everywhere
- distracting motion
- long-duration animations

Rule:
Motion must support clarity, not decoration.

---

# 17. Data & Content Rules

- Never hardcode repeated content
- Store content in `src/data`
- UI must not contain business logic
- Prepare system for future CMS (MDX / Sanity / Strapi)

---

# 18. Git Workflow

Branch strategy:

feature/*
fix/*
refactor/*
docs/*

Commit format:

feat(hero)
fix(theme)
refactor(button)
docs(readme)

Rules:

- One feature per branch
- One logical commit per change
- No unrelated changes

---

# 19. AI Agent Rules (STRICT)

## Always

- Understand existing code before changes
- Reuse components
- Preserve UI consistency
- Keep changes minimal and focused
- Explain modifications clearly

## Never

- Rewrite entire project
- Delete unrelated code
- Introduce new architecture without approval
- Add unnecessary dependencies
- Break existing UI or routing

---

# 20. Code Quality Standards

Before completion:

- TypeScript must pass
- ESLint must pass
- Build must succeed
- No unused imports
- No duplicate components
- Responsive verified
- Theme verified (light/dark/system)
- Accessibility verified

---

# 21. Routing Rules (Next.js App Router)

Each page must:

- Be independently SEO-optimized
- Use server components where possible
- Avoid unnecessary client state

Routes:

/ → Home
/about
/services
/projects
/insights
/products
/contact

---

# 22. Architecture Flow

Page → Section → UI → Data → Config

Rule:
UI must never depend on page logic directly.

---

# 23. Scalability Design

System must support future expansion:

- CMS integration
- SaaS dashboard
- Authentication system
- Booking system
- Newsletter system
- Payment system
- Admin panel

No structural rewrite should be required later.

---

# 24. Definition of Done

A task is complete only if:

✓ TypeScript passes  
✓ ESLint passes  
✓ Build succeeds  
✓ Fully responsive  
✓ Theme supports all modes  
✓ Accessibility verified  
✓ SEO metadata complete  
✓ No duplicate code  
✓ No unused imports  
✓ Clean component structure  
✓ Production-ready quality  

---

# 25. Final Principle (Stripe-Level Standard)

Every implementation must improve:

- Clarity
- Performance
- Maintainability
- User trust
- Business value

If multiple solutions exist, always choose:

> The simplest, most scalable, most maintainable solution.

---

# END OF AGENTS v4.0