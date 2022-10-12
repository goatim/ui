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
  const getPaymentMethodKey = useCallback(
    (paymentMethod: PaymentMethod | CreditCardFields | string): string => {
      if (typeof paymentMethod === 'string') {
        return paymentMethod;
      }
      if ('id' in paymentMethod && paymentMethod.id && typeof paymentMethod.id === 'string') {
        return paymentMethod.id;
      }
      if (paymentMethod.card && 'number' in paymentMethod.card) {
        return (
          paymentMethod.card.number +
          paymentMethod.card.exp_month +
          paymentMethod.card.exp_year +
          paymentMethod.card.csc
        );
      }
      return '';
    },
    [],
  );

  const isSelected = useCallback(
    (paymentMethod: PaymentMethod | CreditCardFields | string): boolean => {
      if (!selectedPaymentMethod) {
        return false;
      }
      return getPaymentMethodKey(selectedPaymentMethod) === getPaymentMethodKey(paymentMethod);
    },
    [getPaymentMethodKey, selectedPaymentMethod],
  );

  if (!paymentMethods?.length) {
    return <span>Aucun moyen de paiement</span>;
  }

  return (
    <div className="friday-ui-payment-method-list">
      {paymentMethods.map((paymentMethod: PaymentMethod | CreditCardFields) => {
        const selected = isSelected(paymentMethod);

        return (
          <div key={getPaymentMethodKey(paymentMethod)} className="payment-method">
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
