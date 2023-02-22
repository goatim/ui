import { MouseEvent, ReactElement, useMemo } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { formatEurosAmount } from '@fridaygame/client';
import { Button, Icon } from '../general';

export type SubscriptionType = 'gold' | 'platinium' | 'silver';
export type SubscriptionThumbnailTheme = 'light' | 'dark';

export interface Subscription {
  monthlyPrice: number;
  type: SubscriptionType;
}

export interface SubscriptionThumbnailProps extends WrapperProps {
  bonusesDescriptions: string[];
  subscription: Subscription;
  isPopular?: boolean;
  onBuy: (event: MouseEvent<HTMLButtonElement>) => unknown;
  theme: SubscriptionThumbnailTheme;
}

export function SubscriptionThumbnail({
  bonusesDescriptions,
  isPopular = false,
  onBuy,
  subscription,
  theme = 'light',
  onClick,
  href,
  target,
  to,
}: SubscriptionThumbnailProps): ReactElement {
  const iconColor = useMemo(() => {
    switch (theme) {
      case 'dark':
        return '#F5F8FF';
      case 'light':
      default:
        return '#323960B3';
    }
  }, [theme]);

  const renderBonusesDescriptions = () => {
    return (
      <div className="bonuses-descriptions-container">
        {bonusesDescriptions.map((description) => (
          <div className="bonuses-descriptions-item-container" key={description}>
            <div>
              <Icon name="check" size={18} color={iconColor} />
            </div>
            <span className="bonuses-descriptions-item-description">{description}</span>
          </div>
        ))}
      </div>
    );
  };
  return (
    <Wrapper
      className={`friday-ui-subscription-thumbnail ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="popular-container" style={!isPopular ? { display: 'none' } : undefined}>
        <span className="popular-label">POPULAIRE</span>
      </div>
      <span className="title">{`Abonnement ${subscription.type}`}</span>
      <div className="monthly-price-container">
        <span className="monthly-price">{formatEurosAmount(subscription.monthlyPrice)}</span>
        <span className="monthly-price-label">/MOIS</span>
      </div>
      <div className="separator" />
      {renderBonusesDescriptions()}
      <div className="buy-button">
        <Button
          shape="filled"
          size="small"
          onClick={onBuy}
          fullWidth={false}
          theme={theme === 'dark' ? 'buy' : 'electric-blue'}>
          Acheter
        </Button>
      </div>
    </Wrapper>
  );
}
