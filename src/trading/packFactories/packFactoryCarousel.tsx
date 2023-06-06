import { ReactElement, useMemo } from 'react';
import { PackFactory } from '@goatim/client';
import { PackFactoryThumbnail, PackFactoryThumbnailOptionsFields } from './packFactoryThumbnail';

export type PackFactoryCarouselSize = 'small' | 'medium' | 'big';

export type PackFactoryCarouselTheme = 'light-gold' | 'gold';

export interface PackFactoryCarouselProps {
  label?: string;
  title?: string;
  theme?: PackFactoryCarouselTheme;
  packFactories: PackFactory[];
  size?: PackFactoryCarouselSize;
  onSubmitPackFactory?: (
    packFactory: PackFactory,
    values: PackFactoryThumbnailOptionsFields,
    changes?: Partial<PackFactoryThumbnailOptionsFields>,
  ) => unknown;
  submitLabel?: string;
}

export function PackFactoryCarousel({
  label = 'Packs actions',
  title = 'Achète des packs et reçoit des actions de joueurs',
  theme = 'light-gold',
  packFactories,
  size = 'big',
  onSubmitPackFactory,
  submitLabel,
}: PackFactoryCarouselProps): ReactElement {
  const className = useMemo(() => {
    const classNames = ['goatim-ui-pack-factory-carousel', size, theme];

    return classNames.join(' ');
  }, [size, theme]);

  return (
    <div className={className}>
      <div className="header">
        <span className="label">{label}</span>
        <span className="title">{title}</span>
      </div>
      <div className="pack-factories">
        {packFactories.map((packFactory) => (
          <div key={packFactory.id} className="pack-factory">
            <PackFactoryThumbnail
              packFactory={packFactory}
              submitLabel={submitLabel}
              onSubmitOptions={
                onSubmitPackFactory
                  ? (values, changes) => onSubmitPackFactory(packFactory, values, changes)
                  : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
