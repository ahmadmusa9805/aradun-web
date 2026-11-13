import { businessName, publicContactEmail } from "../data/business-identity";

export function BusinessContact() {
  return (
    <address className="business-contact">
      <p>
        <strong>{businessName}</strong>
      </p>
      <p>Dhaka, Bangladesh · Serving clients worldwide</p>
      <p>
        <a href={`mailto:${publicContactEmail}`}>{publicContactEmail}</a>
      </p>
    </address>
  );
}
