import { ReactElement } from 'react';
import { BoosterItem } from '@goatim/client';

export type BoosterItemThumbnailSize = 'narrow' | 'normal';

export interface BoosterItemThumbnailProps {
  boosterItem: BoosterItem;
  size?: BoosterItemThumbnailSize;
}

export function BoosterItemThumbnail({
  boosterItem,
  size = 'normal',
}: BoosterItemThumbnailProps): ReactElement {
  if (!boosterItem.booster_factory || typeof boosterItem.booster_factory !== 'object') {
    return <span />;
  }
  return (
    <div className={`goatim-ui-booster-item-thumbnail ${size}`}>
      <span className="name">Booster {boosterItem.booster_factory.name}</span>
      <span className="leverage">x {boosterItem.booster_factory.leverage}</span>
    </div>
  );
}
