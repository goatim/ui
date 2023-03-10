import { ReactElement } from 'react';
import { formatEurosAmount, OrderItem } from '@goatim/client';
import { AssetThumbnail, BoosterIcon } from '../../trading';
import { GoatimCoins } from '../goatimCoins';
import { Icon } from '../../general';

export type OrderItemThumbnailSize = 'narrow' | 'normal';

export interface OrderItemThumbnailProps {
  orderItem: OrderItem;
  onDelete?: () => unknown;
  size?: OrderItemThumbnailSize;
}

export function OrderItemThumbnail({
  orderItem,
  onDelete,
  size = 'normal',
}: OrderItemThumbnailProps): ReactElement {
  return (
    <div className={`goatim-ui-order-item-thumbnail ${size}`}>
      <div className="container">
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
              <GoatimCoins amount={orderItem.price_limit} size="medium" />
              <br />
              <GoatimCoins
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

        {orderItem.total_price ? (
          <div className="cell">
            <span>Prix</span>
            <div className="content">
              <span className="price">{formatEurosAmount(orderItem.total_price)}</span>
            </div>
          </div>
        ) : null}
      </div>

      {onDelete ? (
        <button className="delete" type="button" onClick={onDelete}>
          <Icon name="x" size={24} />
        </button>
      ) : null}
    </div>
  );
}
