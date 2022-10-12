import { ReactElement, useMemo } from 'react';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import { Card, CardBrand } from '@fridaygame/client';
import _ from 'lodash';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import Icon, { IconName } from '../general/icon';
import Check from '../general/check';
import { CreditCardValue } from './creditCardInput';

export interface Props extends WrapperProps {
  card: Card | CreditCardValue | StripePaymentMethod.Card;
  selected?: boolean;
}

function resolveIcon(brand?: CardBrand | string): IconName {
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
  const last4 = useMemo<string>(() => {
    if ('last4' in card && card.last4) {
      return card.last4;
    }
    if ('number' in card && card.number) {
      return card.number.slice(-4);
    }
    return '';
  }, [card]);

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
          <p className="digits">xxxx {last4}</p>
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
