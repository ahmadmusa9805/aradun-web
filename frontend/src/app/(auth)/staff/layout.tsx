import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { AppearanceSelector } from "@/components/theme/appearance-selector";
export const metadata: Metadata = { robots: { index: false, follow: false } };
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="auth-shell">
      <Link className="staff-brand" href="/" aria-label="ARADUN home">
        ARADUN
      </Link>
      <p className="staff-sign-in-eyebrow">Staff access</p>
      {children}
      <div className="appearance-utility">
        <AppearanceSelector />
      </div>
    </main>
  );
}
