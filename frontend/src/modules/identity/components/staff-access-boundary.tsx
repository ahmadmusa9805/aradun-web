"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import { AppearanceSelector } from "@/components/theme/appearance-selector";
export type StaffActor = {
  displayName: string;
  roles: ("admin" | "sales" | "editor")[];
  areas: ("staff" | "content")[];
};
const StaffAccessContext = createContext<{
  onDenied: () => void;
  onSignedOut: (reason?: "password-changed") => void;
}>({ onDenied: () => {}, onSignedOut: () => {} });
export const useStaffAccess = () => useContext(StaffAccessContext);
function actorDto(value: unknown): StaffActor {
  if (!value || typeof value !== "object") throw Error();
  const row = value as Record<string, unknown>;
  if (
    Object.keys(row).some(
      (key) => !["displayName", "roles", "areas"].includes(key),
    ) ||
    typeof row.displayName !== "string" ||
    !row.displayName.length ||
    row.displayName.length > 120 ||
    !Array.isArray(row.roles) ||
    row.roles.length < 1 ||
    row.roles.length > 3 ||
    row.roles.some(
      (role) => !["admin", "sales", "editor"].includes(String(role)),
    ) ||
    new Set(row.roles).size !== row.roles.length ||
    !Array.isArray(row.areas) ||
    !row.areas.includes("staff") ||
    row.areas.length > 2 ||
    row.areas.some((area) => !["staff", "content"].includes(String(area)))
  )
    throw Error();
  return row as StaffActor;
}
export function StaffAccessBoundary({
  apiBaseUrl,
  area = "staff",
  main = true,
  children,
}: {
  apiBaseUrl: string;
  area?: "staff" | "content";
  main?: boolean;
  children: (actor: StaffActor) => ReactNode;
}) {
  const pathname = usePathname(),
    [actor, setActor] = useState<StaffActor | null>(null),
    [state, setState] = useState<
      "loading" | "denied" | "failure" | "signed-out" | "password-changed"
    >("loading"),
    [retry, setRetry] = useState(0),
    generation = useRef(0),
    feedback = useRef<HTMLParagraphElement>(null);
  function onDenied() {
    generation.current++;
    setActor(null);
    setState("denied");
  }
  function onSignedOut(reason?: "password-changed") {
    generation.current++;
    setActor(null);
    setState(reason ?? "signed-out");
  }
  useEffect(() => {
    let active = true;
    const controllers = new Set<AbortController>();
    async function refresh() {
      const epoch = ++generation.current,
        controller = new AbortController();
      controllers.add(controller);
      const timer = setTimeout(() => controller.abort(), 8000);
      try {
        const response = await fetch(
          `${apiBaseUrl}/api/identity/actor?area=${area}`,
          {
            credentials: "include",
            cache: "no-store",
            signal: controller.signal,
          },
        );
        if (!active || epoch !== generation.current) return;
        if (response.status === 401 || response.status === 403) {
          onDenied();
          return;
        }
        if (!response.ok) throw Error();
        const value = actorDto(await response.json());
        if (!active || epoch !== generation.current) return;
        if (!value.areas.includes(area)) {
          onDenied();
          return;
        }
        setActor(value);
      } catch {
        if (active && epoch === generation.current) {
          setActor(null);
          setState("failure");
        }
      } finally {
        clearTimeout(timer);
        controllers.delete(controller);
      }
    }
    setActor(null);
    setState("loading");
    void refresh();
    const focus = () => void refresh(),
      visibility = () => {
        if (document.visibilityState === "visible") void refresh();
      };
    window.addEventListener("focus", focus);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      active = false;
      generation.current++;
      controllers.forEach((controller) => controller.abort());
      window.removeEventListener("focus", focus);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [apiBaseUrl, area, pathname, retry]);
  useEffect(() => {
    if (!actor && state !== "loading") feedback.current?.focus();
  }, [actor, state]);
  if (actor)
    return (
      <StaffAccessContext.Provider value={{ onDenied, onSignedOut }}>
        {children(actor)}
      </StaffAccessContext.Provider>
    );
  const Container = main ? "main" : "section",
    Heading = main ? "h1" : "h2";
  return (
    <Container
      {...(main ? { id: "main-content", tabIndex: -1 } : {})}
      className="staff-access-fallback container-reading"
    >
      <Heading>
        {area === "content" ? "Content access" : "Staff access"}
      </Heading>
      <p
        ref={feedback}
        tabIndex={-1}
        role={
          ["loading", "signed-out", "password-changed"].includes(state)
            ? "status"
            : "alert"
        }
      >
        {state === "loading"
          ? "Checking staff access…"
          : state === "signed-out"
            ? "Signed out."
            : state === "password-changed"
              ? "Password changed. All sessions were revoked. Sign in again."
              : state === "denied"
                ? "Sign in again and complete verification before continuing."
                : "Staff access is temporarily unavailable. Please try again."}
      </p>
      {state !== "loading" && (
        <div className="ui-actions">
          <Link href="/staff/login">Sign in</Link>
          <Button
            variant="secondary"
            onClick={() => setRetry((value) => value + 1)}
          >
            Try again
          </Button>
        </div>
      )}
      <p>
        <Link href={main ? "/" : "/dashboard/account"}>
          {main ? "ARADUN home" : "My Account"}
        </Link>
      </p>
      <noscript>
        JavaScript is required to verify staff access. Business APIs
        independently require authorization.
      </noscript>
      {main && (
        <div className="appearance-utility">
          <AppearanceSelector />
        </div>
      )}
    </Container>
  );
}
