import { ReactElement } from 'react';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import { MinifiedPaymentMethod, PaymentMethod } from '@fridaygame/client';
import { WrapperProps } from '@cezembre/fronts';
import { CreditCardThumbnail } from './creditCardThumbnail';
import { CreditCardFields } from './creditCardForm';

export interface PaymentMethodThumbnailProps extends WrapperProps {
  paymentMethod: PaymentMethod | MinifiedPaymentMethod | CreditCardFields | StripePaymentMethod;
  selected?: boolean;
}

export function PaymentMethodThumbnail({
  paymentMethod,
  to,
  onClick,
  type,
  href,
  target,
  selected,
}: PaymentMethodThumbnailProps): ReactElement | null {
  switch (paymentMethod.type) {
    case 'card':
      return paymentMethod.card ? (
        <CreditCardThumbnail
          card={paymentMethod.card}
          to={to}
          onClick={onClick}
          type={type}
          href={href}
          target={target}
          selected={selected}
        />
      ) : null;

    default:
      return null;
  }
}
