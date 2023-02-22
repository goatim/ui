import { ReactElement, useMemo } from 'react';
import { formatFridayCoinsVariation } from '@fridaygame/client';

export type FridayCoinsVariationSize = 'small' | 'medium' | 'big' | 'large';

export type FridayCoinsVariationTheme = 'default' | 'gold';

export interface FridayCoinsVariationProps {
  children?: number;
  variation?: number;
  size?: FridayCoinsVariationSize;
  theme?: FridayCoinsVariationTheme;
}

export function FridayCoinsVariation({
  children,
  variation,
  size = 'small',
  theme = 'default',
}: FridayCoinsVariationProps): ReactElement {
  const sign = useMemo<'positive' | 'negative' | 'zero'>(() => {
    if (!variation && !children) {
      return 'zero';
    }
    return (variation || children || 0) > 0 ? 'positive' : 'negative';
  }, [variation, children]);

  return (
    <span className={`friday-ui-friday-coins-variation ${sign} ${size} ${theme}`}>
      {formatFridayCoinsVariation(children || variation || 0)}
    </span>
  );
}
