import type { Metadata } from "next";
import { SecurityPage } from "@/modules/identity/templates/security-page";
export const metadata: Metadata = {
  title: "Verify your identity | ARADUN",
  robots: { index: false, follow: false },
};
export default function Page() {
  return <SecurityPage mode="verify" title="Verify your identity" />;
}
