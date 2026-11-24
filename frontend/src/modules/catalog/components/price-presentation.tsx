export type PricePresentationDto = {
  label: string;
  sourceLabel?: string;
  currency: "USD";
  model:
    "one-time" | "monthly" | "setup-plus-monthly" | "custom" | "unconfirmed";
  unitConfirmed: boolean;
  indicative: true;
};

/** Server-prepared text only: no browser price authority or combined total. */
export function PricePresentation({ price }: { price: PricePresentationDto }) {
  return (
    <div className="price-presentation">
      <p>
        <strong>{price.label}</strong> <span>USD</span>
      </p>
      {price.sourceLabel && price.sourceLabel !== price.label && (
        <p>{price.sourceLabel}</p>
      )}
      <p>
        Indicative pricing. Your proposal confirms the scope, price and billing
        terms.
      </p>
    </div>
  );
}
export function PriceComparison({
  offers,
}: {
  offers: readonly { id: string; label: string; price: PricePresentationDto }[];
}) {
  return (
    <ul className="price-comparison">
      {offers.map((offer) => (
        <li key={offer.id}>
          <h3>{offer.label}</h3>
          <PricePresentation price={offer.price} />
        </li>
      ))}
    </ul>
  );
}
