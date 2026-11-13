import type { AnchorHTMLAttributes, ComponentPropsWithRef } from "react";

type Variant = "primary" | "secondary" | "quiet" | "destructive";

export function Button({
  variant = "primary",
  pending = false,
  pendingLabel = "Working…",
  children,
  className = "",
  disabled,
  type = "button",
  ...props
}: ComponentPropsWithRef<"button"> & {
  variant?: Variant;
  pending?: boolean;
  pendingLabel?: string;
}) {
  return (
    <button
      {...props}
      type={type}
      className={`ui-button ui-button-${variant} ${className}`}
      disabled={disabled || pending}
      aria-busy={pending || undefined}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Exclude<Variant, "destructive">;
}) {
  return (
    <a {...props} className={`ui-button ui-button-${variant} ${className}`} />
  );
}
