import { ReactElement } from 'react';
import { Checkout, formatEurosAmount } from '@fridaygame/client';

export interface CheckoutBillProps {
  checkout: Checkout;
}

export function CheckoutBill({ checkout }: CheckoutBillProps): ReactElement {
  return (
    <div className="friday-ui-checkout-bill">
      {checkout.items_prices !== undefined ? (
        <div className="line">
          <span>Produits</span>
          <span className="amount">{formatEurosAmount(checkout.items_prices)}</span>
        </div>
      ) : null}
      {checkout.items_vats ? (
        <div className="line">
          <span>Tva</span>
          <span className="amount">{formatEurosAmount(checkout.items_vats)}</span>
        </div>
      ) : null}
      {checkout.total_to_pay !== undefined ? (
        <div className="line total">
          <span>Total à payer</span>
          <span className="amount">{formatEurosAmount(checkout.total_to_pay)}</span>
        </div>
      ) : null}
    </div>
  );
}
