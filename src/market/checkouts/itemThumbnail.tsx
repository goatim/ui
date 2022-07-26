import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import OrderItemThumbnail from './orderItemThumbnail';

export type ItemThumbnailSize = 'narrow' | 'normal';

export interface Props {
  item: Item;
  onDelete?: (() => void) | (() => Promise<void>);
  size?: ItemThumbnailSize;
}

export default function ItemThumbnail({
  item,
  onDelete,
  size = 'normal',
}: Props): ReactElement | null {
  switch (item.type) {
    case 'order':
      return item.order ? (
        <OrderItemThumbnail orderItem={item.order} onDelete={onDelete} size={size} />
      ) : null;
    default:
      return null;
  }
}
