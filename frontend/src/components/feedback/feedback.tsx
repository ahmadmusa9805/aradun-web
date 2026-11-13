import type { ReactNode } from "react";

const labels = {
  loading: "Loading",
  empty: "No results",
  denied: "Access denied",
  failure: "Something went wrong",
  conflict: "Changes conflict",
  success: "Saved",
} as const;
export function Feedback({
  state,
  title = labels[state],
  children,
  action,
}: {
  state: keyof typeof labels;
  title?: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  const tone =
    state === "failure"
      ? "error"
      : state === "denied" || state === "conflict"
        ? "warning"
        : state === "success"
          ? "success"
          : "info";
  return (
    <section className="ui-feedback" data-tone={tone} aria-label={title}>
      <p
        role={state === "failure" || state === "conflict" ? "alert" : "status"}
      >
        <strong>{title}</strong>
      </p>
      {children && <div>{children}</div>}
      {action && <div className="ui-actions">{action}</div>}
    </section>
  );
}
