"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { StaffAccessBoundary } from "@/modules/identity/components/staff-access-boundary";
export function ContentShell({
  apiBaseUrl,
  children,
}: {
  apiBaseUrl: string;
  children: ReactNode;
}) {
  return (
    <StaffAccessBoundary apiBaseUrl={apiBaseUrl} area="content" main={false}>
      {() => (
        <section aria-label="Content workspace">
          <nav aria-label="Content navigation">
            <Link href="/dashboard/account">My Account</Link>
            <span aria-current="page">Content</span>
          </nav>
          {children}
        </section>
      )}
    </StaffAccessBoundary>
  );
}
