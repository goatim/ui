import { ReactElement } from 'react';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import { Card, CardBrands } from '@fridaygame/client';
import _ from 'lodash';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import Icon, { IconName } from '../general/icon';
import Check from '../general/check';

export interface Props extends WrapperProps {
  card: Card | StripePaymentMethod.Card;
  selected?: boolean;
}

function resolveIcon(brand?: CardBrands | string): IconName {
  switch (brand) {
    case 'mastercard':
      return 'mastercard';
    case 'visa':
      return 'visa';
    default:
      return 'credit-card';
  }
}

export default function CreditCardThumbnail({
  card,
  to,
  onClick,
  type,
  href,
  target,
  selected,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-credit-card-thumbnail${selected ? ' selected' : ''}`}
      to={to}
      onClick={onClick}
      type={type}
      href={href}
      target={target}>
      <div className="body">
        {onClick ? (
          <div className="selector">
            <Check active={selected} />
          </div>
        ) : null}

        <div className="details">
          <p className="digits">xxxx {card.last4}</p>
          <p className="expiration">
            {_.padStart(card.exp_month?.toString(), 2, '0')} / {card.exp_year}
          </p>
        </div>
      </div>

      <div className="icon">
        <Icon name={resolveIcon(card.brand)} size={15} />
      </div>
    </Wrapper>
  );
}
