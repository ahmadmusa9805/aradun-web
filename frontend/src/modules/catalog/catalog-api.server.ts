import "server-only";
import { cache } from "react";
import { frontendEnv } from "@/config/env.server";
import type { PricePresentationDto } from "./components/price-presentation";
import type { ServiceAvailability } from "./components/availability";

export type CategorySummary = {
  id: string;
  name: string;
  slug: string;
  href: string;
  headline: string;
  representatives?: { name: string; href: string }[];
};
export type CategoryDetail = CategorySummary & {
  intro: string;
  audience: string;
  problem: string;
  guide: string;
  process: string;
  faqs: { question: string; answer: string }[];
  relatedSolutions: { name: string; href: string }[];
  services: {
    id: string;
    name: string;
    summary?: string;
    availability?: ServiceAvailability;
    href: string;
    price: PricePresentationDto;
  }[];
};
export type ServiceDetail = {
  availability?: ServiceAvailability;
  id: string;
  name: string;
  sourcePriceLabel: string;
  href: string;
  variant: "project" | "recurring" | "custom" | "assessment" | "design-media";
  summary: string;
  fit: string;
  problem: string;
  benefit: string;
  candidates: string;
  approach: string;
  description: string;
  parent: { name: string; href: string };
  faqs: { question: string; answer: string }[];
  prices: {
    packageId: string;
    ordinal: number;
    tierLabel?: string;
    price: PricePresentationDto;
  }[];
  related: { name: string; href: string }[];
};
type Result<T> =
  { state: "ready"; data: T } | { state: "missing" } | { state: "unavailable" };
const object = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);
const text = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0 && value.length <= 8000;
const validAvailability = (value: unknown) =>
  value === undefined ||
  ["available", "specialist-led", "coming-soon"].includes(String(value));
function validService(value: unknown) {
  if (!object(value) || !object(value.service)) return false;
  const service = value.service;
  const link = (item: unknown) =>
    object(item) &&
    text(item.name) &&
    text(item.href) &&
    /^\/(services|solutions)\/[a-z0-9-]+$/.test(item.href);
  return (
    [
      "id",
      "name",
      "href",
      "summary",
      "fit",
      "problem",
      "benefit",
      "candidates",
      "approach",
      "description",
      "sourcePriceLabel",
    ].every((key) => text(service[key])) &&
    /^SVC-\d{3}$/.test(String(service.id)) &&
    validAvailability(service.availability) &&
    /^\/services\/[a-z0-9-]+$/.test(String(service.href)) &&
    ["project", "recurring", "custom", "assessment", "design-media"].includes(
      String(service.variant),
    ) &&
    link(service.parent) &&
    Array.isArray(service.faqs) &&
    service.faqs.length === 4 &&
    service.faqs.every(
      (faq) => object(faq) && text(faq.question) && text(faq.answer),
    ) &&
    Array.isArray(service.related) &&
    service.related.length <= 10 &&
    service.related.every(link) &&
    Array.isArray(service.prices) &&
    service.prices.length > 0 &&
    service.prices.length <= 3 &&
    service.prices.every(
      (item) =>
        object(item) &&
        text(item.packageId) &&
        Number.isInteger(item.ordinal) &&
        (!item.tierLabel || text(item.tierLabel)) &&
        object(item.price) &&
        text(item.price.label) &&
        item.price.currency === "USD" &&
        typeof item.price.unitConfirmed === "boolean" &&
        item.price.indicative === true &&
        [
          "one-time",
          "monthly",
          "setup-plus-monthly",
          "custom",
          "unconfirmed",
        ].includes(String(item.price.model)),
    )
  );
}
function summary(value: unknown): value is CategorySummary {
  return (
    object(value) &&
    text(value.id) &&
    /^CAT-0[1-8]$/.test(value.id) &&
    text(value.name) &&
    text(value.slug) &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.slug) &&
    value.href === `/services/${value.slug}` &&
    text(value.headline) &&
    (value.representatives === undefined ||
      (Array.isArray(value.representatives) &&
        value.representatives.length <= 3 &&
        value.representatives.every(
          (item) =>
            object(item) &&
            text(item.name) &&
            typeof item.href === "string" &&
            /^\/services\/[a-z0-9-]+$/.test(item.href),
        )))
  );
}
function validIndex(value: unknown) {
  return (
    object(value) &&
    Array.isArray(value.categories) &&
    value.categories.length === 8 &&
    value.categories.every(summary)
  );
}
function validDetail(value: unknown) {
  if (!object(value) || !object(value.category) || !summary(value.category))
    return false;
  const item = value.category as unknown as Record<string, unknown>;
  return (
    ["intro", "audience", "problem", "guide", "process"].every((key) =>
      text(item[key]),
    ) &&
    Array.isArray(item.faqs) &&
    item.faqs.length === 4 &&
    item.faqs.every(
      (faq) => object(faq) && text(faq.question) && text(faq.answer),
    ) &&
    Array.isArray(item.relatedSolutions) &&
    item.relatedSolutions.length <= 5 &&
    item.relatedSolutions.every(
      (solution) =>
        object(solution) &&
        text(solution.name) &&
        text(solution.href) &&
        /^\/solutions\/[a-z0-9-]+$/.test(solution.href),
    ) &&
    Array.isArray(item.services) &&
    item.services.length > 0 &&
    item.services.length <= 9 &&
    item.services.every(
      (service) =>
        object(service) &&
        text(service.id) &&
        /^SVC-\d{3}$/.test(service.id) &&
        text(service.name) &&
        (service.summary === undefined || text(service.summary)) &&
        validAvailability(service.availability) &&
        text(service.href) &&
        /^\/services\/[a-z0-9-]+$/.test(service.href) &&
        object(service.price) &&
        text(service.price.label) &&
        service.price.currency === "USD" &&
        [
          "one-time",
          "monthly",
          "setup-plus-monthly",
          "custom",
          "unconfirmed",
        ].includes(String(service.price.model)) &&
        typeof service.price.unitConfirmed === "boolean" &&
        service.price.indicative === true,
    )
  );
}
async function request<T>(
  path: string,
  validate: (value: unknown) => boolean,
): Promise<Result<T>> {
  try {
    const response = await fetch(
      `${frontendEnv.apiBaseUrl}/api/catalog/${path}`,
      { cache: "no-store", signal: AbortSignal.timeout(3000) },
    );
    if (response.status === 404) return { state: "missing" };
    if (!response.ok) return { state: "unavailable" };
    const json = await response.json();
    if (
      !object(json) ||
      json.preview !== (frontendEnv.appEnv === "development") ||
      !validate(json)
    )
      return { state: "unavailable" };
    return { state: "ready", data: json as T };
  } catch {
    return { state: "unavailable" };
  }
}
export const getCategories = () =>
  request<{ preview: boolean; categories: CategorySummary[] }>(
    "categories",
    validIndex,
  );
export const getCategory = (slug: string) =>
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length <= 150
    ? request<{ preview: boolean; category: CategoryDetail }>(
        `categories/${slug}`,
        validDetail,
      )
    : Promise.resolve({ state: "missing" } as const);
export const getService = cache((slug: string) =>
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length <= 150
    ? request<{ preview: boolean; service: ServiceDetail }>(
        `services/${slug}`,
        validService,
      )
    : Promise.resolve({ state: "missing" } as const),
);

export type CatalogServiceLink = {
  id: string;
  name: string;
  href: string;
  priceLabel: string;
};
export type SolutionDetail = {
  id: string;
  name: string;
  href: string;
  summary: string;
  description: string;
  audience: string;
  problem: string;
  categories: string;
  approach: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
  prices: {
    packageId: string;
    tierLabel: string;
    price: PricePresentationDto;
  }[];
  candidates: CatalogServiceLink[];
  related: { name: string; href: string }[];
};
export type PricingDetail = {
  preview: boolean;
  solutions: SolutionDetail[];
  groups: {
    id: string;
    name: string;
    href: string;
    services: CatalogServiceLink[];
  }[];
  services: CatalogServiceLink[];
};
const serviceLink = (item: unknown) =>
  object(item) &&
  text(item.id) &&
  /^SVC-\d{3}$/.test(item.id) &&
  text(item.name) &&
  text(item.href) &&
  /^\/services\/[a-z0-9-]+$/.test(item.href) &&
  text(item.priceLabel);
function validSolution(item: unknown): boolean {
  return (
    object(item) &&
    [
      "id",
      "name",
      "href",
      "summary",
      "description",
      "audience",
      "problem",
      "categories",
      "approach",
      "metaDescription",
    ].every((key) => text(item[key])) &&
    /^SOL-00[1-5]$/.test(String(item.id)) &&
    /^\/solutions\/[a-z0-9-]+$/.test(String(item.href)) &&
    Array.isArray(item.faqs) &&
    item.faqs.length === 4 &&
    item.faqs.every(
      (faq) => object(faq) && text(faq.question) && text(faq.answer),
    ) &&
    Array.isArray(item.prices) &&
    item.prices.length === 3 &&
    item.prices.every(
      (price) =>
        object(price) &&
        text(price.packageId) &&
        text(price.tierLabel) &&
        object(price.price) &&
        text(price.price.label) &&
        price.price.currency === "USD" &&
        price.price.indicative === true &&
        typeof price.price.unitConfirmed === "boolean",
    ) &&
    Array.isArray(item.candidates) &&
    item.candidates.length <= 57 &&
    item.candidates.every(serviceLink) &&
    Array.isArray(item.related) &&
    item.related.length <= 5 &&
    item.related.every(
      (link) =>
        object(link) &&
        text(link.name) &&
        text(link.href) &&
        /^\/solutions\/[a-z0-9-]+$/.test(link.href),
    )
  );
}
export const getSolutions = () =>
  request<{ preview: boolean; solutions: SolutionDetail[] }>(
    "solutions",
    (value) =>
      object(value) &&
      Array.isArray(value.solutions) &&
      value.solutions.length === 5 &&
      value.solutions.every(validSolution),
  );
export const getSolution = cache((slug: string) =>
  /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length <= 150
    ? request<{ preview: boolean; solution: SolutionDetail }>(
        `solutions/${slug}`,
        (value) => object(value) && validSolution(value.solution),
      )
    : Promise.resolve({ state: "missing" } as const),
);
export const getPricing = () =>
  request<PricingDetail>(
    "pricing",
    (value) =>
      object(value) &&
      Array.isArray(value.solutions) &&
      value.solutions.length === 5 &&
      value.solutions.every(validSolution) &&
      Array.isArray(value.groups) &&
      value.groups.length === 8 &&
      value.groups.every(
        (group) =>
          object(group) &&
          text(group.id) &&
          text(group.name) &&
          text(group.href) &&
          /^\/services\/[a-z0-9-]+$/.test(group.href) &&
          Array.isArray(group.services) &&
          group.services.length <= 9 &&
          group.services.every(serviceLink),
      ) &&
      Array.isArray(value.services) &&
      value.services.length === 57 &&
      value.services.every(serviceLink),
  );
