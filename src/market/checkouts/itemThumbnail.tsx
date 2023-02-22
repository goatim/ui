import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import { OrderItemThumbnail } from './orderItemThumbnail';
import { PackItemThumbnail } from './packItemThumbnail';
import { BoosterItemThumbnail } from './boosterItemThumbnail';

export type ItemThumbnailSize = 'narrow' | 'normal';

export interface ItemThumbnailProps {
  item: Item;
  onDelete?: () => unknown;
  size?: ItemThumbnailSize;
}

export function ItemThumbnail({
  item,
  onDelete,
  size = 'normal',
}: ItemThumbnailProps): ReactElement | null {
  switch (item.type) {
    case 'order':
      return item.order ? (
        <OrderItemThumbnail orderItem={item.order} onDelete={onDelete} size={size} />
      ) : null;
    case 'pack':
      return item.pack ? (
        <PackItemThumbnail packItem={item.pack} onDelete={onDelete} size={size} />
      ) : null;
    case 'booster':
      return item.booster ? (
        <BoosterItemThumbnail boosterItem={item.booster} onDelete={onDelete} size={size} />
      ) : null;
    default:
      return null;
  }
}
