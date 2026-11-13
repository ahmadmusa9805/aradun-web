"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { TextField } from "@/components/forms/field";
import { Button } from "@/components/ui/button";
export function SignInForm({
  apiBaseUrl,
  returnTo = "/staff/login",
}: {
  apiBaseUrl: string;
  returnTo?: string;
}) {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [pending, setPending] = useState(false),
    [message, setMessage] = useState(""),
    [name, setName] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const operation = useRef(0);
  const errorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let active = true;
    const generation = operation.current;
    void fetch(`${apiBaseUrl}/api/identity/session`, {
      credentials: "include",
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    })
      .then(async (response) => {
        if (!response.ok) return;
        const body = await response.json();
        if (
          active &&
          generation === operation.current &&
          ["primary", "mfa"].includes(body.status) &&
          typeof body.requiresMfa === "boolean" &&
          typeof body.displayName === "string"
        ) {
          setName(body.displayName);
          setVerified(body.requiresMfa === false);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [apiBaseUrl]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    operation.current += 1;
    setPending(true);
    setMessage("");
    try {
      const response = await fetch(`${apiBaseUrl}/api/identity/login`, {
        method: "POST",
        credentials: "include",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "X-ARADUN-Request": "identity",
        },
        body: JSON.stringify({ email, password, returnTo }),
        signal: AbortSignal.timeout(10000),
      });
      setPassword("");
      if (!response.ok) {
        setMessage(
          response.status === 401
            ? "The sign-in details could not be verified."
            : response.status === 429
              ? "Too many attempts. Wait before trying again."
              : "Sign-in is temporarily unavailable. Please try again.",
        );
        return;
      }
      const body = await response.json();
      if (
        body.status !== "primary" ||
        typeof body.requiresMfa !== "boolean" ||
        typeof body.displayName !== "string"
      )
        throw new Error("Invalid sign-in result");
      if (body.requiresMfa === false) {
        window.location.assign("/dashboard/account");
        return;
      }
      setVerified(false);
      setName(body.displayName);
    } catch {
      setPassword("");
      setMessage("Sign-in is temporarily unavailable. Please try again.");
    } finally {
      setPending(false);
    }
  }
  async function logout() {
    if (pending) return;
    operation.current += 1;
    setPending(true);
    setMessage("");
    try {
      const response = await fetch(`${apiBaseUrl}/api/identity/logout`, {
        method: "POST",
        credentials: "include",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "X-ARADUN-Request": "identity",
        },
        body: "{}",
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) throw new Error("Unavailable");
      setName(null);
      setVerified(false);
    } catch {
      setMessage("Sign-out could not be confirmed. Please try again.");
    } finally {
      setPending(false);
    }
  }
  useEffect(() => {
    if (message) errorRef.current?.focus();
  }, [message]);
  return (
    <>
      <div
        ref={errorRef}
        tabIndex={-1}
        role={message ? "alert" : undefined}
        className={message ? "ui-feedback" : ""}
        data-tone="error"
      >
        {message}
      </div>
      {name ? (
        <section aria-live="polite">
          <h2>{verified ? "Session verified" : "Password verified"}</h2>
          <p>
            {verified
              ? `${name}, your session is verified.`
              : `${name}, additional verification is required before business access.`}
          </p>
          <p>
            <Link href={verified ? "/dashboard/account" : "/staff/verify"}>
              {verified
                ? "Continue to My Account"
                : "Continue to authenticator verification"}
            </Link>
          </p>
          <Button
            onClick={() => void logout()}
            pending={pending}
            pendingLabel="Signing out…"
          >
            Sign out
          </Button>
        </section>
      ) : (
        <form
          action={`${apiBaseUrl}/api/identity/login`}
          method="post"
          onSubmit={(event) => void submit(event)}
          aria-busy={pending}
        >
          <TextField
            id="staff-email"
            name="email"
            label="Email address"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            maxLength={254}
            disabled={pending}
          />
          <TextField
            id="staff-password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            maxLength={128}
            disabled={pending}
          />
          <Button type="submit" pending={pending} pendingLabel="Verifying…">
            Sign in
          </Button>
          <noscript>
            <p>JavaScript is required for secure sign-in.</p>
          </noscript>
        </form>
      )}
    </>
  );
}
