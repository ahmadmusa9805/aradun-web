import { publicMetadata } from "@/modules/discovery/metadata.server";
import { PolicyPage } from "@/modules/content/templates/policy";
import { termsSections } from "@/modules/content/data/policies";
export const metadata = publicMetadata(
  "Website Terms",
  "Information about using the ARADUN website, indicative prices and business inquiries.",
  "/terms",
);
export default function Page() {
  return (
    <PolicyPage
      title="Website Terms"
      intro="Information about using the ARADUN website, indicative prices and business inquiries."
      sections={termsSections}
    />
  );
}
