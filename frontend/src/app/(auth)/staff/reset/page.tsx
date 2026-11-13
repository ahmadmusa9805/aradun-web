import type { Metadata } from "next";
import { SecurityPage } from "@/modules/identity/templates/security-page";
export const metadata: Metadata = {
  title: "Reset your password | ARADUN",
  robots: { index: false, follow: false },
};
export default function Page() {
  return <SecurityPage mode="reset" title="Reset your password" />;
}
