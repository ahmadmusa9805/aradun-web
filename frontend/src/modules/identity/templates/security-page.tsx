import { connection } from "next/server";
import { frontendEnv } from "@/config/env.server";
import { SecurityPanel } from "../components/security-panel";
export async function SecurityPage({
  mode,
  title,
}: {
  mode: "verify" | "recover" | "reset" | "account";
  title: string;
}) {
  await connection();
  return (
    <>
      <h1>{title}</h1>
      <section className="staff-sign-in-card" aria-label={title}>
        <SecurityPanel apiBaseUrl={frontendEnv.apiBaseUrl} mode={mode} />
      </section>
    </>
  );
}
