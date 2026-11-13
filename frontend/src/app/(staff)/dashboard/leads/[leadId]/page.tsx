import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { frontendEnv } from "@/config/env.server";
import { InquiryReader } from "@/modules/intake/inquiry-reader";
export const metadata: Metadata = {
  title: "Inquiry details | ARADUN",
  robots: { index: false, follow: false },
};
export default async function Page({
  params,
}: {
  params: Promise<{ leadId: string }>;
}) {
  const { leadId } = await params;
  if (frontendEnv.appEnv !== "development" || !/^[a-f0-9]{24}$/.test(leadId))
    notFound();
  return <InquiryReader apiBaseUrl={frontendEnv.apiBaseUrl} leadId={leadId} />;
}
