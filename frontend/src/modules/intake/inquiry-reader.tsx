"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useStaffAccess } from "@/modules/identity/components/staff-access-boundary";

type Summary = {
  id: string;
  reference: string;
  type: string;
  subject: string;
  name: string;
  status: string;
  createdAt: string;
};
type Detail = Summary & {
  email: string;
  company: string;
  message: string;
  budget: string;
  timeline: string;
  details: string;
  preferredTime: string;
  timezone: string;
  consultationState: string;
  catalogVersion: string;
  capturedAt: string;
  customRequested: boolean;
  offers: { id: string; name: string; packageId: string; priceLabel: string }[];
};
type Listing = { items: Summary[]; nextCursor: string | null };
const summaryKeys = [
  "id",
  "reference",
  "type",
  "subject",
  "name",
  "status",
  "createdAt",
];
const detailKeys = [
  ...summaryKeys,
  "email",
  "company",
  "message",
  "budget",
  "timeline",
  "details",
  "preferredTime",
  "timezone",
  "consultationState",
  "catalogVersion",
  "capturedAt",
];
function strings(
  value: unknown,
  keys: string[],
): value is Record<string, string> {
  return (
    !!value &&
    typeof value === "object" &&
    keys.every(
      (key) =>
        typeof (value as Record<string, unknown>)[key] === "string" &&
        ((value as Record<string, string>)[key]?.length ?? 0) <= 10000,
    )
  );
}
function summary(value: unknown): value is Summary {
  return (
    strings(value, summaryKeys) &&
    /^[a-f0-9]{24}$/.test(value.id!) &&
    ["contact", "quote", "consultation"].includes(value.type!) &&
    ["received", "in-review", "closed"].includes(value.status!) &&
    Number.isFinite(Date.parse(value.createdAt!))
  );
}
function decode(value: unknown, detail: boolean): Detail | Listing {
  if (!value || typeof value !== "object") throw Error();
  const row = value as Record<string, unknown>;
  if (detail) {
    if (
      !summary(value) ||
      !strings(value, detailKeys) ||
      typeof row.customRequested !== "boolean" ||
      !Array.isArray(row.offers) ||
      row.offers.length > 100 ||
      !row.offers.every((offer) =>
        strings(offer, ["id", "name", "packageId", "priceLabel"]),
      )
    )
      throw Error();
    return value as Detail;
  }
  if (
    !Array.isArray(row.items) ||
    row.items.length > 50 ||
    !row.items.every(summary) ||
    !(
      row.nextCursor === null ||
      (typeof row.nextCursor === "string" &&
        /^[A-Za-z0-9_-]{1,128}$/.test(row.nextCursor))
    )
  )
    throw Error();
  return value as Listing;
}

export function InquiryReader({
  apiBaseUrl,
  leadId,
}: {
  apiBaseUrl: string;
  leadId?: string;
}) {
  const { onDenied } = useStaffAccess();
  const [cursors, setCursors] = useState<string[]>([]),
    [retry, setRetry] = useState(0);
  const [result, setResult] = useState<{
    key: string;
    value?: Detail | Listing;
    error?: string;
  } | null>(null);
  const [copyState, setCopyState] = useState("");
  const feedback = useRef<HTMLParagraphElement>(null);
  const cursor = cursors.at(-1);
  const key = `${leadId ?? "list"}:${cursor ?? ""}`;
  useEffect(() => {
    let active = true,
      generation = 0;
    const controllers = new Set<AbortController>();
    async function read() {
      const epoch = ++generation;
      setResult(null);
      setCopyState("");
      if (leadId && !/^[a-f0-9]{24}$/.test(leadId)) {
        setResult({
          key,
          error: "Inquiry not found or unavailable to your account.",
        });
        return;
      }
      const controller = new AbortController();
      controllers.add(controller);
      const timer = setTimeout(() => controller.abort(), 8000);
      try {
        const response = await fetch(
          `${apiBaseUrl}/api/identity/inquiries${leadId ? `/${leadId}` : cursor ? `?cursor=${encodeURIComponent(cursor)}` : ""}`,
          {
            credentials: "include",
            cache: "no-store",
            signal: controller.signal,
          },
        );
        if (!active || epoch !== generation) return;
        if (response.status === 401 || response.status === 403) {
          onDenied();
          return;
        }
        if (response.status === 404) {
          setResult({
            key,
            error: "Inquiry not found or unavailable to your account.",
          });
          return;
        }
        if (!response.ok) throw Error();
        const value = decode(await response.json(), !!leadId);
        if (active && epoch === generation) setResult({ key, value });
      } catch {
        if (active && epoch === generation)
          setResult({
            key,
            error: "Inquiries are temporarily unavailable. Try again.",
          });
      } finally {
        clearTimeout(timer);
        controllers.delete(controller);
      }
    }
    const focus = () => {
      void read();
    };
    const visibility = () => {
      if (document.visibilityState === "visible") void read();
      else {
        generation++;
        setResult(null);
        controllers.forEach((c) => c.abort());
      }
    };
    void read();
    window.addEventListener("focus", focus);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      active = false;
      controllers.forEach((c) => c.abort());
      window.removeEventListener("focus", focus);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [apiBaseUrl, leadId, cursor, key, retry, onDenied]);
  const current = result?.key === key ? result : null;
  useEffect(() => {
    if (current) feedback.current?.focus();
  }, [current]);
  const data = current?.value;
  const detail = leadId && data && "offers" in data ? data : null;
  const list = !leadId && data && "items" in data ? data : null;
  const email = detail?.email.trim();
  const validEmail =
    !!email &&
    /^[^\s@<>?,;:\r\n]+@[^\s@<>?,;:\r\n]+\.[^\s@<>?,;:\r\n]+$/.test(email);
  return (
    <section
      className="inquiry-reader"
      aria-label={leadId ? "Inquiry details" : "Received inquiries"}
    >
      <h1>{leadId ? "Inquiry details" : "Client inquiries"}</h1>
      <p
        ref={feedback}
        tabIndex={-1}
        role={current?.error ? "alert" : "status"}
      >
        {!current
          ? "Loading inquiries…"
          : (current.error ??
            (detail
              ? `Request ${detail.reference}`
              : `${list?.items.length ?? 0} inquiries on this page.`))}
      </p>
      {current?.error && (
        <Button onClick={() => setRetry((n) => n + 1)}>Try again</Button>
      )}
      {leadId && (
        <p>
          <Link href="/dashboard/leads" prefetch={false}>
            Back to inquiries
          </Link>
        </p>
      )}
      {list && (
        <>
          {!list.items.length && (
            <p>No inquiries are available to your account.</p>
          )}
          <ul className="inquiry-list">
            {list.items.map((item) => (
              <li key={item.id}>
                <Link href={`/dashboard/leads/${item.id}`} prefetch={false}>
                  {item.reference}
                </Link>
                <p>
                  {item.name} · {item.type} · {item.status}
                </p>
                <p>{item.subject}</p>
                <time dateTime={item.createdAt}>
                  {new Date(item.createdAt).toUTCString()}
                </time>
              </li>
            ))}
          </ul>
          <div className="ui-actions">
            {!!cursors.length && (
              <Button
                variant="secondary"
                onClick={() => setCursors((values) => values.slice(0, -1))}
              >
                Previous page
              </Button>
            )}
            {list.nextCursor && (
              <Button
                onClick={() =>
                  setCursors((values) => [...values, list.nextCursor!])
                }
              >
                Next page
              </Button>
            )}
          </div>
        </>
      )}
      {detail && (
        <>
          <dl>
            {[
              ["Name", detail.name],
              ["Email", detail.email],
              ["Company", detail.company],
              ["Type", detail.type],
              ["Status", detail.status],
              ["Received (UTC)", new Date(detail.createdAt).toUTCString()],
              ["Subject", detail.subject],
              ["Message", detail.message],
              ["Budget", detail.budget],
              ["Timeline", detail.timeline],
              ["Additional details", detail.details],
              ["Preferred time", detail.preferredTime],
              ["Timezone", detail.timezone],
              ["Consultation state", detail.consultationState],
            ]
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
          </dl>
          {detail.customRequested && <p>Custom scope requested.</p>}
          {!!detail.offers.length && (
            <section aria-label="Submitted offer snapshot">
              <h2>Offers selected at submission</h2>
              <p>
                Catalog {detail.catalogVersion}; captured {detail.capturedAt}.
                Indicative terms; no binding quote total.
              </p>
              <ul>
                {detail.offers.map((offer, index) => (
                  <li key={`${offer.id}-${index}`}>
                    {offer.name} ({offer.id})
                    {offer.packageId ? ` · ${offer.packageId}` : ""}:{" "}
                    {offer.priceLabel}
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section aria-label="Reply to client">
            <h2>Reply to client</h2>
            <p>
              Reply manually using your mailbox. Nothing is sent automatically
              by these controls.
            </p>
            {validEmail ? (
              <div className="ui-actions">
                <a
                  href={`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${detail.reference}`)}`}
                >
                  Open email reply
                </a>
                <Button
                  variant="secondary"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(email);
                      setCopyState("Email address copied.");
                    } catch {
                      setCopyState(
                        "Could not copy. Select and copy the email address above.",
                      );
                    }
                  }}
                >
                  Copy email address
                </Button>
              </div>
            ) : (
              <p>Check the submitted email before replying.</p>
            )}
            <p role="status">{copyState}</p>
          </section>
          <p>
            Delivery status is not shown here. A saved request is not a
            confirmed booking, binding quote or payment.
          </p>
        </>
      )}
    </section>
  );
}
