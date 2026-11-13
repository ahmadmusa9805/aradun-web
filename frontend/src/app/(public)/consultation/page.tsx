import { BusinessContact } from "@/modules/content/components/business-contact";
import { publicMetadata } from "@/modules/discovery/metadata.server";
import { connection } from "next/server";
import { frontendEnv } from "@/config/env.server";
import { InquiryForm } from "@/modules/intake/components/inquiry-form";
import {
  PublicPage,
  PublicSection,
} from "@/modules/content/templates/public-page";
import Link from "next/link";
export const metadata = publicMetadata(
  "Consultation",
  "Describe the topic and your preferred time. This is a manual consultation request, pending confirmation.",
  "/consultation",
);
export default async function Page() {
  await connection();
  return (
    <PublicPage
      title="Request an initial consultation."
      intro="Use a free 15-minute initial screening to discuss your needs and a suitable next step. Your preferred time is a request, pending confirmation."
    >
      <PublicSection title="What to expect" id="what-to-expect">
        <ul className="public-next-steps">
          <li>Discuss your business goal and the problem you want to solve.</li>
          <li>
            Outline your current website, tools or workflow and the constraints
            that matter.
          </li>
          <li>
            Identify an appropriate next step and any information needed to
            clarify scope.
          </li>
        </ul>
        <p>
          This is an initial discussion. Detailed discovery, audits or
          consulting work may need a separate agreed scope and fee.
        </p>
      </PublicSection>
      <PublicSection title="Request a consultation" id="consultation-request">
        <p>
          Enter preferred days or times and your time zone. For example,
          Asia/Dhaka or Europe/London identifies the local time zone; submitting
          this form does not reserve a slot.
        </p>
        <InquiryForm type="consultation" apiBaseUrl={frontendEnv.apiBaseUrl} />
      </PublicSection>
      <PublicSection title="Preparation and alternatives" id="preparation">
        <p>
          Bring a short description of your goal, any existing website or tools,
          and questions you would like to discuss. Preparation notes are
          optional; do not send passwords or sensitive access details.
        </p>
        <div className="ui-actions">
          <Link prefetch={false} href="/get-a-quote">
            Get a Quote
          </Link>
          <Link prefetch={false} href="/contact">
            Send a general question
          </Link>
          <Link prefetch={false} href="/faq">
            FAQs &amp; Help
          </Link>
        </div>
        <BusinessContact />
        <p>
          Your inquiry is reviewed before any scope, schedule or appointment is
          agreed. No payment or booking is confirmed by submitting a request.
        </p>
      </PublicSection>
    </PublicPage>
  );
}
