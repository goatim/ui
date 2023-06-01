import { ReactElement, useMemo } from 'react';
import { formatEurosAmount, Item } from '@goatim/client';
import { Field, Form } from '@cezembre/forms';
import { FormSubmitFunction } from '@cezembre/forms/dist/state';
import { OrderItemThumbnail } from './orderItemThumbnail';
import { PackItemThumbnail } from './packItemThumbnail';
import { BoosterItemThumbnail } from './boosterItemThumbnail';
import { Counter, CounterProps, Icon } from '../../general';

export type ItemThumbnailSize = 'narrow' | 'normal';

export interface ItemThumbnailOptionsFields {
  quantity?: number;
}

export interface ItemThumbnailProps {
  item: Item;
  onChangeOptions?: FormSubmitFunction<ItemThumbnailOptionsFields>;
  onDelete?: () => unknown;
  size?: ItemThumbnailSize;
}

export function ItemThumbnail({
  item,
  onChangeOptions,
  onDelete,
  size = 'normal',
}: ItemThumbnailProps): ReactElement | null {
  const body = useMemo(() => {
    switch (item.type) {
      case 'order':
        return item.order ? <OrderItemThumbnail orderItem={item.order} /> : null;
      case 'pack':
        return item.pack ? <PackItemThumbnail packItem={item.pack} /> : null;
      case 'booster':
        return item.booster ? <BoosterItemThumbnail boosterItem={item.booster} /> : null;
      default:
        return null;
    }
  }, [item.booster, item.order, item.pack, item.type]);

  return (
    <div className={`goatim-ui-item-thumbnail ${size}`}>
      <div className="body">{body}</div>

      <div className="actions">
        <div className="quantity">
          {onDelete ? (
            <button className="delete" type="button" onClick={onDelete}>
              <Icon name="trash" size={18} />
            </button>
          ) : null}

          <Form<ItemThumbnailOptionsFields> onChange={onChangeOptions}>
            <Field<number, CounterProps>
              name="quantity"
              component={Counter}
              initialValue={item.quantity}
              min={1}
            />
          </Form>
        </div>

        {item.total_price ? (
          <span className="price">{formatEurosAmount(item.total_price)}</span>
        ) : null}
      </div>
    </div>
  );
}
