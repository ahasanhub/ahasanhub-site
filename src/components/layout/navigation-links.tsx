"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

function isActiveRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function NavigationLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
      {primaryNavigation.map((item) => {
        const isActive = isActiveRoute(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
              "hover:bg-surface-muted hover:text-foreground",
              isActive && "bg-surface text-foreground shadow-sm",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNavigationMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-surface text-foreground shadow-sm transition-colors hover:bg-surface-muted"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-4" />
        ) : (
          <Menu aria-hidden="true" className="size-4" />
        )}
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-0 top-16 z-50 grid gap-1 border-b border-border bg-background px-page-x py-3 shadow-sm sm:px-page-x-sm"
          aria-label="Mobile primary"
        >
          {primaryNavigation.map((item) => {
            const isActive = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                  "hover:bg-surface-muted hover:text-foreground",
                  isActive && "bg-surface text-foreground shadow-sm",
                )}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
