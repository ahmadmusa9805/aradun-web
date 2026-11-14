import { notFound } from "next/navigation";
import { frontendEnv } from "@/config/env.server";
import { getPublicRelease } from "@/modules/discovery/publication.server";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
export default async function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (frontendEnv.appEnv !== "development" && !(await getPublicRelease()))
    notFound();
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
