import { ReactElement } from 'react';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import soccerDuel from '../general/assets/soccer-duel.jpg';

export function ShopBanner({ onClick, to }: WrapperProps): ReactElement {
  return (
    <Wrapper className="friday-ui-shop-banner" onClick={onClick} to={to}>
      <img src={soccerDuel} alt="Soccer Duel" />
      <div className="body">
        <h1>Friday Store</h1>
        <h2>Boostes tes performances !</h2>
      </div>
    </Wrapper>
  );
}
