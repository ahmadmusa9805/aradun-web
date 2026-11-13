const models = [
  [
    "One-time project",
    "A defined piece of work with scope, milestones and fees agreed before delivery.",
  ],
  [
    "Monthly engagement",
    "Recurring work with the responsibilities, billing period and support scope agreed separately.",
  ],
  [
    "Setup + monthly",
    "Initial setup and ongoing work are separate parts of the engagement; confirm both costs and inclusions.",
  ],
  [
    "Custom quote",
    "A proposal based on your requirements, dependencies and the scope of the work.",
  ],
] as const;
export function EngagementModels() {
  return (
    <dl className="engagement-models">
      {models.map(([title, copy]) => (
        <div key={title}>
          <dt>{title}</dt>
          <dd>{copy}</dd>
        </div>
      ))}
    </dl>
  );
}
