import { ReactElement, useMemo } from 'react';
import { formatFridayCoinsVariation } from '@fridaygame/client';
import { Icon } from '../general';

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
    <div className={`friday-ui-friday-coins-variation ${sign} ${size} ${theme}`}>
      <div className="container">
        <span>{formatFridayCoinsVariation(children || variation || 0, 2, false)}</span>
        <Icon name="friday-coin" />
      </div>
    </div>
  );
}
