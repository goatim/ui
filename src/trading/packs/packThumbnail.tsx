import { ReactElement } from 'react';
import { Pack } from '@fridaygame/client';
import ShareBulkList from '../shareBulks/shareBulkList';
import FridayCoins from '../../market/fridayCoins';
import Wallpaper from '../../general/wallpaper';

export type PackThumbnailSize = 'narrow' | 'normal';

export interface Props {
  pack: Pack;
  size?: PackThumbnailSize;
}

export default function PackThumbnail({ pack, size = 'normal' }: Props): ReactElement {
  return (
    <div className="friday-ui-pack-thumbnail">
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
          <FridayCoins amount={pack.valuation} />
        </div>
      </div>
      <div className="wallpaper">
        <Wallpaper>Pack</Wallpaper>
      </div>
    </div>
  );
}
