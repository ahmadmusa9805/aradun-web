import "server-only";
import { cache } from "react";
import { frontendEnv } from "@/config/env.server";
import { readingSchema, type Reading } from "./reading";

export const getReading = cache(
  async (
    kind: Reading["kind"],
    slug: string,
  ): Promise<
    | { state: "ready"; data: Reading }
    | { state: "missing" }
    | { state: "unavailable" }
  > => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 160)
      return { state: "missing" };
    try {
      const response = await fetch(
        `${frontendEnv.apiBaseUrl}/api/content/${kind}/${slug}`,
        {
          cache: "no-store",
          signal: AbortSignal.timeout(3000),
        },
      );
      if (response.status === 404) return { state: "missing" };
      if (!response.ok) return { state: "unavailable" };
      const parsed = readingSchema.safeParse(await response.json());
      if (
        !parsed.success ||
        parsed.data.kind !== kind ||
        parsed.data.slug !== slug
      )
        return { state: "unavailable" };
      return { state: "ready", data: parsed.data };
    } catch {
      return { state: "unavailable" };
    }
  },
);
