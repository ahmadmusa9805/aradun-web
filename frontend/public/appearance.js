/* Parser-blocking first paint; same-origin CSSOM changes do not alter React's HTML. */
(() => {
  const key = "aradun-theme";
  const valid = ["terracotta", "slate-blue", "vivid-blue"];
  let selected = "terracotta";
  try {
    const saved = localStorage.getItem(key);
    if (valid.includes(saved)) selected = saved;
  } catch {
    /* Current-session choice still works. */
  }
  const sheet = document.getElementById("appearance-tokens")?.sheet;
  const rules = sheet
    ? Array.from(sheet.cssRules).filter((rule) =>
        rule.selectorText?.includes("data-appearance"),
      )
    : [];
  const original = rules.map((rule) => rule.selectorText);
  function apply(value, persist) {
    selected = valid.includes(value) ? value : "terracotta";
    rules.forEach((rule, index) => {
      rule.selectorText = original[index].includes('"' + selected + '"')
        ? ":root:root"
        : original[index];
    });
    document
      .querySelectorAll('input[name="aradun-appearance"]')
      .forEach((input) => {
        input.checked = input.value === selected;
      });
    if (persist)
      try {
        localStorage.setItem(key, selected);
      } catch {
        /* No preference loss within this page/session. */
      }
  }
  apply(selected, false);
  document.addEventListener("change", (event) => {
    const input = event.target;
    if (
      input instanceof HTMLInputElement &&
      input.name === "aradun-appearance" &&
      valid.includes(input.value)
    )
      apply(input.value, true);
  });
  window.addEventListener("storage", (event) => {
    if (event.key === key) apply(event.newValue, false);
  });
  // Update native checked properties as streamed SSR controls arrive, before paint.
  const observer = new MutationObserver(() => {
    if (
      document.querySelectorAll('input[name="aradun-appearance"]').length === 3
    ) {
      apply(selected, false);
      observer.disconnect();
    }
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      apply(selected, false);
      observer.disconnect();
    },
    { once: true },
  );
})();
