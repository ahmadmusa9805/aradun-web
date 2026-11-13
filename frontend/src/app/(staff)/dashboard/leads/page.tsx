import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { frontendEnv } from "@/config/env.server";
import { InquiryReader } from "@/modules/intake/inquiry-reader";
export const metadata: Metadata = {
  title: "Client inquiries | ARADUN",
  robots: { index: false, follow: false },
};
export default function Page() {
  if (frontendEnv.appEnv !== "development") notFound();
  return <InquiryReader apiBaseUrl={frontendEnv.apiBaseUrl} />;
}
