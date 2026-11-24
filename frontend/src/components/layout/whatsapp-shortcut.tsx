import { SocialIcon } from "@/components/ui/social-link";
import { whatsappUrl } from "@/modules/content/data/business-identity";

export function WhatsAppShortcut() {
  return (
    <aside className="whatsapp-shortcut" aria-label="Quick contact">
      <a href={whatsappUrl} aria-label="Chat on WhatsApp with ARADUN">
        <SocialIcon platform="WhatsApp" />
        <span>Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
