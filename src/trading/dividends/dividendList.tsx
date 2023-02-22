import { ReactElement } from 'react';
import { Dividend } from '@fridaygame/client';
import { DividendThumbnail, DividendThumbnailTheme } from './dividendThumbnail';

export interface DividendListProps {
  dividends?: Dividend[];
  theme?: DividendThumbnailTheme;
}

export function DividendList({ dividends, theme = 'dark' }: DividendListProps): ReactElement {
  if (!dividends?.length) {
    return <span>Aucun dividende</span>;
  }
  return (
    <div className="friday-ui-dividend-list">
      {dividends.map((dividend) => (
        <div key={dividend.id} className="dividend">
          <DividendThumbnail dividend={dividend} theme={theme} />
        </div>
      ))}
    </div>
  );
}
