import { publicMetadata } from "@/modules/discovery/metadata.server";
import {
  PublicPage,
  PublicSection,
  ProjectInvitation,
} from "@/modules/content/templates/public-page";
export const metadata = publicMetadata(
  "Our Work",
  "ARADUN project evidence with clear client, internal product and concept/demo classifications.",
  "/our-work",
);
export default function WorkPage() {
  return (
    <PublicPage
      title="Explore our work."
      intro="Understand the problem, the contribution and the evidence behind a project."
    >
      <PublicSection title="Project collection">
        <p className="public-empty">
          No approved project case studies are published yet.
        </p>
        <p>
          Client Work, ARADUN Internal Product and Concept/Demo work will be
          clearly distinguished. Client names, screenshots and outcomes require
          permission and supporting evidence.
        </p>
      </PublicSection>
      <ProjectInvitation />
    </PublicPage>
  );
}
