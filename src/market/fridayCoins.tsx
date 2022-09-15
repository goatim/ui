import { ReactElement } from 'react';
import { formatFridayCoins } from '@fridaygame/client';

export type FridayCoinsSize = 'small' | 'medium' | 'big' | 'large';

export type FridayCoinsTheme = 'dark' | 'light' | 'darker';

export interface Props {
  amount?: number;
  size?: FridayCoinsSize;
  theme?: FridayCoinsTheme;
}

export default function FridayCoins({
  amount = 0,
  size = 'small',
  theme = 'dark',
}: Props): ReactElement {
  return (
    <span className={`friday-ui-friday-coins ${size} ${theme}`}>{formatFridayCoins(amount)}</span>
  );
}
