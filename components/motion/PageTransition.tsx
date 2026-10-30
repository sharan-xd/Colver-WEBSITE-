"use client";

import React from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}
