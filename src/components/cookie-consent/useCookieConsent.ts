"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  type CookieConsentPreferences,
  createConsent,
  getAcceptedConsent,
  getRejectedConsent,
  readStoredConsent,
  resetConsent as clearStoredConsent,
  writeStoredConsent,
} from "./cookieUtils";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

const GA_SCRIPT_ID = "ahasanhub-ga4-script";
const GA_INIT_SCRIPT_ID = "ahasanhub-ga4-init";
const META_PIXEL_SCRIPT_ID = "ahasanhub-meta-pixel";

function removeScript(id: string) {
  document.getElementById(id)?.remove();
}

function loadScript({ id, src }: { id: string; src: string }) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

function loadInlineScript({ id, content }: { id: string; content: string }) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.text = content;
  document.head.appendChild(script);
}

function loadGa4(measurementId: string) {
  const trackingFlags = window as unknown as Record<string, boolean>;
  trackingFlags[`ga-disable-${measurementId}`] = false;
  loadScript({
    id: GA_SCRIPT_ID,
    src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
  });
  loadInlineScript({
    id: GA_INIT_SCRIPT_ID,
    content: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', { anonymize_ip: true });
    `,
  });
}

function disableGa4(measurementId?: string) {
  if (measurementId) {
    const trackingFlags = window as unknown as Record<string, boolean>;
    trackingFlags[`ga-disable-${measurementId}`] = true;
  }

  removeScript(GA_SCRIPT_ID);
  removeScript(GA_INIT_SCRIPT_ID);
}

function loadMetaPixel(pixelId: string) {
  loadInlineScript({
    id: META_PIXEL_SCRIPT_ID,
    content: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `,
  });
}

function disableMetaPixel() {
  removeScript(META_PIXEL_SCRIPT_ID);

  if (window.fbq) {
    window.fbq = undefined;
  }

  if (window._fbq) {
    window._fbq = undefined;
  }
}

function applyScriptConsent(consent: CookieConsentPreferences | null) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (consent?.analytics && gaMeasurementId) {
    loadGa4(gaMeasurementId);
  } else {
    disableGa4(gaMeasurementId);
  }

  if (consent?.marketing && metaPixelId) {
    loadMetaPixel(metaPixelId);
  } else {
    disableMetaPixel();
  }
}

export function useCookieConsent() {
  const [isReady, setIsReady] = useState(false);
  const [consent, setConsent] = useState<CookieConsentPreferences | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const storedConsent = readStoredConsent();
      setConsent(storedConsent);
      applyScriptConsent(storedConsent);
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const saveConsent = useCallback((nextConsent: CookieConsentPreferences) => {
    writeStoredConsent(nextConsent);
    setConsent(nextConsent);
    applyScriptConsent(nextConsent);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent(getAcceptedConsent());
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    saveConsent(getRejectedConsent());
  }, [saveConsent]);

  const savePreferences = useCallback(
    (preferences: Omit<CookieConsentPreferences, "necessary" | "timestamp">) => {
      saveConsent(createConsent(preferences));
    },
    [saveConsent],
  );

  const resetConsent = useCallback(() => {
    clearStoredConsent();
    setConsent(null);
    applyScriptConsent(null);
  }, []);

  return useMemo(
    () => ({
      acceptAll,
      consent,
      hasStoredConsent: consent !== null,
      isReady,
      rejectAll,
      resetConsent,
      savePreferences,
    }),
    [
      acceptAll,
      consent,
      isReady,
      rejectAll,
      resetConsent,
      savePreferences,
    ],
  );
}
