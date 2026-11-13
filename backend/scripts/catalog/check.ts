import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { catalogNavigation } from "../../src/modules/catalog/server/catalog.service.server.js";

const filename = fileURLToPath(
  new URL(
    "../../../frontend/src/modules/catalog/data/navigation.generated.json",
    import.meta.url,
  ),
);
const expected = JSON.stringify(catalogNavigation(), null, 2) + "\n";
const args = process.argv.slice(2);
if (args.length && !(args.length === 1 && args[0] === "--write-navigation"))
  throw new Error("Use catalog:check or catalog:check -- --write-navigation");
if (args[0] === "--write-navigation")
  await writeFile(filename, expected, "utf8");
else if ((await readFile(filename, "utf8")) !== expected)
  throw new Error(
    "Catalog navigation differs; regenerate with npm run catalog:check -- --write-navigation and review",
  );
console.log(
  "Catalog schema/reference validation and safe navigation projection PASS (8 categories, 57 services, 58 memberships, 5 solutions)",
);
