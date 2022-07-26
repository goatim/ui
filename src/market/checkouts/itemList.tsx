import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import ItemThumbnail, { ItemThumbnailSize } from './itemThumbnail';

export interface Props {
  items?: Item[];
  onDeleteItem?: (item: Item) => void | Promise<void>;
  size?: ItemThumbnailSize;
}

export default function ItemList({ items, onDeleteItem, size }: Props): ReactElement {
  if (!items?.length) {
    return <span>Aucun item</span>;
  }
  return (
    <div className={`friday-ui-item-list ${size}`}>
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
