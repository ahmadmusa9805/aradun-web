import Link from "next/link";
import {
  businessDescription,
  businessName,
  operatorName,
  operatorEmail,
} from "../data/business-identity";
import { policyUpdated } from "../data/policies";
import { PublicPage, PublicSection } from "./public-page";
export function PolicyPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: readonly { title: string; paragraphs: readonly string[] }[];
}) {
  return (
    <PublicPage title={title} intro={intro}>
      <div className="policy-body">
        <p>
          Last updated: <time dateTime="2026-11-12">{policyUpdated}</time>
        </p>
        <PublicSection title="Business and contact">
          <p>{businessDescription}</p>
          <dl className="intake-review">
            <dt>Business</dt>
            <dd>{businessName}</dd>
            <dt>Operator and responsible contact</dt>
            <dd>{operatorName}</dd>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${operatorEmail}`}>{operatorEmail}</a>
            </dd>
            <dt>Location</dt>
            <dd>Dhaka, Bangladesh</dd>
          </dl>
        </PublicSection>
        {sections.map((section) => (
          <PublicSection title={section.title} key={section.title}>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </PublicSection>
        ))}
        <PublicSection title="Contact the operator">
          <p>
            For questions about this policy or the website, contact{" "}
            <a href={`mailto:${operatorEmail}`}>{operatorEmail}</a>.
          </p>
          <div className="ui-actions">
            <Link prefetch={false} href="/privacy">
              Privacy Policy
            </Link>
            <Link prefetch={false} href="/terms">
              Website Terms
            </Link>
            <Link prefetch={false} href="/contact">
              Contact ARADUN
            </Link>
          </div>
        </PublicSection>
      </div>
    </PublicPage>
  );
}
