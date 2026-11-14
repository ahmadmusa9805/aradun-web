import { CategoryIcon } from "@/components/ui/category-icon";
import { BrandLockup } from "./brand-lockup";
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
      {items.map((item, index) => (
        <li key={item.href}>
          <Link prefetch={false} href={item.href}>
            {items === serviceCategories && <CategoryIcon index={index} />}
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
            All Services <span aria-hidden="true">&rarr;</span>
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
            All Solutions <span aria-hidden="true">&rarr;</span>
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
      <div className="studio-strip">
        <div className="container-marketing">
          <p>
            ARADUN <span>/ Build. Automate. Grow.</span>
          </p>
          <div className="appearance-utility">
            <AppearanceSelector />
          </div>
        </div>
      </div>
      <div className="container-marketing">
        <div className="header-top">
          <Link
            className="brand-name"
            href="/"
            aria-label="ARADUN home"
            prefetch={false}
          >
            <BrandLockup />
          </Link>
          <nav className="desktop-navigation" aria-label="Main navigation">
            <CategoryMenus />
            <NavigationLinks items={mainLinks} />
          </nav>
          <div className="header-actions">
            <Link prefetch={false} href="/contact" className="compact-contact">
              Contact
            </Link>
            <Link
              prefetch={false}
              href="/search"
              className="search-link"
              aria-label="Search"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                aria-hidden="true"
              >
                <circle cx="10.5" cy="10.5" r="7" />
                <path d="m16 16 5 5" />
              </svg>
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
      </div>
    </header>
  );
}
