"use client";
import Link from "next/link";
export default function ErrorPage({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container-reading public-page"
    >
      <h1>This page could not be loaded.</h1>
      <p role="alert">
        Please try again. No inquiry submission is confirmed by this message.
      </p>
      <div className="ui-actions">
        <button className="ui-button ui-button-primary" onClick={() => retry()}>
          Try again
        </button>
        <Link href="/">Return Home</Link>
      </div>
    </main>
  );
}
