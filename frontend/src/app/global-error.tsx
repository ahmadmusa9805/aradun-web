"use client";
export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main id="main-content">
          <h1>ARADUN is temporarily unavailable.</h1>
          <p>
            Please retry. No inquiry submission is confirmed by this message.
          </p>
          <button onClick={() => retry()}>Try again</button>
          <p>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- full document navigation must recover a failed root layout */}
            <a href="/">Return Home</a>
          </p>
        </main>
      </body>
    </html>
  );
}
