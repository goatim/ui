import { ReactElement, useMemo, useState } from 'react';
import { Asset, Ipo, OrderBook, OrderType } from '@goatim/client';
import { QuotationHistory } from '@goatim/client/dist/trading/quotations/model';
import { UrlObject } from 'url';
import { QuotationHistoryGraph } from '../quotations';
import {
  GoatimCoinsAmount,
  GoatimCoinsSize,
  PercentageVariation,
  PercentageVariationSize,
} from '../../market';
import { AssetThumbnail, AssetThumbnailSize } from './assetThumbnail';
import { IpoThumbnail, IpoThumbnailSize } from '../ipos';
import { OrderEditor, OrderEditorFields, OrderEditorSize } from '../orders';

export type AssetOverviewSize = 'small' | 'medium' | 'full';

export interface AssetOverviewProps {
  asset: Asset;
  quotationHistory?: QuotationHistory;
  size?: AssetOverviewSize;
  orderBook?: OrderBook;
  onSubmitOrder?: (orderFields: OrderEditorFields) => unknown;
  ipo?: Ipo;
  secondaryHref?: string | UrlObject;
  bankProposalQuotation?: number;
  onAcceptBankProposal?: (nbShares?: number) => unknown;
  defaultOrderType?: OrderType;
  isConnected?: boolean;
  connectButtonHref?: string | UrlObject;
}

export function AssetOverview({
  asset,
  quotationHistory,
  size = 'full',
  secondaryHref,
  orderBook,
  onSubmitOrder,
  ipo,
  bankProposalQuotation,
  onAcceptBankProposal,
  defaultOrderType,
  isConnected = false,
  connectButtonHref,
}: AssetOverviewProps): ReactElement {
  const [orderType, setOrderType] = useState<OrderType | undefined>(defaultOrderType);

  const initialPriceLimit = useMemo<number | undefined>(() => {
    if (
      orderType === 'buy' &&
      orderBook?.selling?.length &&
      orderBook.selling[0].price_limit !== undefined
    ) {
      return orderBook.selling[0].price_limit;
    }
    if (
      orderType === 'sell' &&
      orderBook?.buying?.length &&
      orderBook.buying[0].price_limit !== undefined
    ) {
      return orderBook.buying[0].price_limit;
    }
    return asset.quotation;
  }, [asset.quotation, orderBook?.buying, orderBook?.selling, orderType]);

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

  const orderEditorSize = useMemo<OrderEditorSize>(() => {
    switch (size) {
      case 'small':
        return 'narrow';
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
        <OrderEditor
          initialOrder={{
            order_type: orderType,
            price_limit: initialPriceLimit,
            nb_shares: 1,
          }}
          orderBook={orderBook}
          onSubmit={onSubmitOrder}
          onCancel={() => setOrderType(undefined)}
          size={orderEditorSize}
          bankProposalQuotation={bankProposalQuotation}
          onAcceptBankProposal={onAcceptBankProposal}
          isConnected={isConnected}
          connectButtonHref={connectButtonHref}
        />
      </div>
    </div>
  );
}
