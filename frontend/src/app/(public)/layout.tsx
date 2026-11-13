import { notFound } from "next/navigation";
import { frontendEnv } from "@/config/env.server";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
export default function PublicLayout({ children }: { children: ReactNode }) {
  if (frontendEnv.appEnv !== "development") notFound();
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
