import { ReactElement, useCallback, useEffect, useState } from 'react';
import { PaymentMethod } from '@fridaygame/client';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import { NewStripeCard, StripeCreditCardForm } from './stripeCreditCardForm';
import { Button } from '../general';
import { StripePaymentMethodList } from './stripePaymentMethodList';

export interface StripePaymentMethodSelectorProps {
  paymentMethods?: (PaymentMethod | StripePaymentMethod)[];
  onSelectPaymentMethod?: (paymentMethod: PaymentMethod | StripePaymentMethod | null) => unknown;
  selectedPaymentMethod?: PaymentMethod | StripePaymentMethod | string | null;
  onAddCreditCard?: (
    newStripeCard: NewStripeCard,
  ) => Promise<PaymentMethod | StripePaymentMethod> | PaymentMethod | StripePaymentMethod;
}

export function StripePaymentMethodSelector({
  paymentMethods,
  onSelectPaymentMethod,
  selectedPaymentMethod,
  onAddCreditCard,
}: StripePaymentMethodSelectorProps): ReactElement {
  const [isAdding, setIsAdding] = useState<boolean>(false);

  useEffect(() => {
    if (!paymentMethods?.length) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  }, [paymentMethods]);

  const addCreditCard = useCallback(
    async (newStripeCard: NewStripeCard) => {
      if (onAddCreditCard) {
        try {
          let paymentMethod = onAddCreditCard(newStripeCard);

          if ('then' in paymentMethod && typeof paymentMethod.then === 'function') {
            paymentMethod = await paymentMethod;
          }

          if (onSelectPaymentMethod) {
            onSelectPaymentMethod(paymentMethod as PaymentMethod | StripePaymentMethod);
          }

          setIsAdding(false);
        } catch (error) {
          // TODO: Handle error
        }
      }
    },
    [onAddCreditCard, onSelectPaymentMethod],
  );

  return (
    <div className="friday-ui-stripe-payment-method-selector">
      {paymentMethods?.length ? (
        <div className="payment-methods">
          <StripePaymentMethodList
            paymentMethods={paymentMethods}
            onSelectPaymentMethod={onSelectPaymentMethod}
            selectedPaymentMethod={selectedPaymentMethod}
          />
        </div>
      ) : null}

      {isAdding ? (
        <div className="new">
          <StripeCreditCardForm onSubmit={addCreditCard} onCancel={() => setIsAdding(false)} />
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
