import { publicMetadata } from "@/modules/discovery/metadata.server";
import { PolicyPage } from "@/modules/content/templates/policy";
import { privacySections } from "@/modules/content/data/policies";
export const metadata = publicMetadata(
  "Privacy Policy",
  "How ARADUN handles inquiry information and website privacy.",
  "/privacy",
);
export default function Page() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro="How ARADUN handles inquiry information and website privacy."
      sections={privacySections}
    />
  );
}
