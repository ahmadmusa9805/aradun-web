import type { ClientSession, Connection } from "mongoose";
import { catalogRelease } from "../../catalog/data/catalog-release.js";
import { inquirySequenceModel } from "../models/inquiry-sequence.model.js";

export const inquiryReferencePattern =
  /^(?:ARQ-[0-9]{4}-[a-f0-9]{24}|aradun-(?:[wadcsmgv]{1,8}-)?[0-9]{3,16}|aradunq-(?:[wmvgIadcs]{1,9}-)?[0-9]{3,16})$/;
const categories = [
  ["CAT-01", "w"],
  ["CAT-02", "m"],
  ["CAT-08", "v"],
  ["CAT-07", "g"],
  ["AI", "I"],
  ["CAT-03", "a"],
  ["CAT-04", "d"],
  ["CAT-05", "c"],
  ["CAT-06", "s"],
] as const;
export function inquiryServiceLetters(selection?: {
  serviceIds: readonly string[];
  solutionIds: readonly string[];
  packageIds?: readonly string[];
}) {
  if (!selection) return "";
  const services = new Set(selection.serviceIds);
  const solutions = new Set(selection.solutionIds);
  for (const id of selection.packageIds ?? []) {
    const owner = id.split("-P")[0]!;
    if (owner.startsWith("SVC-")) services.add(owner);
    if (owner.startsWith("SOL-")) solutions.add(owner);
  }
  for (const solution of catalogRelease.solutions)
    if (solutions.has(solution.solutionId))
      for (const id of solution.serviceIds) services.add(id);
  const selected = new Set<string>(
    catalogRelease.services
      .filter((service) => services.has(service.serviceId))
      .map((service) =>
        ["SVC-014", "SVC-015", "SVC-016"].includes(service.serviceId)
          ? "AI"
          : service.primaryCategoryId,
      ),
  );
  return categories
    .filter(([id]) => selected.has(id))
    .map(([, letter]) => letter)
    .join("");
}
export async function initializeInquirySequence(connection: Connection) {
  try {
    await inquirySequenceModel(connection).updateOne(
      { _id: "inquiries" },
      { $setOnInsert: { value: 0 } },
      { upsert: true },
    );
  } catch (error) {
    if (!(
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === 11000
    ))
      throw error;
  }
}
export async function nextInquiryReference(
  connection: Connection,
  session: ClientSession,
  selection?: Parameters<typeof inquiryServiceLetters>[0],
) {
  if (!session.inTransaction())
    throw new Error("Inquiry numbering requires the active intake transaction");
  const counter = await inquirySequenceModel(connection).findOneAndUpdate(
    { _id: "inquiries", value: { $lt: Number.MAX_SAFE_INTEGER } },
    { $inc: { value: 1 } },
    { session, returnDocument: "after", maxTimeMS: 2000 },
  );
  if (!counter || !Number.isSafeInteger(counter.value) || counter.value < 1)
    throw new Error("Inquiry sequence unavailable");
  const letters = inquiryServiceLetters(selection);
  return `aradunq-${letters ? letters + "-" : ""}${String(counter.value).padStart(3, "0")}`;
}
