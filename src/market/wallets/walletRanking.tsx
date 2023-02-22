import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import { WalletRank } from './walletRank';
import { Icon } from '../../general';

export type WalletRankingTheme = 'dark' | 'light';

export interface WalletRankingProps {
  wallets?: Wallet[];
  pinned?: Wallet;
  theme?: WalletRankingTheme;
  positionExtractor?: (wallet: Wallet) => number;
  amountExtractor?: (wallet: Wallet) => number;
  variationExtractor?: (wallet: Wallet) => number;
}

export function WalletRanking({
  wallets,
  pinned,
  theme = 'dark',
  positionExtractor,
  amountExtractor,
  variationExtractor,
}: WalletRankingProps): ReactElement {
  if (!wallets?.length) {
    return (
      <div className={`friday-ui-wallet-ranking-empty ${theme}`}>
        <Icon name="meh" size={25} />
        <span>Personne</span>
      </div>
    );
  }

  return (
    <div className={`friday-ui-wallet-ranking ${theme}`}>
      <div className="wallets">
        {wallets.map((wallet) => (
          <div className="wallet" key={wallet.id}>
            <WalletRank
              wallet={wallet}
              theme={theme}
              position={positionExtractor ? positionExtractor(wallet) : undefined}
              amount={amountExtractor ? amountExtractor(wallet) : undefined}
              variation={variationExtractor ? variationExtractor(wallet) : undefined}
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
            amount={amountExtractor ? amountExtractor(pinned) : undefined}
            variation={variationExtractor ? variationExtractor(pinned) : undefined}
          />
        </div>
      ) : null}
    </div>
  );
}
