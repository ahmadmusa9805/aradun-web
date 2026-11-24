import { publicMetadata } from "@/modules/discovery/metadata.server";
import { connection } from "next/server";
import { frontendEnv } from "@/config/env.server";
import { Confirmation } from "@/modules/intake/templates/confirmation";
import { PublicPage } from "@/modules/content/templates/public-page";
export const metadata = publicMetadata(
  "Inquiry receipt",
  "Your inquiry reference and next steps, when a saved receipt is available.",
  "/thank-you",
);
export default async function Page() {
  await connection();
  return (
    <PublicPage
      title="Your inquiry and next steps."
      intro="See your confirmation below and find out what happens next."
    >
      <Confirmation apiBaseUrl={frontendEnv.apiBaseUrl} />
    </PublicPage>
  );
}
