import Link from "next/link";
import { Container } from "@/components/ui";
import { footerNavigation, primaryNavigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Link href="/" className="font-semibold text-foreground">
              AhasanHub
            </Link>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Connect. Create. Grow.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
            aria-label="Footer"
          >
            {[...primaryNavigation, ...footerNavigation].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
