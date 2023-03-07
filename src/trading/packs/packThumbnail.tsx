import { ReactElement } from 'react';
import { Pack } from '@goatim/client';
import { ShareBulkList } from '../shareBulks';
import { GoatimCoins } from '../../market';
import { Wallpaper } from '../../general';

export type PackThumbnailSize = 'narrow' | 'normal';

export interface PackThumbnailProps {
  pack: Pack;
  size?: PackThumbnailSize;
}

export function PackThumbnail({ pack, size = 'normal' }: PackThumbnailProps): ReactElement {
  return (
    <div className="goatim-ui-pack-thumbnail">
      <div className="header">
        <h1>{pack.resolved_title || 'Nouvelles actions !'}</h1>
      </div>
      {pack.share_bulks && Array.isArray(pack.share_bulks) ? (
        <div className="shares-bulks">
          <ShareBulkList shareBulks={pack.share_bulks} size={size} />
        </div>
      ) : null}
      <div className="footer">
        <div className="pack-factory">
          <span className="label">Pack</span>
          <span className="value">
            {typeof pack.factory === 'object' && pack.factory?.name ? pack.factory.name : '--'}
          </span>
        </div>
        <div className="valuation">
          <span className="label">Valorisation</span>
          <GoatimCoins amount={pack.valuation} />
        </div>
      </div>
      <div className="wallpaper">
        <Wallpaper>Pack</Wallpaper>
      </div>
    </div>
  );
}
