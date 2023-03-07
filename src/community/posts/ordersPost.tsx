import { ReactElement } from 'react';
import { Post } from '@goatim/client';
import { OrderList } from '../../trading';
import { Button } from '../../general';

export type OrdersPostSize = 'narrow' | 'normal';

export interface OrdersPostProps {
  post: Post<'orders'>;
  size?: OrdersPostSize;
}

export function OrdersPost({ post, size = 'normal' }: OrdersPostProps): ReactElement {
  if (!post.payload) {
    return <span>Aucun ordre</span>;
  }
  return (
    <div className="goatim-ui-orders-post">
      <div className="orders">
        <OrderList orders={post.payload} shape="boxes" size={size} />
      </div>
      <p className="instructions">
        Ils seront exécutés lorsque des ordres concurrents correspondants à vos critères seront
        émits et sous réserve de fonds disponibles à ce moment.
      </p>
      <div className="action">
        <Button shape="text">Voir les ordres en cours</Button>
      </div>
    </div>
  );
}
