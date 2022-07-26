import { ReactElement } from 'react';
import { Order } from '@fridaygame/client';
import OrderThumbnail, { OrderThumbnailSize } from './orderThumbnail';

export interface Props {
  orders?: Order[];
  onCancelOrder?: (order: Order) => unknown;
  size?: OrderThumbnailSize;
}

export default function OrderList({ orders, onCancelOrder, size }: Props): ReactElement {
  if (!orders?.length) {
    return <span>Aucun order en cours</span>;
  }

  return (
    <div className="friday-ui-order-list">
      {orders.map((order: Order) => (
        <div key={order.id} className="order">
          <OrderThumbnail
            order={order}
            onCancel={onCancelOrder ? () => onCancelOrder(order) : undefined}
            size={size}
          />
        </div>
      ))}
    </div>
  );
}
