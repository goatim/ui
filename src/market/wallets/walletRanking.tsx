import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletThumbnail from './walletThumbnail';
import Icon from '../../general/icon';

export type WalletRankingTheme = 'dark' | 'light';

export interface Props {
  wallets?: Wallet[];
  pinned?: Wallet;
  theme?: WalletRankingTheme;
  positionExtractor?: (wallet: Wallet) => number;
  amountExtractor?: (wallet: Wallet) => number;
  variationExtractor?: (wallet: Wallet) => number;
}

export default function WalletRanking({
  wallets,
  pinned,
  theme = 'dark',
  positionExtractor,
  amountExtractor,
  variationExtractor,
}: Props): ReactElement {
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
            <WalletThumbnail
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
          <WalletThumbnail
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
