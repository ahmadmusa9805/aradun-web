"use client";

import { useEffect, useRef } from "react";

export function ErrorSummary({
  errors,
  submission = 0,
}: {
  errors: readonly { fieldId: string; message: string }[];
  submission?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hasErrors = errors.length > 0;
  useEffect(() => {
    if (hasErrors) ref.current?.focus();
  }, [hasErrors, submission]);
  if (!hasErrors) return null;
  return (
    <div
      ref={ref}
      tabIndex={-1}
      className="ui-feedback"
      data-tone="error"
      aria-label="Please check your answers"
      role="region"
    >
      <h2>Please check your answers</h2>
      <ul>
        {errors.map(({ fieldId, message }) => (
          <li key={fieldId}>
            <a
              href={`#${encodeURIComponent(fieldId)}`}
              onClick={(event) => {
                const field = document.getElementById(fieldId);
                if (field) {
                  event.preventDefault();
                  field.focus();
                }
              }}
            >
              {message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
