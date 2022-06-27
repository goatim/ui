import { ReactElement } from 'react';
import { Portfolio } from '@fridaygame/client';
import PortfolioThumbnail from './portfolioThumbnail';

export interface Props {
  portfolios?: Portfolio[];
}

export default function PortfolioList({ portfolios }: Props): ReactElement {
  if (!portfolios?.length) {
    return <span>Aucun Joueur</span>;
  }

  return (
    <div className="friday-ui-portfolio-list">
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className="portfolio">
          <PortfolioThumbnail portfolio={portfolio} />
        </div>
      ))}
    </div>
  );
}
