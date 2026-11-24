import Link from "next/link";
import type { ReactNode } from "react";
export function PublicPage({
  title,
  intro,
  children,
  compact = false,
}: {
  title: string;
  intro: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`container-marketing public-page${compact ? " inquiry-page" : ""}`}
    >
      <header className="public-hero">
        <p className="public-eyebrow">
          ARADUN / Technology &amp; Digital Solutions
        </p>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </header>
      {children}
    </main>
  );
}
export function PublicSection({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section className="public-section" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export function ProjectInvitation({ id }: { id?: string } = {}) {
  return (
    <section className="public-invitation" id={id}>
      <p className="public-eyebrow">Your next step</p>
      <h2>Tell us what you want to build, improve, or automate.</h2>
      <p>
        Share a short description of your project. We'll review your needs and
        discuss an appropriate next step.
      </p>
      <div className="ui-actions">
        <Link
          prefetch={false}
          className="ui-button ui-button-primary"
          href="/get-a-quote"
        >
          Get a Quote
        </Link>
        <Link
          prefetch={false}
          className="ui-button ui-button-secondary"
          href="/consultation"
        >
          Request a Consultation
        </Link>
        <Link prefetch={false} href="/contact">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
