import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FieldProps = {
  id: string;
  label: string;
  hint?: string | undefined;
  error?: string | undefined;
  optional?: boolean | undefined;
};
function descriptions(
  id: string,
  hint?: string,
  error?: string,
  extra?: string,
) {
  return (
    [extra, hint && `${id}-hint`, error && `${id}-error`]
      .filter(Boolean)
      .join(" ") || undefined
  );
}
function FieldFrame({
  id,
  label,
  hint,
  error,
  optional,
  children,
}: FieldProps & { children: ReactNode }) {
  return (
    <div className="ui-field">
      <label htmlFor={id}>
        {label}
        {optional && " (optional)"}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="ui-hint">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="ui-field-error">
          Error: {error}
        </p>
      )}
    </div>
  );
}
export function TextField({
  id,
  label,
  hint,
  error,
  optional,
  ...props
}: FieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> & {
    type?:
      | "text"
      | "email"
      | "url"
      | "password"
      | "search"
      | "tel"
      | "date"
      | "number";
  }) {
  return (
    <FieldFrame {...{ id, label, hint, error, optional }}>
      <input
        {...props}
        id={id}
        className={`ui-input ${props.className ?? ""}`}
        aria-invalid={error ? true : props["aria-invalid"]}
        aria-describedby={descriptions(
          id,
          hint,
          error,
          props["aria-describedby"],
        )}
      />
    </FieldFrame>
  );
}
export function TextAreaField({
  id,
  label,
  hint,
  error,
  optional,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldFrame {...{ id, label, hint, error, optional }}>
      <textarea
        rows={5}
        {...props}
        id={id}
        className={`ui-input ${props.className ?? ""}`}
        aria-invalid={error ? true : props["aria-invalid"]}
        aria-describedby={descriptions(
          id,
          hint,
          error,
          props["aria-describedby"],
        )}
      />
    </FieldFrame>
  );
}
export function SelectField({
  id,
  label,
  hint,
  error,
  optional,
  children,
  ...props
}: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldFrame {...{ id, label, hint, error, optional }}>
      <select
        {...props}
        id={id}
        className={`ui-input ${props.className ?? ""}`}
        aria-invalid={error ? true : props["aria-invalid"]}
        aria-describedby={descriptions(
          id,
          hint,
          error,
          props["aria-describedby"],
        )}
      >
        {children}
      </select>
    </FieldFrame>
  );
}
export function Choice({
  id,
  label,
  hint,
  error,
  type = "checkbox",
  ...props
}: Omit<FieldProps, "optional"> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> & {
    type?: "checkbox" | "radio";
  }) {
  return (
    <div className="ui-field">
      <label className="ui-choice" htmlFor={id}>
        <input
          {...props}
          id={id}
          type={type}
          aria-invalid={error ? true : props["aria-invalid"]}
          aria-describedby={descriptions(
            id,
            hint,
            error,
            props["aria-describedby"],
          )}
        />
        <span>{label}</span>
      </label>
      {hint && (
        <p id={`${id}-hint`} className="ui-hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="ui-field-error">
          Error: {error}
        </p>
      )}
    </div>
  );
}
