# ARCHITECTURE.md

# AhasanHub Architecture Guide

Version: 1.0

---

# Overview

AhasanHub is a **multi-page, enterprise-grade Next.js application** built as a premium technology consulting platform.

It is designed to scale into:

- Consulting platform
- Personal brand system
- SaaS product hub
- Content publishing system
- Future AI-enabled services platform

---

# Core Architecture Principle

The architecture follows:

> Separation of Concerns + Component Reusability + Scalability First

Every part of the system must be modular, reusable, and independent.

---

# System Architecture

## High-Level Flow

User Request
→ Next.js App Router
→ Layout System
→ Page Layer
→ Section Components
→ UI Components
→ Data Layer (src/data)
→ Config Layer (src/config)

---

# Tech Stack Architecture

## Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next-themes
- Lucide React

## Rendering Strategy

- Server Components (default)
- Client Components (only when needed)

---

# App Router Structure

app/

layout.tsx
page.tsx

about/
services/
projects/
insights/
products/
contact/
privacy/
terms/

Each route is independent and SEO-optimized.

---

# Layout Architecture

## Root Layout

Responsible for:

- Navbar
- Footer
- Theme Provider
- Global styles

## Page Layout

Each page:

- Uses shared layout components
- Has unique metadata
- Contains section-based structure

---

# Component Architecture

## Layered Design

### 1. UI Layer (Reusable Primitives)

- Button
- Card
- Badge
- Input
- Container
- SectionHeading

### 2. Layout Layer

- Navbar
- Footer
- ThemeToggle
- MobileMenu

### 3. Section Layer

- HeroSection
- ServicesSection
- ProjectsSection
- AboutSection
- InsightsSection
- ContactSection

---

# Data Architecture

All static content must be separated into:

src/data/

Example:

- site.ts → global content
- services.ts → services data
- projects.ts → case studies
- navigation.ts → menu structure
- seo.ts → metadata templates

---

# Configuration Layer

src/config/

Contains:

- theme config
- site config
- navigation config
- constants

No UI logic should exist here.

---

# State Management Strategy

Default approach:

- React local state
- Props drilling (controlled)
- Server components for static data

Avoid:

- Redux (unless necessary)
- Complex global state libraries

---

# Theme Architecture

Uses:

- next-themes
- class-based dark mode

Theme flow:

User selection
→ Theme Provider
→ Tailwind class injection
→ UI updates

All components must support:

- Light
- Dark
- System

---

# Styling Architecture

## Tailwind Strategy

- Utility-first design
- No inline CSS
- Consistent spacing system
- Reusable class patterns

## Design Tokens

Defined in:

- globals.css
- tailwind.config.js

---

# Routing Architecture

Each route is:

- Independent
- SEO optimized
- Lazy loaded where possible
- Server-rendered by default

---

# SEO Architecture

Each page includes:

- metadata object
- OpenGraph tags
- Twitter cards
- canonical URLs

SEO structure is centralized and reusable.

---

# Performance Architecture

Optimizations:

- Server Components by default
- Image optimization via next/image
- Font optimization
- Minimal client-side JS
- Lazy loading sections

Goal:

Lighthouse score 90+

---

# Security Architecture

- No sensitive data in frontend
- No exposed API keys
- Environment variables via .env.local
- Secure deployment via Vercel

---

# Scalability Design

The system supports future expansion:

Future modules:

- Blog CMS (MDX / Contentlayer)
- Admin dashboard
- SaaS product system
- Authentication system
- Booking system
- Newsletter system
- Payment integration

Architecture is prepared for modular expansion.

---

# File Responsibility Rules

Never mix:

UI logic + data + configuration

Separation:

UI → components/
Data → data/
Config → config/
Logic → hooks/lib/

---

# Code Flow Principle

Page → Section → UI → Data

No reverse dependency allowed.

---

# Dependency Rules

Allowed:

- Next.js
- TypeScript
- Tailwind
- next-themes
- Lucide

Avoid:

- Heavy UI frameworks
- Unnecessary libraries
- Duplicated utilities

---

# Build Rules

Before deployment:

- TypeScript check
- ESLint check
- Production build test
- Responsive validation
- Theme validation

---

# Architecture Principle

AhasanHub architecture must always prioritize:

- Simplicity
- Maintainability
- Scalability
- Performance
- Clean separation of concerns
- Enterprise-grade structure

---

# Final Statement

This architecture is designed to ensure AhasanHub evolves into a scalable, premium, and production-ready technology consulting platform without structural refactoring.
