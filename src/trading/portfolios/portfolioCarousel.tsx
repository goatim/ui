import { ReactElement, useMemo } from 'react';
import { Portfolio } from '@fridaygame/client';
import PortfolioList from './portfolioList';
import { PortfolioThumbnailSize } from './portfolioThumbnail';

export type PortfolioCarouselSize = 'small' | 'medium' | 'big';

export interface Props {
  portfolios?: Portfolio[];
  size?: PortfolioCarouselSize;
}

export default function PortfolioCarousel({ portfolios, size }: Props): ReactElement {
  const portfolioSize = useMemo<PortfolioThumbnailSize>(() => {
    switch (size) {
      case 'small':
        return 'narrow';
      default:
        return 'medium';
    }
  }, [size]);

  return (
    <div className={`friday-ui-portfolio-carousel ${size}`}>
      <div className="portfolios">
        <PortfolioList portfolios={portfolios?.slice(0, 4)} size={portfolioSize} />
      </div>
    </div>
  );
}
