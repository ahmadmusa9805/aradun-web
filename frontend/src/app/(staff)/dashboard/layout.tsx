import type { ReactNode } from "react";
import type { Metadata } from "next";
import { connection } from "next/server";
import { frontendEnv } from "@/config/env.server";
import { DashboardShell } from "@/components/layout/dashboard-shell";
export const metadata: Metadata = { robots: { index: false, follow: false } };
export default async function StaffLayout({
  children,
}: {
  children: ReactNode;
}) {
  await connection();
  return (
    <DashboardShell apiBaseUrl={frontendEnv.apiBaseUrl}>
      {children}
    </DashboardShell>
  );
}
