import {
  businessDescription,
  operatorName,
  operatorEmail,
} from "@/modules/content/data/business-identity";
import { publicMetadata } from "@/modules/discovery/metadata.server";
import Link from "next/link";
import {
  PublicPage,
  PublicSection,
  ProjectInvitation,
} from "@/modules/content/templates/public-page";
import { principles, deliverySteps } from "@/modules/content/data/public-copy";
export const metadata = publicMetadata(
  "About ARADUN",
  "Technology and digital solutions based in Dhaka, Bangladesh. Learn about ARADUN's approach to scope, delivery and handoff.",
  "/about",
);
export default function AboutPage() {
  return (
    <PublicPage
      title="Technology & digital solutions for businesses."
      intro={businessDescription}
    >
      <PublicSection title="Purpose and direction" id="purpose">
        <p>
          Based in Dhaka, Bangladesh, ARADUN is positioned for business
          inquiries across markets. Start with a focused service or discuss how
          several capabilities could work together. The right engagement begins
          with a clear understanding of your goals and constraints.
        </p>
        <div className="public-grid principles">
          {principles.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="ui-actions section-link">
          <Link prefetch={false} href="/services">
            Explore Services
          </Link>
          <Link prefetch={false} href="/solutions">
            Business Solutions
          </Link>
          <Link prefetch={false} href="/pricing">
            Pricing &amp; Packages
          </Link>
        </div>
      </PublicSection>
      <PublicSection title="The person behind ARADUN" id="operator">
        <p>{operatorName} is the business operator and responsible contact.</p>
        <p>
          <a href={`mailto:${operatorEmail}`}>{operatorEmail}</a>
        </p>
      </PublicSection>
      <PublicSection title="How we work" id="working-together">
        <ol className="delivery-steps">
          {deliverySteps.map(([title, copy]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <p className="section-link">
          <Link prefetch={false} href="/faq">
            Read common questions about scope, pricing and working together
          </Link>
        </p>
      </PublicSection>
      {/* Genuine project/testimonial evidence remains omitted until permitted records exist. */}
      <ProjectInvitation />
    </PublicPage>
  );
}
