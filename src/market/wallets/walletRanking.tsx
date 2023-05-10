import { ReactElement } from 'react';
import { Wallet } from '@goatim/client';
import { WalletRank } from './walletRank';
import { Icon } from '../../general';

export type WalletRankingTheme = 'dark' | 'light';

export interface WalletRankingProps {
  wallets?: Wallet[];
  pinned?: Wallet;
  theme?: WalletRankingTheme;
  positionExtractor?: (wallet: Wallet) => number;
  coinsExtractor?: (wallet: Wallet) => number;
  gainsExtractor?: (wallet: Wallet) => number;
}

export function WalletRanking({
  wallets,
  pinned,
  theme = 'dark',
  positionExtractor,
  coinsExtractor,
  gainsExtractor,
}: WalletRankingProps): ReactElement {
  if (!wallets?.length) {
    return (
      <div className={`goatim-ui-wallet-ranking-empty ${theme}`}>
        <Icon name="meh" size={25} />
        <span>Personne</span>
      </div>
    );
  }

  return (
    <div className={`goatim-ui-wallet-ranking ${theme}`}>
      <div className="wallets">
        {wallets.map((wallet) => (
          <div className="wallet" key={wallet.id}>
            <WalletRank
              wallet={wallet}
              theme={theme}
              position={positionExtractor ? positionExtractor(wallet) : undefined}
              coins={coinsExtractor ? coinsExtractor(wallet) : undefined}
              gains={gainsExtractor ? gainsExtractor(wallet) : undefined}
            />
          </div>
        ))}
      </div>
      {pinned ? (
        <div className="pinned">
          <WalletRank
            wallet={pinned}
            theme={theme}
            position={positionExtractor ? positionExtractor(pinned) : undefined}
            coins={coinsExtractor ? coinsExtractor(pinned) : undefined}
            gains={gainsExtractor ? gainsExtractor(pinned) : undefined}
          />
        </div>
      ) : null}
    </div>
  );
}
