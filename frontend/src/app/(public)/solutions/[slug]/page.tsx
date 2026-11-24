import { completeMeta } from "@/modules/catalog/templates/complete-business-copy";
import { cloudSolutionMeta } from "@/modules/catalog/templates/cloud-solution-copy";
import { growthMeta } from "@/modules/catalog/templates/business-growth-copy";
import { businessAutomationMeta } from "@/modules/catalog/templates/business-automation-copy";
import { digitalPresenceMeta } from "@/modules/catalog/templates/digital-presence-copy";
import {
  publicMetadata,
  siteOrigin,
} from "@/modules/discovery/metadata.server";
import { BreadcrumbData } from "@/modules/discovery/components/breadcrumb-data";
import { notFound } from "next/navigation";
import { getSolution } from "@/modules/catalog/catalog-api.server";
import { CatalogFrame } from "@/modules/catalog/templates/catalog-frame";
import { SolutionTemplate } from "@/modules/catalog/templates/solution";
import { Feedback } from "@/components/feedback/feedback";
export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getSolution(slug);
  return result.state === "ready"
    ? publicMetadata(
        result.data.solution.name,
        result.data.solution.id === "SOL-001"
          ? digitalPresenceMeta
          : result.data.solution.id === "SOL-002"
            ? businessAutomationMeta
            : result.data.solution.id === "SOL-003"
              ? growthMeta
              : result.data.solution.id === "SOL-004"
                ? cloudSolutionMeta
                : result.data.solution.id === "SOL-005"
                  ? completeMeta
                  : result.data.solution.metaDescription,
        result.data.solution.href,
      )
    : { robots: { index: false, follow: false } };
}
export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getSolution(slug);
  if (result.state === "missing") notFound();
  return (
    <CatalogFrame>
      {result.state === "ready" && (
        <BreadcrumbData
          origin={siteOrigin}
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            {
              label: result.data.solution.name,
              href: result.data.solution.href,
            },
          ]}
        />
      )}
      {result.state === "ready" ? (
        <SolutionTemplate solution={result.data.solution} />
      ) : (
        <>
          <h1>Solution temporarily unavailable</h1>
          <Feedback state="failure">
            Check that the backend is running, then reload this page.
          </Feedback>
        </>
      )}
    </CatalogFrame>
  );
}
