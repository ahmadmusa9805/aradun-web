import Link from "next/link";
import {
  publicMetadata,
  siteOrigin,
} from "@/modules/discovery/metadata.server";
import { BreadcrumbData } from "@/modules/discovery/components/breadcrumb-data";
import { notFound } from "next/navigation";
import { getPricing } from "@/modules/catalog/catalog-api.server";
import { CatalogFrame } from "@/modules/catalog/templates/catalog-frame";
import { PricingTemplate } from "@/modules/catalog/templates/pricing";
import { Feedback } from "@/components/feedback/feedback";
export const dynamic = "force-dynamic";
export const metadata = publicMetadata(
  "Pricing & Packages",
  "Compare indicative USD starting prices for ARADUN services and solutions. Final scope, fees and billing terms require agreement.",
  "/pricing",
);
export default async function PricingPage() {
  const result = await getPricing();
  if (result.state === "missing") notFound();
  return (
    <CatalogFrame>
      {result.state === "ready" && (
        <BreadcrumbData
          origin={siteOrigin}
          items={[
            { label: "Home", href: "/" },
            { label: "Pricing & Packages", href: "/pricing" },
          ]}
        />
      )}
      {result.state === "ready" ? (
        <PricingTemplate data={result.data} />
      ) : (
        <>
          <h1>Pricing temporarily unavailable</h1>
          <Feedback state="failure">
            Pricing information is temporarily unavailable. Please try again or
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
