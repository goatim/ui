import { ReactElement, useCallback, useMemo } from 'react';
import { ItemType, OrderBook } from '@goatim/client';
import { FormFields } from '@cezembre/forms';
import { OrderItemEditor, OrderItemEditorFields, OrderItemEditorSize } from './orderItemEditor';

export interface ItemEditorFields extends FormFields {
  type?: ItemType;
  order?: OrderItemEditorFields;
}

export type ItemEditorSize = 'narrow' | 'small' | 'medium' | 'big';

export interface ItemEditorProps {
  initialItem?: ItemEditorFields;
  orderBook?: OrderBook;
  onSubmit?: (item: ItemEditorFields) => unknown;
  onCancel?: () => void;
  size?: ItemEditorSize;
  bankProposalQuotation?: number;
  onAcceptBankProposal?: (nbShares?: number) => unknown;
}

export function ItemEditor({
  initialItem,
  orderBook,
  onSubmit,
  onCancel,
  size = 'big',
  bankProposalQuotation,
  onAcceptBankProposal,
}: ItemEditorProps): ReactElement | null {
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

  const orderItemEditorSize = useMemo<OrderItemEditorSize>(() => {
    switch (size) {
      case 'narrow':
        return 'narrow';
      default:
        return 'big';
    }
  }, [size]);

  if (!initialItem) {
    return null; // TODO : Create new item
  }

  if (initialItem.type === 'order' && initialItem.order) {
    return (
      <OrderItemEditor
        initialOrderItem={{
          asset: initialItem.order.asset,
          order_type: initialItem.order.order_type,
          nb_shares: initialItem.order.nb_shares,
          price_limit: initialItem.order.price_limit,
        }}
        orderBook={orderBook}
        onSubmit={onSubmitOrderItem}
        onCancel={onCancel}
        size={orderItemEditorSize}
        bankProposalQuotation={bankProposalQuotation}
        onAcceptBankProposal={onAcceptBankProposal}
      />
    );
  }
  return null;
}
