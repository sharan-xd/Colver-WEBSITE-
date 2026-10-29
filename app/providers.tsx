"use client";

import React from "react";
import { ThemeProvider } from "@/lib/theme";
import { ToastProvider } from "@/components/ui/Toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  );
}
