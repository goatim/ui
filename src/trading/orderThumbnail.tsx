import { ReactElement } from 'react';
import { formatCurrency, Order } from '@fridaygame/client';
import AssetThumbnail from './assetThumbnail';
import FridayCoins from '../market/fridayCoins';
import BoosterIcon from './boosterIcon';
import Icon from '../general/icon';

export interface Props {
  order: Order;
  onCancel?: (() => void) | (() => Promise<void>);
}

export default function OrderThumbnail({ order, onCancel }: Props): ReactElement {
  return (
    <div className="friday-ui-order-thumbnail">
      <div className="container">
        {order.asset && typeof order.asset === 'object' ? (
          <div className="cell">
            <span>Ordre {order.type === 'buy' ? "d'achat" : 'de vente'}</span>
            <div className="content">
              <AssetThumbnail asset={order.asset} size="inline" />
            </div>
          </div>
        ) : null}

        <div className="cell">
          <span>Quantité</span>
          <div className="content">
            <span className="quantity">x{order.quantity || 1}</span>
          </div>
        </div>

        <div className="cell">
          <span>Limite</span>
          <div className="content">
            <div>
              <FridayCoins amount={order.price_limit} size="medium" />
              <br />
              <FridayCoins
                amount={(order.price_limit || 0) * (order.quantity || 1)}
                size="medium"
                theme="darker"
              />
            </div>
          </div>
        </div>

        {order.type === 'buy' && order.booster && typeof order.booster === 'object' ? (
          <>
            <div className="cell">
              <span>Booster</span>
              <div className="content centered">
                <BoosterIcon booster={order.booster} infos="none" active />
              </div>
            </div>

            {!order.booster.nb_in_wallet ? (
              <div className="cell">
                <span>Prix</span>
                <div className="content">
                  <span className="price">{formatCurrency(order.booster.price)}</span>
                </div>
              </div>
            ) : null}
          </>
        ) : null}
      </div>

      {onCancel ? (
        <button className="cancel" type="button" onClick={onCancel}>
          <Icon name="x" size={24} />
        </button>
      ) : null}
    </div>
  );
}
