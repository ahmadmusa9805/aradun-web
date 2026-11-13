"use client";
import { publicContactEmail } from "@/modules/content/data/business-identity";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
export type OfferChoice = { id: string; name: string };
type Receipt = {
  reference: string;
  type: "contact" | "quote" | "consultation";
  delivery: "queued";
  bookingConfirmed: false;
  receiptToken: string;
};
export function InquiryForm({
  type,
  apiBaseUrl,
  services = [],
  solutions = [],
  initialServiceIds = [],
  initialSolutionIds = [],
  initialPackageId = "",
  initialPackageLabel = "",
  initialCategory,
  initialSelectionNotice,
}: {
  type: Receipt["type"];
  apiBaseUrl: string;
  services?: OfferChoice[];
  solutions?: OfferChoice[];
  initialServiceIds?: string[];
  initialSolutionIds?: string[];
  initialPackageId?: string;
  initialPackageLabel?: string;
  initialCategory?: { name: string; serviceIds: string[] } | undefined;
  initialSelectionNotice?: string | undefined;
}) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
    preferred: "",
    timezone: "UTC",
  });
  const [serviceIds, setServiceIds] = useState(initialServiceIds),
    [solutionIds, setSolutionIds] = useState(initialSolutionIds),
    [packageId, setPackageId] = useState(initialPackageId),
    [custom, setCustom] = useState(
      initialServiceIds.length + initialSolutionIds.length === 0 &&
        !initialCategory,
    ),
    [privacy, setPrivacy] = useState(false),
    [step, setStep] = useState(0),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [available, setAvailable] = useState<boolean | null>(null);
  const [interactive, setInteractive] = useState(false);
  const [emailDeliveryEnabled, setEmailDeliveryEnabled] = useState(false);
  const [availabilityRetry, setAvailabilityRetry] = useState(0);
  const [serviceQuery, setServiceQuery] = useState(""),
    [categoryOnly, setCategoryOnly] = useState(Boolean(initialCategory));
  const visibleServices = services.filter(
    (item) =>
      (!categoryOnly || initialCategory?.serviceIds.includes(item.id)) &&
      item.name
        .toLocaleLowerCase()
        .includes(serviceQuery.trim().toLocaleLowerCase()),
  );
  const selectedServices = services.filter((item) =>
    serviceIds.includes(item.id),
  );
  const retry = useRef<{ key: string; payload: string } | null>(null),
    feedback = useRef<HTMLParagraphElement>(null),
    heading = useRef<HTMLHeadingElement>(null),
    posting = useRef(false);
  useEffect(() => {
    let active = true;
    setInteractive(true);
    setAvailable(null);
    setEmailDeliveryEnabled(false);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    void fetch(`${apiBaseUrl}/api/intake/status`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw Error();
        const data = await response.json();
        if (active) {
          setAvailable(data.available === true);
          setEmailDeliveryEnabled(
            data.available === true && data.emailDeliveryEnabled === true,
          );
        }
      })
      .catch(() => {
        if (active) setAvailable(false);
      })
      .finally(() => clearTimeout(timer));
    return () => {
      active = false;
      clearTimeout(timer);
      controller.abort();
    };
  }, [apiBaseUrl, availabilityRetry]);
  useEffect(() => {
    if (error) feedback.current?.focus();
  }, [error]);
  useEffect(() => {
    if (type === "quote") heading.current?.focus();
  }, [step, type]);
  function update(key: keyof typeof fields, value: string) {
    setFields((prior) => ({ ...prior, [key]: value }));
  }
  function field(
    key: keyof typeof fields,
    label: string,
    required = false,
    inputType = "text",
    max = 200,
  ) {
    return (
      <label htmlFor={`inquiry-${key}`}>
        {label}
        <input
          id={`inquiry-${key}`}
          name={key}
          type={inputType}
          value={fields[key]}
          onChange={(event) => update(key, event.target.value)}
          required={required}
          maxLength={max}
          autoComplete={
            key === "name"
              ? "name"
              : key === "email"
                ? "email"
                : key === "company"
                  ? "organization"
                  : key === "website"
                    ? "url"
                    : "off"
          }
        />
      </label>
    );
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (posting.current) return;
    setError("");
    if (
      type === "quote" &&
      step === 0 &&
      serviceIds.length + solutionIds.length === 0 &&
      !custom
    ) {
      setError("Choose a service, solution or Custom / Not sure.");
      return;
    }
    if (type === "quote" && step < 3) {
      setStep((value) => value + 1);
      return;
    }
    if (!privacy) {
      setError("Read and acknowledge the privacy notice before submitting.");
      return;
    }
    if (available !== true) {
      setError(
        "Online submissions are not enabled yet. Your information stays in this page; no request has been saved. Please try again once intake is available.",
      );
      return;
    }
    const identity = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      ...(fields.company.trim() ? { company: fields.company.trim() } : {}),
      ...(fields.website.trim() ? { website: fields.website.trim() } : {}),
    };
    const payload = JSON.stringify({
      type,
      identity,
      consent: { privacyAcknowledged: privacy, marketingOptIn: false },
      ...(type === "quote"
        ? {
            message: fields.message,
            selection: {
              serviceIds,
              solutionIds,
              packageIds: packageId ? [packageId] : [],
              customRequested: custom,
            },
            projectContext: {
              ...(fields.budget ? { budgetText: fields.budget } : {}),
              ...(fields.timeline ? { timelineText: fields.timeline } : {}),
            },
          }
        : type === "consultation"
          ? {
              subject: fields.subject,
              ...(fields.message ? { message: fields.message } : {}),
              consultation: {
                preferredTimeText: fields.preferred,
                timezone: fields.timezone,
              },
            }
          : { subject: fields.subject, message: fields.message }),
    });
    if (!retry.current || retry.current.payload !== payload)
      retry.current = { key: crypto.randomUUID(), payload };
    posting.current = true;
    setBusy(true);
    const controller = new AbortController(),
      timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(`${apiBaseUrl}/api/intake`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": retry.current.key,
        },
        body: payload,
        cache: "no-store",
        credentials: "omit",
        signal: controller.signal,
      });
      if (!response.ok) {
        setError(
          response.status === 429
            ? "Too many requests. Wait before retrying. Your entries have been kept."
            : response.status === 409
              ? "This submission key was already used for different information. Reload only after checking whether your original request was received."
              : response.status === 400
                ? "Check your entries and selected offers. Your information has been kept."
                : "This request could not be confirmed. Keep your entries and retry unchanged to avoid a duplicate. Selected offers may still await publication approval.",
        );
        return;
      }
      const receipt: Receipt = await response.json();
      if (
        !/^ARQ-[0-9]{4}-[a-f0-9]{24}$/.test(receipt.reference) ||
        receipt.type !== type ||
        receipt.delivery !== "queued" ||
        receipt.bookingConfirmed !== false ||
        typeof receipt.receiptToken !== "string" ||
        receipt.receiptToken.length > 250
      )
        throw Error();
      try {
        sessionStorage.setItem(
          "aradun-inquiry-receipt",
          JSON.stringify({
            ...receipt,
            expiresAt: Date.now() + 15 * 60 * 1000,
          }),
        );
      } catch {
        setError(
          `Request saved. Your reference is ${receipt.reference}. Email delivery and an appointment are not confirmed. Keep this reference; do not resubmit.`,
        );
        return;
      }
      window.location.assign("/thank-you");
    } catch {
      setError(
        "The result could not be confirmed. Your entries are kept. Retry without editing so the same submission key can recover the original result.",
      );
    } finally {
      clearTimeout(timer);
      posting.current = false;
      setBusy(false);
    }
  }
  const contactFields = (
    <>
      {field("name", "Name", true, "text", 120)}
      {field("email", "Email", true, "email", 254)}
      {field("company", "Company (optional)", false, "text", 160)}
      {field("website", "Website (optional)", false, "url", 2048)}
    </>
  );
  const brief = (
    <label htmlFor="inquiry-message">
      {type === "consultation"
        ? "Preparation notes (optional)"
        : "Project brief / Message"}
      <textarea
        id="inquiry-message"
        name="message"
        value={fields.message}
        onChange={(event) => update("message", event.target.value)}
        required={type !== "consultation"}
        maxLength={10000}
      />
    </label>
  );
  const consent = (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={privacy}
        onChange={(event) => setPrivacy(event.target.checked)}
        required
      />
      <span>
        I have read the{" "}
        <Link prefetch={false} href="/privacy" target="_blank" rel="noopener">
          Privacy Policy (opens a new tab)
        </Link>{" "}
        and acknowledge the processing needed to handle this inquiry.
      </span>
    </label>
  );
  return (
    <div>
      <p className="form-note" role="status">
        {available === null
          ? "Checking submission availability..."
          : available
            ? emailDeliveryEnabled
              ? "You can submit this form. Email notifications are enabled, but delivery is not guaranteed. Keep your reference after submitting."
              : "You can submit this form. Email notifications are currently off. Keep your reference after submitting."
            : "Preview: online submissions are not enabled. You can prepare your brief, but no request will be saved."}
      </p>
      {(available === false || availabilityRetry > 0) && (
        <aside
          className="intake-alternative"
          aria-label="Other ways to contact ARADUN"
        >
          <p>
            Prefer email? Send your question or project brief directly to{" "}
            <a href={`mailto:${publicContactEmail}`}>{publicContactEmail}</a>.
            {available === null
              ? "Checking online submission availability..."
              : available
                ? "Online submission is available."
                : "Online submission is currently unavailable."}
          </p>
          <button
            type="button"
            className="ui-button ui-button-secondary"
            aria-disabled={available === null}
            onClick={() => {
              if (available !== null)
                setAvailabilityRetry((value) => value + 1);
            }}
          >
            Check online submission again
          </button>
          <p className="form-note">
            Checking again keeps your entries. Please do not email passwords or
            access credentials.
          </p>
        </aside>
      )}
      {type === "quote" && (
        <ol className="quote-progress" aria-label="Quote request steps">
          {["Service", "Project", "Contact", "Review"].map((label, index) => (
            <li key={label} aria-current={index === step ? "step" : undefined}>
              {label}
            </li>
          ))}
        </ol>
      )}
      <form
        className="intake-form"
        method="post"
        onSubmit={submit}
        aria-busy={busy}
      >
        <fieldset disabled={!interactive || busy}>
          <legend>
            {type === "quote"
              ? "Quote request"
              : type === "contact"
                ? "Send a message"
                : "Request a consultation"}
          </legend>
          {type === "quote" && (
            <h2 ref={heading} tabIndex={-1}>
              {
                [
                  "Choose your services",
                  "Tell us about the project",
                  "How can we contact you?",
                  "Review your request",
                ][step]
              }
            </h2>
          )}
          {type === "quote" && step === 0 && (
            <>
              {initialSelectionNotice && (
                <p className="form-note" role="status">
                  {initialSelectionNotice}
                </p>
              )}
              {initialCategory && (
                <p>
                  Starting from <strong>{initialCategory.name}</strong>. Select
                  the services you want to discuss; category membership does not
                  select every service.
                </p>
              )}
              <label htmlFor="quote-service-search">
                Find a service
                <input
                  id="quote-service-search"
                  type="search"
                  value={serviceQuery}
                  maxLength={120}
                  onChange={(event) => setServiceQuery(event.target.value)}
                />
              </label>
              {initialCategory && (
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={categoryOnly}
                    onChange={(event) => setCategoryOnly(event.target.checked)}
                  />
                  Show only {initialCategory.name}
                </label>
              )}
              <fieldset className="service-choices">
                <legend>Services (choose any that apply)</legend>
                {visibleServices.length === 0 && (
                  <p>
                    No matching services. Clear the search or change the
                    category filter.
                  </p>
                )}
                {visibleServices.map((item) => (
                  <label className="checkbox-label" key={item.id}>
                    <input
                      type="checkbox"
                      checked={serviceIds.includes(item.id)}
                      onChange={(event) => {
                        setServiceIds((prior) =>
                          event.target.checked
                            ? [...prior, item.id]
                            : prior.filter((id) => id !== item.id),
                        );
                        setPackageId("");
                      }}
                    />
                    {item.name}
                  </label>
                ))}
              </fieldset>
              <p className="form-note" role="status">
                {serviceIds.length} services selected. Filtering keeps your
                choices.
              </p>
              {selectedServices.length > 0 && (
                <ul
                  aria-label="Selected services"
                  className="selected-services"
                >
                  {selectedServices.map((item) => (
                    <li key={item.id}>
                      <span>{item.name}</span>
                      <button
                        type="button"
                        className="ui-button ui-button-secondary"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => {
                          setServiceIds((prior) =>
                            prior.filter((id) => id !== item.id),
                          );
                          setPackageId("");
                        }}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <fieldset>
                <legend>Solutions</legend>
                {solutions.map((item) => (
                  <label className="checkbox-label" key={item.id}>
                    <input
                      type="checkbox"
                      checked={solutionIds.includes(item.id)}
                      onChange={(event) => {
                        setSolutionIds((prior) =>
                          event.target.checked
                            ? [...prior, item.id]
                            : prior.filter((id) => id !== item.id),
                        );
                        setPackageId("");
                      }}
                    />
                    {item.name}
                  </label>
                ))}
              </fieldset>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={custom}
                  onChange={(event) => setCustom(event.target.checked)}
                />
                Custom / Not sure
              </label>
              {packageId && (
                <p>
                  Requested option:{" "}
                  {initialPackageLabel || "Selected catalog option"}. Scope is
                  subject to agreement.{" "}
                  <button
                    className="ui-button ui-button-secondary"
                    type="button"
                    onClick={() => setPackageId("")}
                  >
                    Remove package selection
                  </button>
                </p>
              )}
            </>
          )}
          {type === "quote" && step === 1 && (
            <>
              {brief}
              {field("budget", "Budget (optional)", false, "text", 200)}
              {field("timeline", "Timeline (optional)", false, "text", 300)}
              <p className="form-note">
                Do not include passwords, credentials or sensitive documents.
              </p>
            </>
          )}
          {type === "quote" && step === 2 && contactFields}
          {type === "quote" && step === 3 && (
            <>
              <dl className="intake-review">
                <dt>Services and solutions</dt>
                <dd>
                  {[...services, ...solutions]
                    .filter((item) =>
                      [...serviceIds, ...solutionIds].includes(item.id),
                    )
                    .map((item) => item.name)
                    .join(", ") || "Custom / Not sure"}
                  {custom && serviceIds.length + solutionIds.length > 0
                    ? "; Custom / Not sure"
                    : ""}
                </dd>
                {packageId && (
                  <>
                    <dt>Requested option</dt>
                    <dd>{initialPackageLabel || "Selected catalog option"}</dd>
                  </>
                )}
                <dt>Project brief</dt>
                <dd>{fields.message}</dd>
                <dt>Contact</dt>
                <dd>
                  {fields.name} / {fields.email}
                </dd>
                {fields.budget && (
                  <>
                    <dt>Budget</dt>
                    <dd>{fields.budget}</dd>
                  </>
                )}
                {fields.timeline && (
                  <>
                    <dt>Timeline</dt>
                    <dd>{fields.timeline}</dd>
                  </>
                )}
              </dl>
              <p>
                No automatic quote total. Pricing, availability and contractual
                scope require separate agreement.
              </p>
              {consent}
            </>
          )}
          {type !== "quote" && (
            <>
              {contactFields}
              {field(
                "subject",
                type === "contact" ? "Subject" : "Meeting topic",
                true,
                "text",
                200,
              )}
              {brief}
              {type === "consultation" && (
                <>
                  {field(
                    "preferred",
                    "Preferred days / times",
                    true,
                    "text",
                    500,
                  )}
                  {field(
                    "timezone",
                    "Your IANA time zone (for example Asia/Dhaka)",
                    true,
                    "text",
                    100,
                  )}
                  <p className="form-note">
                    This is a manual request, not a confirmed appointment. Staff
                    must agree a time with you.
                  </p>
                </>
              )}
              {consent}
            </>
          )}
          <div className="ui-actions">
            {type === "quote" && step > 0 && (
              <button
                type="button"
                className="ui-button ui-button-secondary"
                onClick={() => {
                  setError("");
                  setStep((value) => value - 1);
                }}
              >
                Back
              </button>
            )}
            <button className="ui-button ui-button-primary" type="submit">
              {busy
                ? "Saving request..."
                : type === "quote" && step < 3
                  ? "Continue"
                  : type === "quote"
                    ? "Submit Quote Request"
                    : type === "contact"
                      ? "Send Message"
                      : "Request Consultation"}
            </button>
          </div>
        </fieldset>
        {error && (
          <p className="form-error" role="alert" tabIndex={-1} ref={feedback}>
            {error}
          </p>
        )}
        <noscript>
          JavaScript is required for online submission. You can email{" "}
          <a href={`mailto:${publicContactEmail}`}>{publicContactEmail}</a>{" "}
          directly. No information is submitted by opening this page.
        </noscript>
      </form>
    </div>
  );
}
