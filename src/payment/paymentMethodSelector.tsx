import { ReactElement, useCallback, useEffect, useState } from 'react';
import { PaymentMethod } from '@fridaygame/client';
import CreditCardForm, { CreditCardFields } from './creditCardForm';
import Button from '../general/button';
import PaymentMethodList from './paymentMethodList';

export interface Props {
  paymentMethods?: PaymentMethod[];
  onSelectPaymentMethod?: (paymentMethod: PaymentMethod | null) => unknown;
  selectedPaymentMethod?: PaymentMethod | string | null;
  onAddCreditCard?: (fields: CreditCardFields) => Promise<PaymentMethod> | PaymentMethod;
}

export default function PaymentMethodSelector({
  paymentMethods,
  onSelectPaymentMethod,
  selectedPaymentMethod,
  onAddCreditCard,
}: Props): ReactElement {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [addedPaymentMethods, setAddedPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    if (!paymentMethods?.length) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  }, [paymentMethods]);

  const addCreditCard = useCallback(
    async (fields: CreditCardFields) => {
      if (onAddCreditCard) {
        try {
          let paymentMethod = onAddCreditCard(fields);

          if ('then' in paymentMethod && typeof paymentMethod.then === 'function') {
            paymentMethod = await paymentMethod;
          }

          if (onSelectPaymentMethod) {
            onSelectPaymentMethod(paymentMethod as PaymentMethod);
          }

          setAddedPaymentMethods((_addedPaymentMethods) => [
            ..._addedPaymentMethods,
            paymentMethod as PaymentMethod,
          ]);
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
            paymentMethods={[...paymentMethods, ...addedPaymentMethods]}
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
