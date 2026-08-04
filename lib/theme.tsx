"use client";

import React, { createContext, useContext, useEffect, useMemo } from "react";

interface ThemeContextType {
  // Always dark; keep resolvedTheme for components that rely on it
  resolvedTheme: "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyDarkClass() {
  const root = document.documentElement;
  root.classList.remove("light");
  root.classList.add("dark");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      applyDarkClass();
    } catch (e) {
      // fail silently in non-browser environments
    }
  }, []);

  const value = useMemo(() => ({ resolvedTheme: "dark" as const }), []);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
