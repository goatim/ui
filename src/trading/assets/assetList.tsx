import { MouseEvent, ReactElement } from 'react';
import { Asset } from '@goatim/client';
import { UrlObject } from 'url';
import { AssetThumbnail, AssetThumbnailSize, AssetThumbnailTheme } from './assetThumbnail';

export interface AssetListProps {
  assets?: Asset[];
  size?: AssetThumbnailSize;
  theme?: AssetThumbnailTheme;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => unknown;
  assetHref?: (asset: Asset) => string | UrlObject;
  columns?: number;
}

export function AssetList({
  assets,
  size,
  theme,
  assetOnClick,
  assetHref,
  columns = 1,
}: AssetListProps): ReactElement {
  return (
    <div
      className={`goatim-ui-asset-list ${size}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {assets ? (
        assets.map((asset) => (
          <div key={asset.id} className="asset">
            <AssetThumbnail
              asset={asset}
              size={size}
              theme={theme}
              onClick={assetOnClick ? (event) => assetOnClick(asset, event) : undefined}
              href={assetHref ? assetHref(asset) : undefined}
            />
          </div>
        ))
      ) : (
        <span />
      )}
    </div>
  );
}
