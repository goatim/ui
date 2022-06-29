import { ReactElement } from 'react';
import { Order } from '@fridaygame/client';
import OrderThumbnail from './orderThumbnail';

export interface Props {
  orders?: Order[];
  onCancelOrder?: (order: Order) => unknown;
}

export default function OrderList({ orders, onCancelOrder }: Props): ReactElement {
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
          />
        </div>
      ))}
    </div>
  );
}