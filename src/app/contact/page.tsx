import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { ContactHeroSection } from "@/components/contact/contact-hero-section";
import { DirectContactSection } from "@/components/contact/direct-contact-section";
import { ResponseTimeSection } from "@/components/contact/response-time-section";
import { ServicesRequestSection } from "@/components/contact/services-request-section";
import { ValuePropositionSection } from "@/components/contact/value-proposition-section";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />

      <ValuePropositionSection />

      <ServicesRequestSection />

      <ContactFormSection />

      <DirectContactSection />

      <ResponseTimeSection />
    </main>
  );
}
