import { ReactElement, useMemo, useState } from 'react';
import { Asset, Ipo, OrderBook, OrderType } from '@goatim/client';
import { QuotationHistory } from '@goatim/client/dist/trading/quotations/model';
import { UrlObject } from 'url';
import { QuotationHistoryGraph } from '../quotations';
import {
  GoatimCoinsAmount,
  GoatimCoinsSize,
  ItemEditor,
  ItemEditorFields,
  ItemEditorSize,
  PercentageVariation,
  PercentageVariationSize,
} from '../../market';
import { AssetThumbnail, AssetThumbnailSize } from './assetThumbnail';
import { IpoThumbnail, IpoThumbnailSize } from '../ipos';

export type AssetOverviewSize = 'small' | 'medium' | 'full';

export interface AssetOverviewProps {
  asset: Asset;
  quotationHistory?: QuotationHistory;
  size?: AssetOverviewSize;
  orderBook?: OrderBook;
  onSubmitItem?: (itemFields: ItemEditorFields) => unknown;
  ipo?: Ipo;
  secondaryHref?: string | UrlObject;
  bankProposalQuotation?: number;
  onAcceptBankProposal?: (nbShares?: number) => unknown;
  defaultOrderType?: OrderType;
}

export function AssetOverview({
  asset,
  quotationHistory,
  size = 'full',
  secondaryHref,
  orderBook,
  onSubmitItem,
  ipo,
  bankProposalQuotation,
  onAcceptBankProposal,
  defaultOrderType,
}: AssetOverviewProps): ReactElement {
  const [orderType, setOrderType] = useState<OrderType | undefined>(defaultOrderType);

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

  const goatimCoinsSize = useMemo<GoatimCoinsSize>(() => {
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
    <div className={`goatim-ui-asset-overview ${size} ${orderType}`}>
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
            secondaryHref={secondaryHref}
            showQuotation={false}
          />
        </div>

        <div className="metrics">
          <span className="total-shares">
            {asset.total_shares || 0} action{asset.total_shares || 0 > 1 ? 's' : null}
          </span>
          <GoatimCoinsAmount amount={asset.quotation} size={goatimCoinsSize} />
          <PercentageVariation variation={asset.day_variation} size={percentageVariationSize} />
        </div>
      </div>

      <div className="quotation">
        <QuotationHistoryGraph quotationHistory={quotationHistory} />
      </div>

      <div className="actions">
        <button
          type="button"
          onClick={() => setOrderType('buy')}
          className="buy"
          id="goatim-ui-asset-overview-buy-button">
          Achat
        </button>
        <button
          type="button"
          onClick={() => setOrderType('sell')}
          className="sell"
          id="goatim-ui-asset-overview-sell-button">
          Vente
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
