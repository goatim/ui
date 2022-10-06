import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import ItemList from './checkouts/itemList';

export type CartResumeSize = 'narrow' | 'normal';

export interface Props {
  items?: Item[];
  onDeleteItem?: (item: Item) => unknown;
  size?: CartResumeSize;
}

export default function CartResume({ items, onDeleteItem, size = 'normal' }: Props): ReactElement {
  return (
    <div className={`friday-ui-cart-resume ${size}`}>
      {items?.length ? (
        <ItemList items={items} onDeleteItem={onDeleteItem} size={size} />
      ) : (
        <span className="empty-cart">Panier vide</span>
      )}
    </div>
  );
}
