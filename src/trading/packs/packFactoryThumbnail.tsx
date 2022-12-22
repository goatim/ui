import { ReactElement } from 'react';
import { WrapperProps } from '@cezembre/fronts';
import { formatEurosAmount, PackFactory } from '@fridaygame/client';
import Button from '../../general/button';
import FridayCoins from '../../market/fridayCoins';
import Wallpaper from '../../general/wallpaper';
import randomShareBulks from './assets/random-share-bulks.png';

export interface Props extends WrapperProps {
  packFactory: PackFactory;
  actionLabel?: string;
}

export default function PackFactoryThumbnail({
  packFactory,
  actionLabel = 'Ajouter au panier',
  onClick,
  href,
  target,
  to,
}: Props): ReactElement {
  return (
    <div className="friday-ui-pack-factory-thumbnail">
      <div className="header">
        <Wallpaper>Pack actions</Wallpaper>
      </div>

      <div className="body">
        {packFactory.odds ? (
          <div className="odds">
            {Object.entries(packFactory.odds).map(([value]) => (
              <div key={value} className="odd">
                <span className="label">Valeur</span>
                <FridayCoins amount={Number(value)} size="medium" />
              </div>
            ))}
          </div>
        ) : null}
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
          to={to}
          onClick={onClick}
          href={href}
          target={target}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
