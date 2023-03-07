import { ReactElement } from 'react';
import { Item } from '@goatim/client';
import { ItemList } from './checkouts';

export type CartResumeSize = 'narrow' | 'normal';

export interface CartResumeProps {
  items?: Item[];
  onDeleteItem?: (item: Item) => unknown;
  size?: CartResumeSize;
}

export function CartResume({
  items,
  onDeleteItem,
  size = 'normal',
}: CartResumeProps): ReactElement {
  return (
    <div className={`goatim-ui-cart-resume ${size}`}>
      {items?.length ? (
        <ItemList items={items} onDeleteItem={onDeleteItem} size={size} />
      ) : (
        <span className="empty-cart">Panier vide</span>
      )}
    </div>
  );
}
