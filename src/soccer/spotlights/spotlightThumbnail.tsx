import { ReactElement } from 'react';
import { Spotlight } from '@fridaygame/client';
import AssetThumbnail from '../../trading/assets/assetThumbnail';

export interface Props {
  spotlight: Spotlight;
}

export default function SpotlightThumbnail({ spotlight }: Props): ReactElement {
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
                    <AssetThumbnail asset={asset} size="full" theme="lighter" />
                  </div>
                ) : null,
              )}
            </div>

            {spotlight.type === 'duo' ? (
              <div className="assets">
                {spotlight.resolved_secondary_assets?.map((asset) =>
                  typeof asset === 'object' ? (
                    <div className="asset" key={asset.id}>
                      <AssetThumbnail asset={asset} size="big" theme="lighter" />
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
