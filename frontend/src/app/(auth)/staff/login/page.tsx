import Link from "next/link";
import type { Metadata } from "next";
import { frontendEnv } from "@/config/env.server";
import { SignInForm } from "@/modules/identity/sign-in-form";
export const metadata: Metadata = {
  title: "Staff Sign In | ARADUN",
  robots: { index: false, follow: false },
};
export default async function StaffLogin({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  return (
    <>
      <h1>Sign in</h1>
      <p>For provisioned ARADUN staff accounts only.</p>
      <section className="staff-sign-in-card" aria-label="Staff sign-in">
        <SignInForm
          apiBaseUrl={frontendEnv.apiBaseUrl}
          returnTo={
            typeof query.returnTo === "string" ? query.returnTo : "/staff/login"
          }
        />
        <p className="ui-hint">
          Sessions expire after inactivity. If you cannot sign in or need
          account recovery, use the recovery page.
        </p>
      </section>
      <p>
        <Link href="/staff/recover">Recover staff access</Link>
      </p>
    </>
  );
}
