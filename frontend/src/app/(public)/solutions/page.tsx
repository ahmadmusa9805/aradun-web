import Link from "next/link";
import {
  publicMetadata,
  siteOrigin,
} from "@/modules/discovery/metadata.server";
import { BreadcrumbData } from "@/modules/discovery/components/breadcrumb-data";
import { notFound } from "next/navigation";
import { getSolutions } from "@/modules/catalog/catalog-api.server";
import { CatalogFrame } from "@/modules/catalog/templates/catalog-frame";
import { SolutionsOverview } from "@/modules/catalog/templates/solutions-overview";
import { Feedback } from "@/components/feedback/feedback";
export const dynamic = "force-dynamic";
export const metadata = publicMetadata(
  "Solutions",
  "Explore five business solution directions across digital presence, automation, growth, cloud and connected digital services.",
  "/solutions",
);
export default async function SolutionsPage() {
  const result = await getSolutions();
  if (result.state === "missing") notFound();
  return (
    <CatalogFrame>
      {result.state === "ready" && (
        <BreadcrumbData
          origin={siteOrigin}
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
          ]}
        />
      )}
      {result.state === "ready" ? (
        <SolutionsOverview solutions={result.data.solutions} />
      ) : (
        <>
          <h1>Solutions temporarily unavailable</h1>
          <Feedback state="failure">
            Solution information is temporarily unavailable. Please try again or
            contact ARADUN to discuss your requirements.
          </Feedback>
          <p>
            <Link prefetch={false} href="/contact">
              Contact ARADUN
            </Link>
          </p>
        </>
      )}
    </CatalogFrame>
  );
}
