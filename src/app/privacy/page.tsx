import type { Metadata } from "next";
import Link from "next/link";
import { Container, Badge } from "@/components/ui";
import { pageSeo } from "@/data/seo";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata(pageSeo.privacy);

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            At AhasanHub, we are committed to protecting your privacy. This policy explains how we collect, use, and protect your information when you visit our website or interact with our consulting services.
          </p>
        </header>

        <div className="mt-10 space-y-10 text-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              1. Introduction
            </h2>
            <p className="leading-7 text-muted-foreground">
              AhasanHub ("we," "our," or "us") provides premium enterprise technology consulting services. We respect your privacy and process personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              2. Data We Collect
            </h2>
            <p className="leading-7 text-muted-foreground">
              We collect information to provide better services to our clients. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number, and company name when you fill out our contact forms.
              </li>
              <li>
                <strong>Usage Data:</strong> Technical details such as your IP address, browser type, device information, and pages visited, collected via cookies and tracking technologies.
              </li>
              <li>
                <strong>Communication Records:</strong> Any details you share during our consulting inquiries or through our support channels.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              3. How We Use Your Data
            </h2>
            <p className="leading-7 text-muted-foreground">
              Your personal data is used for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To provide and maintain our consulting services and products.</li>
              <li>To respond to your inquiries, schedule meetings, and communicate updates.</li>
              <li>To analyze site usage and optimize the user experience.</li>
              <li>To detect, prevent, and address technical or security issues.</li>
            </ul>
          </section>

          <section id="cookies" className="scroll-mt-24 space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                4. Cookie Policy
              </h2>
              <Badge variant="tech">Active Preferences</Badge>
            </div>
            <p className="leading-7 text-muted-foreground">
              Cookies are small text files placed on your device to collect standard internet log and visitor behavior information.
            </p>
            <p className="leading-7 text-muted-foreground">
              We use first-party cookies for essential site functionality and third-party cookies (such as Google Analytics) to analyze web traffic. You can customize your preferences using the cookie banner that appears on our site, or adjust your browser settings to decline cookies.
            </p>
            <p className="leading-7 text-muted-foreground">
              For more information on how to manage your cookie preferences, please consult your browser help files or visit our website's consent preferences widget.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              5. Data Security
            </h2>
            <p className="leading-7 text-muted-foreground">
              The security of your data is important to us. We implement industry-standard administrative, physical, and technical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              6. Your Rights
            </h2>
            <p className="leading-7 text-muted-foreground">
              Depending on your location, you have rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right of rectification if your information is inaccurate.</li>
              <li>The right to object to or restrict our processing of your personal data.</li>
              <li>The right to withdraw consent at any time where we rely on your consent.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              7. Contact Us
            </h2>
            <p className="leading-7 text-muted-foreground">
              If you have any questions about this Privacy Policy or wish to exercise any of your data protection rights, please contact us at:
            </p>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-semibold text-foreground">AhasanHub Legal Operations</p>
              <p className="text-muted-foreground mt-1">Email: <a href="mailto:ahasan.cse03@gmail.com" className="text-primary hover:underline">ahasan.cse03@gmail.com</a></p>
              <p className="text-muted-foreground mt-1">Website: <Link href="/" className="text-primary hover:underline">ahasanhub.com</Link></p>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
