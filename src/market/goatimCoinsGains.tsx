import { ReactElement, useMemo } from 'react';
import { formatGoatimCoinsGains } from '@goatim/client';
import { Icon } from '../general';

export type GoatimCoinsGainsSize = 'small' | 'medium' | 'big' | 'large';

export type GoatimCoinsGainsTheme = 'default' | 'gold';

export interface GoatimCoinsGainsProps {
  children?: number;
  variation?: number;
  size?: GoatimCoinsGainsSize;
  theme?: GoatimCoinsGainsTheme;
}

export function GoatimCoinsGains({
  children,
  variation,
  size = 'small',
  theme = 'default',
}: GoatimCoinsGainsProps): ReactElement {
  const sign = useMemo<'positive' | 'negative' | 'zero'>(() => {
    if (!variation && !children) {
      return 'zero';
    }
    return (variation || children || 0) > 0 ? 'positive' : 'negative';
  }, [variation, children]);

  return (
    <div className={`goatim-ui-goatim-coins-gains ${sign} ${size} ${theme}`}>
      <div className="container">
        <span>{formatGoatimCoinsGains(children || variation || 0, 2, false)}</span>
        <Icon name="goatim-coin" />
      </div>
    </div>
  );
}
