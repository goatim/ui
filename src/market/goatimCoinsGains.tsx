import { ReactElement, useMemo } from 'react';
import { formatGoatimCoinsGains } from '@goatim/client';
import { Icon } from '../general';

export type GoatimCoinsGainsSize = 'small' | 'medium' | 'big' | 'large';

export type GoatimCoinsGainsTheme = 'default' | 'gold';

export interface GoatimCoinsGainsProps {
  children?: number;
  gains?: number;
  size?: GoatimCoinsGainsSize;
  theme?: GoatimCoinsGainsTheme;
}

export function GoatimCoinsGains({
  children,
  gains,
  size = 'small',
  theme = 'default',
}: GoatimCoinsGainsProps): ReactElement {
  const sign = useMemo<'positive' | 'negative' | 'zero'>(() => {
    if (!gains && !children) {
      return 'zero';
    }
    return (gains || children || 0) > 0 ? 'positive' : 'negative';
  }, [gains, children]);

  return (
    <div className={`goatim-ui-goatim-coins-gains ${sign} ${size} ${theme}`}>
      <div className="container">
        <span>{formatGoatimCoinsGains(children || gains || 0, 2, false)}</span>
        <Icon size={12} name="goatim-coin" />
      </div>
    </div>
  );
}
