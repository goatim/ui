import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { formatCurrency } from '@fridaygame/client';
import Button from '../../general/button';

export type BoosterType = 'gold' | 'platinium' | 'silver';
export type BoosterThumbnailTheme = 'light' | 'dark';

export interface Booster {
  multiplier: number;
  price: number;
  type: BoosterType;
}

export interface Props extends WrapperProps {
  booster: Booster;
  isPopular?: boolean;
  onBuy: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  theme: BoosterThumbnailTheme;
}

export default function BoosterThumbnail({
  booster,
  isPopular = false,
  onBuy,
  theme = 'light',
  onClick,
  href,
  target,
  to,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-booster-thumbnail ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="popular-container" style={!isPopular ? { display: 'none' } : undefined}>
        <span className="popular-label">POPULAIRE</span>
      </div>
      <span className="title">{`Booster ${booster.type}`}</span>
      <span className="price">{formatCurrency(booster.price)}</span>
      <span className="description">De pur produit du centre de formation FRIDAY</span>
      <div className="separator" />
      <div className="multiplier-container">
        <span className="multiplier-label">{`Valeur du pack : x${booster.multiplier}`}</span>
      </div>
      <div className="buy-button">
        <Button
          shape="filled"
          size="small"
          onClick={onBuy}
          fullWidth={false}
          theme={theme === 'dark' ? 'buy' : 'electric-blue'}>
          Acheter
        </Button>
      </div>
    </Wrapper>
  );
}
