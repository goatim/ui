import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import ItemThumbnail from './itemThumbnail';

export interface Props {
  items?: Item[];
  onDeleteItem?: (item: Item) => void | Promise<void>;
}

export default function ItemList({ items, onDeleteItem }: Props): ReactElement {
  if (!items?.length) {
    return <span>Aucun item</span>;
  }
  return (
    <div className="friday-ui-item-list">
      {items.map((item: Item) => (
        <div key={item.id} className="item">
          <ItemThumbnail
            item={item}
            onDelete={onDeleteItem ? () => onDeleteItem(item) : undefined}
          />
        </div>
      ))}
    </div>
  );
}
