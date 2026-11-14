export type ServiceAvailability =
  "available" | "specialist-led" | "coming-soon";
export function Availability({
  value,
}: {
  value?: ServiceAvailability | undefined;
}) {
  if (!value) return null;
  const labels = {
    available: "Available for inquiry; scope and timing are agreed separately.",
    "specialist-led":
      "Specialist-led delivery; scope and availability require confirmation.",
    "coming-soon":
      "Coming soon. Ask about future availability; delivery is not currently confirmed.",
  };
  return <p className="form-note">{labels[value]}</p>;
}
