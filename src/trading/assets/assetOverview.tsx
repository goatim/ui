import { FormSubmitFunction } from '@cezembre/forms';
import { Asset, Dividend, Ipo, OrderBook, OrderType, Portfolio } from '@goatim/client';
import { QuotationHistory } from '@goatim/client/dist/trading/quotations/model';
import { Notation } from '@src/general';
import {
  GoatimCoinsAmount,
  GoatimCoinsSize,
  PercentageVariation,
  PercentageVariationSize,
} from '@src/market';
import { DividendBook } from '@src/trading';
import { AssetThumbnail, AssetThumbnailSize } from '@src/trading/assets';
import { IpoThumbnail, IpoThumbnailSize } from '@src/trading/ipos';
import { OrderEditor, OrderEditorFields, OrderEditorSize } from '@src/trading/orders';
import { SellPortfolioToBank, SellPortfolioToBankFields } from '@src/trading/portfolios';
import { ReactElement, useCallback, useMemo, useState } from 'react';
import { UrlObject } from 'url';

export type AssetOverviewSize = 'small' | 'medium' | 'full';

export interface AssetOverviewProps {
  asset: Asset;
  quotationHistory?: QuotationHistory;
  dividends?: Dividend[];
  size?: AssetOverviewSize;
  orderBook?: OrderBook;
  onSubmitOrder?: (orderFields: OrderEditorFields) => unknown;
  ipo?: Ipo;
  secondaryHref?: string | UrlObject;
  defaultOrderType?: OrderType;
  isConnected?: boolean;
  connectButtonHref?: string | UrlObject;
  portfolio?: Portfolio;
  onSellPortfolioToBank?: FormSubmitFunction<SellPortfolioToBankFields>;
}

export function AssetOverview({
  asset,
  quotationHistory,
  dividends,
  size = 'full',
  secondaryHref,
  orderBook,
  onSubmitOrder,
  ipo,
  defaultOrderType,
  isConnected = false,
  connectButtonHref,
  portfolio,
  onSellPortfolioToBank,
}: AssetOverviewProps): ReactElement {
  const [orderType, setOrderType] = useState<OrderType | undefined>(defaultOrderType);
  const [nbShares, setNbShares] = useState<number | undefined>(
    orderType === 'sell' ? portfolio?.nb_shares || 1 : 1,
  );

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

  const onChangeOrder = useCallback(
    (values: OrderEditorFields, changes?: Partial<OrderEditorFields>) => {
      if (changes?.nb_shares !== undefined) {
        setNbShares(changes.nb_shares);
      }
    },
    [],
  );

  const onChangeSellPortfolioToBank = useCallback(
    (values: SellPortfolioToBankFields, changes?: Partial<SellPortfolioToBankFields>) => {
      if (changes?.nb_shares !== undefined) {
        setNbShares(changes.nb_shares);
      }
    },
    [],
  );

  const maxShares = useMemo<number | undefined>(() => {
    if (orderType === 'buy') {
      return undefined;
    }
    return portfolio?.nb_shares;
  }, [orderType, portfolio?.nb_shares]);

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
          <Notation>{asset.notation}</Notation>
          <span className="total-shares">
            {asset.total_shares || 0} action{asset.total_shares || 0 > 1 ? 's' : null}
          </span>
          <GoatimCoinsAmount amount={asset.quotation} size={goatimCoinsSize} />
          <PercentageVariation variation={asset.day_variation} size={percentageVariationSize} />
        </div>
      </div>

      {/* <div className="quotation"> */}
      {/*  <QuotationHistoryGraph quotationHistory={quotationHistory} /> */}
      {/* </div> */}

      <div className="dividend-book">
        <DividendBook
          dividends={dividends}
          averagePercentage={asset.average_dividends_percentage}
          averageGains={asset.average_dividends_amount}
        />
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

      <div className={`actions-body${orderType ? ' active' : ''}`}>
        <div className="order-editor">
          <OrderEditor
            initialOrder={{
              order_type: orderType,
              price_limit: initialPriceLimit,
              nb_shares: nbShares,
            }}
            maxShares={maxShares}
            orderBook={orderBook}
            onSubmit={onSubmitOrder}
            onChange={onChangeOrder}
            onCancel={() => setOrderType(undefined)}
            size={orderEditorSize}
            isConnected={isConnected}
            connectButtonHref={connectButtonHref}
          />
        </div>

        {orderType === 'sell' && portfolio?.bank_proposal !== undefined ? (
          <div className="sell-portfolio">
            <SellPortfolioToBank
              bankProposal={portfolio.bank_proposal}
              initialValues={{
                nb_shares: nbShares,
              }}
              onChange={onChangeSellPortfolioToBank}
              onSubmit={onSellPortfolioToBank}
              maxShares={maxShares}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
