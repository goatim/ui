import { ReactElement } from 'react';
import { Item } from '@goatim/client';
import { ItemThumbnail, ItemThumbnailSize } from './itemThumbnail';

export interface ItemListProps {
  items?: Item[];
  onDeleteItem?: (item: Item) => unknown;
  size?: ItemThumbnailSize;
}

export function ItemList({ items, onDeleteItem, size }: ItemListProps): ReactElement {
  if (!items?.length) {
    return <span className="empty-list">Aucun item</span>;
  }
  return (
    <div className={`goatim-ui-item-list ${size}`}>
      {items.map((item: Item) => (
        <div key={item.id} className="item">
          <ItemThumbnail
            item={item}
            onDelete={onDeleteItem ? () => onDeleteItem(item) : undefined}
            size={size}
          />
        </div>
      ))}
    </div>
  );
}
