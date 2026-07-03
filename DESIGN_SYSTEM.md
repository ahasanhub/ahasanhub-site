# DESIGN_SYSTEM.md

# AhasanHub Design System

Version: 1.0

> This document defines the visual language and UI standards for AhasanHub. Every page and component must follow these guidelines to maintain a consistent, premium user experience.

---

# Brand Identity

**Brand Name**

AhasanHub

**Tagline**

Connect • Create • Grow

**Brand Position**

A premium technology consulting brand specializing in:

- Artificial Intelligence
- ERP Solutions
- Cloud Architecture
- SaaS Platforms
- Full-Stack Development
- Software Architecture
- Digital Transformation

The website should feel like a modern consulting company rather than a personal portfolio.

---

# Brand Personality

Every interface should communicate:

- Professional
- Premium
- Trustworthy
- Technical
- Strategic
- Clean
- Modern
- Enterprise-grade

Avoid:

- Generic portfolio styles
- Gamer aesthetics
- Overly playful UI
- Excessive gradients
- Flashy animations
- Visual clutter

---

# Design Inspiration

Reference the quality and clarity of:

- Microsoft
- Stripe
- Vercel
- Linear
- OpenAI
- Raycast

Do not copy their design. Use them as inspiration for simplicity, spacing, and consistency.

---

# Color Palette

## Primary Brand

Logo Red

Purpose:
- Primary buttons
- Active navigation
- Important actions

Suggested color:
`#DC2626`

## Premium Accent

Gold

Purpose:
- Highlights
- Awards
- Premium badges

Suggested color:
`#F59E0B`

## Technology Accent

Cyan

Purpose:
- Icons
- Technical diagrams
- Interactive highlights

Suggested color:
`#06B6D4`

## Secondary Accent

Blue

Purpose:
- Links
- Architecture visuals

Suggested color:
`#2563EB`

---

# Neutral Palette

## Light Theme

Background: `#F8FAFC`

Surface: `#FFFFFF`

Secondary Surface: `#F1F5F9`

Border: `#E2E8F0`

Primary Text: `#0F172A`

Secondary Text: `#475569`

## Dark Theme

Background: `#020617`

Surface: `#0F172A`

Secondary Surface: `#111827`

Border: `#1E293B`

Primary Text: `#F8FAFC`

Secondary Text: `#CBD5E1`

---

# Theme

Support:

- Light
- Dark
- System (Default)

Every component must render correctly in all themes.

---

# Typography

Recommended fonts:

- Geist
- Inter

Hierarchy:

- H1: Page headline
- H2: Section title
- H3: Card title
- Body: Readable, business-focused
- Caption: Metadata

Use consistent font weights and spacing.

---

# Layout

Maximum content width:

`max-w-7xl`

Container:

`mx-auto px-6`

Section spacing:

`py-20 sm:py-24 lg:py-28`

Use generous whitespace.

---

# Border Radius

Buttons:
- rounded-xl

Cards:
- rounded-2xl

Pills & Badges:
- rounded-full

---

# Shadows

Use subtle shadows.

Avoid heavy elevation.

---

# Buttons

Variants:

- Primary
- Secondary
- Outline
- Ghost

States:

- Default
- Hover
- Focus Visible
- Disabled

Buttons must be accessible and keyboard friendly.

---

# Cards

Cards should include:

- Soft border
- Rounded corners
- Consistent padding
- Optional icon
- Clear title
- Short description

Avoid excessive decoration.

---

# Icons

Use Lucide React.

Keep icon sizes consistent.

Use accent colors sparingly.

---

# Motion

Use subtle transitions.

Allowed:

- Fade
- Slide
- Scale

Avoid:

- Bounce
- Spin
- Flashing effects

---

# Images

Use `next/image`.

Optimize all images.

Provide meaningful alt text.

---

# Accessibility

- Semantic HTML
- Visible focus states
- Keyboard navigation
- Accessible labels
- Sufficient color contrast

---

# Responsive Design

Design mobile-first.

Target breakpoints:

- 320px
- 375px
- 640px
- 768px
- 1024px
- 1280px
- 1536px

---

# Component Principles

Components should be:

- Reusable
- Small
- Typed
- Accessible
- Theme-aware

---

# Visual Consistency Checklist

Before merging UI changes, verify:

- Consistent spacing
- Correct typography
- Correct brand colors
- Theme support
- Responsive layout
- Accessible interactions
- No duplicated UI
- Enterprise-quality appearance

---

# Design Principle

Every screen should reinforce the AhasanHub promise:

**Connect • Create • Grow**

Build interfaces that are clear, elegant, maintainable, and worthy of a premium technology consulting brand.
