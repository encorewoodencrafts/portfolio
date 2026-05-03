"use client";

import * as React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const STORAGE = "encore-cookies";

function readConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { choice?: string };
    return parsed?.choice === "accept";
  } catch {
    return false;
  }
}

/**
 * Renders Vercel Analytics + Speed Insights only after the user has accepted
 * cookies via the cookie banner. The banner dispatches `encore-cookie-consent`
 * on decision; this component listens for it.
 */
export function ConsentedAnalytics() {
  const [consented, setConsented] = React.useState(false);

  React.useEffect(() => {
    const sync = () => setConsented(readConsent());
    sync();
    window.addEventListener("encore-cookie-consent", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("encore-cookie-consent", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (!consented) return null;
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
