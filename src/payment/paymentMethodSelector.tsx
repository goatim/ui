import { ReactElement, useCallback, useEffect, useState } from 'react';
import { PaymentMethod } from '@goatim/client';
import { CreditCardFields, CreditCardForm } from './creditCardForm';
import { Button } from '../general';
import { PaymentMethodList } from './paymentMethodList';

export type PaymentMethodSelectorSize = 'small' | 'medium' | 'large';

export interface PaymentMethodSelectorProps {
  paymentMethods?: (PaymentMethod | CreditCardFields)[];
  onSelectPaymentMethod?: (paymentMethod: PaymentMethod | CreditCardFields | null) => unknown;
  selectedPaymentMethod?: PaymentMethod | CreditCardFields | string | null;
  size?: PaymentMethodSelectorSize;
}

export function PaymentMethodSelector({
  paymentMethods,
  onSelectPaymentMethod,
  selectedPaymentMethod,
  size = 'small',
}: PaymentMethodSelectorProps): ReactElement {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [addedPaymentMethods, setAddedPaymentMethods] = useState<CreditCardFields[]>([]);

  useEffect(() => {
    if (!paymentMethods?.length) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  }, [paymentMethods]);

  const addCreditCard = useCallback(
    async (fields: CreditCardFields) => {
      const newCard = JSON.parse(JSON.stringify(fields)) as CreditCardFields;
      try {
        if (onSelectPaymentMethod) {
          onSelectPaymentMethod(newCard);
        }

        setAddedPaymentMethods((_addedPaymentMethods) => [..._addedPaymentMethods, newCard]);

        setIsAdding(false);
      } catch (error) {
        // TODO: Handle error
      }
    },
    [onSelectPaymentMethod],
  );

  return (
    <div className="goatim-ui-payment-method-selector">
      {paymentMethods?.length || addedPaymentMethods.length ? (
        <div className="payment-methods">
          <PaymentMethodList
            paymentMethods={
              paymentMethods ? [...paymentMethods, ...addedPaymentMethods] : addedPaymentMethods
            }
            onSelectPaymentMethod={onSelectPaymentMethod}
            selectedPaymentMethod={selectedPaymentMethod}
          />
        </div>
      ) : null}

      {isAdding ? (
        <div className="new">
          <CreditCardForm
            onSubmit={addCreditCard}
            onCancel={() => setIsAdding(false)}
            size={size}
          />
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
