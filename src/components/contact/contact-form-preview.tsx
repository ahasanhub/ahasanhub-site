import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";

const fieldStyles =
  "h-11 rounded-xl border border-border bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-border-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function ContactFormPreview() {
  return (
    <Card className="shadow-[0_18px_44px_color-mix(in_srgb,var(--foreground)_8%,transparent)]">
      <CardHeader>
        <CardTitle>Project inquiry</CardTitle>
        <CardDescription>
          Form structure is ready for a future backend integration. No data is
          submitted yet.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form aria-label="Project inquiry form" className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-foreground" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                className={fieldStyles}
                type="text"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-foreground" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="you@company.com"
                className={fieldStyles}
                type="email"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-foreground" htmlFor="topic">
              Request type
            </label>
            <select id="topic" name="topic" className={fieldStyles} defaultValue="">
              <option value="" disabled>
                Select a service area
              </option>
              <option>AI automation</option>
              <option>ERP architecture</option>
              <option>Cloud systems</option>
              <option>SaaS platform engineering</option>
              <option>Technical audit</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-foreground" htmlFor="message">
              Project context
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Share the business problem, timeline, and current system context."
              className="min-h-36 rounded-xl border border-border bg-background px-3 py-3 text-sm leading-6 text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-border-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-base font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Prepare Inquiry
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
