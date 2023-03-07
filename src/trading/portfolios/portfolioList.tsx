import { MouseEvent, ReactElement } from 'react';
import { Asset, Portfolio } from '@goatim/client';
import { To } from 'react-router-dom';
import { PortfolioThumbnail, PortfolioThumbnailSize } from './portfolioThumbnail';

export interface PortfolioListProps {
  portfolios?: Portfolio[];
  size?: PortfolioThumbnailSize;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => unknown;
  assetTo?: (asset: Asset) => To;
}

export function PortfolioList({
  portfolios,
  size,
  assetOnClick,
  assetTo,
}: PortfolioListProps): ReactElement {
  if (!portfolios?.length) {
    return <span>Aucun Joueur</span>;
  }

  return (
    <div className={`goatim-ui-portfolio-list ${size}`}>
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="portfolio">
          <PortfolioThumbnail
            portfolio={portfolio}
            assetOnClick={assetOnClick}
            assetTo={assetTo}
            size={size}
          />
        </div>
      ))}
    </div>
  );
}
