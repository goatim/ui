import { ReactElement } from 'react';
import { formatFridayCoinsAmount } from '@fridaygame/client';
import { Icon } from '../general';

export type FridayCoinsSize = 'small' | 'medium' | 'big' | 'large';

export type FridayCoinsTheme = 'dark' | 'light' | 'darker' | 'gold';

export interface FridayCoinsProps {
  children?: number;
  amount?: number;
  decimalDigits?: number;
  size?: FridayCoinsSize;
  theme?: FridayCoinsTheme;
}

export function FridayCoins({
  children,
  amount,
  decimalDigits = 2,
  size = 'small',
  theme = 'dark',
}: FridayCoinsProps): ReactElement {
  return (
    <div className={`friday-ui-friday-coins ${size} ${theme}`}>
      <div className="container">
        <span>{formatFridayCoinsAmount(children || amount || 0, decimalDigits, false)}</span>
        <Icon name="friday-coin" />
      </div>
    </div>
  );
}
