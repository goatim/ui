import { ReactElement, useCallback, useEffect, useState } from 'react';
import { PaymentMethod } from '@fridaygame/client';
import CreditCardForm, { NewCreditCard } from './creditCardForm';
import Button from '../general/button';
import PaymentMethodThumbnail from './paymentMethodThumbnail';
import Icon from '../general/icon';

export interface Props {
  paymentMethods?: PaymentMethod[];
  initialPaymentMethod?: PaymentMethod;
  onSelect?: (paymentMethod: PaymentMethod) => void;
  onAddCreditCard?: (newCreditCard: NewCreditCard) => Promise<PaymentMethod> | PaymentMethod;
}

export default function PaymentMethodSelector({
  paymentMethods,
  initialPaymentMethod,
  onSelect,
  onAddCreditCard,
}: Props): ReactElement {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | undefined>(
    initialPaymentMethod,
  );
  const [isAdding, setIsAdding] = useState<boolean>(false);

  useEffect(() => {
    if (!paymentMethods?.length) {
      setIsAdding(true);
    } else {
      setIsAdding(false);
    }
  }, [paymentMethods]);

  const selectPaymentMethod = useCallback(
    (paymentMethod: PaymentMethod) => {
      setSelectedPaymentMethod(paymentMethod);
      if (onSelect) {
        onSelect(paymentMethod);
      }
    },
    [onSelect],
  );

  const addCreditCard = useCallback(
    async (newCreditCard: NewCreditCard) => {
      if (onAddCreditCard) {
        try {
          let paymentMethod = onAddCreditCard(newCreditCard);

          if ('then' in paymentMethod && typeof paymentMethod.then === 'function') {
            paymentMethod = await paymentMethod;
          }

          selectPaymentMethod(paymentMethod as PaymentMethod);
        } catch (error) {
          // TODO: Handle error
        }
      }
    },
    [onAddCreditCard, selectPaymentMethod],
  );

  return (
    <div className="friday-ui-payment-method-selector">
      {paymentMethods?.length ? (
        <div className="payment-methods">
          {paymentMethods.map((paymentMethod: PaymentMethod) => (
            <div key={paymentMethod.id} className="payment-method">
              <PaymentMethodThumbnail
                paymentMethod={paymentMethod}
                onClick={() => selectPaymentMethod(paymentMethod)}
                active={selectedPaymentMethod?.id === paymentMethod.id}
              />
              {selectedPaymentMethod?.id === paymentMethod.id ? <Icon name="check" /> : null}
            </div>
          ))}
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
