import { ReactElement } from 'react';
import { WrapperProps } from '@cezembre/fronts';
import { formatEuros, PackFactory } from '@fridaygame/client';
import Button from '../../general/button';
import FridayCoins from '../../market/fridayCoins';

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
        <span className="label">Pack</span>
        {packFactory.odds ? (
          <div className="odds">
            {Object.entries(packFactory.odds).map(([value]) => (
              <div key={value} className="odd">
                <span className="label">Valeur</span>
                <FridayCoins amount={Number(value)} size="big" theme="light" />
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="body">
        <span className="title">{packFactory.name}</span>
        <span className="price">{formatEuros(packFactory.price)}</span>
        {packFactory.description ? (
          <span className="description">{packFactory.description}</span>
        ) : null}
      </div>

      <div className="actions">
        <Button shape="filled" size="small" to={to} onClick={onClick} href={href} target={target}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
