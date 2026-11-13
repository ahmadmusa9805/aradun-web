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
  "Contact",
  "Ask a general question, discuss an existing relationship or tell us what you need.",
  "/contact",
);
export default async function Page() {
  await connection();
  return (
    <PublicPage
      title="How can we help?"
      intro="Ask a general question, discuss an existing relationship or tell us what you need."
    >
      <nav className="ui-actions" aria-label="Choose your inquiry path">
        <Link prefetch={false} href="/get-a-quote">
          Get a project quote
        </Link>
        <Link prefetch={false} href="/consultation">
          Request a consultation
        </Link>
      </nav>
      <PublicSection title="Send a message" id="contact-form">
        <p>
          Send a general question or partnership inquiry. Name, email, subject
          and message are required; company and website are optional. You do not
          need an account.
        </p>
        <InquiryForm type="contact" apiBaseUrl={frontendEnv.apiBaseUrl} />
      </PublicSection>
      <PublicSection title="Contact details" id="contact-details">
        <BusinessContact />
        <p>
          Prefer email? Send your question or brief directly. Please do not
          include passwords, access credentials or sensitive documents.
        </p>
        <div className="ui-actions">
          <Link prefetch={false} href="/get-a-quote">
            Get a Quote
          </Link>
          <Link prefetch={false} href="/consultation">
            Request a Consultation
          </Link>
          <Link prefetch={false} href="/faq">
            FAQs &amp; Help
          </Link>
        </div>
      </PublicSection>
      <PublicSection title="What happens next?" id="next-steps">
        <ol className="public-next-steps">
          <li>We review the topic and the information you share.</li>
          <li>
            We respond about an appropriate next step, such as clarifying your
            needs or discussing a project scope.
          </li>
          <li>Any scope, schedule, fee or appointment is agreed separately.</li>
        </ol>
        <p>
          Your inquiry is reviewed before any scope, schedule or appointment is
          agreed. No payment or booking is confirmed by submitting a request.
        </p>
      </PublicSection>
    </PublicPage>
  );
}
