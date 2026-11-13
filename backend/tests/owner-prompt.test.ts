import { execFileSync } from "node:child_process";
import { expect, it } from "vitest";
it.each(
  ["success", "short", "mismatch", "cancel", "refused"].flatMap((scenario) =>
    [false, true].map((atlas) => [scenario, atlas] as const),
  ),
)(
  "owner prompt protects private input and delegates safely: %s atlas=%s",
  (scenario, atlas) => {
    const output = execFileSync(
      "powershell.exe",
      [
        "-NoLogo",
        "-NoProfile",
        "-ExecutionPolicy",
        "RemoteSigned",
        "-File",
        "tests/fixtures/owner-prompt.ps1",
        "-Scenario",
        scenario,
        ...(atlas ? ["-Atlas"] : []),
      ],
      { encoding: "utf8", windowsHide: true },
    );
    expect(output).not.toContain("SAMPLE-Private-Prompt-Only-4829");
    expect(output).not.toContain("PRIVATE-CHILD-STDOUT-SENTINEL");
    expect(output).toContain(
      scenario === "success"
        ? "FIXTURE_SUCCESS"
        : scenario === "refused"
          ? "FIXTURE_REFUSED"
          : "FIXTURE_REJECTED",
    );
  },
  15000,
);
