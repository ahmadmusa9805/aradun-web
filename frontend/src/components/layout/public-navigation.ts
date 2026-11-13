import navigation from "@/modules/catalog/data/navigation.generated.json";

/** Safe generated source-navigation DTOs; Express retains authoritative catalog ownership. */
export type NavigationItem = { readonly label: string; readonly href: string };
export const serviceCategories: readonly NavigationItem[] =
  navigation.categories;
export const businessSolutions: readonly NavigationItem[] =
  navigation.solutions;
export const mainLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];
