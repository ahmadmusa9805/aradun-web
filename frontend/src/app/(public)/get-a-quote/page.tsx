import { publicMetadata } from "@/modules/discovery/metadata.server";
import { connection } from "next/server";
import { frontendEnv } from "@/config/env.server";
import { getPricing, getService } from "@/modules/catalog/catalog-api.server";
import { InquiryForm } from "@/modules/intake/components/inquiry-form";
import {
  PublicPage,
  PublicSection,
} from "@/modules/content/templates/public-page";
export const metadata = publicMetadata(
  "Get a Quote",
  "Share your project, choose services or request custom scope. Indicative prices are not a binding quotation.",
  "/get-a-quote",
);
export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await connection();
  const [result, params] = await Promise.all([getPricing(), searchParams]);
  const services = result.state === "ready" ? result.data.services : [],
    solutions = result.state === "ready" ? result.data.solutions : [];
  const values = (key: string) =>
    typeof params[key] === "string"
      ? [params[key]]
      : Array.isArray(params[key])
        ? params[key]
        : [];
  const serviceIds = [
    ...new Set([...values("serviceId"), ...values("serviceIds")]),
  ]
    .slice(0, 57)
    .filter((id) => services.some((item) => item.id === id));
  const solutionIds = [...new Set(values("solutionId"))]
    .slice(0, 5)
    .filter((id) => solutions.some((item) => item.id === id));
  const group =
    result.state === "ready" && typeof params.categoryId === "string"
      ? result.data.groups.find((item) => item.id === params.categoryId)
      : undefined;
  const requestedPackage =
    typeof params.packageId === "string" ? params.packageId : "";
  let pack = "",
    packageLabel = "";
  const packageOwner = /^((?:SVC|SOL)-[0-9]{3})-P0[1-3]$/.exec(
    requestedPackage,
  )?.[1];
  if (packageOwner && [...serviceIds, ...solutionIds].includes(packageOwner)) {
    const solution =
      result.state === "ready"
        ? result.data.solutions.find((item) => item.id === packageOwner)
        : undefined;
    const service = services.find((item) => item.id === packageOwner);
    const detail = service
      ? await getService(service.href.split("/").at(-1)!)
      : undefined;
    const options =
      solution?.prices ??
      (detail?.state === "ready" ? detail.data.service.prices : []);
    const option = options.find((item) => item.packageId === requestedPackage);
    if (option) {
      pack = option.packageId;
      packageLabel = `${solution?.name ?? service?.name} / ${option.tierLabel ?? "Selected option"} / ${option.price.label} USD`;
    }
  }
  const invalidSelection =
    [...values("serviceId"), ...values("serviceIds")].some(
      (id) => !services.some((item) => item.id === id),
    ) ||
    values("solutionId").some(
      (id) => !solutions.some((item) => item.id === id),
    ) ||
    Boolean(params.categoryId && !group) ||
    Boolean(
      params.packageId && (!pack || typeof params.packageId !== "string"),
    );
  return (
    <PublicPage
      title="What would you like to build?"
      intro="Share the need, choose the services you want to discuss, and review your request before sending. No automatic binding quote or payment."
    >
      <PublicSection title="Start your project brief.">
        {result.state !== "ready" && (
          <p role="status">
            The catalog is temporarily unavailable. You can still prepare a
            Custom / Not sure request.
          </p>
        )}
        <InquiryForm
          type="quote"
          apiBaseUrl={frontendEnv.apiBaseUrl}
          services={services.map(({ id, name }) => ({ id, name }))}
          solutions={solutions.map(({ id, name }) => ({ id, name }))}
          initialServiceIds={serviceIds}
          initialSolutionIds={solutionIds}
          initialPackageId={pack}
          initialPackageLabel={packageLabel}
          initialCategory={
            group
              ? {
                  name: group.name,
                  serviceIds: group.services.map((item) => item.id),
                }
              : undefined
          }
          initialSelectionNotice={
            invalidSelection
              ? "Some incoming choices are unavailable. Review your services and options before continuing."
              : undefined
          }
        />
      </PublicSection>
    </PublicPage>
  );
}
