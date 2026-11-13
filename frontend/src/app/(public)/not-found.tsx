import Link from "next/link";
export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container-reading public-page"
    >
      <h1>Page not found.</h1>
      <p>This page may have moved, may not be published, or may not exist.</p>
      <div className="ui-actions">
        <Link prefetch={false} href="/">
          Return Home
        </Link>
        <Link prefetch={false} href="/services">
          Explore Services
        </Link>
        <Link prefetch={false} href="/search">
          Search
        </Link>
      </div>
    </main>
  );
}
