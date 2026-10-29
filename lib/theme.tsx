"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "colver-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === "light" || stored === "dark") {
        setThemeState(stored);
        applyThemeClass(stored);
      } else {
        // Default to dark as per Colver brand identity
        applyThemeClass("dark");
      }
    } catch {
      applyThemeClass("dark");
    }
    setMounted(true);
  }, []);

  const applyThemeClass = (t: Theme) => {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.colorScheme = "light";
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyThemeClass(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // storage unavailable
    }
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  const value = useMemo(
    () => ({
      theme: mounted ? theme : "dark",
      resolvedTheme: mounted ? theme : "dark",
      setTheme,
      toggleTheme,
    }),
    [theme, mounted]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Return a safe fallback during SSR/hydration
    return {
      theme: "dark" as Theme,
      resolvedTheme: "dark" as Theme,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return ctx;
}
