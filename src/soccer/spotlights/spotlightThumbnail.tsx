import { MouseEvent, ReactElement } from 'react';
import { Asset, Spotlight } from '@fridaygame/client';
import { To } from 'react-router-dom';
import AssetThumbnail from '../../trading/assets/assetThumbnail';

export interface Props {
  spotlight: Spotlight;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  assetTo?: (asset: Asset) => To;
}

export default function SpotlightThumbnail({
  spotlight,
  assetOnClick,
  assetTo,
}: Props): ReactElement {
  return (
    <div
      className={`friday-ui-spotlight-thumbnail ${spotlight.type}`}
      style={{
        background: spotlight.resolved_primary_color,
      }}>
      {spotlight.resolved_illustration && spotlight.type === 'simple' ? (
        <img src={spotlight.resolved_illustration?.medium_url} alt={spotlight.title} />
      ) : null}

      <div className="wrapper">
        <div className="container">
          <div className="header">
            <h2>{spotlight.subtitle}</h2>
            <h1>{spotlight.title}</h1>
          </div>

          <div className="body">
            <div className="assets">
              {spotlight.resolved_primary_assets?.map((asset) =>
                typeof asset === 'object' ? (
                  <div className="asset" key={asset.id}>
                    <AssetThumbnail
                      asset={asset}
                      size="full"
                      theme="lighter"
                      onClick={assetOnClick ? (event) => assetOnClick(asset, event) : undefined}
                      to={assetTo ? assetTo(asset) : undefined}
                    />
                  </div>
                ) : null,
              )}
            </div>

            {spotlight.type === 'duo' ? (
              <div className="assets">
                {spotlight.resolved_secondary_assets?.map((asset) =>
                  typeof asset === 'object' ? (
                    <div className="asset" key={asset.id}>
                      <AssetThumbnail
                        asset={asset}
                        size="big"
                        theme="lighter"
                        onClick={assetOnClick ? (event) => assetOnClick(asset, event) : undefined}
                        to={assetTo ? assetTo(asset) : undefined}
                      />
                    </div>
                  ) : null,
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
