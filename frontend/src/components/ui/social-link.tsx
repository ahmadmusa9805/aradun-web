type SocialPlatform =
  "LinkedIn" | "Facebook" | "Instagram" | "YouTube" | "X" | "WhatsApp";

export function SocialIcon({ platform }: { platform: SocialPlatform }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {platform === "Facebook" && (
        <path d="M14 22v-9h3l.5-4H14V6.5c0-1.1.3-1.5 1.5-1.5H18V1.4C17.2 1.2 16.1 1 15 1c-3 0-5 1.8-5 5v3H7v4h3v9z" />
      )}
      {platform === "LinkedIn" && (
        <>
          <circle cx="4" cy="4" r="2" />
          <path d="M2 8h4v14H2zm7 0h4v2c1-1.6 2.3-2.3 4-2.3 3.5 0 5 2 5 6V22h-4v-7.5c0-2-.6-3-2-3-1.7 0-3 1.2-3 3.5v7H9z" />
        </>
      )}
      {platform === "Instagram" && (
        <>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1.2" />
        </>
      )}
      {platform === "YouTube" && (
        <>
          <path d="M22 7c-.2-1.7-1.2-2.6-2.8-2.8C17.3 4 14.4 4 12 4s-5.3 0-7.2.2C3.2 4.4 2.2 5.3 2 7c-.2 1.5-.2 3.4-.2 5s0 3.5.2 5c.2 1.7 1.2 2.6 2.8 2.8 1.9.2 4.8.2 7.2.2s5.3 0 7.2-.2c1.6-.2 2.6-1.1 2.8-2.8.2-1.5.2-3.4.2-5s0-3.5-.2-5z" />
          <path
            d="m10 8 6 4-6 4z"
            fill="var(--social-icon-cutout, var(--color-background, white))"
          />
        </>
      )}
      {platform === "X" && (
        <path d="M18.9 2H22l-7.4 8.5L23 22h-6.6l-5.2-6.8L5.3 22H2l7.7-8.8L1 2h6.8l4.7 6.2zM17.5 20h1.8L6.7 4H4.8z" />
      )}
      {platform === "WhatsApp" && (
        <>
          <path d="M20.5 3.5A11.8 11.8 0 0 0 2.2 17.7L.7 23.3l5.7-1.5A11.8 11.8 0 0 0 20.5 3.5ZM12 21.5a9.4 9.4 0 0 1-4.8-1.3l-.5-.3-3.3.9.9-3.2-.3-.5A9.5 9.5 0 1 1 12 21.5Z" />
          <path
            d="M8.3 6.6c-.3-.6-.5-.6-.8-.6H7c-.3 0-.7.1-1 .5-.4.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5 .8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.7-.5l-2.3-1.1c-.3-.1-.6-.2-.8.2l-1 1.2c-.2.2-.4.3-.7.1a9.1 9.1 0 0 1-4.1-3.6c-.3-.4 0-.5.1-.7l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7z"
            transform="translate(1 0) scale(.9)"
          />
        </>
      )}
    </svg>
  );
}

export function SocialLink({
  platform,
  href,
}: {
  platform: SocialPlatform;
  href: string;
}) {
  const whatsapp = platform === "WhatsApp";
  return (
    <a
      href={href}
      className={`social-icon-link${whatsapp ? " social-whatsapp" : ""}`}
      aria-label={whatsapp ? "Chat on WhatsApp" : platform}
      title={whatsapp ? "Chat on WhatsApp" : platform}
    >
      <SocialIcon platform={platform} />
    </a>
  );
}
