// app/(marketing)/layout.tsx
import type { ReactNode } from "react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/motion/PageTransition";
import AnimatedBackground from "@/components/layout/background/AnimatedBackground";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh overflow-x-clip">
      {/* Background behind everything */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <AnimatedBackground />
      </div>

      {/* Marketing frame */}
      <div className="flex min-h-dvh flex-col">
        <header className="sticky top-0 z-50">
          <Navigation />
        </header>

        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
      </div>
    </div>
  );
}