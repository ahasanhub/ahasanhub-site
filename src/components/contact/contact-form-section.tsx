import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
} from "@/components/ui";
import { site } from "@/data/site";

const fieldStyles =
  "h-11 w-full rounded-xl border border-border bg-background/80 px-3 text-sm text-foreground shadow-sm outline-none transition duration-200 placeholder:text-muted-foreground hover:border-border-strong focus:border-border-strong focus:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

const fieldGroupStyles = "grid gap-2";
const labelStyles = "text-sm font-medium text-foreground";
const helperTextStyles = "text-xs leading-5 text-muted-foreground";

const projectTypes = [
  "AI System Design & Automation",
  "ERP Architecture",
  "Cloud Infrastructure & DevOps",
  "SaaS Product Development",
  "Full-Stack Web Application",
  "Software Architecture Consulting",
  "Digital Transformation Strategy",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

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

          <Card
            aria-labelledby="project-inquiry-title"
            aria-describedby="project-inquiry-description"
            className="min-w-0 rounded-2xl border-border/80 bg-background/85 shadow-[0_18px_44px_color-mix(in_srgb,var(--foreground)_8%,transparent)] backdrop-blur transition duration-200 hover:border-border-strong"
          >
            <CardHeader className="border-b border-border/70">
              <CardTitle id="project-inquiry-title">Project inquiry</CardTitle>
              <CardDescription id="project-inquiry-description">
                Required fields are marked. No information is submitted until a
                backend action is connected.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-card">
              <form
                aria-labelledby="project-inquiry-title"
                aria-describedby="project-inquiry-description"
                className="grid gap-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className={fieldGroupStyles}>
                    <label className={labelStyles} htmlFor="full-name">
                      Full Name <span aria-hidden="true" className="text-primary">*</span>
                    </label>
                    <input
                      id="full-name"
                      name="fullName"
                      className={fieldStyles}
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className={fieldGroupStyles}>
                    <label className={labelStyles} htmlFor="email-address">
                      Email Address <span aria-hidden="true" className="text-primary">*</span>
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      className={fieldStyles}
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className={fieldGroupStyles}>
                    <label className={labelStyles} htmlFor="company">
                      Company <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      className={fieldStyles}
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                    />
                  </div>

                  <div className={fieldGroupStyles}>
                    <label className={labelStyles} htmlFor="project-type">
                      Project Type <span aria-hidden="true" className="text-primary">*</span>
                    </label>
                    <select
                      id="project-type"
                      name="projectType"
                      className={fieldStyles}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      {projectTypes.map((projectType) => (
                        <option key={projectType} value={projectType}>
                          {projectType}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={fieldGroupStyles}>
                  <label className={labelStyles} htmlFor="budget-range">
                    Budget Range <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <select
                    id="budget-range"
                    name="budgetRange"
                    className={fieldStyles}
                    defaultValue=""
                    aria-describedby="budget-range-help"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budgetRange) => (
                      <option key={budgetRange} value={budgetRange}>
                        {budgetRange}
                      </option>
                    ))}
                  </select>
                  <p id="budget-range-help" className={helperTextStyles}>
                    A rough range helps shape the right scope and delivery path.
                  </p>
                </div>

                <div className={fieldGroupStyles}>
                  <label className={labelStyles} htmlFor="message">
                    Message <span aria-hidden="true" className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="min-h-40 w-full rounded-xl border border-border bg-background/80 px-3 py-3 text-sm leading-6 text-foreground shadow-sm outline-none transition duration-200 placeholder:text-muted-foreground hover:border-border-strong focus:border-border-strong focus:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    placeholder="Share the business problem, timeline, current systems, and what success should look like."
                    required
                  />
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="w-full transition duration-200 hover:-translate-y-0.5 sm:w-fit"
                  aria-label="Request consultation"
                >
                  Request Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
