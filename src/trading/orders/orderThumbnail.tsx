import { ReactElement } from 'react';
import { Order } from '@fridaygame/client';
import AssetThumbnail from '../assets/assetThumbnail';
import FridayCoins from '../../market/fridayCoins';
import BoosterIcon from '../boosters/boosterIcon';
import Icon from '../../general/icon';

export type OrderThumbnailSize = 'narrow' | 'normal';

export interface Props {
  order: Order;
  onCancel?: (() => void) | (() => Promise<void>);
  size?: OrderThumbnailSize;
}

export default function OrderThumbnail({ order, onCancel, size = 'normal' }: Props): ReactElement {
  return (
    <div className={`friday-ui-order-thumbnail ${size}`}>
      <div className="container">
        {order.asset && typeof order.asset === 'object' ? (
          <div className="cell">
            <span>Ordre {order.type === 'buy' ? "d'achat" : 'de vente'}</span>
            <div className="content">
              <AssetThumbnail asset={order.asset} size="small" shape="text" showQuotation={false} />
            </div>
          </div>
        ) : null}

        <div className="cell">
          <span>Quantité</span>
          <div className="content">
            <span className="nb_shares">x{order.nb_shares || 1}</span>
          </div>
        </div>

        <div className="cell">
          <span>Limite</span>
          <div className="content">
            <div>
              <FridayCoins amount={order.price_limit} size="medium" />
              <br />
              <FridayCoins
                amount={(order.price_limit || 0) * (order.nb_shares || 1)}
                size="medium"
                theme="darker"
              />
            </div>
          </div>
        </div>

        {order.type === 'buy' && order.booster && typeof order.booster === 'object' ? (
          <div className="cell">
            <span>Booster</span>
            <div className={`content${size !== 'narrow' ? ' centered' : ''}`}>
              <BoosterIcon booster={order.booster} infos="none" active />
            </div>
          </div>
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
