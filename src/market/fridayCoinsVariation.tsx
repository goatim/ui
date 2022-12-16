import { ReactElement, useMemo } from 'react';
import { formatFridayCoinsVariation } from '@fridaygame/client';

export type FridayCoinsVariationSize = 'small' | 'medium' | 'big' | 'large';

export type FridayCoinsVariationTheme = 'default' | 'gold';

export interface Props {
  variation?: number;
  size?: FridayCoinsVariationSize;
  theme?: FridayCoinsVariationTheme;
}

export default function FridayCoinsVariation({
  variation = 0,
  size = 'small',
  theme = 'default',
}: Props): ReactElement {
  const sign = useMemo<'positive' | 'negative' | 'zero'>(() => {
    if (!variation) {
      return 'zero';
    }
    return variation > 0 ? 'positive' : 'negative';
  }, [variation]);

  return (
    <span className={`friday-ui-friday-coins-variation ${sign} ${size} ${theme}`}>
      {formatFridayCoinsVariation(variation)}
    </span>
  );
}
