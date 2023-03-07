import { ReactElement } from 'react';
import { formatGoatimCoinsAmount } from '@goatim/client';
import { Icon } from '../general';

export type GoatimCoinsSize = 'small' | 'medium' | 'big' | 'large';

export type GoatimCoinsTheme = 'dark' | 'light' | 'darker' | 'gold';

export interface GoatimCoinsProps {
  children?: number;
  amount?: number;
  decimalDigits?: number;
  size?: GoatimCoinsSize;
  theme?: GoatimCoinsTheme;
}

export function GoatimCoins({
  children,
  amount,
  decimalDigits = 2,
  size = 'small',
  theme = 'dark',
}: GoatimCoinsProps): ReactElement {
  return (
    <div className={`goatim-ui-goatim-coins ${size} ${theme}`}>
      <div className="container">
        <span>{formatGoatimCoinsAmount(children || amount || 0, decimalDigits, false)}</span>
        <Icon name="goatim-coin" />
      </div>
    </div>
  );
}
