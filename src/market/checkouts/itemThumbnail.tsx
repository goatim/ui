import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import OrderItemThumbnail from './orderItemThumbnail';

export interface Props {
  item: Item;
  onDelete?: (() => void) | (() => Promise<void>);
}

export default function ItemThumbnail({ item, onDelete }: Props): ReactElement | null {
  switch (item.type) {
    case 'order':
      return item.order ? <OrderItemThumbnail orderItem={item.order} onDelete={onDelete} /> : null;
    default:
      return null;
  }
}
