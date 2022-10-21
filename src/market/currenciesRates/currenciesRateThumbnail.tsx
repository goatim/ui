import { ReactElement } from 'react';
import { CurrenciesRate, formatCurrency } from '@fridaygame/client';

export interface Props {
  currenciesRate: CurrenciesRate;
}

export default function CurrenciesRateThumbnail({ currenciesRate }: Props): ReactElement {
  return (
    <div className="friday-ui-currencies-rate-thumbnail">
      {currenciesRate.base_currency && typeof currenciesRate.base_currency === 'object' ? (
        <span>
          {formatCurrency(
            1,
            Number(currenciesRate.base_currency.smallest_unit),
            currenciesRate.base_currency.iso,
          )}
        </span>
      ) : null}
    </div>
  );
}
