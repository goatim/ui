import { MouseEvent, ReactElement } from 'react';
import { Asset, Portfolio } from '@goatim/client';
import { UrlObject } from 'url';
import { PortfolioThumbnail, PortfolioThumbnailSize } from './portfolioThumbnail';

export interface PortfolioListProps {
  portfolios?: Portfolio[];
  size?: PortfolioThumbnailSize;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => unknown;
  assetHref?: (asset: Asset) => string | UrlObject;
}

export function PortfolioList({
  portfolios,
  size,
  assetOnClick,
  assetHref,
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
            assetHref={assetHref}
            size={size}
          />
        </div>
      ))}
    </div>
  );
}
