import { ReactElement, useState } from 'react';
import { Asset, Booster, OrderBook, OrderType } from '@fridaygame/client';
import { To } from 'react-router-dom';
import PlayerThumbnail from '../soccer/playerThumbnail';
import QuotationGraph from './quotationGraph';
import FridayCoins from '../market/fridayCoins';
import PercentageVariation from '../market/percentageVariation';
import Button from '../general/button';
import ItemEditor, { ItemEditorFields } from '../market/itemEditor';

export interface Props {
  asset: Asset;
  orderBook?: OrderBook;
  boosters?: Booster[];
  clubTo?: To;
  onSubmitItem?: (itemFields: ItemEditorFields) => void | Promise<void>;
}

export default function AssetOverview({
  asset,
  clubTo,
  orderBook,
  boosters,
  onSubmitItem,
}: Props): ReactElement {
  const [orderType, setOrderType] = useState<OrderType | undefined>();

  return (
    <div className="friday-ui-asset-overview">
      <div className="header">
        {asset.type === 'player' && asset.player && typeof asset.player === 'object' ? (
          <PlayerThumbnail player={asset.player} size="full" clubTo={clubTo} />
        ) : null}
        <div className="metrics">
          <span className="shares">
            {asset.shares || 0} action{asset.shares || 0 > 1 ? 's' : null}
          </span>
          <FridayCoins amount={asset.quotation} size="large" />
          <PercentageVariation variation={asset.session_variation} size="big" />
        </div>
      </div>

      <div className="quotation">
        <QuotationGraph />
      </div>

      <div className="actions">
        <div className="action">
          <Button shape="filled" theme="action" onClick={() => setOrderType('buy')}>
            Acheter
          </Button>
        </div>
        <div className="action">
          <Button shape="filled" theme="action-discreet" onClick={() => setOrderType('sell')}>
            Vendre
          </Button>
        </div>
      </div>

      <div className={`item-editor${orderType ? ' active' : ''}`}>
        <ItemEditor
          initialItem={{
            type: 'order',
            order: {
              asset,
              order_type: orderType,
              price_limit: asset.quotation,
              quantity: 1,
            },
          }}
          orderBook={orderBook}
          boosters={boosters}
          onSubmit={onSubmitItem}
          onCancel={() => setOrderType(undefined)}
        />
      </div>
    </div>
  );
}
