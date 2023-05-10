import { ReactElement, useMemo } from 'react';
import { Dividend } from '@goatim/client';
import { AssetThumbnail, AssetThumbnailTheme } from '../assets';
import { GoatimCoinsGains } from '../../market';

export type DividendThumbnailTheme = 'dark' | 'light';

export interface DividendThumbnailProps {
  dividend: Dividend;
  theme?: DividendThumbnailTheme;
}

export function DividendThumbnail({
  dividend,
  theme = 'dark',
}: DividendThumbnailProps): ReactElement {
  const assetTheme = useMemo<AssetThumbnailTheme>(() => {
    switch (theme) {
      case 'light':
        return 'lighter';
      default:
        return 'default';
    }
  }, [theme]);

  return (
    <div className="goatim-ui-dividend-thumbnail">
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
      <div className="coins">
        <GoatimCoinsGains gains={dividend.coins} />
      </div>
    </div>
  );
}
