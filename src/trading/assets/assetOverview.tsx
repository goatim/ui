import { ReactElement, useMemo, useState } from 'react';
import { Asset, BoosterFactory, Ipo, OrderBook, OrderType } from '@fridaygame/client';
import { To } from 'react-router-dom';
import QuotationHistoryGraph from '../quotations/quotationHistoryGraph';
import FridayCoins, { FridayCoinsSize } from '../../market/fridayCoins';
import PercentageVariation, { PercentageVariationSize } from '../../market/percentageVariation';
import ItemEditor, { ItemEditorFields, ItemEditorSize } from '../../market/checkouts/itemEditor';
import AssetThumbnail, { AssetThumbnailSize } from './assetThumbnail';
import IpoThumbnail, { IpoThumbnailSize } from '../ipos/ipoThumbnail';

export type AssetOverviewSize = 'small' | 'medium' | 'full';

export interface Props {
  asset: Asset;
  size?: AssetOverviewSize;
  orderBook?: OrderBook;
  boosterFactories?: BoosterFactory[];
  onSubmitItem?: (itemFields: ItemEditorFields) => unknown;
  ipo?: Ipo;
  secondaryTo?: To;
  bankProposalQuotation?: number;
  onAcceptBankProposal?: (nbShares?: number) => unknown;
}

export default function AssetOverview({
  asset,
  size = 'full',
  secondaryTo,
  orderBook,
  boosterFactories,
  onSubmitItem,
  ipo,
  bankProposalQuotation,
  onAcceptBankProposal,
}: Props): ReactElement {
  const [orderType, setOrderType] = useState<OrderType | undefined>();

  const assetThumbnailSize = useMemo<AssetThumbnailSize>(() => {
    switch (size) {
      case 'full':
        return 'full';
      case 'medium':
        return 'medium';
      default:
        return 'small';
    }
  }, [size]);

  const fridayCoinsSize = useMemo<FridayCoinsSize>(() => {
    switch (size) {
      case 'full':
        return 'large';
      case 'medium':
        return 'big';
      default:
        return 'medium';
    }
  }, [size]);

  const percentageVariationSize = useMemo<PercentageVariationSize>(() => {
    switch (size) {
      case 'full':
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

  const ipoThumbnailSize = useMemo<IpoThumbnailSize>(() => {
    switch (size) {
      case 'small':
        return 'narrow';
      case 'medium':
        return 'small';
      default:
        return 'big';
    }
  }, [size]);

  return (
    <div className={`friday-ui-asset-overview ${size} ${orderType}`}>
      {ipo ? (
        <div className="ipo-banner">
          <IpoThumbnail ipo={ipo} shape="banner" size={ipoThumbnailSize} />
        </div>
      ) : null}

      <div className="header">
        <div className="asset">
          <AssetThumbnail
            asset={asset}
            shape="text"
            size={assetThumbnailSize}
            secondaryTo={secondaryTo}
            showQuotation={false}
          />
        </div>

        <div className="metrics">
          <span className="total-shares">
            {asset.total_shares || 0} action{asset.total_shares || 0 > 1 ? 's' : null}
          </span>
          <FridayCoins amount={asset.quotation} size={fridayCoinsSize} />
          <PercentageVariation variation={asset.day_variation} size={percentageVariationSize} />
        </div>
      </div>

      <div className="quotation">
        <QuotationHistoryGraph quotationHistory={asset.quotation_history} />
      </div>

      <div className="actions">
        <button
          type="button"
          onClick={() => setOrderType('buy')}
          className="buy"
          id="friday-ui-asset-overview-buy-button">
          Acheter
        </button>
        <button
          type="button"
          onClick={() => setOrderType('sell')}
          className="sell"
          id="friday-ui-asset-overview-sell-button">
          Vendre
        </button>
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
          boosterFactories={boosterFactories}
          onSubmit={onSubmitItem}
          onCancel={() => setOrderType(undefined)}
          size={itemEditorSize}
          bankProposalQuotation={bankProposalQuotation}
          onAcceptBankProposal={onAcceptBankProposal}
        />
      </div>
    </div>
  );
}
