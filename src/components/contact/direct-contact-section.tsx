import { ExternalLink, Globe2, Mail } from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";

const directContacts = [
  {
    label: "Email",
    value: "ahasan.cse03@gmail.com",
    href: "mailto:ahasan.cse03@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "AhasanHub profile",
    href: "https://www.linkedin.com/company/ahasanhub",
    icon: ExternalLink,
  },
  {
    label: "Availability",
    value: "Remote global availability for consulting and project delivery",
    href: null,
    icon: Globe2,
  },
];

export function DirectContactSection() {
  return (
    <section
      aria-label="Direct Contact"
      className="border-b border-border bg-background py-section-y sm:py-section-y-sm"
    >
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Direct Contact"
            title="Direct Contact"
            headingLevel="h2"
            description="Use these direct channels for project inquiries, consulting requests, and partnership conversations."
          />

          <ul className="grid gap-4">
            {directContacts.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-primary">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <span className="grid min-w-0 gap-1">
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="break-words text-base font-semibold text-foreground">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      aria-label={`${item.label}: ${item.value}`}
                      className="flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
