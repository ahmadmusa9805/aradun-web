"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Native disclosure works before hydration and without hover; no modal/drawer implied. */
export function NavigationDisclosure({
  label,
  children,
  className = "",
  name,
  closeLabel,
}: {
  label: string;
  children: ReactNode;
  className?: string;
  name?: string;
  closeLabel?: string;
}) {
  const details = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (
        details.current?.open &&
        event.target instanceof Node &&
        !details.current.contains(event.target)
      )
        details.current.open = false;
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  return (
    <details
      ref={details}
      className={`navigation-disclosure ${className}`}
      {...(name ? { name } : {})}
      onBlur={(event) => {
        if (
          event.relatedTarget instanceof Node &&
          !event.currentTarget.contains(event.relatedTarget)
        )
          event.currentTarget.open = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && details.current?.open) {
          event.preventDefault();
          event.stopPropagation();
          details.current.open = false;
          summary.current?.focus();
        }
      }}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a") && details.current)
          details.current.open = false;
      }}
    >
      <summary ref={summary}>{label}</summary>
      {children}
      {closeLabel && (
        <button
          className="ui-button ui-button-secondary menu-close"
          type="button"
          onClick={() => {
            if (details.current) details.current.open = false;
            summary.current?.focus();
          }}
        >
          {closeLabel}
        </button>
      )}
    </details>
  );
}
