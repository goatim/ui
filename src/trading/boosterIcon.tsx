import { ReactElement } from 'react';
import { Booster, formatCurrency } from '@fridaygame/client';
import Wrapper, { WrapperProps } from '../general/wrapper';

export type BoosterIconSize = 'small' | 'medium' | 'big';

export type BoosterIconInfos = 'stock' | 'price' | 'stock_or_price' | 'none';

export interface Props extends WrapperProps {
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
      return <span className="price">{formatCurrency(booster.price)}</span>;

    case 'stock_or_price':
      if (booster.nb_in_wallet) {
        return <span className="stock">{booster.nb_in_wallet}</span>;
      }
      return <span className="price">{formatCurrency(booster.price)}</span>;

    default:
      return null;
  }
}

export default function BoosterIcon({
  booster,
  size,
  infos = 'stock_or_price',
  active = false,
  to,
  onClick,
  type,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-booster-icon ${size}${active ? ' active' : ''}`}
      to={to}
      onClick={onClick}
      type={type}
      href={href}
      target={target}>
      <div className="icon">
        <span>x{booster.leverage || 0}</span>
      </div>
      <BoosterIconInfo booster={booster} infos={infos} />
    </Wrapper>
  );
}
