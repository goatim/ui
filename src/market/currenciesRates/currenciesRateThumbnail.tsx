import { ReactElement } from 'react';
import { CurrenciesRate, formatCurrencyAmount } from '@fridaygame/client';
import PercentageVariation from '../percentageVariation';

export type CurrenciesRateThumbnailTheme = 'dark' | 'light';

export interface Props {
  currenciesRate: CurrenciesRate;
  theme?: CurrenciesRateThumbnailTheme;
  variation?: number;
}

export default function CurrenciesRateThumbnail({
  currenciesRate,
  theme = 'dark',
  variation,
}: Props): ReactElement {
  return (
    <div className={`friday-ui-currencies-rate-thumbnail ${theme}`}>
      <div className="rates">
        {currenciesRate.base_currency && typeof currenciesRate.base_currency === 'object' ? (
          <span className="base-currency">
            {formatCurrencyAmount(
              1 / Number(currenciesRate.base_currency.smallest_unit),
              currenciesRate.base_currency.iso,
            )}
          </span>
        ) : null}
        {currenciesRate.target_currency && typeof currenciesRate.target_currency === 'object' ? (
          <span className="target-currency">
            {formatCurrencyAmount(
              (currenciesRate.rate || 0) / Number(currenciesRate.target_currency.smallest_unit),
              currenciesRate.target_currency.iso,
            )}
          </span>
        ) : null}
      </div>
      {variation !== undefined ? (
        <div className="variation">
          <PercentageVariation variation={variation} shape="filled" />
        </div>
      ) : null}
    </div>
  );
}
