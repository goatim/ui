import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import soccerDuel from '../general/assets/soccer-duel.jpg';

export function ShopBanner({ onClick, href, target }: WrapperProps): ReactElement {
  return (
    <Wrapper className="goatim-ui-shop-banner" onClick={onClick} href={href} target={target}>
      <img src={soccerDuel} alt="Soccer Duel" />
      <div className="body">
        <h1>Goatim Store</h1>
        <h2>Boostes tes performances !</h2>
      </div>
    </Wrapper>
  );
}
