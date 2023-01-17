import { ReactElement } from 'react';
import { Wrapper } from '@cezembre/fronts';
import FridayCoinsVariation from '../fridayCoinsVariation';
import FridayCoins from '../fridayCoins';
import Score from '../../general/score';
import WalletThumbnail, { Props as WalletThumbnailProps } from './walletThumbnail';

export interface Props extends WalletThumbnailProps {
  position?: number;
  score?: number;
  amount?: number;
  variation?: number;
}

export default function WalletRank({
  wallet,
  size = 'small',
  theme = 'dark',
  showPicture,
  showName,
  showAmount,
  to,
  onClick,
  href,
  target,
  position,
  score,
  amount,
  variation,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-wallet-rank ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="body">
        {position !== undefined ? <span className="position">{position}</span> : null}
        <div className="wallet">
          <WalletThumbnail
            wallet={wallet}
            size={size}
            theme={theme}
            showPicture={showPicture}
            showName={showName}
            showAmount={showAmount}
          />
        </div>
      </div>

      <div className="metrics">
        {score !== undefined ? <Score score={score} theme={theme} /> : null}
        {amount !== undefined ? <FridayCoins amount={amount} theme={theme} size={size} /> : null}
        {variation !== undefined ? (
          <FridayCoinsVariation variation={variation} size={size} />
        ) : null}
      </div>
    </Wrapper>
  );
}
