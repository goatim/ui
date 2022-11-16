import { ReactElement } from 'react';
import { Portfolio } from '@fridaygame/client';
import PortfolioList from './portfolioList';

export type PortfolioCarouselSize = 'small' | 'medium' | 'big';

export interface Props {
  portfolios?: Portfolio[];
  size?: PortfolioCarouselSize;
}

export default function PortfolioCarousel({ portfolios, size }: Props): ReactElement {
  return (
    <div className={`friday-ui-portfolio-carousel ${size}`}>
      <div className="portfolios">
        <PortfolioList portfolios={portfolios} />
      </div>
    </div>
  );
}
