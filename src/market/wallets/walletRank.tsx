import { ReactElement } from 'react';
import { Wrapper } from '@cezembre/fronts';
import { GoatimCoinsGains } from '../goatimCoinsGains';
import { GoatimCoins } from '../goatimCoins';
import { Score } from '../../general';
import { WalletThumbnail, WalletThumbnailProps } from './walletThumbnail';

export interface WalletRankProps extends WalletThumbnailProps {
  position?: number;
  score?: number;
  amount?: number;
  gains?: number;
}

export function WalletRank({
  wallet,
  size = 'small',
  theme = 'dark',
  showPicture,
  showName,
  showAmount,
  onClick,
  href,
  target,
  position,
  score,
  amount,
  gains,
}: WalletRankProps): ReactElement {
  return (
    <Wrapper
      className={`goatim-ui-wallet-rank ${size} ${theme}`}
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
          <GoatimCoins amount={amount} theme={theme} size={size} />
        ) : null}
        {typeof gains === 'number' ? <GoatimCoinsGains gains={gains} size={size} /> : null}
      </div>
    </Wrapper>
  );
}
