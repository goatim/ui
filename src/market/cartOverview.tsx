import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import { CartResume } from './cartResume';
import { Heading } from '../general';

export type CartOverviewSize = 'narrow' | 'normal';

export interface CartOverviewProps {
  items?: Item[];
  onDeleteItem?: (item: Item) => unknown;
  size?: CartOverviewSize;
}

export function CartOverview({
  items,
  onDeleteItem,
  size = 'normal',
}: CartOverviewProps): ReactElement {
  return (
    <div className={`friday-ui-cart-overview ${size}`}>
      <Heading emoji="🛒" align="center">
        Panier
      </Heading>
      <div className="resume">
        <CartResume items={items} onDeleteItem={onDeleteItem} size={size} />
      </div>
    </div>
  );
}
