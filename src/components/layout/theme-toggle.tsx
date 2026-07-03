"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeOption = {
  label: string;
  value: "light" | "dark" | "system";
  icon: typeof Sun;
};

const themes: ThemeOption[] = [
  { label: "Light", value: "light", icon: Sun },
  { label: "Dark", value: "dark", icon: Moon },
  { label: "System", value: "system", icon: Monitor },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="inline-flex h-9 items-center rounded-xl border border-border bg-surface p-1 shadow-sm"
      aria-label="Theme"
    >
      {themes.map(({ label, value, icon: Icon }) => {
        const isActive = mounted && theme === value;

        return (
          <button
            key={value}
            type="button"
            className={cn(
              "inline-flex size-7 items-center justify-center rounded-lg text-muted-foreground transition-colors",
              "hover:bg-surface-muted hover:text-foreground",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              isActive && "bg-primary text-primary-foreground shadow-sm",
            )}
            aria-label={`Use ${label.toLowerCase()} theme`}
            aria-pressed={isActive}
            title={label}
            onClick={() => setTheme(value)}
          >
            <Icon aria-hidden="true" className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
