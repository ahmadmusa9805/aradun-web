import Link from "next/link";
import {
  serviceCategories,
  businessSolutions,
  type NavigationItem,
} from "./public-navigation";

function FooterGroup({
  title,
  items,
}: {
  title: string;
  items: readonly NavigationItem[];
}) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link prefetch={false} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-marketing">
        <div className="footer-invitation">
          <div>
            <p className="public-eyebrow">YOUR NEXT CHAPTER</p>
            <h2>Let’s build what’s next.</h2>
          </div>
          <Link
            prefetch={false}
            href="/get-a-quote"
            className="ui-button ui-button-primary"
          >
            Start a conversation <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="footer-identity">
          <p className="brand-name">ARADUN</p>
          <p>Technology &amp; Digital Solutions</p>
          <p>Build. Automate. Grow.</p>
          <p className="footer-intro">
            Technology, design and digital thinking.
            <br />
            Connected around your business.
          </p>
          <Link prefetch={false} href="/contact">
            Contact Us
          </Link>
        </div>
        <nav className="footer-groups" aria-label="Footer navigation">
          <FooterGroup
            title="Services"
            items={[
              { label: "All Services", href: "/services" },
              ...serviceCategories,
            ]}
          />
          <FooterGroup
            title="Solutions"
            items={[
              { label: "All Solutions", href: "/solutions" },
              ...businessSolutions,
            ]}
          />
          <FooterGroup
            title="Company"
            items={[
              { label: "About", href: "/about" },
              { label: "Our Work", href: "/our-work" },
              { label: "Contact Us", href: "/contact" },
            ]}
          />
          <FooterGroup
            title="Resources"
            items={[
              { label: "Insights & Resources", href: "/insights" },
              { label: "FAQs & Help", href: "/faq" },
            ]}
          />
          <FooterGroup
            title="Start a Project"
            items={[
              { label: "Pricing", href: "/pricing" },
              { label: "Get a Quote", href: "/get-a-quote" },
              { label: "Consultation", href: "/consultation" },
            ]}
          />
          <FooterGroup
            title="Legal"
            items={[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Website Terms", href: "/terms" },
            ]}
          />
        </nav>
        <div className="footer-bottom">
          <p>ARADUN / Technology &amp; Digital Solutions</p>
          <p>Based in Bangladesh. Working worldwide.</p>
          <Link prefetch={false} href="/privacy">
            Privacy
          </Link>
          <Link prefetch={false} href="/terms">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
