import type { Metadata } from "next";
import { SecurityPage } from "@/modules/identity/templates/security-page";
export const metadata: Metadata = {
  title: "My Account | ARADUN",
  robots: { index: false, follow: false },
};
export default function Page() {
  return <SecurityPage mode="account" title="My Account" />;
}
