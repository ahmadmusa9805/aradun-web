import { publicMetadata } from "@/modules/discovery/metadata.server";
import Link from "next/link";
import {
  PublicPage,
  PublicSection,
  ProjectInvitation,
} from "@/modules/content/templates/public-page";
export const metadata = publicMetadata(
  "Insights & Resources",
  "Practical guidance for technology and digital decisions. Approved ARADUN resources when available.",
  "/insights",
);
export default function InsightsPage() {
  return (
    <PublicPage
      title="Practical guidance for your digital decisions."
      intro="Explore the questions behind better websites, connected workflows and sustainable digital investment."
    >
      <PublicSection title="Insights & resources">
        <p className="public-empty">No articles are published yet.</p>
        <p>
          Explore the service guides and common questions while the resource
          collection is prepared.
        </p>
        <div className="ui-actions">
          <Link prefetch={false} href="/services">
            Explore Services
          </Link>
          <Link prefetch={false} href="/faq">
            FAQs &amp; Help
          </Link>
          <Link prefetch={false} href="/search">
            Search the website
          </Link>
        </div>
      </PublicSection>
      <ProjectInvitation />
    </PublicPage>
  );
}
