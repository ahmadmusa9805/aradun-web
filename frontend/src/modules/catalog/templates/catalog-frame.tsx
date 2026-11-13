import type { ReactNode } from "react";

export function CatalogFrame({ children }: { children: ReactNode }) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container-marketing catalog-page"
    >
      <p className="catalog-preview">
        Development preview — content and offer readiness await review. No
        service availability or booking is confirmed.
      </p>
      {children}
    </main>
  );
}
