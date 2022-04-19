import { ReactElement, useCallback, useEffect, useState } from 'react';
import { PaymentMethod } from '@fridaygame/client';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import CreditCardForm, { NewCreditCard } from './creditCardForm';
import Button from '../general/button';
import PaymentMethodList from './paymentMethodList';

export interface Props {
  paymentMethods?: (PaymentMethod | StripePaymentMethod)[];
  onSelectPaymentMethod?: (paymentMethod: PaymentMethod | StripePaymentMethod | null) => void;
  selectedPaymentMethod?: PaymentMethod | StripePaymentMethod | string | null;
  onAddCreditCard?: (
    newCreditCard: NewCreditCard,
  ) => Promise<PaymentMethod | StripePaymentMethod> | PaymentMethod | StripePaymentMethod;
}

export default function PaymentMethodSelector({
  paymentMethods,
  onSelectPaymentMethod,
  selectedPaymentMethod,
  onAddCreditCard,
}: Props): ReactElement {
  const [isAdding, setIsAdding] = useState<boolean>(false);

  useEffect(() => {
    if (!paymentMethods?.length) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  }, [paymentMethods]);

  const addCreditCard = useCallback(
    async (newCreditCard: NewCreditCard) => {
      if (onAddCreditCard) {
        try {
          let paymentMethod = onAddCreditCard(newCreditCard);

          if ('then' in paymentMethod && typeof paymentMethod.then === 'function') {
            paymentMethod = await paymentMethod;
          }

          if (onSelectPaymentMethod) {
            onSelectPaymentMethod(paymentMethod as PaymentMethod);
          }
        } catch (error) {
          // TODO: Handle error
        }
      }
    },
    [onAddCreditCard, onSelectPaymentMethod],
  );

  return (
    <div className="friday-ui-payment-method-selector">
      {paymentMethods?.length ? (
        <div className="payment-methods">
          <PaymentMethodList
            paymentMethods={paymentMethods}
            onSelectPaymentMethod={onSelectPaymentMethod}
            selectedPaymentMethod={selectedPaymentMethod}
          />
        </div>
      ) : null}

      {isAdding ? (
        <div className="new">
          <CreditCardForm onSubmit={addCreditCard} onCancel={() => setIsAdding(false)} />
        </div>
      ) : (
        <div className="new-button">
          <Button onClick={() => setIsAdding(true)} leftIcon="plus">
            Nouvelle carte
          </Button>
        </div>
      )}
    </div>
  );
}
