import { ReactElement } from 'react';
import { formatFridayCoinsAmount } from '@fridaygame/client';

export type FridayCoinsSize = 'small' | 'medium' | 'big' | 'large';

export type FridayCoinsTheme = 'dark' | 'light' | 'darker' | 'gold';

export interface Props {
  children?: number;
  amount?: number;
  decimalDigits?: number;
  size?: FridayCoinsSize;
  theme?: FridayCoinsTheme;
}

export default function FridayCoins({
  children,
  amount,
  decimalDigits = 2,
  size = 'small',
  theme = 'dark',
}: Props): ReactElement {
  return (
    <span className={`friday-ui-friday-coins ${size} ${theme}`}>
      {formatFridayCoinsAmount(children || amount || 0, decimalDigits)}
    </span>
  );
}
