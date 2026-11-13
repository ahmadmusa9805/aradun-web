const themes = [
  ["terracotta", "Editorial Terracotta"],
  ["slate-blue", "Muted Slate Blue"],
  ["vivid-blue", "Vivid Blue"],
] as const;

/** Native radios announce checked state; no client provider or page remount. */
export function AppearanceSelector() {
  return (
    <fieldset className="appearance-selector">
      <legend>Appearance</legend>
      <div className="appearance-options">
        {themes.map(([value, label]) => (
          <label key={value}>
            <input
              type="radio"
              name="aradun-appearance"
              value={value}
              defaultChecked={value === "terracotta"}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
