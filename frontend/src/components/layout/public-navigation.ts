import navigation from "@/modules/catalog/data/navigation.generated.json";

/** Safe generated source-navigation DTOs; Express retains authoritative catalog ownership. */
export type NavigationItem = { readonly label: string; readonly href: string };
export const canonicalServiceCategories = navigation.categories;
export const serviceCategories: readonly NavigationItem[] = [
  0, 2, 3, 1, 4, 5, 6, 7,
].map((index) => navigation.categories[index]!);
export const businessSolutions: readonly NavigationItem[] =
  navigation.solutions;
export const mainLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];
