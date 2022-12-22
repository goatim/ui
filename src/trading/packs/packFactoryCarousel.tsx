import { ReactElement } from 'react';
import { PackFactory } from '@fridaygame/client';
import PackFactoryThumbnail from './packFactoryThumbnail';

export type PackFactoryCarouselSize = 'small' | 'medium' | 'big';

export interface Props {
  packFactories: PackFactory[];
  size?: PackFactoryCarouselSize;
  actionLabel?: string;
  onPackFactoryClick?: (packFactory: PackFactory) => unknown;
}

export default function PackFactoryCarousel({
  packFactories,
  size = 'big',
  actionLabel = 'Ajouter au panier',
  onPackFactoryClick,
}: Props): ReactElement {
  return (
    <div className={`friday-ui-pack-factory-carousel ${size}`}>
      <div className="background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 721.41 721.41">
          <path
            fill="#D4B759"
            d="M360.71,67.67c39.56,0,77.94,7.75,114.06,23.03,34.89,14.76,66.23,35.89,93.15,62.8,26.91,26.91,48.04,58.25,62.8,93.15,15.28,36.13,23.03,74.5,23.03,114.06s-7.75,77.94-23.03,114.06c-14.76,34.89-35.89,66.23-62.8,93.15-26.91,26.91-58.25,48.04-93.15,62.8-36.13,15.28-74.5,23.03-114.06,23.03s-77.94-7.75-114.06-23.03c-34.89-14.76-66.23-35.89-93.15-62.8-26.91-26.91-48.04-58.25-62.8-93.15-15.28-36.13-23.03-74.5-23.03-114.06s7.75-77.94,23.03-114.06c14.76-34.89,35.89-66.23,62.8-93.15,26.91-26.91,58.25-48.04,93.15-62.8,36.13-15.28,74.5-23.03,114.06-23.03m0-2c-162.95,0-295.04,132.09-295.04,295.04s132.09,295.04,295.04,295.04,295.04-132.09,295.04-295.04S523.65,65.67,360.71,65.67h0Z"
          />
          <line x1=".71" y1="720.71" x2="720.71" y2=".71" strokeWidth={2} stroke="#D4B759" />
        </svg>
      </div>
      <div className="pack-factories">
        {packFactories.map((packFactory) => (
          <div key={packFactory.id} className="pack-factory">
            <PackFactoryThumbnail
              packFactory={packFactory}
              actionLabel={actionLabel}
              onClick={onPackFactoryClick ? () => onPackFactoryClick(packFactory) : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
