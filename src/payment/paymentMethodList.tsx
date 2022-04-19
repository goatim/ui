import { ReactElement } from 'react';
import { PaymentMethod } from '@fridaygame/client';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import PaymentMethodThumbnail from './paymentMethodThumbnail';

export interface Props {
  paymentMethods?: (PaymentMethod | StripePaymentMethod)[];
  onSelectPaymentMethod?: (paymentMethod: PaymentMethod | StripePaymentMethod) => unknown;
  selectedPaymentMethod?: PaymentMethod | StripePaymentMethod | string;
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
      {paymentMethods.map((paymentMethod: PaymentMethod | StripePaymentMethod) => (
        <div key={paymentMethod.id} className="payment-method">
          <PaymentMethodThumbnail
            paymentMethod={paymentMethod}
            onClick={onSelectPaymentMethod ? () => onSelectPaymentMethod(paymentMethod) : undefined}
            active={
              typeof selectedPaymentMethod === 'object'
                ? selectedPaymentMethod?.id === paymentMethod.id
                : selectedPaymentMethod === paymentMethod.id
            }
          />
        </div>
      ))}
    </div>
  );
}
