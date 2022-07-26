import { MouseEvent, ReactElement } from 'react';
import { Asset, Portfolio } from '@fridaygame/client';
import { To } from 'react-router-dom';
import PortfolioThumbnail from './portfolioThumbnail';

export interface Props {
  portfolios?: Portfolio[];
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  assetTo?: (asset: Asset) => To;
}

export default function PortfolioList({ portfolios, assetOnClick, assetTo }: Props): ReactElement {
  if (!portfolios?.length) {
    return <span>Aucun Joueur</span>;
  }

  return (
    <div className="friday-ui-portfolio-list">
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="portfolio">
          <PortfolioThumbnail portfolio={portfolio} assetOnClick={assetOnClick} assetTo={assetTo} />
        </div>
      ))}
    </div>
  );
}
