import type { ReactNode } from "react";

export function CatalogFrame({ children }: { children: ReactNode }) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container-marketing catalog-page"
    >
      {children}
    </main>
  );
}
