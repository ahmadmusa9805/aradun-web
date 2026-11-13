import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { frontendEnv } from "@/config/env.server";
import localFont from "next/font/local";

const inter = localFont({
  src: "../../public/fonts/inter-latin-variable.woff2",
  weight: "400 800",
  style: "normal",
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: "Arial",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(frontendEnv.canonicalSiteUrl ?? frontendEnv.appUrl),
  title: "ARADUN — Technology & Digital Solutions",
  description: "Build. Automate. Grow.",
  robots: frontendEnv.indexingEnabled
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* CSSOM-selectable tokens remain same-origin and outside bundled stylesheet rewriting. */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link id="appearance-tokens" rel="stylesheet" href="/appearance.css" />
        {/* A same-origin parser-blocking script intentionally selects tokens before first paint. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/appearance.js" />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
