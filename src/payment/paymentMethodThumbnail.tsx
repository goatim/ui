import { ReactElement } from 'react';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import { MinifiedPaymentMethod, PaymentMethod } from '@fridaygame/client';
import CreditCardThumbnail from './creditCardThumbnail';
import { WrapperProps } from '../general/wrapper';

export interface Props extends WrapperProps {
  paymentMethod: PaymentMethod | MinifiedPaymentMethod | StripePaymentMethod;
  selected?: boolean;
}

export default function PaymentMethodThumbnail({
  paymentMethod,
  to,
  onClick,
  type,
  href,
  target,
  selected,
}: Props): ReactElement | null {
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
