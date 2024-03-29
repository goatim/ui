import { ReactElement, useMemo } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import soccerDuel from '../general/assets/soccer-duel.jpg';
import market from '../general/assets/market.png';
import { Button } from '../general';

export type ShopBannerSize = 'small' | 'medium' | 'big';

export interface ShopBannerProps extends WrapperProps {
  size?: ShopBannerSize;
}

export function ShopBanner({
  size = 'small',
  onClick,
  href,
  target,
}: ShopBannerProps): ReactElement {
  const className = useMemo(() => {
    const classNames: string[] = ['goatim-ui-shop-banner', size];

    return classNames.join(' ');
  }, [size]);

  return (
    <Wrapper className={className} onClick={onClick} href={href} target={target}>
      <img src={soccerDuel} alt="Wheel cover" />
      <div className="body">
        <span className="label">Goatim store</span>
        <span className="title">Fais le plein !</span>
        <p>
          T’as plus assez de GTC pour t’acheter un joueur ou personne ne veut te vendre sa pépite ?
          Fonce et tente ta chance avec un pack !
        </p>
        <div className="action">
          <Button shape="text" theme="light" className=''>
            Accéder au store
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export function NeoShopBanner({
  size = 'small',
  onClick,
  href,
  target,
}: ShopBannerProps): ReactElement {
  const className = useMemo(() => {
    const classNames: string[] = ['goatim-ui-neo-shop-banner', size];

    return classNames.join(' ');
  }, [size]);

  return (
    <Wrapper className={className} onClick={onClick} href={href} target={target}>
      <img src={market} alt="Wheel cover" />
      
      <div className="body">
        <span className="title">Grimpe au classement</span>
        <div className="action">
          <Button shape="text" theme="light">
            <u className='label'>Accéder au shop</u>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}