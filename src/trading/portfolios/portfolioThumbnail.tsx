import { ReactElement } from 'react';
import { BoosterInUse, Portfolio } from '@fridaygame/client';
import { To } from 'react-router-dom';
import AssetThumbnail from '../assets/assetThumbnail';
import FridayCoins from '../../market/fridayCoins';
import FridayCoinsVariation from '../../market/fridayCoinsVariation';
import PercentageVariation from '../../market/percentageVariation';
import BoosterInUseStack from '../boosters/boosterInUseStack';
import Button from '../../general/button';
import QuotationGraph from '../quotations/quotationGraph';

export interface Props {
  portfolio: Portfolio;
  assetTo?: To;
  onStopBooster?: (boosterInUse?: BoosterInUse) => void | Promise<void>;
  onSell?: () => void | Promise<void>;
  onBuy?: () => void | Promise<void>;
  onBoost?: () => void | Promise<void>;
}

export default function PortfolioThumbnail({
  portfolio,
  assetTo,
  onStopBooster,
  onSell,
  onBuy,
  onBoost,
}: Props): ReactElement {
  return (
    <div className="friday-ui-portfolio-thumbnail">
      <div className="header">
        <span className="id">{portfolio.id}</span>
        <div className="quantity">
          <span className="label">Quantité</span>
          <span className="value">{portfolio.quantity || 1}</span>
        </div>
      </div>

      {portfolio.asset && typeof portfolio.asset === 'object' ? (
        <div className="asset">
          <AssetThumbnail asset={portfolio.asset} theme="lighter" to={assetTo} />
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
            <BoosterInUseStack boostersInUse={portfolio.boosters} onStopBooster={onStopBooster} />
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
            <Button shape="filled" theme="lighter" onClick={onSell}>
              Vendre
            </Button>
          </div>
        ) : null}

        {onBuy ? (
          <div className="action">
            <Button shape="filled" theme="lighter" onClick={onBuy}>
              Acheter
            </Button>
          </div>
        ) : null}

        {onBoost ? (
          <div className="action">
            <Button shape="filled" theme="lighter" onClick={onBoost}>
              Booster
            </Button>
          </div>
        ) : null}
      </div>

      <div className="quotation">
        <QuotationGraph
          quotations={[
            { t: 1, v: 3 },
            { t: 2, v: 2 },
            { t: 5, v: 5 },
            { t: 6, v: 4 },
          ]}
        />
      </div>
    </div>
  );
}
