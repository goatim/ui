import { MouseEvent, ReactElement, useMemo } from 'react';
import { Asset, Portfolio } from '@goatim/client';
import { To } from 'react-router-dom';
import { PortfolioList } from './portfolioList';
import { PortfolioThumbnailSize } from './portfolioThumbnail';

export type PortfolioCarouselSize = 'small' | 'medium' | 'big';

export interface PortfolioCarouselProps {
  portfolios?: Portfolio[];
  size?: PortfolioCarouselSize;
  assetOnClick?: (asset: Asset, event: MouseEvent<HTMLButtonElement>) => unknown;
  assetTo?: (asset: Asset) => To;
}

export function PortfolioCarousel({
  portfolios,
  size,
  assetOnClick,
  assetTo,
}: PortfolioCarouselProps): ReactElement {
  const portfolioSize = useMemo<PortfolioThumbnailSize>(() => {
    switch (size) {
      case 'small':
        return 'narrow';
      default:
        return 'medium';
    }
  }, [size]);

  return (
    <div className={`goatim-ui-portfolio-carousel ${size}`}>
      <div className="portfolios">
        <PortfolioList
          portfolios={portfolios?.slice(0, 4)}
          size={portfolioSize}
          assetOnClick={assetOnClick}
          assetTo={assetTo}
        />
      </div>
    </div>
  );
}
