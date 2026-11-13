import express from "express";
import type { AddressInfo } from "node:net";
import { afterEach, expect, it } from "vitest";
import {
  createPublicContentRouter,
  type PublishedRecord,
} from "../src/modules/content/public-content.js";
const snapshot = {
  kind: "insights",
  slug: "synthetic-reading",
  title: "SAMPLE reading",
  summary: "Synthetic test only",
  author: "SAMPLE Author",
  publishedAt: "2026-01-01T00:00:00.000Z",
  sections: [
    { title: "Steps", blocks: [{ type: "paragraph", text: "Published body" }] },
  ],
  related: [],
};
const servers: ReturnType<ReturnType<typeof express>["listen"]>[] = [];
afterEach(async () => {
  await Promise.all(
    servers
      .splice(0)
      .map(
        (server) =>
          new Promise<void>((resolve) => server.close(() => resolve())),
      ),
  );
});
async function serve(read: () => Promise<PublishedRecord | null>) {
  const app = express();
  app.use("/api/content", createPublicContentRouter(read));
  const server = app.listen(0, "127.0.0.1");
  servers.push(server);
  await new Promise<void>((resolve) => server.once("listening", resolve));
  return (path = "insights/synthetic-reading") =>
    fetch(
      `http://127.0.0.1:${(server.address() as AddressInfo).port}/api/content/${path}`,
    );
}
it("exposes only the strict current published snapshot and removes it on withdrawal", async () => {
  const record = {
    publicationState: "published",
    archived: false,
    publishedSnapshot: snapshot,
    workingDraft: { title: "PRIVATE DRAFT" },
    evidence: "PRIVATE EVIDENCE",
  } as PublishedRecord;
  const get = await serve(async () => record);
  const response = await get();
  expect(response.status).toBe(200);
  expect(response.headers.get("cache-control")).toBe("no-store");
  expect(await response.json()).toEqual(snapshot);
  record.publicationState = "unpublished";
  expect((await get()).status).toBe(404);
  record.publicationState = "published";
  record.archived = true;
  expect((await get()).status).toBe(404);
});
it.each([
  null,
  { publicationState: "draft", archived: false, publishedSnapshot: snapshot },
  {
    publicationState: "published",
    archived: false,
    publishedSnapshot: { ...snapshot, author: undefined },
  },
  {
    publicationState: "published",
    archived: false,
    publishedSnapshot: { ...snapshot, slug: "wrong-slug" },
  },
])(
  "fails closed for missing, draft or malformed content %j",
  async (record) => {
    const get = await serve(async () => record as PublishedRecord | null);
    expect((await get()).status).toBe(404);
  },
);
it("rejects executable links and unknown blocks rather than leaking raw bodies", async () => {
  for (const block of [
    { type: "link", text: "Unsafe", href: "javascript:alert(1)" },
    { type: "html", text: "<script>alert(1)</script>" },
    { type: "image", src: "https://unapproved.test/image.png" },
  ]) {
    const get = await serve(async () => ({
      publicationState: "published",
      archived: false,
      publishedSnapshot: {
        ...snapshot,
        sections: [{ title: "Unsafe", blocks: [block] }],
      },
    }));
    expect((await get()).status).toBe(404);
  }
});
it("distinguishes dependency failure from missing and rejects query injection", async () => {
  const get = await serve(async () => {
    throw new Error("PRIVATE DATABASE CREDENTIAL");
  });
  const response = await get();
  expect(response.status).toBe(503);
  expect(await response.text()).not.toContain("PRIVATE");
  expect(
    (await get("insights/synthetic-reading?publicationState=draft")).status,
  ).toBe(404);
});
