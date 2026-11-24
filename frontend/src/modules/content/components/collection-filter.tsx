"use client";
import Form from "next/form";
import Link from "next/link";
/** URL-owned filtering; native GET and submit button remain usable without JavaScript. */
export function CollectionFilter({
  action,
  name,
  label,
  selected,
  options,
  buttonLabel,
  resetLabel,
}: {
  action: string;
  name: string;
  label: string;
  selected: string;
  options: readonly { value: string; label: string }[];
  buttonLabel: string;
  resetLabel: string;
}) {
  return (
    <Form action={action} className="work-filters" scroll={false}>
      <label htmlFor={`collection-${name}`}>{label}</label>
      <select
        id={`collection-${name}`}
        name={name}
        value={selected}
        onChange={(event) => event.currentTarget.form?.requestSubmit()}
      >
        <option value="all">
          {name === "topic" ? "All topics" : "All categories"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button className="ui-button ui-button-primary" type="submit">
        {buttonLabel}
      </button>
      <Link href={action}>{resetLabel}</Link>
    </Form>
  );
}
