import { CollectionFilter } from "@/modules/content/components/collection-filter";
import navigation from "@/modules/catalog/data/navigation.generated.json";
import { publicMetadata } from "@/modules/discovery/metadata.server";
import { frontendEnv } from "@/config/env.server";
import { DemoProjects } from "@/modules/content/components/demo-projects";
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
export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const category =
    typeof params.category === "string" ? params.category : "all";
  return (
    <PublicPage
      title="Explore our work."
      intro="Understand the problem, the contribution and the evidence behind a project."
    >
      <PublicSection title="Browse by expertise">
        <CollectionFilter
          action="/our-work"
          name="category"
          label="Service category"
          selected={category}
          options={navigation.categories.map((item) => ({
            value: item.id,
            label: item.label,
          }))}
          buttonLabel="Filter projects"
          resetLabel="View all projects"
        />
      </PublicSection>
      <PublicSection title="Project collection">
        {frontendEnv.appEnv === "development" ? (
          <DemoProjects
            category={category}
            limit={params.view === "all" ? undefined : 12}
          />
        ) : (
          <>
            <p className="public-empty">
              No approved project case studies are published yet.
            </p>
            <p>
              Client Work, ARADUN Internal Product and Concept/Demo work will be
              clearly distinguished. Client names, screenshots and outcomes
              require permission and supporting evidence.
            </p>
          </>
        )}
      </PublicSection>
      <ProjectInvitation />
    </PublicPage>
  );
}
