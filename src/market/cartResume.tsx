import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import ItemList from './checkouts/itemList';

export type CartResumeSize = 'narrow' | 'normal';

export interface Props {
  items?: Item[];
  onDeleteItem?: (item: Item) => void | Promise<void>;
  size?: CartResumeSize;
}

export default function CartResume({ items, onDeleteItem, size = 'normal' }: Props): ReactElement {
  return (
    <div className={`friday-ui-cart-resume ${size}`}>
      <ItemList items={items} onDeleteItem={onDeleteItem} size={size} />
    </div>
  );
}
