import { ReactElement, useCallback } from 'react';
import { Booster, ItemType } from '@fridaygame/client';
import { FormFields } from '@cezembre/forms';
import OrderItemEditor, { OrderItemEditorFields } from './orderItemEditor';

export interface ItemEditorFields extends FormFields {
  type?: ItemType;
  order?: OrderItemEditorFields;
}

export interface Props {
  initialItem?: ItemEditorFields;
  boosters?: Booster[];
  onSubmit?: (item: ItemEditorFields) => Promise<void> | void;
  onCancel?: () => void;
}

export default function ItemEditor({
  initialItem,
  boosters,
  onSubmit,
  onCancel,
}: Props): ReactElement | null {
  const onSubmitOrderItem = useCallback(
    async (orderItemFields: OrderItemEditorFields) => {
      if (onSubmit) {
        await onSubmit({
          ...initialItem,
          order: orderItemFields,
        });
      }
    },
    [initialItem, onSubmit],
  );

  if (!initialItem) {
    return null; // TODO : Create new item
  }

  if (initialItem.type === 'order' && initialItem.order) {
    return (
      <OrderItemEditor
        initialOrderItem={{
          asset: initialItem.order.asset,
          order_type: initialItem.order.order_type,
          quantity: initialItem.order.quantity,
          price_limit: initialItem.order.price_limit,
        }}
        boosters={boosters}
        onSubmit={onSubmitOrderItem}
        onCancel={onCancel}
      />
    );
  }
  return null;
}
