import { ReactElement } from 'react';
import { Order } from '@goatim/client';
import { OrderThumbnail, OrderThumbnailSize } from './orderThumbnail';
import { TransferCard } from '../transfers/transferCard';

export type OrderListShape = 'table' | 'boxes';

export interface OrderListProps {
  orders?: Order[];
  onCancelOrder?: (order: Order) => unknown;
  size?: OrderThumbnailSize;
  shape?: OrderListShape;
}

export function OrderList({
  orders,
  onCancelOrder,
  size,
  shape = 'table',
}: OrderListProps): ReactElement {
  if (!orders?.length) {
    return <span>Aucun transfert en cours</span>;
  }

  return (
    <div className={`goatim-ui-order-list ${shape}`}>
      {orders.map((order: Order) => (
        <div key={order.id} className="order">
          {/* <OrderThumbnail
            order={order}
            onCancel={onCancelOrder ? () => onCancelOrder(order) : undefined}
            size={size}
          /> */}
          <TransferCard
            order={order}
            onCancel={onCancelOrder ? () => onCancelOrder(order) : undefined}
          />
        </div>
      ))}
    </div>
  );
}
