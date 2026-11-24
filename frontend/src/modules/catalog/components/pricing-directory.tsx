"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export type DirectoryService = {
  id: string;
  name: string;
  href: string;
  summary: string;
  startingPrice: string;
  note?: string | undefined;
};
export function PricingDirectory({
  groups,
}: {
  groups: { id: string; name: string; services: DirectoryService[] }[];
}) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [custom, setCustom] = useState(false);
  const all = [
    ...new Map(
      groups.flatMap((g) => g.services).map((s) => [s.id, s]),
    ).values(),
  ];
  const query = search.trim().toLowerCase();
  const filtered = groups
    .map((g) => ({
      ...g,
      services: g.services.filter((s) =>
        `${s.name} ${s.summary} ${g.name}`.toLowerCase().includes(query),
      ),
    }))
    .filter((g) => g.services.length);
  function toggle(id: string) {
    setSelected((previous) =>
      previous.includes(id)
        ? previous.filter((value) => value !== id)
        : [...previous, id],
    );
  }
  return (
    <form action="/get-a-quote" method="get" className="pricing-directory">
      <label className="pricing-search" htmlFor="pricing-service-search">
        Search services
        <input
          id="pricing-service-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Try website, CRM or video"
        />
      </label>
      <p className="pricing-search-result" role="status">
        {query
          ? `${new Set(filtered.flatMap((g) => g.services.map((s) => s.id))).size} matching services`
          : `${all.length} services across eight categories`}
      </p>
      <p className="pricing-selection-shortcut">
        <a href="#custom-quote-selection">
          {selected.length}{" "}
          {selected.length === 1 ? "service selected" : "services selected"} —
          review your quote request ↓
        </a>
      </p>
      {filtered.map((group) => (
        <details
          className="catalog-faq pricing-category"
          key={`${group.id}-${query ? "search" : "browse"}`}
          open={query ? true : undefined}
        >
          <summary>
            {group.name}
            <span>
              {group.services.length}{" "}
              {group.services.length === 1 ? "service" : "services"}
            </span>
          </summary>
          <ul className="pricing-service-rows">
            {group.services.map((service) => (
              <li key={service.id} data-service-id={service.id}>
                <div className="pricing-row-copy">
                  <h3>
                    <Link href={service.href} prefetch={false}>
                      {service.name}
                    </Link>
                  </h3>
                  <p>{service.summary}</p>
                  {service.note && (
                    <p className="pricing-service-note">{service.note}</p>
                  )}
                  <Link
                    href={service.href}
                    prefetch={false}
                    className="pricing-detail-link"
                  >
                    View packages &amp; details →
                  </Link>
                </div>
                <div className="pricing-row-action">
                  <p>
                    <strong>{service.startingPrice}</strong>
                    {service.startingPrice !== "Custom quote" && (
                      <span> USD</span>
                    )}
                  </p>
                  <label className="ui-choice">
                    <input
                      type="checkbox"
                      checked={selected.includes(service.id)}
                      onChange={() => toggle(service.id)}
                      aria-label={`Select ${service.name}`}
                    />
                    <span>Select</span>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </details>
      ))}
      {!filtered.length && (
        <p>
          No services match your search. Try another term or describe your needs
          in a custom quote.
        </p>
      )}
      <div className="pricing-selection" id="custom-quote-selection">
        <h3>Your quote request</h3>
        <p role="status">
          {selected.length}{" "}
          {selected.length === 1 ? "service selected" : "services selected"}. No
          total is calculated.
        </p>
        {selected.length > 0 && (
          <ul className="pricing-selected-list">
            {selected.map((id) => (
              <li key={id}>
                <span>{all.find((s) => s.id === id)?.name}</span>
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  aria-label={`Remove ${all.find((s) => s.id === id)?.name}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {selected.map((id) => (
          <input key={id} type="hidden" name="serviceId" value={id} />
        ))}
        <label className="ui-choice">
          <input
            type="checkbox"
            name="customRequested"
            value="true"
            checked={custom}
            onChange={(event) => setCustom(event.target.checked)}
          />
          <span>Include custom or unsure requirements</span>
        </label>
        <p>
          Your selections stay editable on the quote form. You can also continue
          without choosing a service.
        </p>
        <Button type="submit">
          {selected.length
            ? `Request a Quote — ${selected.length} ${selected.length === 1 ? "Service" : "Services"} Selected`
            : "Discuss a Custom Requirement"}
        </Button>
      </div>
    </form>
  );
}
