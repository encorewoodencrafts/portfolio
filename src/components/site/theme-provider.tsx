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

function getSystemMode(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function isThemeName(v: string | null): v is ThemeName {
  return v === "atelier" || v === "forest" || v === "ebony" || v === "linen";
}

function isThemeMode(v: string | null): v is ThemeMode {
  return v === "light" || v === "dark" || v === "system";
}

function applyTheme(theme: ThemeName, mode: ThemeMode) {
  const root = document.documentElement;
  const resolved = mode === "system" ? getSystemMode() : mode;
  root.dataset.theme = theme;
  root.dataset.mode = resolved;
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<ThemeName>("atelier");
  const [mode, setModeState] = React.useState<ThemeMode>("light");
  const [resolvedMode, setResolvedMode] = React.useState<"light" | "dark">(
    "light"
  );

  React.useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_THEME);
    const savedMode = localStorage.getItem(STORAGE_MODE);
    const t: ThemeName = isThemeName(savedTheme) ? savedTheme : "atelier";
    const m: ThemeMode = isThemeMode(savedMode) ? savedMode : "light";
    setThemeState(t);
    setModeState(m);
    setResolvedMode(m === "system" ? getSystemMode() : m);
    applyTheme(t, m);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      const cur = localStorage.getItem(STORAGE_MODE);
      if (cur === "system") {
        const sys = getSystemMode();
        setResolvedMode(sys);
        const curTheme = (localStorage.getItem(STORAGE_THEME) ?? "atelier") as ThemeName;
        applyTheme(curTheme, "system");
      }
    };
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  const setTheme = React.useCallback(
    (t: ThemeName) => {
      setThemeState(t);
      localStorage.setItem(STORAGE_THEME, t);
      applyTheme(t, mode);
    },
    [mode]
  );

  const setMode = React.useCallback(
    (m: ThemeMode) => {
      setModeState(m);
      localStorage.setItem(STORAGE_MODE, m);
      const resolved = m === "system" ? getSystemMode() : m;
      setResolvedMode(resolved);
      applyTheme(theme, m);
    },
    [theme]
  );

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
