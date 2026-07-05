"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";

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

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    email: string;
    projectType: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const projectType = formData.get("projectType") as string;

    // Simulate standard latency for premium feel
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmittedData({ fullName, email, projectType });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  if (isSubmitted && submittedData) {
    return (
      <Card
        aria-labelledby="success-title"
        aria-describedby="success-description"
        className="min-w-0 rounded-2xl border-border/80 bg-background/85 shadow-[0_18px_44px_color-mix(in_srgb,var(--foreground)_8%,transparent)] backdrop-blur transition duration-200 hover:border-border-strong animate-[fade-up_0.3s_ease-out]"
      >
        <CardHeader className="border-b border-border/70 text-center pb-8 pt-8">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-success/10 text-success">
            <Check className="size-7" />
          </div>
          <CardTitle id="success-title" className="mt-4 text-2xl">
            Inquiry Received
          </CardTitle>
          <CardDescription id="success-description" className="mt-1">
            Thank you, {submittedData.fullName}. We have received your consultation request.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-card pb-8">
          <div className="rounded-xl border border-border bg-surface-muted p-5 text-sm space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Inquirer:</span>
              <span className="font-medium text-foreground">{submittedData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span className="font-medium text-foreground">{submittedData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Focus Area:</span>
              <span className="font-medium text-foreground">{submittedData.projectType}</span>
            </div>
          </div>
          <p className="text-sm text-center text-muted-foreground leading-6">
            A consultant will review your specifications and contact you at{" "}
            <span className="font-medium text-foreground">{submittedData.email}</span>{" "}
            within 24 hours.
          </p>
          <div className="flex justify-center">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleReset}
              className="w-full sm:w-fit"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
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
          onSubmit={handleSubmit}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full transition duration-200 hover:-translate-y-0.5 sm:w-fit"
            aria-label="Request consultation"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request Consultation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
