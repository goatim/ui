import { ReactElement } from 'react';
import { Booster, formatCurrencyAmount } from '@fridaygame/client';

export type BoosterIconSize = 'small' | 'medium' | 'big';

export type BoosterIconInfos = 'stock' | 'price' | 'stock_or_price' | 'none';

export interface Props {
  booster: Booster;
  size?: BoosterIconSize;
  infos?: BoosterIconInfos;
  active?: boolean;
}

interface BoosterIconInfoProps {
  booster: Booster;
  infos: BoosterIconInfos;
}

function BoosterIconInfo({ booster, infos }: BoosterIconInfoProps): ReactElement | null {
  switch (infos) {
    case 'stock':
      return <span className="stock">{booster.nb_in_wallet}</span>;

    case 'price':
      return <span className="price">{formatCurrencyAmount(booster.price)}</span>;

    case 'stock_or_price':
      if (booster.nb_in_wallet) {
        return <span className="stock">{booster.nb_in_wallet}</span>;
      }
      return <span className="price">{formatCurrencyAmount(booster.price)}</span>;

    default:
      return null;
  }
}

export default function BoosterIcon({
  booster,
  size,
  infos = 'stock_or_price',
  active = false,
}: Props): ReactElement {
  return (
    <div className={`friday-ui-booster-icon ${size}${active ? ' active' : ''}`}>
      <div className="icon">
        <span>x{booster.leverage || 0}</span>
      </div>
      <BoosterIconInfo booster={booster} infos={infos} />
    </div>
  );
}
