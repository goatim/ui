import { MouseEvent, ReactElement } from 'react';
import { Asset, Portfolio } from '@fridaygame/client';
import { To } from 'react-router-dom';
import PortfolioThumbnail, { PortfolioThumbnailSize } from './portfolioThumbnail';

export interface Props {
  portfolios?: Portfolio[];
  size?: PortfolioThumbnailSize;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => unknown;
  assetTo?: (asset: Asset) => To;
}

export default function PortfolioList({
  portfolios,
  size,
  assetOnClick,
  assetTo,
}: Props): ReactElement {
  if (!portfolios?.length) {
    return <span>Aucun Joueur</span>;
  }

  return (
    <div className={`friday-ui-portfolio-list ${size}`}>
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
