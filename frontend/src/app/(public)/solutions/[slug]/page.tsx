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
        result.data.solution.metaDescription,
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
