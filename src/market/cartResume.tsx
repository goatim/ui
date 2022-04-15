import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import ItemList from './itemList';

export interface Props {
  items?: Item[];
  onDeleteItem?: (item: Item) => void | Promise<void>;
}

export default function CartResume({ items, onDeleteItem }: Props): ReactElement {
  return (
    <div className="friday-ui-cart-resume">
      <ItemList items={items} onDeleteItem={onDeleteItem} />
    </div>
  );
}
