import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import CartResume from './cartResume';
import Heading from '../general/heading';

export interface Props {
  items?: Item[];
  onDeleteItem?: (item: Item) => void | Promise<void>;
}

export default function CartOverview({ items, onDeleteItem }: Props): ReactElement {
  return (
    <div className="friday-ui-cart-overview">
      <Heading emoji="🛒" title="Panier" align="center" />
      <div className="resume">
        <CartResume items={items} onDeleteItem={onDeleteItem} />
      </div>
    </div>
  );
}
