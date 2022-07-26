import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import CartResume from './cartResume';
import Heading from '../general/heading';

export type CartOverviewSize = 'narrow' | 'normal';

export interface Props {
  items?: Item[];
  onDeleteItem?: (item: Item) => void | Promise<void>;
  size?: CartOverviewSize;
}

export default function CartOverview({
  items,
  onDeleteItem,
  size = 'normal',
}: Props): ReactElement {
  return (
    <div className={`friday-ui-cart-overview ${size}`}>
      <Heading emoji="🛒" title="Panier" align="center" />
      <div className="resume">
        <CartResume items={items} onDeleteItem={onDeleteItem} size={size} />
      </div>
    </div>
  );
}
