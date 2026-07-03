import Image from "next/image";
import Link from "next/link";
import {
  MobileNavigationMenu,
  NavigationLinks,
} from "@/components/layout/navigation-links";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Container } from "@/components/ui";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-w-0 items-center"
            aria-label="AhasanHub home"
          >
            <Image
              src="/ahasanhub-logo.png"
              alt="AhasanHub"
              width={200}
              height={40}
              className="h-10 w-auto object-contain"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          <NavigationLinks />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavigationMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
