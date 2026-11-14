import { catalogSchema } from "../validation/input.schema.js";
import { catalogRelease } from "../data/catalog-release.js";

/** Approval metadata remains private; expose only identity and canonical public catalog paths. */
export function publishedCatalog(
  releaseId?: string,
  source: unknown = catalogRelease,
) {
  if (!releaseId || !/^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$/.test(releaseId))
    return null;
  const parsed = catalogSchema.safeParse(source);
  if (
    !parsed.success ||
    parsed.data.releaseStatus !== "approved" ||
    parsed.data.publicationApproval?.releaseId !== releaseId
  )
    return null;
  return {
    releaseId,
    catalogPaths: [
      ...parsed.data.categories,
      ...parsed.data.services,
      ...parsed.data.solutions,
    ]
      .map((item) => item.route)
      .sort(),
  };
}
