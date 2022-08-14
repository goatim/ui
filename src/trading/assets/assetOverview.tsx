import { ReactElement, useMemo, useState } from 'react';
import { Asset, Booster, OrderBook, OrderType } from '@fridaygame/client';
import { To } from 'react-router-dom';
import QuotationHistoryGraph from '../quotations/quotationHistoryGraph';
import FridayCoins, { FridayCoinsSize } from '../../market/fridayCoins';
import PercentageVariation, { PercentageVariationSize } from '../../market/percentageVariation';
import Button from '../../general/button';
import ItemEditor, { ItemEditorFields, ItemEditorSize } from '../../market/checkouts/itemEditor';
import AssetThumbnail, { AssetThumbnailSize } from './assetThumbnail';

export type AssetOverviewSize = 'small' | 'medium' | 'big';

export interface Props {
  asset: Asset;
  size?: AssetOverviewSize;
  orderBook?: OrderBook;
  boosters?: Booster[];
  clubTo?: To;
  onSubmitItem?: (itemFields: ItemEditorFields) => void | Promise<void>;
}

export default function AssetOverview({
  asset,
  size = 'medium',
  clubTo,
  orderBook,
  boosters,
  onSubmitItem,
}: Props): ReactElement {
  const [orderType, setOrderType] = useState<OrderType | undefined>();

  const assetThumbnailSize = useMemo<AssetThumbnailSize>(() => {
    switch (size) {
      case 'big':
        return 'big';
      case 'medium':
        return 'medium';
      default:
        return 'small';
    }
  }, [size]);

  const fridayCoinsSize = useMemo<FridayCoinsSize>(() => {
    switch (size) {
      case 'big':
        return 'large';
      case 'medium':
        return 'big';
      default:
        return 'medium';
    }
  }, [size]);

  const percentageVariationSize = useMemo<PercentageVariationSize>(() => {
    switch (size) {
      case 'big':
        return 'big';
      case 'medium':
        return 'medium';
      default:
        return 'small';
    }
  }, [size]);

  const itemEditorSize = useMemo<ItemEditorSize>(() => {
    switch (size) {
      case 'small':
        return 'narrow';
      case 'medium':
        return 'medium';
      default:
        return 'big';
    }
  }, [size]);

  return (
    <div className={`friday-ui-asset-overview ${size}`}>
      <div className="header">
        <AssetThumbnail
          asset={asset}
          shape="text"
          size={assetThumbnailSize}
          playerFormat="extended"
          to={clubTo}
        />
        <div className="metrics">
          <span className="total-shares">
            {asset.total_shares || 0} action{asset.total_shares || 0 > 1 ? 's' : null}
          </span>
          <FridayCoins amount={asset.quotation} size={fridayCoinsSize} />
          <PercentageVariation variation={asset.session_variation} size={percentageVariationSize} />
        </div>
      </div>

      <div className="quotation">
        <QuotationHistoryGraph quotationHistory={asset.quotation_history} />
      </div>

      <div className="actions">
        <div className="action">
          <Button theme="buy" onClick={() => setOrderType('buy')}>
            Acheter
          </Button>
        </div>
        <div className="action">
          <Button theme="sell" onClick={() => setOrderType('sell')}>
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
              nb_shares: 1,
            },
          }}
          orderBook={orderBook}
          boosters={boosters}
          onSubmit={onSubmitItem}
          onCancel={() => setOrderType(undefined)}
          size={itemEditorSize}
        />
      </div>
    </div>
  );
}
