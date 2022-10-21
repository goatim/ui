import { ReactElement } from 'react';
import { Checkout, formatEuros } from '@fridaygame/client';

export interface Props {
  checkout: Checkout;
}

export default function CheckoutBill({ checkout }: Props): ReactElement {
  return (
    <div className="friday-ui-checkout-bill">
      {checkout.items_prices !== undefined ? (
        <div className="line">
          <span>Produits</span>
          <span className="amount">{formatEuros(checkout.items_prices)}</span>
        </div>
      ) : null}
      {checkout.items_vats ? (
        <div className="line">
          <span>Tva</span>
          <span className="amount">{formatEuros(checkout.items_vats)}</span>
        </div>
      ) : null}
      {checkout.total_to_pay !== undefined ? (
        <div className="line total">
          <span>Total à payer</span>
          <span className="amount">{formatEuros(checkout.total_to_pay)}</span>
        </div>
      ) : null}
    </div>
  );
}
