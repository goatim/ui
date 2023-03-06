import { ReactElement, useMemo } from 'react';
import { formatFridayCoinsGains } from '@fridaygame/client';
import { Icon } from '../general';

export type FridayCoinsGainsSize = 'small' | 'medium' | 'big' | 'large';

export type FridayCoinsGainsTheme = 'default' | 'gold';

export interface FridayCoinsGainsProps {
  children?: number;
  variation?: number;
  size?: FridayCoinsGainsSize;
  theme?: FridayCoinsGainsTheme;
}

export function FridayCoinsGains({
  children,
  variation,
  size = 'small',
  theme = 'default',
}: FridayCoinsGainsProps): ReactElement {
  const sign = useMemo<'positive' | 'negative' | 'zero'>(() => {
    if (!variation && !children) {
      return 'zero';
    }
    return (variation || children || 0) > 0 ? 'positive' : 'negative';
  }, [variation, children]);

  return (
    <div className={`friday-ui-friday-coins-gains ${sign} ${size} ${theme}`}>
      <div className="container">
        <span>{formatFridayCoinsGains(children || variation || 0, 2, false)}</span>
        <Icon name="friday-coin" />
      </div>
    </div>
  );
}
