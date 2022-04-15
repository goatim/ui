import { ReactElement } from 'react';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import { Card } from '@fridaygame/client';
import _ from 'lodash';
import Icon from '../general/icon';
import Wrapper, { WrapperProps } from '../general/wrapper';

export interface Props extends WrapperProps {
  card: Card | StripePaymentMethod.Card;
  active?: boolean;
}

export default function CreditCardThumbnail({
  card,
  to,
  onClick,
  type,
  href,
  target,
  active,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-credit-card-thumbnail${active ? ' active' : ''}`}
      to={to}
      onClick={onClick}
      type={type}
      href={href}
      target={target}>
      <Icon name="credit-card" />

      <div className="details">
        <p className="digits">•••• {card.last4}</p>
        <p className="expiration">
          {_.padStart(card.exp_month?.toString(), 2, '0')} / {card.exp_year}
        </p>
      </div>
    </Wrapper>
  );
}
