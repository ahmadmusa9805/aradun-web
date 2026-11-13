import {
  publicMetadata,
  siteOrigin,
} from "@/modules/discovery/metadata.server";
import { BreadcrumbData } from "@/modules/discovery/components/breadcrumb-data";
import { notFound } from "next/navigation";
import { getCategories } from "@/modules/catalog/catalog-api.server";
import { CatalogFrame } from "@/modules/catalog/templates/catalog-frame";
import { ServicesOverview } from "@/modules/catalog/templates/services-overview";
import { Feedback } from "@/components/feedback/feedback";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const metadata = publicMetadata(
  "Services",
  "Explore eight categories of technology and digital work, compare services and discuss the scope your business needs.",
  "/services",
);
export default async function ServicesPage() {
  const result = await getCategories();
  if (result.state === "missing") notFound();
  return (
    <CatalogFrame>
      {result.state === "ready" && (
        <BreadcrumbData
          origin={siteOrigin}
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]}
        />
      )}
      {result.state === "ready" ? (
        <ServicesOverview categories={result.data.categories} />
      ) : (
        <>
          <h1>Services temporarily unavailable</h1>
          <Feedback state="failure">
            Service information is temporarily unavailable. Please try again or
            contact us to discuss your project. No inquiry has been submitted.
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
