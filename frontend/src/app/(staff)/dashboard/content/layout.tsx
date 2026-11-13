import type { ReactNode } from "react";
import { connection } from "next/server";
import { frontendEnv } from "@/config/env.server";
import { ContentShell } from "@/components/layout/content-shell";
export default async function ContentLayout({
  children,
}: {
  children: ReactNode;
}) {
  await connection();
  return (
    <ContentShell apiBaseUrl={frontendEnv.apiBaseUrl}>{children}</ContentShell>
  );
}
