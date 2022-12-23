import { ReactElement, MouseEvent } from 'react';
import { To } from 'react-router';
import { Asset } from '@fridaygame/client';
import AssetThumbnail, { AssetThumbnailSize, AssetThumbnailTheme } from './assetThumbnail';

export interface Props {
  assets?: Asset[];
  size?: AssetThumbnailSize;
  theme?: AssetThumbnailTheme;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => unknown;
  assetTo?: (asset: Asset) => To;
  columns?: number;
}

export default function AssetList({
  assets,
  size,
  theme,
  assetOnClick,
  assetTo,
  columns = 1,
}: Props): ReactElement {
  return (
    <div
      className={`friday-ui-asset-list ${size}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {assets ? (
        assets.map((asset) => (
          <div key={asset.id} className="asset">
            <AssetThumbnail
              asset={asset}
              size={size}
              theme={theme}
              onClick={assetOnClick ? (event) => assetOnClick(asset, event) : undefined}
              to={assetTo ? assetTo(asset) : undefined}
            />
          </div>
        ))
      ) : (
        <span />
      )}
    </div>
  );
}
