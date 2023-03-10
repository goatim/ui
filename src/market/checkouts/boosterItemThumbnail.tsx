import { ReactElement } from 'react';
import { BoosterItem, formatEurosAmount } from '@goatim/client';
import { Icon } from '../../general';

export type BoosterItemThumbnailSize = 'narrow' | 'normal';

export interface BoosterItemThumbnailProps {
  boosterItem: BoosterItem;
  onDelete?: () => unknown;
  size?: BoosterItemThumbnailSize;
}

export function BoosterItemThumbnail({
  boosterItem,
  onDelete,
  size = 'normal',
}: BoosterItemThumbnailProps): ReactElement {
  return (
    <div className={`goatim-ui-booster-item-thumbnail ${size}`}>
      <div className="container">
        {boosterItem.booster_factory && typeof boosterItem.booster_factory === 'object' ? (
          <div className="cell">
            <span>Booster</span>
            <div className="content">
              <span className="name">{boosterItem.booster_factory.name}</span>
            </div>
          </div>
        ) : null}

        <div className="cell">
          <span>Quantité</span>
          <div className="content">
            <span className="quantity">x{boosterItem.quantity || 0}</span>
          </div>
        </div>

        {boosterItem.total_price ? (
          <div className="cell">
            <span>Prix</span>
            <div className="content">
              <span className="price">{formatEurosAmount(boosterItem.total_price)}</span>
            </div>
          </div>
        ) : null}
      </div>

      {onDelete ? (
        <button className="delete" type="button" onClick={onDelete}>
          <Icon name="x" size={24} />
        </button>
      ) : null}
    </div>
  );
}
