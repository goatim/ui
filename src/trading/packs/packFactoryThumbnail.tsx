import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import FridayCoins from '../../market/fridayCoins';
import { formatCurrency } from '@fridaygame/client';
import Button from '../../general/button';

export type PackFactoryType = 'gold' | 'platinium' | 'silver';
export type PackFactoryThumbnailTheme = 'light' | 'dark';

export interface PackFactory {
  creditAmount: number;
  price: number;
  type: PackFactoryType;
}

export interface Props extends WrapperProps {
  isPopular?: boolean;
  onBuy: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  packFactory: PackFactory;
  theme: PackFactoryThumbnailTheme;
}

export default function PackFactoryThumbnail({
  isPopular = false,
  onBuy,
  packFactory,
  theme = 'light',
  onClick,
  href,
  target,
  to,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-pack-factory-thumbnail ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="popular-container" style={!isPopular ? { display: 'none' } : undefined}>
        <span className="popular-label">POPULAIRE</span>
      </div>
      <span className="title">{`Pack ${packFactory.type}`}</span>
      <span className="price">{formatCurrency(packFactory.price)}</span>
      <span className="description">De pur produit du centre de formation FRIDAY</span>
      <div className="separator" />
      <div className="credit-amount-container">
        <span className="credit-amount-label">Valeur du pack :</span>
        <FridayCoins amount={packFactory.creditAmount} decimalDigits={0} size="big" theme="gold" />
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
