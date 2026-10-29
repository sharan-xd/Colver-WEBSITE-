import type { ReactNode } from "react";
import AppShell from "@/components/layout/AppShell";
import PageTransition from "@/components/motion/PageTransition";
import AnimatedBackground from "@/components/layout/background/AnimatedBackground";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Background ambient lighting behind everything */}
      <AnimatedBackground />

      {/* Main App Frame with Persistent Sidebar & Header */}
      <AppShell>
        <PageTransition>{children}</PageTransition>
      </AppShell>
    </div>
  );
}
