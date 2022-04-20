import { ReactElement, useEffect, useState } from 'react';
import { formatFridayCoinsVariation } from '@fridaygame/client';

export type FridayCoinsVariationSize = 'small' | 'medium' | 'big';

export interface Props {
  variation?: number;
  size?: FridayCoinsVariationSize;
}

export default function FridayCoinsVariation({
  variation = 0,
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
    <span className={`friday-ui-friday-coins-variation ${sign} ${size}`}>
      {formatFridayCoinsVariation(variation)}
    </span>
  );
}
