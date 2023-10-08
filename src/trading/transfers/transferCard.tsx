import { ReactElement, useMemo } from 'react';
import { Asset, Order } from '@goatim/client';
import { AssetThumbnail } from '../assets';
import { GoatimCoinsAmount } from '../../market';
import { Button, Icon, formatDateTime } from '../../general';
import { BoosterIcon } from '../boosters';

export interface transferCardProps {
  order: Order;
  onCancel?: (() => void) | (() => Promise<void>);
}

// TODO transaction view

export function TransferCard({ order, onCancel }: transferCardProps): ReactElement {
  const asset: Asset = useMemo(
    () => (order?.asset && typeof order.asset === 'object' ? order.asset : null) as Asset,
    [order],
  );

  return (
    <div className="goatim-ui-transfer-card card">
      <div className="container">
        <div className="header">
          <div className="transfer-info">
            {order.type === 'buy' ? (
              <div className="transfer-type">
                <span>Achat</span>
                <span className="icon-transfer icon-buy">
                  <Icon name="log-in" color="green" size={32} />
                </span>
              </div>
            ) : (
              <div className="transfer-type">
                <span>Vente</span>
                <span className="icon-transfer icon-sell">
                  <Icon name="log-out" color="red" size={32} />
                </span>
              </div>
            )}
            <div className="transfer-date">{formatDateTime(order.creation as string)}</div>
          </div>

          <Button className="bt-transfer-modal" shape="none" theme="light">
            <Icon name="more-vertical" />
          </Button>
        </div>

        <div className="body">
          <div className="summary">
            <span className="nb_shares">{order.nb_shares || 1}</span>
            {' action(s) pour '}
            <div className="price">
              <GoatimCoinsAmount amount={order.price_limit} size="medium" />
              <div>
                (
                <GoatimCoinsAmount
                  amount={(order.price_limit || 0) * (order.nb_shares || 1)}
                  size="medium"
                  theme="darker"
                />
                )
              </div>
            </div>
          </div>
          <div className="transaction">lamz - sams</div>
          <div className="asset">
            {asset !== null && (
              <div className="content">
                <AssetThumbnail asset={asset} size="small" shape="box" showQuotation />
              </div>
            )}
          </div>
        </div>

        {order.type === 'buy' && order.booster && typeof order.booster === 'object' ? (
          <div className="cell">
            <span>Booster</span>
            <div className="content centered">
              <BoosterIcon leverage={order.booster.leverage} active />
            </div>
          </div>
        ) : null}
      </div>

      {/* {onCancel ? (
        <button className="cancel" type="button" onClick={onCancel}>
          <Icon name="x" size={24} />
        </button>
      ) : null} */}
    </div>
  );
}
