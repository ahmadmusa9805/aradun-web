"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AppearanceSelector } from "@/components/theme/appearance-selector";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "./breadcrumbs";
import {
  StaffAccessBoundary,
  type StaffActor,
} from "@/modules/identity/components/staff-access-boundary";
const labels = { admin: "Admin", sales: "Sales", editor: "Editor" };
function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Staff navigation">
      <ul>
        <li>
          <Link
            href="/dashboard/account"
            aria-current={
              pathname === "/dashboard/account" ? "page" : undefined
            }
          >
            My Account
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/leads"
            prefetch={false}
            aria-current={pathname === "/dashboard/leads" ? "page" : undefined}
          >
            Client inquiries
          </Link>
        </li>
      </ul>
    </nav>
  );
}
function VerifiedShell({
  actor,
  children,
}: {
  actor: StaffActor;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLButtonElement>(null),
    main = useRef<HTMLElement>(null),
    close = useRef<HTMLButtonElement>(null),
    [open, setOpen] = useState(false);
  useEffect(() => {
    if (typeof matchMedia !== "function") return;
    const media = matchMedia("(min-width: 64rem)"),
      resize = () => {
        if (media.matches && dialog.current?.open) dialog.current.close();
      };
    media.addEventListener("change", resize);
    return () => media.removeEventListener("change", resize);
  }, []);
  return (
    <div className="dashboard-shell">
      <header className="staff-topbar">
        <div className="staff-topbar-identity">
          <Button
            ref={trigger}
            className="staff-drawer-trigger"
            variant="secondary"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="staff-navigation-drawer"
            onClick={() => {
              dialog.current?.showModal();
              setOpen(true);
              close.current?.focus();
            }}
          >
            Staff menu
          </Button>
          <Link className="staff-brand" href="/">
            ARADUN
          </Link>
          <span className="staff-actor">
            {actor.displayName}{" "}
            <span className="staff-role">
              {actor.roles.map((role) => labels[role]).join(" · ")}
            </span>
          </span>
        </div>
        <AppearanceSelector />
      </header>
      <aside className="staff-sidebar">
        <Navigation />
      </aside>
      <dialog
        ref={dialog}
        id="staff-navigation-drawer"
        className="staff-drawer"
        aria-label="Staff navigation menu"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const items = event.currentTarget.querySelectorAll<HTMLElement>(
            "button:not([disabled]), a[href]",
          );
          const first = items[0],
            last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => {
          setOpen(false);
          if (
            typeof matchMedia === "function" &&
            matchMedia("(min-width: 64rem)").matches
          )
            main.current?.focus();
          else trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              dialog.current?.close();
          }
        }}
      >
        <Button
          ref={close}
          variant="secondary"
          onClick={() => dialog.current?.close()}
        >
          Close staff menu
        </Button>
        <div
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a"))
              dialog.current?.close();
          }}
        >
          <Navigation />
        </div>
      </dialog>
      <main
        ref={main}
        id="main-content"
        tabIndex={-1}
        className="dashboard-main"
      >
        <Breadcrumbs
          parents={
            pathname.startsWith("/dashboard/content")
              ? [{ label: "My Account", href: "/dashboard/account" }]
              : []
          }
          current={
            pathname.startsWith("/dashboard/leads")
              ? "Client inquiries"
              : pathname.startsWith("/dashboard/content")
                ? "Content"
                : "My Account"
          }
        />
        <div className="staff-page-content">{children}</div>
      </main>
    </div>
  );
}
export function DashboardShell({
  apiBaseUrl,
  children,
}: {
  apiBaseUrl: string;
  children: ReactNode;
}) {
  return (
    <StaffAccessBoundary apiBaseUrl={apiBaseUrl}>
      {(actor) => <VerifiedShell actor={actor}>{children}</VerifiedShell>}
    </StaffAccessBoundary>
  );
}
