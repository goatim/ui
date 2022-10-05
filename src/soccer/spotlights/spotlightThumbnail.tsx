import { MouseEvent, ReactElement, useMemo } from 'react';
import { Asset, Spotlight } from '@fridaygame/client';
import { To } from 'react-router-dom';
import { AssetThumbnailSize } from '../../trading/assets/assetThumbnail';
import AssetList from '../../trading/assets/assetList';

export type SpotlightThumbnailSize = 'narrow' | 'small' | 'medium' | 'large';

export interface Props {
  spotlight: Spotlight;
  size?: SpotlightThumbnailSize;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => unknown;
  assetTo?: (asset: Asset) => To;
}

export default function SpotlightThumbnail({
  spotlight,
  size = 'large',
  assetOnClick,
  assetTo,
}: Props): ReactElement {
  const assetSize = useMemo<AssetThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
        return 'narrow';
      case 'small':
        return 'small';
      case 'medium':
      case 'large':
      default:
        return 'large';
    }
  }, [size]);

  return (
    <div
      className={`friday-ui-spotlight-thumbnail ${spotlight.type || 'simple'} ${size}`}
      style={{
        background: spotlight.resolved_primary_color,
      }}>
      {spotlight.resolved_illustration && spotlight.type !== 'duo' ? (
        <img src={spotlight.resolved_illustration?.medium_url} alt={spotlight.title} />
      ) : null}

      <div className="wrapper">
        <div className="container">
          <div className="header">
            <h2>{spotlight.subtitle}</h2>
            <h1>{spotlight.title}</h1>
          </div>

          <div className="body">
            {spotlight.resolved_primary_assets?.length ? (
              <div className="assets">
                <AssetList
                  assets={
                    spotlight.resolved_primary_assets.filter(
                      (asset) => typeof asset === 'object',
                    ) as Asset[]
                  }
                  size={assetSize}
                  theme="lighter"
                  assetOnClick={assetOnClick}
                  assetTo={assetTo}
                />
              </div>
            ) : null}

            {spotlight.type === 'duo' && spotlight.resolved_secondary_assets?.length ? (
              <div className="assets">
                <AssetList
                  assets={
                    spotlight.resolved_secondary_assets.filter(
                      (asset) => typeof asset === 'object',
                    ) as Asset[]
                  }
                  size={assetSize}
                  theme="lighter"
                  assetOnClick={assetOnClick}
                  assetTo={assetTo}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
