import { ReactElement, useMemo } from 'react';
import { formatPercentageVariation } from '@goatim/client';

export type PercentageVariationShape = 'text' | 'filled';

export type PercentageVariationSize = 'small' | 'medium' | 'big';

export interface PercentageVariationProps {
  children?: number;
  variation?: number;
  shape?: PercentageVariationShape;
  size?: PercentageVariationSize;
}

export function PercentageVariation({
  children,
  variation,
  shape = 'text',
  size = 'small',
}: PercentageVariationProps): ReactElement {
  const sign = useMemo<'positive' | 'negative' | 'zero'>(() => {
    if (!variation) {
      return 'zero';
    }
    return variation > 0 ? 'positive' : 'negative';
  }, [variation]);

  return (
    <span className={`goatim-ui-percentage-variation ${sign} ${shape} ${size}`}>
      {formatPercentageVariation(children || variation || 0)}
    </span>
  );
}
