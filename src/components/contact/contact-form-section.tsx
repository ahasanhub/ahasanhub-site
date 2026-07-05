import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge, Container } from "@/components/ui";
import { site } from "@/data/site";
import { ContactForm } from "./contact-form";

export function ContactFormSection() {
  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-title"
      className="border-b border-border bg-surface py-section-y sm:py-section-y-sm lg:py-section-y-lg"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="min-w-0">
            <Badge variant="tech">Contact Form</Badge>
            <h2
              id="contact-form-title"
              className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Share the context needed for a useful first response.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Tell us what you are building, modernizing, or automating. The
              structure is ready for validation and future backend integration.
            </p>
            <Link
              href={`mailto:${site.contactEmail}`}
              aria-label="Send your project inquiry by email instead"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Send by email instead
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
