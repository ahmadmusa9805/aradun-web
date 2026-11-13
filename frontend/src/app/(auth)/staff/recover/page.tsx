import type { Metadata } from "next";
import { SecurityPage } from "@/modules/identity/templates/security-page";
export const metadata: Metadata = {
  title: "Recover staff access | ARADUN",
  robots: { index: false, follow: false },
};
export default function Page() {
  return <SecurityPage mode="recover" title="Recover staff access" />;
}
