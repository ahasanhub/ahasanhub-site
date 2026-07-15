import type { Metadata } from "next";
import Link from "next/link";
import { Container, Badge } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.terms);

export default function TermsPage() {
  return (
    <article className="py-section-y sm:py-section-y-sm lg:py-section-y-lg">
      <Container size="md">
        <header className="border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="primary">Legal</Badge>
            <time className="text-sm font-medium text-muted-foreground">
              Last updated: July 15, 2026
            </time>
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Please read these Terms of Service carefully before engaging with our consulting platforms and software architecture services.
          </p>
        </header>

        <div className="mt-10 space-y-10 text-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="leading-7 text-muted-foreground">
              By accessing this website, purchasing digital products, or engaging AhasanHub ("we," "our," or "us") for consulting services, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              2. Description of Services
            </h2>
            <p className="leading-7 text-muted-foreground">
              AhasanHub provides premium enterprise technology consulting and software engineering services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>AI Engineering &amp; Strategic Consulting</li>
              <li>ERP Architecture &amp; Microsoft Dynamics 365 implementation</li>
              <li>Cloud &amp; DevOps systems design</li>
              <li>SaaS platform development and full-stack software delivery</li>
              <li>Enterprise software architecture and digital transformation guidance</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              3. Professional Engagements
            </h2>
            <p className="leading-7 text-muted-foreground">
              All consulting engagements, advisory workflows, timelines, and deliverables are subject to individual written agreements (such as Statements of Work or Master Services Agreements). The information on this website is for informational purposes and does not constitute a binding offer or contract for services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              4. Intellectual Property
            </h2>
            <p className="leading-7 text-muted-foreground">
              Unless otherwise stated, all materials on this website, including design, text, code, graphics, and files, are the intellectual property of AhasanHub and are protected by applicable copyright and trademark laws.
            </p>
            <p className="leading-7 text-muted-foreground">
              You are granted a limited, non-exclusive, non-transferable license to access the site and its contents for personal or internal business research purposes. You may not copy, distribute, modify, or resell any content without our explicit written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              5. User Responsibilities
            </h2>
            <p className="leading-7 text-muted-foreground">
              As a condition of your use of this website, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use the site in any way that violates applicable laws or regulations.</li>
              <li>Engage in any automated scraping, data extraction, or denial-of-service attempts.</li>
              <li>Attempt to gain unauthorized access to any system, server, or API associated with AhasanHub.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              6. Limitation of Liability
            </h2>
            <p className="leading-7 text-muted-foreground">
              In no event shall AhasanHub or its partners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we have been notified of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              7. Governing Law
            </h2>
            <p className="leading-7 text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws of Bangladesh (or the applicable jurisdiction of engagement), and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              8. Contact Information
            </h2>
            <p className="leading-7 text-muted-foreground">
              If you have any questions or require clarification regarding these Terms of Service, please contact us at:
            </p>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-semibold text-foreground">AhasanHub Administration</p>
              <p className="text-muted-foreground mt-1">Email: <a href="mailto:ahasan.cse03@gmail.com" className="text-primary hover:underline">ahasan.cse03@gmail.com</a></p>
              <p className="text-muted-foreground mt-1">Website: <Link href="/" className="text-primary hover:underline">ahasanhub.com</Link></p>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
