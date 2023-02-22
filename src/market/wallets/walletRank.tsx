import { ReactElement } from 'react';
import { Wrapper } from '@cezembre/fronts';
import { FridayCoinsVariation } from '../fridayCoinsVariation';
import { FridayCoins } from '../fridayCoins';
import { Score } from '../../general';
import { WalletThumbnail, WalletThumbnailProps } from './walletThumbnail';

export interface WalletRankProps extends WalletThumbnailProps {
  position?: number;
  score?: number;
  amount?: number;
  variation?: number;
}

export function WalletRank({
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
}: WalletRankProps): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-wallet-rank ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="body">
        {position ? <span className="position">{position}</span> : null}
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
        {typeof score === 'number' ? <Score score={score} theme={theme} /> : null}
        {typeof amount === 'number' ? (
          <FridayCoins amount={amount} theme={theme} size={size} />
        ) : null}
        {typeof variation === 'number' ? (
          <FridayCoinsVariation variation={variation} size={size} />
        ) : null}
      </div>
    </Wrapper>
  );
}
