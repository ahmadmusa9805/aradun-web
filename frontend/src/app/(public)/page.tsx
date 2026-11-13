import { publicMetadata } from "@/modules/discovery/metadata.server";
import { Home } from "@/modules/content/templates/home";
import { getSolutions } from "@/modules/catalog/catalog-api.server";
export const dynamic = "force-dynamic";
export const metadata = publicMetadata(
  "ARADUN | Technology & Digital Solutions",
  "Explore technology and digital services, business solutions and indicative starting prices for your next project.",
  "/",
);
export default async function HomePage() {
  const result = await getSolutions();
  return (
    <Home solutions={result.state === "ready" ? result.data.solutions : []} />
  );
}
