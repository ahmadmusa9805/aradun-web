import { readFileSync } from "node:fs";
import { parseEnv } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import assert from "node:assert/strict";
import { loadFrontendEnv } from "../frontend/src/config/env.public.ts";
import { loadBackendEnv } from "../backend/src/config/env.server.ts";
import { publishedCatalog } from "../backend/src/modules/catalog/server/publication.server.ts";

/** Local orchestration only. Never connects, provisions, sends, deploys or prints env values. */
export function inspectDeployment(frontend, backend) {
  let front, back;
  try {
    front = loadFrontendEnv(frontend);
  } catch {
    /* Name-only report below. */
  }
  try {
    back = loadBackendEnv(backend, ["database"]);
  } catch {
    /* No raw input/driver errors. */
  }
  const checks = {
    frontendConfigurationValid: !!front,
    backendConfigurationValid: !!back,
    matchingHostedTier:
      !!front &&
      !!back &&
      front.appEnv !== "development" &&
      front.appEnv === back.appEnv,
    matchingWebsiteOrigin: !!front && !!back && front.appUrl === back.appUrl,
    actualHostnamesConfigured:
      !!front &&
      !!back &&
      [front.appUrl, front.apiBaseUrl, front.canonicalSiteUrl].every(
        (value) =>
          value &&
          !/\.(?:invalid|test)$/.test(new URL(value).hostname) &&
          !["localhost", "127.0.0.1", "[::1]"].includes(
            new URL(value).hostname,
          ),
      ),
    limiterKeyConfigured: !!back?.rateLimitSecret,
    matchingReleaseIdentity:
      !!front?.publicReleaseId &&
      front.publicReleaseId === back?.publicReleaseId,
    deferredStaffFeaturesOff: !!back && !back.identity,
    publicInquiryDeliveryConfigured:
      !!back?.intake?.fixedInbox &&
      !!back?.email &&
      back.outbox.mode === "resend",
    operationalArmingAbsent: [
      "DB_OPERATIONS_URI",
      "ENABLE_LOCAL_STAFF_LIFECYCLE",
      "ALLOW_LOCAL_STAFF_BOOTSTRAP",
      "ARADUN_ATLAS_OWNER_SETUP",
    ].every((key) => !backend[key]),
  };
  return {
    checks,
    missing: Object.entries(checks)
      .filter(([, value]) => !value)
      .map(([key]) => key),
    configurationReady: Object.values(checks).every(Boolean),
    publicationAuthorized: false,
  };
}

function selfTest() {
  const frontend = {
    APP_ENV: "production",
    APP_URL: "https://www.example.com",
    API_BASE_URL: "https://api.example.com",
    CANONICAL_SITE_URL: "https://www.example.com",
    ANALYTICS_ENABLED: "false",
    PUBLIC_RELEASE_ID: "SAMPLE-release",
  };
  const backend = {
    APP_ENV: "production",
    NODE_ENV: "production",
    APP_URL: frontend.APP_URL,
    ALLOWED_ORIGINS: frontend.APP_URL,
    PORT: "4000",
    PUBLIC_INTAKE_ENABLED: "true",
    INTAKE_NOTIFICATION_MODE: "inbox",
    PRIVACY_NOTICE_VERSION: "SAMPLE-policy",
    EMAIL_PROVIDER: "resend",
    OUTBOX_MODE: "resend",
    JOB_TRIGGER_SECRET: Buffer.alloc(48, 4).toString("base64url"),
    RESEND_API_KEY: "re_SYNTHETIC_NOT_A_REAL_KEY",
    EMAIL_FROM: "sender@example.invalid",
    EMAIL_REPLY_TO: "reply@example.invalid",
    CONTACT_NOTIFICATION_EMAIL: "owner@example.invalid",
    MONGODB_URI:
      "mongodb+srv://SAMPLE:SAMPLE-not-real@cluster.example.com/aradun_production",
    MONGODB_DB_NAME: "aradun_production",
    RATE_LIMIT_HASH_SECRET: Buffer.alloc(48, 3).toString("base64url"),
    PUBLIC_RELEASE_ID: "SAMPLE-release",
  };
  assert.equal(inspectDeployment(frontend, backend).configurationReady, true);
  assert.equal(inspectDeployment({}, {}).configurationReady, false);
  assert.equal(
    inspectDeployment(frontend, {
      ...backend,
      MONGODB_DB_NAME: "aradun_development",
    }).checks.backendConfigurationValid,
    false,
  );
  assert.equal(
    inspectDeployment(frontend, {
      ...backend,
      DB_OPERATIONS_URI: "PRIVATE-SYNTHETIC-SENTINEL",
    }).configurationReady,
    false,
  );
  assert.equal(
    inspectDeployment(
      { ...frontend, NEXT_PUBLIC_SECRET: "PRIVATE-SYNTHETIC-SENTINEL" },
      backend,
    ).configurationReady,
    false,
  );
  assert.equal(
    inspectDeployment(frontend, backend).publicationAuthorized,
    false,
  );
  assert.equal(
    JSON.stringify(
      inspectDeployment(frontend, {
        ...backend,
        DB_OPERATIONS_URI: "PRIVATE-SYNTHETIC-SENTINEL",
      }),
    ).includes("PRIVATE-SYNTHETIC-SENTINEL"),
    false,
  );
  console.log(
    "Deployment configuration self-checks PASS (synthetic values only; no network).",
  );
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === "--self-test") {
    selfTest();
    return;
  }
  if (args.length !== 4 || args[0] !== "--frontend" || args[2] !== "--backend")
    throw Error();
  const result = inspectDeployment(
    parseEnv(readFileSync(args[1], "utf8")),
    parseEnv(readFileSync(args[3], "utf8")),
  );
  const frontInput = parseEnv(readFileSync(args[1], "utf8"));
  const approvedPublication = publishedCatalog(frontInput.PUBLIC_RELEASE_ID);
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const catalog = JSON.parse(
    readFileSync(
      path.join(root, "backend/src/modules/catalog/data/catalog-source.json"),
      "utf8",
    ),
  );
  const draftServices = catalog.services.filter(
    (item) => item.publication !== "published",
  ).length;
  const draftSolutions = catalog.solutions.filter(
    (item) => item.publication !== "published",
  ).length;
  console.log(
    JSON.stringify(
      {
        ...result,
        draftServices,
        draftSolutions,
        hostedRenderingReady:
          result.configurationReady && !!approvedPublication,
        releaseReady: false,
        releaseGates: [
          "Owner page/content/theme review and publication approval",
          "Approved catalog/content/commercial record matching PUBLIC_RELEASE_ID (not selected here)",
          "Eligible robots/sitemap gated on a matching live approved publication",
          "Runtime security/recovery/staging/rollback verification",
        ],
      },
      null,
      2,
    ),
  );
  if (
    !result.configurationReady ||
    !approvedPublication ||
    draftServices ||
    draftSolutions
  )
    process.exitCode = 1;
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  try {
    main();
  } catch {
    console.error(
      "Deployment configuration check refused or failed. Use --frontend <private-env-file> --backend <private-env-file>, or --self-test. No values or secrets logged; nothing deployed.",
    );
    process.exitCode = 1;
  }
}
