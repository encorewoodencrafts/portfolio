"use client";

import * as React from "react";

export type ThemeName = "atelier" | "forest" | "ebony" | "linen";
export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: ThemeName;
  mode: ThemeMode;
  resolvedMode: "light" | "dark";
  setTheme: (t: ThemeName) => void;
  setMode: (m: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

const STORAGE_THEME = "encore-theme";
const STORAGE_MODE = "encore-mode";
// Custom event so writes from setTheme/setMode in this tab notify
// useSyncExternalStore subscribers (the native `storage` event only fires
// in *other* tabs).
const THEME_CHANGE_EVENT = "encore-theme-change";

export const themes: {
  id: ThemeName;
  label: string;
  description: string;
  swatches: { paper: string; ink: string; walnut: string; brass: string };
}[] = [
  {
    id: "atelier",
    label: "atelier",
    description: "cream paper · walnut · the classic encore",
    swatches: {
      paper: "#FAF7F2",
      ink: "#1A1612",
      walnut: "#6B4423",
      brass: "#B08D57",
    },
  },
  {
    id: "forest",
    label: "forest",
    description: "deep moss · brass · for organic projects",
    swatches: {
      paper: "#ECEBD9",
      ink: "#1A2A20",
      walnut: "#2A4634",
      brass: "#B08D57",
    },
  },
  {
    id: "ebony",
    label: "ebony",
    description: "luxe black · gold · evening boutique",
    swatches: {
      paper: "#15110C",
      ink: "#F0E3C2",
      walnut: "#D4A86A",
      brass: "#F0D28C",
    },
  },
  {
    id: "linen",
    label: "linen",
    description: "soft sage · terracotta · minimal residential",
    swatches: {
      paper: "#EFE9DD",
      ink: "#2C2A26",
      walnut: "#A8552C",
      brass: "#C89A6F",
    },
  },
];

function isThemeName(v: string | null): v is ThemeName {
  return v === "atelier" || v === "forest" || v === "ebony" || v === "linen";
}

function isThemeMode(v: string | null): v is ThemeMode {
  return v === "light" || v === "dark" || v === "system";
}

function getSystemMode(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readTheme(): ThemeName {
  if (typeof window === "undefined") return "atelier";
  try {
    const v = localStorage.getItem(STORAGE_THEME);
    return isThemeName(v) ? v : "atelier";
  } catch {
    return "atelier";
  }
}

function readMode(): ThemeMode {
  if (typeof window === "undefined") return "light";
  try {
    const v = localStorage.getItem(STORAGE_MODE);
    return isThemeMode(v) ? v : "light";
  } catch {
    return "light";
  }
}

/** Subscribes to all signals that can shift theme/mode/resolvedMode. */
function subscribeThemeChange(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", onChange);
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    mq.removeEventListener("change", onChange);
  };
}

function applyToDom(theme: ThemeName, resolvedMode: "light" | "dark") {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.mode = resolvedMode;
  root.style.colorScheme = resolvedMode;
}

// SSR snapshots — identical to the no-flash defaults so hydration matches.
const SSR_THEME: ThemeName = "atelier";
const SSR_MODE: ThemeMode = "light";
const SSR_RESOLVED: "light" | "dark" = "light";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Theme + mode are external state (localStorage + system pref); using
  // useSyncExternalStore avoids the setState-in-effect bootstrap cascade
  // and gives us correct SSR snapshots out of the box.
  const theme = React.useSyncExternalStore(
    subscribeThemeChange,
    readTheme,
    () => SSR_THEME
  );
  const mode = React.useSyncExternalStore(
    subscribeThemeChange,
    readMode,
    () => SSR_MODE
  );
  const systemMode = React.useSyncExternalStore(
    subscribeThemeChange,
    getSystemMode,
    () => SSR_RESOLVED
  );
  const resolvedMode: "light" | "dark" = mode === "system" ? systemMode : mode;

  // Sync DOM dataset whenever theme or resolved mode changes. The no-flash
  // inline script does the very first paint; this effect keeps DOM in step
  // for runtime changes.
  React.useEffect(() => {
    applyToDom(theme, resolvedMode);
  }, [theme, resolvedMode]);

  const setTheme = React.useCallback((t: ThemeName) => {
    try {
      localStorage.setItem(STORAGE_THEME, t);
    } catch {
      // localStorage may be unavailable in sandboxed iframes — in that case
      // we still dispatch the event so in-memory subscribers update via the
      // next read, which will fall back to defaults.
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  const setMode = React.useCallback((m: ThemeMode) => {
    try {
      localStorage.setItem(STORAGE_MODE, m);
    } catch {
      // see setTheme
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  const toggleMode = React.useCallback(() => {
    setMode(resolvedMode === "dark" ? "light" : "dark");
  }, [resolvedMode, setMode]);

  const value = React.useMemo(
    () => ({ theme, mode, resolvedMode, setTheme, setMode, toggleMode }),
    [theme, mode, resolvedMode, setTheme, setMode, toggleMode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

/** No-flash inline script — applied in <head> before hydration. */
export const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('${STORAGE_THEME}');
    var m = localStorage.getItem('${STORAGE_MODE}');
    if (t !== 'atelier' && t !== 'forest' && t !== 'ebony' && t !== 'linen') t = 'atelier';
    if (m !== 'light' && m !== 'dark' && m !== 'system') m = 'light';
    var resolved = m;
    if (m === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.dataset.theme = t;
    document.documentElement.dataset.mode = resolved;
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {}
})();
`;
