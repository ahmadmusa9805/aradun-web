"use client";

import { inquiryReferencePattern } from "../reference";

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
          inquiryReferencePattern.test(verified.reference) &&
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
    <section className="public-section inquiry-confirmation">
      {loading ? (
        <p role="status">Getting your confirmation...</p>
      ) : receipt ? (
        <>
          <h2>Thank you. We've received your request.</h2>
          <p>
            Your reference: <strong>{receipt.reference}</strong>
          </p>
          <p>
            Your message is safely saved. Our team will review the details and
            reply to discuss the next step.
          </p>
          {receipt.emailDeliveryEnabled === false && (
            <p>
              Your request is saved, but email notifications are currently
              unavailable. You can email us below if you need an update.
            </p>
          )}
          <p>
            Want to add something or ask a question? Email{" "}
            <a
              href={`mailto:hello@aradun.com?subject=${encodeURIComponent(`Inquiry follow-up: ${receipt.reference}`)}`}
            >
              hello@aradun.com
            </a>{" "}
            and mention your reference so we can find your message.
          </p>
          {receipt.type === "consultation" && (
            <p>
              We'll contact you by email to agree a suitable consultation time.
            </p>
          )}
        </>
      ) : (
        <>
          <h2>We couldn't display your confirmation.</h2>
          <p>
            This page does not send a new message. If you have already sent your
            inquiry, email hello@aradun.com with any reference you received and
            we'll help you check it. You don't need to send the same message
            again.
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
