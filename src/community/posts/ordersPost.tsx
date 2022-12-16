import { ReactElement } from 'react';
import { Post } from '@fridaygame/client';
import OrderList from '../../trading/orders/orderList';
import Button from '../../general/button';

export type OrdersPostSize = 'narrow' | 'normal';

export interface Props {
  post: Post<'orders'>;
  size?: OrdersPostSize;
}

export default function OrdersPost({ post, size = 'normal' }: Props): ReactElement {
  if (!post.payload) {
    return <span>Aucun ordre</span>;
  }
  return (
    <div className="friday-ui-orders-post">
      <div className="orders">
        <OrderList orders={post.payload} shape="boxes" size={size} />
      </div>
      <p className="instructions">
        Ils seront exécutés lorsque des ordres concurrents correspondants à vos critères seront
        émits et sous réserve de fonds disponibles à ce moment.
      </p>
      <div className="action">
        <Button shape="text" theme="dark">
          Voir les ordres en cours
        </Button>
      </div>
    </div>
  );
}
