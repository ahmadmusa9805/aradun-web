"use client";
import { useEffect, useRef, useState } from "react";
import { publicContactEmail } from "@/modules/content/data/business-identity";

/** Explicit manual handoff; never saves, sends or puts private text in a URL. */
export function EmailBrief({
  brief,
  type,
  interactive,
}: {
  brief: string;
  type: "contact" | "quote" | "consultation";
  interactive: boolean;
}) {
  const [message, setMessage] = useState(""),
    [manual, setManual] = useState(false);
  const text = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    setMessage("");
    setManual(false);
  }, [brief]);
  useEffect(() => {
    if (manual) {
      text.current?.focus();
      text.current?.select();
    }
  }, [manual]);
  return (
    <section
      className="intake-alternative"
      aria-label="Send your brief by email"
    >
      <h2>Send your brief by email</h2>
      <p>
        Copy the details you have entered, paste them into your email, and send
        it to {publicContactEmail}. Copying does not submit a request or confirm
        an appointment.
      </p>
      <div className="ui-actions">
        <button
          type="button"
          className="ui-button ui-button-secondary"
          disabled={!interactive}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(brief);
              setMessage(
                "Brief copied. Paste it into your email. Nothing has been submitted through this website.",
              );
            } catch {
              setManual(true);
              setMessage(
                "Automatic copying is unavailable. The brief is selected below; copy it using your device controls.",
              );
            }
          }}
        >
          Copy inquiry brief
        </button>
        <a
          href={`mailto:${publicContactEmail}?subject=${encodeURIComponent(`ARADUN ${type} inquiry`)}`}
        >
          Open email app
        </a>
      </div>
      <p role="status">{message}</p>
      {manual && (
        <label className="ui-field">
          Your email brief
          <textarea
            className="ui-input"
            ref={text}
            readOnly
            value={brief}
            rows={10}
          />
        </label>
      )}
    </section>
  );
}
