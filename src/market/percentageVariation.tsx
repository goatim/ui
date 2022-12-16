import { ReactElement, useEffect, useMemo, useState } from 'react';
import { formatPercentageVariation } from '@fridaygame/client';

export type PercentageVariationShape = 'text' | 'filled';

export type PercentageVariationSize = 'small' | 'medium' | 'big';

export interface Props {
  variation?: number;
  shape?: PercentageVariationShape;
  size?: PercentageVariationSize;
}

export default function PercentageVariation({
  variation = 0,
  shape = 'text',
  size = 'small',
}: Props): ReactElement {
  const sign = useMemo<'positive' | 'negative' | 'zero'>(() => {
    if (!variation) {
      return 'zero';
    }
    return variation > 0 ? 'positive' : 'negative';
  }, [variation]);

  return (
    <span className={`friday-ui-percentage-variation ${sign} ${shape} ${size}`}>
      {formatPercentageVariation(variation)}
    </span>
  );
}
