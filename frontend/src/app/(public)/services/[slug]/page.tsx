import { videoMeta } from "@/modules/catalog/templates/video-copy";
import { designMeta } from "@/modules/catalog/templates/design-copy";
import {
  publicMetadata,
  siteOrigin,
} from "@/modules/discovery/metadata.server";
import { BreadcrumbData } from "@/modules/discovery/components/breadcrumb-data";
import { notFound } from "next/navigation";
import { getCategory, getService } from "@/modules/catalog/catalog-api.server";
import { ServiceTemplate } from "@/modules/catalog/templates/service";
import { CatalogFrame } from "@/modules/catalog/templates/catalog-frame";
import { CategoryTemplate } from "@/modules/catalog/templates/category";
import { webCategoryMetaDescription } from "@/modules/catalog/templates/web-category-copy";
import { automationMeta } from "@/modules/catalog/templates/automation-copy";
import { marketingMeta } from "@/modules/catalog/templates/marketing-copy";
import { mobileMeta } from "@/modules/catalog/templates/mobile-copy";
import { cloudMeta } from "@/modules/catalog/templates/cloud-copy";
import { cyberMeta } from "@/modules/catalog/templates/cyber-copy";
import { Feedback } from "@/components/feedback/feedback";
import navigation from "@/modules/catalog/data/navigation.generated.json";

export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = navigation.categories.find(
    (item) => item.href === `/services/${slug}`,
  );
  if (category) {
    const result = await getCategory(slug);
    return result.state === "ready"
      ? publicMetadata(
          result.data.category.name,
          result.data.category.id === "CAT-01"
            ? webCategoryMetaDescription
            : result.data.category.id === "CAT-03"
              ? automationMeta
              : result.data.category.id === "CAT-04"
                ? marketingMeta
                : result.data.category.id === "CAT-02"
                  ? mobileMeta
                  : result.data.category.id === "CAT-05"
                    ? cloudMeta
                    : result.data.category.id === "CAT-06"
                      ? cyberMeta
                      : category.id === "CAT-07"
                        ? designMeta
                        : category.id === "CAT-08"
                          ? videoMeta
                          : result.data.category.intro,
          result.data.category.href,
        )
      : { robots: { index: false, follow: false } };
  }
  const result = await getService(slug);
  return result.state === "ready"
    ? publicMetadata(
        result.data.service.name,
        result.data.service.description,
        result.data.service.href,
      )
    : { robots: { index: false, follow: false } };
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getCategory(slug);
  const service =
    result.state === "missing" ? await getService(slug) : undefined;
  if (result.state === "missing" && service?.state === "missing") notFound();
  return (
    <CatalogFrame>
      {result.state === "ready" ? (
        <BreadcrumbData
          origin={siteOrigin}
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            {
              label: result.data.category.name,
              href: result.data.category.href,
            },
          ]}
        />
      ) : service?.state === "ready" ? (
        <BreadcrumbData
          origin={siteOrigin}
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            {
              label: service.data.service.parent.name,
              href: service.data.service.parent.href,
            },
            {
              label: service.data.service.name,
              href: service.data.service.href,
            },
          ]}
        />
      ) : null}
      {result.state === "ready" ? (
        <CategoryTemplate category={result.data.category} />
      ) : service?.state === "ready" ? (
        <ServiceTemplate service={service.data.service} />
      ) : (
        <>
          <h1>Services temporarily unavailable</h1>
          <Feedback state="failure">
            Service information is temporarily unavailable. Please try again or
            contact ARADUN to discuss your needs.
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
import Link from "next/link";
