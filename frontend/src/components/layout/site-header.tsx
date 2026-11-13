import Link from "next/link";
import { AppearanceSelector } from "@/components/theme/appearance-selector";
import { NavigationDisclosure } from "./navigation-disclosure";
import {
  serviceCategories,
  businessSolutions,
  mainLinks,
  type NavigationItem,
} from "./public-navigation";

function NavigationLinks({ items }: { items: readonly NavigationItem[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.href}>
          <Link prefetch={false} href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
function CategoryMenus({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <NavigationDisclosure
        label="Services"
        name={mobile ? "mobile-categories" : "desktop-categories"}
        className="category-menu"
      >
        <div className="category-panel">
          <Link prefetch={false} href="/services" className="menu-overview">
            All Services
          </Link>
          <NavigationLinks items={serviceCategories} />
        </div>
      </NavigationDisclosure>
      <NavigationDisclosure
        label="Solutions"
        name={mobile ? "mobile-categories" : "desktop-categories"}
        className="category-menu"
      >
        <div className="category-panel">
          <Link prefetch={false} href="/solutions" className="menu-overview">
            All Solutions
          </Link>
          <NavigationLinks items={businessSolutions} />
        </div>
      </NavigationDisclosure>
    </>
  );
}
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-marketing">
        <div className="header-top">
          <Link
            className="brand-name"
            href="/"
            aria-label="ARADUN home"
            prefetch={false}
          >
            ARADUN<span>Technology &amp; Digital Solutions</span>
          </Link>
          <div className="header-actions">
            <Link prefetch={false} href="/contact" className="compact-contact">
              Contact
            </Link>
            <Link prefetch={false} href="/search" className="search-link">
              Search
            </Link>
            <Link
              prefetch={false}
              href="/get-a-quote"
              className="ui-button ui-button-primary"
            >
              Get a Quote
            </Link>
          </div>
        </div>
        <nav className="desktop-navigation" aria-label="Main navigation">
          <CategoryMenus />
          <NavigationLinks items={mainLinks} />
        </nav>
        <NavigationDisclosure
          label="Menu"
          className="mobile-navigation"
          closeLabel="Close menu"
        >
          <nav aria-label="Mobile navigation">
            <Link href="/" prefetch={false}>
              Home
            </Link>
            <CategoryMenus mobile />
            <NavigationLinks items={mainLinks} />
            <Link href="/consultation" prefetch={false}>
              Consultation
            </Link>
            <Link href="/search" prefetch={false}>
              Search
            </Link>
            <Link
              href="/get-a-quote"
              prefetch={false}
              className="ui-button ui-button-primary"
            >
              Get a Quote
            </Link>
          </nav>
        </NavigationDisclosure>
        <div className="appearance-utility">
          <AppearanceSelector />
        </div>
      </div>
    </header>
  );
}
