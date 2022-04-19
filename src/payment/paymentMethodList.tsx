import { ReactElement } from 'react';
import { PaymentMethod } from '@fridaygame/client';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import PaymentMethodThumbnail from './paymentMethodThumbnail';

export interface Props {
  paymentMethods?: (PaymentMethod | StripePaymentMethod)[];
  onSelectPaymentMethod?: (paymentMethod: PaymentMethod | StripePaymentMethod | null) => unknown;
  selectedPaymentMethod?: PaymentMethod | StripePaymentMethod | string | null;
}

export default function PaymentMethodList({
  paymentMethods,
  onSelectPaymentMethod,
  selectedPaymentMethod,
}: Props): ReactElement {
  if (!paymentMethods?.length) {
    return <span>Aucun moyen de paiement</span>;
  }

  return (
    <div className="friday-ui-payment-method-list">
      {paymentMethods.map((paymentMethod: PaymentMethod | StripePaymentMethod) => {
        const selected =
          typeof selectedPaymentMethod === 'object'
            ? selectedPaymentMethod?.id === paymentMethod.id
            : selectedPaymentMethod === paymentMethod.id;
        return (
          <div key={paymentMethod.id} className="payment-method">
            <PaymentMethodThumbnail
              paymentMethod={paymentMethod}
              onClick={
                onSelectPaymentMethod
                  ? () => onSelectPaymentMethod(!selected ? paymentMethod : null)
                  : undefined
              }
              selected={selected}
            />
          </div>
        );
      })}
    </div>
  );
}
