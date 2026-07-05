"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useCookieConsent } from "./useCookieConsent";

type PreferenceKey = "analytics" | "marketing" | "preferences";

type PreferenceState = Record<PreferenceKey, boolean>;

const preferenceLabels: Array<{
  key: PreferenceKey | "necessary";
  title: string;
  description: string;
  disabled?: boolean;
}> = [
  {
    key: "necessary",
    title: "Essential",
    description: "Required for secure navigation and core website functions.",
    disabled: true,
  },
  {
    key: "analytics",
    title: "Analytics",
    description: "Helps AhasanHub understand aggregate website performance.",
  },
  {
    key: "marketing",
    title: "Marketing",
    description: "Allows campaign measurement and advertising pixels.",
  },
  {
    key: "preferences",
    title: "Preferences",
    description: "Stores non-essential display and experience preferences.",
  },
];

function Toggle({
  checked,
  disabled,
  label,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        checked
          ? "border-primary bg-primary"
          : "border-border-strong bg-muted",
        disabled && "cursor-not-allowed opacity-70",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block size-5 rounded-full bg-white shadow-sm transition-transform",
          checked ? "translate-x-5" : "translate-x-0.5",
        )}
      />
    </button>
  );
}

function ConsentButton({
  children,
  className,
  variant = "secondary",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold transition duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        variant === "secondary" &&
          "border border-border bg-surface text-foreground shadow-sm hover:bg-surface-muted",
        variant === "ghost" &&
          "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function CookieConsent() {
  const {
    acceptAll,
    consent,
    hasStoredConsent,
    isReady,
    rejectAll,
    resetConsent,
    savePreferences,
  } = useCookieConsent();
  const [showBanner, setShowBanner] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [preferences, setPreferences] = useState<PreferenceState>({
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setShowBanner(!hasStoredConsent);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hasStoredConsent, isReady]);

  useEffect(() => {
    if (!isPreferencesOpen) {
      return;
    }

    closeButtonRef.current?.focus();
  }, [isPreferencesOpen]);

  function closePreferences() {
    setIsPreferencesOpen(false);
  }

  function openPreferences() {
    setPreferences({
      analytics: consent?.analytics ?? false,
      marketing: consent?.marketing ?? false,
      preferences: consent?.preferences ?? false,
    });
    setIsPreferencesOpen(true);
  }

  function handleModalKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      closePreferences();
      return;
    }

    if (event.key !== "Tab" || !modalRef.current) {
      return;
    }

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  function handleAcceptAll() {
    acceptAll();
    setShowBanner(false);
    closePreferences();
  }

  function handleRejectAll() {
    rejectAll();
    setShowBanner(false);
  }

  function handleSavePreferences() {
    savePreferences(preferences);
    setShowBanner(false);
    closePreferences();
  }

  function handleResetConsent() {
    resetConsent();
    setShowBanner(true);
  }

  if (!isReady) {
    return null;
  }

  return (
    <>
      {showBanner ? (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-5xl rounded-2xl border border-border bg-surface/95 p-4 shadow-[0_24px_80px_color-mix(in_srgb,var(--foreground)_18%,transparent)] backdrop-blur-xl [animation:fade-up_240ms_ease-out_both] sm:right-4 sm:left-auto sm:max-w-md"
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Cookie preferences
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                We use cookies to improve analytics and enhance your experience.{" "}
                <Link
                  href="/privacy#cookies"
                  className="font-semibold text-architecture underline-offset-4 hover:underline"
                >
                  Cookie policy
                </Link>
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              <ConsentButton
                aria-label="Accept all cookies"
                variant="primary"
                onClick={handleAcceptAll}
              >
                Accept All
              </ConsentButton>
              <ConsentButton
                aria-label="Reject non-essential cookies"
                onClick={handleRejectAll}
              >
                Reject All
              </ConsentButton>
              <ConsentButton
                aria-label="Manage cookie preferences"
                variant="ghost"
                onClick={openPreferences}
              >
                Manage
              </ConsentButton>
            </div>
          </div>
        </section>
      ) : null}

      {hasStoredConsent && !showBanner ? (
        <button
          type="button"
          aria-label="Open cookie settings"
          onClick={handleResetConsent}
          className="fixed bottom-4 left-4 z-[80] rounded-full border border-border bg-surface/90 px-3 py-2 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur-xl transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Cookie settings
        </button>
      ) : null}

      {isPreferencesOpen ? (
        <div
          aria-labelledby="cookie-preferences-title"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/18 p-4 backdrop-blur-sm sm:items-center"
          onKeyDown={handleModalKeyDown}
          ref={modalRef}
          role="dialog"
        >
          <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-5 shadow-[0_28px_90px_color-mix(in_srgb,var(--foreground)_24%,transparent)]">
            <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
              <div>
                <h2
                  id="cookie-preferences-title"
                  className="text-lg font-bold text-foreground"
                >
                  Cookie preferences
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Choose which non-essential cookies AhasanHub can use.
                </p>
              </div>
              <button
                type="button"
                ref={closeButtonRef}
                aria-label="Close cookie preferences"
                onClick={closePreferences}
                className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {preferenceLabels.map((preference) => {
                const checked =
                  preference.key === "necessary"
                    ? true
                    : preferences[preference.key];

                return (
                  <div
                    key={preference.key}
                    className="flex items-start justify-between gap-4 rounded-xl border border-border bg-background/55 p-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {preference.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {preference.description}
                      </p>
                    </div>
                    <Toggle
                      checked={checked}
                      disabled={preference.disabled}
                      label={`${preference.title} cookies`}
                      onChange={(checkedValue) => {
                        if (preference.key === "necessary") {
                          return;
                        }

                        setPreferences((current) => ({
                          ...current,
                          [preference.key]: checkedValue,
                        }));
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <ConsentButton
                aria-label="Save selected cookie preferences"
                onClick={handleSavePreferences}
              >
                Save Preferences
              </ConsentButton>
              <ConsentButton
                aria-label="Accept all cookie categories"
                variant="primary"
                onClick={handleAcceptAll}
              >
                Accept All
              </ConsentButton>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
