import { ReactElement } from 'react';
import { Dividend } from '@goatim/client';
import { GoatimCoinsGains, PercentageVariation } from '../../market';
import { Datetime } from '../../general';

export interface DividendBookProps {
  dividends?: Dividend[];
  averagePercentage?: number;
  averageGains?: number;
}

export function DividendBook({
  dividends,
  averagePercentage,
  averageGains,
}: DividendBookProps): ReactElement {
  return (
    <div className="goatim-ui-dividend-book">
      <div className="header">
        <span className="title">Dividendes</span>
        {averagePercentage !== undefined || averageGains !== undefined ? (
          <div className="average">
            <span>Moy.</span>
            <PercentageVariation variation={averagePercentage} />
            <GoatimCoinsGains gains={averageGains} />
          </div>
        ) : null}
      </div>
      <div className="body">
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
    </div>
  );
}
