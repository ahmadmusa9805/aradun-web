import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="container-reading public-page"
      >
        <h1>Page not found.</h1>
        <p>This page may have moved, may not be published, or may not exist.</p>
        <div className="ui-actions">
          <Link href="/">Return Home</Link>
          <Link href="/services">Explore Services</Link>
          <Link href="/search">Search</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
