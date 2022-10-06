import { ReactElement } from 'react';
import { Item } from '@fridaygame/client';
import OrderItemThumbnail from './orderItemThumbnail';
import PackItemThumbnail from './packItemThumbnail';
import BoosterItemThumbnail from './boosterItemThumbnail';

export type ItemThumbnailSize = 'narrow' | 'normal';

export interface Props {
  item: Item;
  onDelete?: () => unknown;
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
