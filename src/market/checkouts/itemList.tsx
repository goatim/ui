import { ReactElement } from 'react';
import { Item } from '@goatim/client';
import { ItemThumbnail, ItemThumbnailOptionsFields, ItemThumbnailSize } from './itemThumbnail';

export interface ItemListProps {
  items?: Item[];
  onChangeItemOptions?: (
    item: Item,
    values: ItemThumbnailOptionsFields,
    changes?: Partial<ItemThumbnailOptionsFields>,
  ) => unknown;
  onDeleteItem?: (item: Item) => unknown;
  size?: ItemThumbnailSize;
}

export function ItemList({
  items,
  onChangeItemOptions,
  onDeleteItem,
  size,
}: ItemListProps): ReactElement {
  if (!items?.length) {
    return <span className="empty-list">Aucun item</span>;
  }
  return (
    <div className={`goatim-ui-item-list ${size}`}>
      {items.map((item: Item) => (
        <div key={item.id} className="item">
          <ItemThumbnail
            item={item}
            onChangeOptions={
              onChangeItemOptions
                ? (values, changes) => onChangeItemOptions(item, values, changes)
                : undefined
            }
            onDelete={onDeleteItem ? () => onDeleteItem(item) : undefined}
            size={size}
          />
        </div>
      ))}
    </div>
  );
}
