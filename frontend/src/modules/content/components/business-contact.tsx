import { SocialLink } from "@/components/ui/social-link";
import {
  businessName,
  publicContactEmail,
  publicPhone,
  publicPhoneHref,
  whatsappUrl,
  socialLinks,
} from "../data/business-identity";

export function BusinessContact() {
  return (
    <div className="business-contact">
      <address>
        <p>
          <strong>{businessName}</strong>
        </p>
        <p>
          <a href={publicPhoneHref}>Call {publicPhone}</a>
        </p>

        <p>Dhaka, Bangladesh · Serving clients worldwide</p>
        <p>
          <a href={`mailto:${publicContactEmail}`}>{publicContactEmail}</a>
        </p>
      </address>{" "}
      <p>
        <a href="https://aradun.com">aradun.com</a>
      </p>
      <nav aria-label="ARADUN social profiles" className="social-contact-links">
        <SocialLink platform="WhatsApp" href={whatsappUrl} />
        {socialLinks.map((link) => (
          <SocialLink key={link.label} platform={link.label} href={link.href} />
        ))}
      </nav>
    </div>
  );
}
