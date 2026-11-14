import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** Keep local hot-reload output independent of verification/production builds. */
export default function config(phase) {
  return {
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-local" : ".next",
    async headers() {
      return process.env.APP_ENV === "production"
        ? []
        : [
            {
              source: "/:path*",
              headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
            },
          ];
    },
  };
}
