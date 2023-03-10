import { ReactElement } from 'react';
import { formatEurosAmount, PackItem } from '@goatim/client';
import { Icon } from '../../general';

export type PackItemThumbnailSize = 'narrow' | 'normal';

export interface PackItemThumbnailProps {
  packItem: PackItem;
  onDelete?: () => unknown;
  size?: PackItemThumbnailSize;
}

export function PackItemThumbnail({
  packItem,
  onDelete,
  size = 'normal',
}: PackItemThumbnailProps): ReactElement {
  return (
    <div className={`goatim-ui-pack-item-thumbnail ${size}`}>
      <div className="container">
        {packItem.pack_factory && typeof packItem.pack_factory === 'object' ? (
          <div className="cell">
            <span>Pack</span>
            <div className="content">
              <span className="name">{packItem.pack_factory.name}</span>
            </div>
          </div>
        ) : null}

        <div className="cell">
          <span>Quantité</span>
          <div className="content">
            <span className="quantity">x{packItem.quantity || 0}</span>
          </div>
        </div>

        {packItem.total_price ? (
          <div className="cell">
            <span>Prix</span>
            <div className="content">
              <span className="price">{formatEurosAmount(packItem.total_price)}</span>
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
