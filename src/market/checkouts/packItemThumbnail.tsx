import { ReactElement } from 'react';
import { formatCurrency, PackItem } from '@fridaygame/client';
import Icon from '../../general/icon';

export type PackItemThumbnailSize = 'narrow' | 'normal';

export interface Props {
  packItem: PackItem;
  onDelete?: () => unknown;
  size?: PackItemThumbnailSize;
}

export default function PackItemThumbnail({
  packItem,
  onDelete,
  size = 'normal',
}: Props): ReactElement {
  return (
    <div className={`friday-ui-pack-item-thumbnail ${size}`}>
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

        <div className="cell">
          <span>Prix</span>
          <div className="content">
            <span className="price">{formatCurrency(packItem.total_price)}</span>
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
