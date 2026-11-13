"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export function Confirmation({ apiBaseUrl }: { apiBaseUrl: string }) {
  const [receipt, setReceipt] = useState<{
      reference: string;
      type: string;
      emailDeliveryEnabled?: boolean;
    } | null>(null),
    [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController(),
      timer = setTimeout(() => controller.abort(), 8000);
    async function read() {
      try {
        const value = JSON.parse(
          sessionStorage.getItem("aradun-inquiry-receipt") ?? "null",
        );
        if (
          !value ||
          typeof value.receiptToken !== "string" ||
          value.receiptToken.length > 250
        )
          return;
        const response = await fetch(`${apiBaseUrl}/api/intake/receipt`, {
          method: "POST",
          cache: "no-store",
          credentials: "omit",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: value.receiptToken }),
          signal: controller.signal,
        });
        if (!response.ok) return;
        const verified = await response.json();
        if (
          /^ARQ-[0-9]{4}-[a-f0-9]{24}$/.test(verified.reference) &&
          ["contact", "quote", "consultation"].includes(verified.type) &&
          verified.delivery === "queued" &&
          verified.bookingConfirmed === false
        )
          setReceipt(verified);
      } catch {
        /* Expired, unavailable or absent receipt is never a conversion. */
      } finally {
        setLoading(false);
        clearTimeout(timer);
      }
    }
    void read();
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [apiBaseUrl]);
  return (
    <section className="public-section">
      {loading ? (
        <p role="status">Checking your receipt...</p>
      ) : receipt ? (
        <>
          <h2>Request received.</h2>
          <p>
            Your reference: <strong>{receipt.reference}</strong>
          </p>
          <p>
            Keep this reference for follow-up. Your request was saved for
            review. Email delivery has not been confirmed.
          </p>
          {receipt.emailDeliveryEnabled === false && (
            <p>
              Email notifications are currently off. Your saved request remains
              available for review.
            </p>
          )}
          <p>
            Please do not resubmit to obtain an email confirmation. If you need
            to follow up, email{" "}
            <a
              href={`mailto:hello@aradun.com?subject=${encodeURIComponent(`Inquiry follow-up: ${receipt.reference}`)}`}
            >
              hello@aradun.com
            </a>{" "}
            and include your reference.
          </p>
          {receipt.type === "consultation" && (
            <p>
              Your consultation is a request only. No appointment is booked
              until staff confirm the time with you.
            </p>
          )}
        </>
      ) : (
        <>
          <h2>No current verified receipt available.</h2>
          <p>
            Your receipt may have expired or the service may be unavailable.
            Opening this page does not submit an inquiry or confirm a booking.
            If you already received a reference, keep it and avoid resubmitting.
          </p>
        </>
      )}
      <div className="ui-actions">
        <Link href="/">Return Home</Link>
        <Link href="/services">Explore Services</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </section>
  );
}
