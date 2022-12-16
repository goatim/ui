import { ReactElement } from 'react';
import { Order } from '@fridaygame/client';
import OrderThumbnail, { OrderThumbnailSize } from './orderThumbnail';

export type OrderListShape = 'table' | 'boxes';

export interface Props {
  orders?: Order[];
  onCancelOrder?: (order: Order) => unknown;
  size?: OrderThumbnailSize;
  shape?: OrderListShape;
}

export default function OrderList({
  orders,
  onCancelOrder,
  size,
  shape = 'table',
}: Props): ReactElement {
  if (!orders?.length) {
    return <span>Aucun order en cours</span>;
  }

  return (
    <div className={`friday-ui-order-list ${shape}`}>
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
