import { ReactElement } from 'react';
import { BoosterItem, formatEuros } from '@fridaygame/client';
import Icon from '../../general/icon';

export type BoosterItemThumbnailSize = 'narrow' | 'normal';

export interface Props {
  boosterItem: BoosterItem;
  onDelete?: () => unknown;
  size?: BoosterItemThumbnailSize;
}

export default function BoosterItemThumbnail({
  boosterItem,
  onDelete,
  size = 'normal',
}: Props): ReactElement {
  return (
    <div className={`friday-ui-booster-item-thumbnail ${size}`}>
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

        <div className="cell">
          <span>Prix</span>
          <div className="content">
            <span className="price">{formatEuros(boosterItem.total_price)}</span>
          </div>
        </div>
      </div>

      {onDelete ? (
        <button className="delete" type="button" onClick={onDelete}>
          <Icon name="x" size={24} />
        </button>
      ) : null}
    </div>
  );
}
