export type CookieConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
};

export const COOKIE_CONSENT_KEY = "ahasanhub_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
} satisfies Omit<CookieConsentPreferences, "timestamp">;

export function createConsent(
  preferences: Partial<Omit<CookieConsentPreferences, "necessary" | "timestamp">>,
): CookieConsentPreferences {
  return {
    ...defaultConsent,
    ...preferences,
    necessary: true,
    timestamp: new Date().toISOString(),
  };
}

export function getDefaultConsent(): CookieConsentPreferences {
  return createConsent({});
}

export function getAcceptedConsent(): CookieConsentPreferences {
  return createConsent({
    analytics: true,
    marketing: true,
    preferences: true,
  });
}

export function getRejectedConsent(): CookieConsentPreferences {
  return createConsent({});
}

export function isCookieConsent(value: unknown): value is CookieConsentPreferences {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const consent = value as Partial<CookieConsentPreferences>;

  return (
    consent.necessary === true &&
    typeof consent.analytics === "boolean" &&
    typeof consent.marketing === "boolean" &&
    typeof consent.preferences === "boolean" &&
    typeof consent.timestamp === "string"
  );
}

function getCookieValue(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${name}=`));

  return cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : null;
}

function setCookieValue(name: string, value: string) {
  if (typeof document === "undefined") {
    return;
  }

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(
    value,
  )}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

function deleteCookieValue(name: string) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
}

export function readStoredConsent(): CookieConsentPreferences | null {
  if (typeof window === "undefined") {
    return null;
  }

  let localStorageValue: string | null = null;

  try {
    localStorageValue = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    localStorageValue = null;
  }

  const storedValue = localStorageValue ?? getCookieValue(COOKIE_CONSENT_KEY);

  if (!storedValue) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(storedValue) as unknown;
    return isCookieConsent(parsedValue) ? parsedValue : null;
  } catch {
    return null;
  }
}

export function writeStoredConsent(consent: CookieConsentPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  const value = JSON.stringify(consent);

  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    // Cookie fallback remains available when localStorage is unavailable.
  }

  setCookieValue(COOKIE_CONSENT_KEY, value);
}

export function resetConsent() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch {
    // Cookie fallback cleanup still runs below.
  }

  deleteCookieValue(COOKIE_CONSENT_KEY);
}

export function hasConsentCategory(
  consent: CookieConsentPreferences | null,
  category: "analytics" | "marketing" | "preferences",
) {
  return consent?.[category] === true;
}
