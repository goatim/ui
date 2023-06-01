import { ReactElement } from 'react';
import { OrderItem } from '@goatim/client';
import { AssetThumbnail, BoosterIcon } from '../../trading';
import { GoatimCoinsAmount } from '../goatimCoins';

export type OrderItemThumbnailSize = 'narrow' | 'normal';

export interface OrderItemThumbnailProps {
  orderItem: OrderItem;
  size?: OrderItemThumbnailSize;
}

export function OrderItemThumbnail({
  orderItem,
  size = 'normal',
}: OrderItemThumbnailProps): ReactElement {
  return (
    <div className={`goatim-ui-order-item-thumbnail ${size}`}>
      {orderItem.asset && typeof orderItem.asset === 'object' ? (
        <div className="cell">
          <span>Ordre {orderItem.order_type === 'buy' ? "d'achat" : 'de vente'}</span>
          <div className="content">
            <AssetThumbnail
              asset={orderItem.asset}
              size="small"
              showQuotation={false}
              shape="text"
            />
          </div>
        </div>
      ) : null}

      <div className="cell">
        <span>Quantité</span>
        <div className="content">
          <span className="nb_shares">x{orderItem.nb_shares || 1}</span>
        </div>
      </div>

      <div className="cell">
        <span>Limite</span>
        <div className="content">
          <div>
            <GoatimCoinsAmount amount={orderItem.price_limit} size="medium" />
            <br />
            <GoatimCoinsAmount
              amount={(orderItem.price_limit || 0) * (orderItem.nb_shares || 1)}
              size="medium"
              theme="darker"
            />
          </div>
        </div>
      </div>

      {orderItem.order_type === 'buy' &&
      orderItem.booster_factory &&
      typeof orderItem.booster_factory === 'object' ? (
        <div className="cell">
          <span>Booster</span>
          <div className={`content${size !== 'narrow' ? ' centered' : ''}`}>
            <BoosterIcon leverage={orderItem.booster_factory.leverage} active />
          </div>
        </div>
      ) : null}
    </div>
  );
}
