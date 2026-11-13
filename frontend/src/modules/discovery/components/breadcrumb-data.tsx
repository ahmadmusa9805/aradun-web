import { breadcrumbData, jsonLd } from "../seo";
export function BreadcrumbData({
  origin,
  items,
}: {
  origin: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd(breadcrumbData(origin, items)),
      }}
    />
  );
}
