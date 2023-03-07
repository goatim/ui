import { MouseEvent, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Asset, Booster, Portfolio } from '@goatim/client';
import { To } from 'react-router-dom';
import { Wrapper } from '@cezembre/fronts';
import { AssetThumbnail, AssetThumbnailSize } from '../assets';
import { GoatimCoins, GoatimCoinsGains, PercentageVariation } from '../../market';
import { Button } from '../../general';
import { QuotationHistoryGraph } from '../quotations';

export type PortfolioThumbnailSize = 'narrow' | 'medium';

export interface PortfolioThumbnailProps {
  portfolio: Portfolio;
  size?: PortfolioThumbnailSize;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => unknown;
  assetTo?: (asset: Asset) => To;
  onStopBooster?: (booster?: Booster) => unknown;
  onSell?: () => unknown;
  onBuy?: () => unknown;
  onBoost?: () => unknown;
  showDetails?: boolean;
  onToggleDetails?: () => unknown;
}

export function PortfolioThumbnail({
  portfolio,
  size = 'medium',
  assetTo,
  assetOnClick,
  onStopBooster,
  onSell,
  onBuy,
  onBoost,
  showDetails = false,
  onToggleDetails,
}: PortfolioThumbnailProps): ReactElement {
  const assetThumbnailSize = useMemo<AssetThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
        return 'narrow';
      default:
        return 'medium';
    }
  }, [size]);

  const [internalShowDetails, setInternalShowDetails] = useState(showDetails);

  const toggleDetails = useCallback(() => {
    if (onToggleDetails) {
      onToggleDetails();
    } else {
      setInternalShowDetails((isd) => !isd);
    }
  }, [onToggleDetails]);

  useEffect(() => {
    setInternalShowDetails(showDetails);
  }, [showDetails]);

  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-portfolio-thumbnail', size];

    if (internalShowDetails) {
      classNames.push('show-details');
    }

    return classNames.join(' ');
  }, [internalShowDetails, size]);

  return (
    <Wrapper className={className}>
      <div className="header">
        <div className="buy-price">
          <span className="label">Prix d&apos;achat</span>
          <GoatimCoins amount={portfolio.buy_price} size="small" />
        </div>
        <div className="nb-shares">
          <span className="label">Quantité</span>
          <span className="value">{portfolio.nb_shares || 0}</span>
        </div>
      </div>

      {portfolio.asset && typeof portfolio.asset === 'object' ? (
        <div className="asset">
          <AssetThumbnail
            asset={portfolio.asset}
            size={assetThumbnailSize}
            onClick={
              assetOnClick ? (event) => assetOnClick(portfolio.asset as Asset, event) : undefined
            }
            to={assetTo ? assetTo(portfolio.asset) : undefined}
          />
        </div>
      ) : null}

      <div className="details">
        <div className="metrics">
          <div className="dividends">
            <span className="label">Dividendes</span>
            <GoatimCoins amount={portfolio.dividends_gains} size="medium" />
          </div>

          <div className="gains">
            <span className="label">+/- values</span>
            <GoatimCoinsGains variation={portfolio.total_gains} size="medium" />
            <PercentageVariation variation={portfolio.total_variations} size="small" />
          </div>
        </div>

        <div className="actions">
          {onSell ? (
            <div className="action">
              <Button shape="filled" onClick={onSell}>
                Vendre
              </Button>
            </div>
          ) : null}

          {onBuy ? (
            <div className="action">
              <Button shape="filled" theme="buy" onClick={onBuy}>
                Achat
              </Button>
            </div>
          ) : null}

          {onBoost ? (
            <div className="action">
              <Button shape="filled" theme="buy" onClick={onBoost}>
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

      <div className="footer">
        <Button shape="text" theme="transparent-dark" onClick={toggleDetails}>
          {internalShowDetails ? 'Voir moins' : 'Voir plus'}
        </Button>
      </div>
    </Wrapper>
  );
}
