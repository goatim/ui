import { ReactElement } from 'react';
import { formatCurrency, OrderItem } from '@fridaygame/client';
import AssetThumbnail from '../../trading/assets/assetThumbnail';
import FridayCoins from '../fridayCoins';
import BoosterIcon from '../../trading/boosters/boosterIcon';
import Icon from '../../general/icon';

export interface Props {
  orderItem: OrderItem;
  onDelete?: (() => void) | (() => Promise<void>);
}

export default function OrderItemThumbnail({ orderItem, onDelete }: Props): ReactElement {
  return (
    <div className="friday-ui-order-item-thumbnail">
      <div className="container">
        {orderItem.asset && typeof orderItem.asset === 'object' ? (
          <div className="cell">
            <span>Ordre {orderItem.order_type === 'buy' ? "d'achat" : 'de vente'}</span>
            <div className="content">
              <AssetThumbnail asset={orderItem.asset} size="inline" />
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
              <FridayCoins amount={orderItem.price_limit} size="medium" />
              <br />
              <FridayCoins
                amount={(orderItem.price_limit || 0) * (orderItem.nb_shares || 1)}
                size="medium"
                theme="darker"
              />
            </div>
          </div>
        </div>

        {orderItem.order_type === 'buy' &&
        orderItem.booster &&
        typeof orderItem.booster === 'object' ? (
          <div className="cell">
            <span>Booster</span>
            <div className="content centered">
              <BoosterIcon booster={orderItem.booster} infos="none" active />
            </div>
          </div>
        ) : null}

        {orderItem.total_price ? (
          <div className="cell">
            <span>Prix</span>
            <div className="content">
              <span className="price">{formatCurrency(orderItem.total_price)}</span>
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
