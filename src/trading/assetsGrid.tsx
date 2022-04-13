import { ReactElement, MouseEvent } from 'react';
import { To } from 'react-router';
import { Asset } from '@fridaygame/client';
import AssetThumbnail from './assetThumbnail';

export interface Props {
  assets?: Asset[];
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  assetTo?: (asset: Asset) => To;
}

export default function AssetsGrid({ assets, assetOnClick, assetTo }: Props): ReactElement {
  return (
    <div className="friday-ui-assets-grid">
      {assets ? (
        assets.map((asset) => (
          <div key={asset.id} className="asset">
            <AssetThumbnail
              asset={asset}
              onClick={assetOnClick ? (event) => assetOnClick(asset, event) : undefined}
              to={assetTo ? assetTo(asset) : undefined}
            />
          </div>
        ))
      ) : (
        <span>Aucun asset</span>
      )}
    </div>
  );
}
