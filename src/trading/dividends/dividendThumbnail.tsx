import { ReactElement, useMemo } from 'react';
import { Dividend } from '@fridaygame/client';
import AssetThumbnail, { AssetThumbnailTheme } from '../assets/assetThumbnail';
import FridayCoinsVariation from '../../market/fridayCoinsVariation';

export type DividendThumbnailTheme = 'dark' | 'light';

export interface Props {
  dividend: Dividend;
  theme?: DividendThumbnailTheme;
}

export default function DividendThumbnail({ dividend, theme = 'dark' }: Props): ReactElement {
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
          <AssetThumbnail
            asset={dividend.asset}
            size="small"
            shape="text"
            showQuotation={false}
            theme={assetTheme}
          />
        </div>
      ) : null}
      <div className="amount">
        <FridayCoinsVariation variation={dividend.amount} />
      </div>
    </div>
  );
}
