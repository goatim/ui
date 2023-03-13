import { ReactElement } from 'react';
import { Dividend } from '@goatim/client';
import { GoatimCoinsGains, PercentageVariation } from '../../market';
import { Datetime } from '../../general';

export interface DividendBookProps {
  dividends?: Dividend[];
}

export function DividendBook({ dividends }: DividendBookProps): ReactElement {
  return (
    <div className="goatim-ui-dividend-book">
      {dividends?.length ? (
        <table>
          <thead>
            <tr>
              <th className="left">Date</th>
              <th className="right">%</th>
              <th className="right">Dividende</th>
            </tr>
          </thead>

          <tbody>
            {dividends.map((dividend) => (
              <tr key={dividend.id}>
                <td className="left">
                  {dividend.creation ? <Datetime value={dividend.creation} /> : '-'}
                </td>
                <td className="right">
                  <PercentageVariation variation={dividend.percentage} />
                </td>
                <td className="right">
                  <GoatimCoinsGains gains={dividend.amount} size="small" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-dividend">
          <span>Aucun dividende</span>
        </div>
      )}
    </div>
  );
}
