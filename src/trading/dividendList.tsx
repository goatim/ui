import { ReactElement } from 'react';
import { Dividend } from '@fridaygame/client';
import DividendThumbnail, { DividendThumbnailTheme } from './dividendThumbnail';

export interface Props {
  dividends?: Dividend[];
  theme?: DividendThumbnailTheme;
}

export default function DividendList({ dividends, theme = 'default' }: Props): ReactElement {
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
