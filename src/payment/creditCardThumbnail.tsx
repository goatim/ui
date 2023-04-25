import { ReactElement, useMemo } from 'react';
import { PaymentMethod as StripePaymentMethod } from '@stripe/stripe-js';
import { Card, CardBrand } from '@goatim/client';
import _ from 'lodash';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { Check, Icon, IconName } from '../general';
import { CreditCardValue } from './creditCardInput';

export interface CreditCardThumbnailProps extends WrapperProps {
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

export function CreditCardThumbnail({
  card,
  onClick,
  type,
  href,
  target,
  selected,
}: CreditCardThumbnailProps): ReactElement {
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
      className={`goatim-ui-credit-card-thumbnail${selected ? ' selected' : ''}`}
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
