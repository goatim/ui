import { MouseEvent, ReactElement, useMemo } from 'react';
import { Asset, Booster, Portfolio } from '@fridaygame/client';
import { To } from 'react-router-dom';
import AssetThumbnail, { AssetThumbnailSize } from '../assets/assetThumbnail';
import FridayCoins from '../../market/fridayCoins';
import FridayCoinsVariation from '../../market/fridayCoinsVariation';
import PercentageVariation from '../../market/percentageVariation';
import BoosterStack from '../boosters/boosterStack';
import Button from '../../general/button';
import QuotationHistoryGraph from '../quotations/quotationHistoryGraph';

export type PortfolioThumbnailSize = 'narrow' | 'medium';

export interface Props {
  portfolio: Portfolio;
  size?: PortfolioThumbnailSize;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => unknown;
  assetTo?: (asset: Asset) => To;
  onStopBooster?: (booster?: Booster) => unknown;
  onSell?: () => unknown;
  onBuy?: () => unknown;
  onBoost?: () => unknown;
}

export default function PortfolioThumbnail({
  portfolio,
  size = 'medium',
  assetTo,
  assetOnClick,
  onStopBooster,
  onSell,
  onBuy,
  onBoost,
}: Props): ReactElement {
  const assetThumbnailSize = useMemo<AssetThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
        return 'narrow';
      default:
        return 'medium';
    }
  }, [size]);
  return (
    <div className={`friday-ui-portfolio-thumbnail ${size}`}>
      <div className="header">
        <div className="nb_shares">
          <span className="label">Quantité</span>
          <span className="value">{portfolio.nb_shares || 0}</span>
        </div>
      </div>

      {portfolio.asset && typeof portfolio.asset === 'object' ? (
        <div className="asset">
          <AssetThumbnail
            asset={portfolio.asset}
            theme="lighter"
            size={assetThumbnailSize}
            onClick={
              assetOnClick ? (event) => assetOnClick(portfolio.asset as Asset, event) : undefined
            }
            to={assetTo ? assetTo(portfolio.asset) : undefined}
          />
        </div>
      ) : null}

      <div className="lines">
        <div className="line">
          <div className="cell amount">
            <span className="label">Prix d&apos;achat</span>
            <FridayCoins amount={portfolio.buy_price} theme="light" size="medium" />
          </div>

          <div className="cell variation">
            <span className="label">+/- values</span>
            <FridayCoinsVariation variation={portfolio.gains} size="medium" />
            <PercentageVariation variation={portfolio.variation} size="small" />
          </div>
        </div>

        {portfolio.boosters?.length ? (
          <div className="boosters">
            <BoosterStack boosters={portfolio.boosters} onStopBooster={onStopBooster} />
          </div>
        ) : null}

        <div className="line">
          <div className="cell amount">
            <span className="label">Dividendes</span>
            <FridayCoins amount={portfolio.dividends_gains} theme="light" size="medium" />
          </div>

          <div className="cell variation">
            <span className="label">Total +/- values</span>
            <FridayCoinsVariation variation={portfolio.total_gains} size="medium" />
            <PercentageVariation variation={portfolio.total_variations} size="small" />
          </div>
        </div>
      </div>

      <div className="actions">
        {onSell ? (
          <div className="action">
            <Button shape="filled" theme="transparent-light" onClick={onSell}>
              Vendre
            </Button>
          </div>
        ) : null}

        {onBuy ? (
          <div className="action">
            <Button shape="filled" theme="transparent-light" onClick={onBuy}>
              Acheter
            </Button>
          </div>
        ) : null}

        {onBoost ? (
          <div className="action">
            <Button shape="filled" theme="transparent-light" onClick={onBoost}>
              Booster
            </Button>
          </div>
        ) : null}
      </div>

      {portfolio.asset &&
      typeof portfolio.asset === 'object' &&
      portfolio.asset.quotation_history ? (
        <div className="quotation">
          <QuotationHistoryGraph quotationHistory={portfolio.asset.quotation_history} />
        </div>
      ) : (
        <div className="quotation-placeholder" />
      )}
    </div>
  );
}
