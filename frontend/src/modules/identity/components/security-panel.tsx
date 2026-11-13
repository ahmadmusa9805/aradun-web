"use client";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { TextField } from "@/components/forms/field";
import { Button } from "@/components/ui/button";
import { useStaffAccess } from "./staff-access-boundary";
type Mode = "verify" | "recover" | "reset" | "account";
type Account = {
  localPasswordOnly?: boolean;
  displayName: string;
  email: string;
  preferredTimezone: string;
};
type Setup = { secret: string; account: string; issuer: string };
export function SecurityPanel({
  apiBaseUrl,
  mode,
}: {
  apiBaseUrl: string;
  mode: Mode;
}) {
  const access = useStaffAccess();
  const [pending, setPending] = useState(false),
    [message, setMessage] = useState(""),
    [failed, setFailed] = useState(false),
    [factorEnabled, setFactorEnabled] = useState<boolean | null>(null),
    [setup, setSetup] = useState<Setup | null>(null),
    [grant, setGrant] = useState<string | null>(null),
    [codes, setCodes] = useState<string[]>([]),
    [account, setAccount] = useState<Account | null>(null),
    [verified, setVerified] = useState(false);
  const feedback = useRef<HTMLDivElement>(null);
  async function api(path: string, body?: unknown) {
    const response = await fetch(`${apiBaseUrl}/api/identity${path}`, {
      method: body === undefined ? "GET" : "POST",
      credentials: "include",
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
      ...(body === undefined
        ? {}
        : {
            headers: {
              "Content-Type": "application/json",
              "X-ARADUN-Request": "identity",
            },
            body: JSON.stringify(body),
          }),
    }).catch(() => {
      throw new Error(
        "Account security is temporarily unavailable. Please try again.",
      );
    });
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        access.onDenied();
        setAccount(null);
        setCodes([]);
        setSetup(null);
        setGrant(null);
        setVerified(false);
        setFactorEnabled(null);
      }
      throw new Error(
        response.status === 429
          ? "Too many attempts. Wait before trying again."
          : response.status === 401 || response.status === 403
            ? "Sign in again and complete verification before continuing."
            : response.status === 400 || response.status === 409
              ? "The information could not be verified. Check it or start again."
              : "Account security is temporarily unavailable. Please try again.",
      );
    }
    return response.status === 204
      ? null
      : await response.json().catch(() => {
          throw new Error(
            "Account security is temporarily unavailable. Please try again.",
          );
        });
  }
  useEffect(() => {
    let active = true;
    if (mode === "verify" || mode === "account") {
      void api(mode === "verify" ? "/security/status" : "/account")
        .then((value) => {
          if (!active) return;
          if (mode === "account") {
            if (
              typeof value?.displayName !== "string" ||
              typeof value?.email !== "string" ||
              typeof value?.preferredTimezone !== "string"
            )
              throw new Error("Account security is temporarily unavailable.");
            setAccount(value as Account);
          } else {
            if (typeof value?.factorEnabled !== "boolean")
              throw new Error("Account security is temporarily unavailable.");
            if (value.replacementPending)
              throw new Error(
                "Finish the recovery process using your replacement verification code. Account support cannot bypass verification.",
              );
            setFactorEnabled(value.factorEnabled);
            setVerified(value.requiresMfa === false);
          }
        })
        .catch((error) => {
          if (active) {
            setFailed(true);
            setMessage(
              error instanceof Error
                ? error.message
                : "Account security is temporarily unavailable.",
            );
          }
        });
    }
    return () => {
      active = false;
    };
    // Values are fixed server-provided configuration; no credentials in dependencies.
  }, [apiBaseUrl, mode]);
  useEffect(() => {
    if (message) feedback.current?.focus();
  }, [message]);
  async function run(work: () => Promise<void>) {
    if (pending) return;
    setPending(true);
    setMessage("");
    setFailed(false);
    try {
      await work();
    } catch (error) {
      setFailed(true);
      setMessage(
        error instanceof Error
          ? error.message
          : "Account security is temporarily unavailable.",
      );
    } finally {
      setPending(false);
    }
  }
  const value = (data: FormData, name: string) => String(data.get(name) ?? "");
  const password = (name: string, label: string, isNew = false) => (
    <TextField
      id={name}
      name={name}
      label={label}
      type="password"
      autoComplete={isNew ? "new-password" : "current-password"}
      minLength={isNew ? 15 : 1}
      maxLength={128}
      required
      disabled={pending}
      data-sensitive="true"
    />
  );
  const codeField = (name: string, label: string, otp = false) => (
    <TextField
      id={name}
      name={name}
      label={label}
      type={otp ? "text" : "password"}
      autoComplete={otp ? "one-time-code" : "off"}
      inputMode={otp ? "numeric" : "text"}
      pattern={otp ? "[0-9]{6}" : "[A-Za-z0-9_-]{43}"}
      minLength={otp ? 6 : 43}
      maxLength={otp ? 6 : 43}
      required
      disabled={pending}
      data-sensitive="true"
    />
  );
  return (
    <>
      <div
        className={message ? "ui-feedback" : ""}
        data-tone={failed ? "error" : "success"}
        ref={feedback}
        tabIndex={-1}
        role={failed && message ? "alert" : undefined}
        aria-live="polite"
      >
        {message}
      </div>
      {mode === "verify" && (
        <>
          {verified ? (
            <>
              <p>Verification complete.</p>
              <Link href="/dashboard/account">Continue to My Account</Link>
            </>
          ) : (
            <>
              {factorEnabled === false && !setup && (
                <Button
                  pending={pending}
                  onClick={() =>
                    void run(async () => {
                      const result = await api("/security/enroll", {});
                      if (typeof result?.secret !== "string")
                        throw new Error("Enrollment is unavailable.");
                      setSetup(result as Setup);
                    })
                  }
                >
                  Set up authenticator
                </Button>
              )}
              {setup && (
                <section aria-label="Authenticator setup">
                  <p>
                    Manually add this account in your authenticator app. Keep
                    this key private; it is shown only during setup and expires
                    after five minutes.
                  </p>
                  <p>
                    {setup.issuer} · {setup.account}
                  </p>
                  <code className="security-secret">{setup.secret}</code>
                </section>
              )}
              {(factorEnabled === true || setup) && (
                <SecurityForm
                  apiBaseUrl={apiBaseUrl}
                  pending={pending}
                  run={run}
                  path="/security/verify"
                  onSubmit={async (data) => {
                    await api("/security/verify", {
                      token: value(data, "verification-token"),
                      enrollment: Boolean(setup),
                    });
                    setSetup(null);
                    setVerified(true);
                    setMessage("Verification complete.");
                  }}
                >
                  {codeField("verification-token", "Authenticator code", true)}
                  <Button type="submit" pending={pending}>
                    Verify
                  </Button>
                </SecurityForm>
              )}
            </>
          )}
          <p>
            <Link href="/staff/recover">Lost your authenticator?</Link>
          </p>
        </>
      )}
      {mode === "recover" && (
        <>
          <section aria-labelledby="reset-request-heading">
            <h2 id="reset-request-heading">Forgot your password?</h2>
            <p>
              Email recovery delivery is not enabled in this local environment.
              No message will be sent.
            </p>
            <SecurityForm
              apiBaseUrl={apiBaseUrl}
              pending={pending}
              run={run}
              path="/recovery/request"
              onSubmit={async (data) => {
                await api("/recovery/request", {
                  email: value(data, "recovery-email"),
                });
                setMessage(
                  "Request acknowledged. Email delivery is disabled here; no message was sent.",
                );
              }}
            >
              <TextField
                id="recovery-email"
                name="recovery-email"
                label="Email address"
                type="email"
                autoComplete="username"
                maxLength={254}
                required
                disabled={pending}
              />
              <Button type="submit" pending={pending}>
                Request password recovery
              </Button>
            </SecurityForm>
            <p>
              <Link href="/staff/reset">
                Already have a password reset code?
              </Link>
            </p>
          </section>
          <section aria-labelledby="factor-recovery-heading">
            <h2 id="factor-recovery-heading">Lost your authenticator?</h2>
            <p>
              Use your password and one unused offline recovery code. This
              permits factor replacement only. If all factors and recovery
              material are lost, contact the owner; support cannot bypass
              verification.
            </p>
            {!grant ? (
              <SecurityForm
                apiBaseUrl={apiBaseUrl}
                pending={pending}
                run={run}
                path="/recovery/start"
                onSubmit={async (data) => {
                  const result = await api("/recovery/start", {
                    email: value(data, "factor-email"),
                    password: value(data, "factor-password"),
                    code: value(data, "offline-code"),
                  });
                  if (
                    typeof result?.grant !== "string" ||
                    typeof result?.secret !== "string"
                  )
                    throw new Error("Recovery is unavailable.");
                  setGrant(result.grant);
                  setSetup(result as Setup);
                  setMessage(
                    "Add the replacement key and verify a new authenticator code within five minutes. Existing sessions were revoked. Keep this page open; another unused offline code can restart recovery if needed.",
                  );
                }}
              >
                <TextField
                  id="factor-email"
                  name="factor-email"
                  label="Account email address"
                  type="email"
                  autoComplete="username"
                  maxLength={254}
                  required
                  disabled={pending}
                />
                {password("factor-password", "Account password")}
                {codeField("offline-code", "Offline recovery code")}
                <Button type="submit" pending={pending}>
                  Begin factor replacement
                </Button>
              </SecurityForm>
            ) : (
              <>
                {setup && (
                  <section aria-label="Replacement authenticator setup">
                    <p>
                      Add this private replacement key to your authenticator:
                    </p>
                    <code className="security-secret">{setup.secret}</code>
                  </section>
                )}
                <SecurityForm
                  apiBaseUrl={apiBaseUrl}
                  pending={pending}
                  run={run}
                  path="/recovery/complete"
                  onSubmit={async (data) => {
                    await api("/recovery/complete", {
                      grant,
                      token: value(data, "replacement-token"),
                    });
                    setGrant(null);
                    setSetup(null);
                    setMessage(
                      "Authenticator replaced. Sign in with your password and the new authenticator, then create a new recovery pack.",
                    );
                  }}
                >
                  {codeField(
                    "replacement-token",
                    "Replacement authenticator code",
                    true,
                  )}
                  <Button type="submit" pending={pending}>
                    Confirm replacement
                  </Button>
                </SecurityForm>
              </>
            )}
          </section>
        </>
      )}
      {mode === "reset" && (
        <>
          <p>
            Enter your private one-time reset code. Codes expire after 15
            minutes. Never place codes or passwords in a URL. New passwords need
            at least 15 characters.
          </p>
          <SecurityForm
            apiBaseUrl={apiBaseUrl}
            pending={pending}
            run={run}
            path="/recovery/reset"
            onSubmit={async (data) => {
              await api("/recovery/reset", {
                code: value(data, "reset-code"),
                newPassword: value(data, "reset-password"),
              });
              setMessage(
                "Password updated. All previous sessions and recovery packs were revoked. Sign in again and complete authenticator verification.",
              );
            }}
          >
            {codeField("reset-code", "Password reset code")}
            {password("reset-password", "New password", true)}
            <Button type="submit" pending={pending}>
              Reset password
            </Button>
          </SecurityForm>
        </>
      )}
      {mode === "account" && account?.localPasswordOnly && (
        <section>
          <h2>Your account</h2>
          <p>{account.displayName}</p>
          <p>{account.email}</p>
          <p>
            Signed in with your password. Authenticator setup is paused for
            local development.
          </p>
          <p>
            <Link href="/">View the public website</Link>
          </p>
        </section>
      )}
      {mode === "account" && account && !account.localPasswordOnly && (
        <>
          <p>
            Signed in as {account.email}. Email recovery delivery is disabled
            locally.
          </p>
          <section aria-labelledby="profile-heading">
            <h2 id="profile-heading">My profile</h2>
            <SecurityForm
              apiBaseUrl={apiBaseUrl}
              pending={pending}
              run={run}
              path="/account"
              onSubmit={async (data) => {
                await api("/account", {
                  displayName: value(data, "account-name"),
                  preferredTimezone: value(data, "account-timezone"),
                });
                setMessage("Profile saved.");
              }}
            >
              <TextField
                id="account-name"
                name="account-name"
                label="Display name"
                defaultValue={account.displayName}
                maxLength={120}
                required
                disabled={pending}
              />
              <TextField
                id="account-timezone"
                name="account-timezone"
                label="Timezone"
                hint="Use an IANA timezone such as Asia/Dhaka."
                defaultValue={account.preferredTimezone}
                maxLength={100}
                required
                disabled={pending}
              />
              <Button type="submit" pending={pending}>
                Save profile
              </Button>
            </SecurityForm>
          </section>
          <section aria-labelledby="password-heading">
            <h2 id="password-heading">Change password</h2>
            <p>
              Requires password and authenticator verification within five
              minutes. A change signs out all sessions. Use at least 15
              characters.
            </p>
            <SecurityForm
              apiBaseUrl={apiBaseUrl}
              pending={pending}
              run={run}
              path="/security/password"
              onSubmit={async (data) => {
                await api("/security/password", {
                  currentPassword: value(data, "current-password"),
                  newPassword: value(data, "new-password"),
                });
                setAccount(null);
                setCodes([]);
                setMessage(
                  "Password changed. All sessions were revoked. Sign in again.",
                );
              }}
            >
              {password("current-password", "Current password")}
              {password("new-password", "New password", true)}
              <Button type="submit" pending={pending}>
                Change password
              </Button>
            </SecurityForm>
          </section>
          <section aria-labelledby="pack-heading">
            <h2 id="pack-heading">Offline recovery codes</h2>
            <p>
              Fresh verification is required. Creating a pack replaces previous
              codes. Store these ten single-use codes privately outside this
              browser and repository. They expire after 90 days and permit
              factor replacement only.
            </p>
            <Button
              pending={pending}
              onClick={() =>
                void run(async () => {
                  setCodes([]);
                  const result = await api("/security/pack", {});
                  if (
                    !Array.isArray(result?.codes) ||
                    result.codes.length !== 10 ||
                    !result.codes.every(
                      (code: unknown) =>
                        typeof code === "string" &&
                        /^[A-Za-z0-9_-]{43}$/.test(code),
                    )
                  )
                    throw new Error(
                      "Recovery pack is unavailable. Verify again before replacing it.",
                    );
                  setCodes(result.codes as string[]);
                  setMessage(
                    "Recovery codes are shown once. Save them securely.",
                  );
                })
              }
            >
              Create replacement recovery pack
            </Button>
            {codes.length > 0 && (
              <>
                <ol className="security-codes">
                  {codes.map((code) => (
                    <li key={code}>
                      <code>{code}</code>
                    </li>
                  ))}
                </ol>
                <Button onClick={() => setCodes([])}>Hide saved codes</Button>
              </>
            )}
          </section>
          <Button
            pending={pending}
            onClick={() =>
              void run(async () => {
                await api("/logout", {});
                access.onSignedOut();
                setAccount(null);
                setCodes([]);
                setMessage("Signed out.");
              })
            }
          >
            Sign out
          </Button>
        </>
      )}
      <p>
        <Link href="/staff/login">Return to sign in</Link>
      </p>
      <noscript>
        JavaScript is required for account security. No credentials are sent in
        URLs.
      </noscript>
    </>
  );
}

function SecurityForm({
  children,
  onSubmit,
  path,
  pending,
  apiBaseUrl,
  run,
}: {
  children: ReactNode;
  onSubmit: (data: FormData) => Promise<void>;
  path: string;
  pending: boolean;
  apiBaseUrl: string;
  run: (work: () => Promise<void>) => Promise<void>;
}) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const element = event.currentTarget,
      data = new FormData(element);
    element
      .querySelectorAll<HTMLInputElement>('input[data-sensitive="true"]')
      .forEach((input) => {
        input.value = "";
      });
    void run(() => onSubmit(data));
  }
  return (
    <form
      action={`${apiBaseUrl}/api/identity${path}`}
      method="post"
      aria-busy={pending}
      onSubmit={submit}
    >
      {children}
    </form>
  );
}
