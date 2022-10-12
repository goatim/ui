import { ReactElement, useCallback } from 'react';
import { PaymentMethod } from '@fridaygame/client';
import PaymentMethodThumbnail from './paymentMethodThumbnail';
import { CreditCardFields } from './creditCardForm';

export interface Props {
  paymentMethods?: (PaymentMethod | CreditCardFields)[];
  onSelectPaymentMethod?: (paymentMethod: PaymentMethod | CreditCardFields | null) => unknown;
  selectedPaymentMethod?: PaymentMethod | CreditCardFields | string | null;
}

export default function PaymentMethodList({
  paymentMethods,
  onSelectPaymentMethod,
  selectedPaymentMethod,
}: Props): ReactElement {
  const isSelected = useCallback(
    (paymentMethod: PaymentMethod | CreditCardFields | string): boolean => {
      let selectedPaymentMethodId: string | undefined;
      let paymentMethodId: string | undefined;
      if (!selectedPaymentMethod) {
        return false;
      }
      if (typeof selectedPaymentMethod === 'object') {
        if (
          'id' in selectedPaymentMethod &&
          selectedPaymentMethod.id &&
          typeof selectedPaymentMethod.id === 'string'
        ) {
          selectedPaymentMethodId = selectedPaymentMethod.id;
        } else if (
          selectedPaymentMethod.card &&
          'number' in selectedPaymentMethod.card &&
          selectedPaymentMethod.card.number
        ) {
          selectedPaymentMethodId = selectedPaymentMethod.card.number;
        }
      } else {
        selectedPaymentMethodId = selectedPaymentMethod;
      }

      if (typeof paymentMethod === 'object') {
        if ('id' in paymentMethod && paymentMethod.id && typeof paymentMethod.id === 'string') {
          paymentMethodId = paymentMethod.id;
        } else if (
          paymentMethod.card &&
          'number' in paymentMethod.card &&
          paymentMethod.card.number
        ) {
          paymentMethodId = paymentMethod.card.number;
        }
      } else {
        paymentMethodId = paymentMethod;
      }

      return selectedPaymentMethodId === paymentMethodId;
    },
    [selectedPaymentMethod],
  );

  if (!paymentMethods?.length) {
    return <span>Aucun moyen de paiement</span>;
  }

  return (
    <div className="friday-ui-payment-method-list">
      {paymentMethods.map((paymentMethod: PaymentMethod | CreditCardFields) => {
        const selected = isSelected(paymentMethod);

        return (
          <div
            key={
              paymentMethod.card && 'number' in paymentMethod.card
                ? paymentMethod.card.number
                : (paymentMethod.id as string)
            }
            className="payment-method">
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
