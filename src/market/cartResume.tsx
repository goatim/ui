import { ReactElement } from 'react';
import { Item } from '@goatim/client';
import { ItemList, ItemThumbnailOptionsFields } from './checkouts';

export type CartResumeSize = 'narrow' | 'normal';

export interface CartResumeProps {
  items?: Item[];
  onChangeItemOptions?: (
    item: Item,
    values: ItemThumbnailOptionsFields,
    changes?: Partial<ItemThumbnailOptionsFields>,
  ) => unknown;
  onDeleteItem?: (item: Item) => unknown;
  size?: CartResumeSize;
}

export function CartResume({
  items,
  onChangeItemOptions,
  onDeleteItem,
  size = 'normal',
}: CartResumeProps): ReactElement {
  return (
    <div className={`goatim-ui-cart-resume ${size}`}>
      {items?.length ? (
        <ItemList
          items={items}
          onChangeItemOptions={onChangeItemOptions}
          onDeleteItem={onDeleteItem}
          size={size}
        />
      ) : (
        <span className="empty-cart">Panier vide</span>
      )}
    </div>
  );
}
