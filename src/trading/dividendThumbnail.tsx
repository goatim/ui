import { ReactElement, useMemo } from 'react';
import { Dividend } from '@fridaygame/client';
import AssetThumbnail, { AssetThumbnailTheme } from './assetThumbnail';
import FridayCoinsVariation from '../market/fridayCoinsVariation';

export type DividendThumbnailTheme = 'default' | 'light';

export interface Props {
  dividend: Dividend;
  theme?: DividendThumbnailTheme;
}

export default function DividendThumbnail({ dividend, theme = 'default' }: Props): ReactElement {
  const assetTheme = useMemo<AssetThumbnailTheme>(() => {
    switch (theme) {
      case 'light':
        return 'lighter';
      default:
        return 'default';
    }
  }, [theme]);

  return (
    <div className="friday-ui-dividend-thumbnail">
      {dividend.asset && typeof dividend.asset === 'object' ? (
        <div className="asset">
          <AssetThumbnail asset={dividend.asset} size="inline" theme={assetTheme} />
        </div>
      ) : null}
      <div className="amount">
        <FridayCoinsVariation variation={dividend.amount} />
      </div>
    </div>
  );
}
