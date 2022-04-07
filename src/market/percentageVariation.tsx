import { ReactElement, useEffect, useState } from 'react';
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
  const [sign, setSign] = useState<'positive' | 'negative' | 'zero'>(
    variation >= 0 ? 'positive' : 'negative',
  );

  useEffect(() => {
    if (!variation) {
      setSign('zero');
    } else {
      setSign(variation > 0 ? 'positive' : 'negative');
    }
  }, [variation]);

  return (
    <span className={`friday-ui-market-percentage-variation ${sign} ${shape} ${size}`}>
      {formatPercentageVariation(variation)}
    </span>
  );
}
