import { ReactElement, useMemo } from 'react';
import { WrapperProps } from '@cezembre/fronts';
import { formatEurosAmount, PackFactory } from '@goatim/client';
import { Button, Wallpaper } from '../../general';
import { GoatimCoinsAmount } from '../../market';
import randomShareBulks from './assets/random-share-bulks.png';

export interface PackFactoryThumbnailProps extends WrapperProps {
  packFactory: PackFactory;
  actionLabel?: string;
}

export function PackFactoryThumbnail({
  packFactory,
  actionLabel = 'Ajouter au panier',
  onClick,
  href,
  target,
}: PackFactoryThumbnailProps): ReactElement {
  const highestOdd = useMemo<number>(() => {
    if (!packFactory.odds) {
      return 0;
    }
    return Object.entries(packFactory.odds).reduce<number>(
      (high, [val]) => (high < Number(val) ? Number(val) : high),
      0,
    );
  }, [packFactory.odds]);

  return (
    <div className="goatim-ui-pack-factory-thumbnail">
      <div className="header">
        <Wallpaper>Pack actions</Wallpaper>
      </div>

      <div className="body">
        <div className="odd">
          <span className="label">Jusqu&apos;à</span>
          <GoatimCoinsAmount amount={highestOdd} size="medium" />
        </div>
        <span className="name">{packFactory.name}</span>
        {packFactory.price ? (
          <span className="price">{formatEurosAmount(packFactory.price)}</span>
        ) : null}
      </div>

      <img className="random-share-bulks" src={randomShareBulks} alt="Random share bulks" />

      <div className="actions">
        <Button
          shape="filled"
          size="small"
          theme="gold"
          onClick={onClick}
          href={href}
          target={target}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
