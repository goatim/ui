import { ReactElement } from 'react';
import { Item } from '@goatim/client';
import { CartResume } from './cartResume';
import { Heading } from '../general';
import { ItemThumbnailOptionsFields } from './checkouts';

export type CartOverviewSize = 'narrow' | 'normal';

export interface CartOverviewProps {
  items?: Item[];
  onChangeItemOptions?: (
    item: Item,
    values: ItemThumbnailOptionsFields,
    changes?: Partial<ItemThumbnailOptionsFields>,
  ) => unknown;
  onDeleteItem?: (item: Item) => unknown;
  size?: CartOverviewSize;
}

export function CartOverview({
  items,
  onChangeItemOptions,
  onDeleteItem,
  size = 'normal',
}: CartOverviewProps): ReactElement {
  return (
    <div className={`goatim-ui-cart-overview ${size}`}>
      <Heading emoji="🛒" align="center">
        Panier
      </Heading>
      <div className="resume">
        <CartResume
          items={items}
          onChangeItemOptions={onChangeItemOptions}
          onDeleteItem={onDeleteItem}
          size={size}
        />
      </div>
    </div>
  );
}
