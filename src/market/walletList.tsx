import { ReactElement, useMemo } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletThumbnail from './walletThumbnail';

export type WalletListTheme = 'default' | 'light';

export interface Props {
  wallets?: Wallet[];
  total?: number;
  theme?: WalletListTheme;
}

export default function WalletList({ wallets, total, theme }: Props): ReactElement {
  const nbMore = useMemo<number>(
    () => (total || 0) - (wallets?.length || 0),
    [total, wallets?.length],
  );

  if (!wallets?.length) {
    return <span>Aucun joueur</span>;
  }
  return (
    <div className={`friday-ui-wallet-list ${theme}`}>
      {wallets.map((wallet) => (
        <div key={wallet.id} className="wallet">
          <WalletThumbnail wallet={wallet} infos="picture" theme={theme} />
        </div>
      ))}
      {nbMore > 0 ? (
        <span className="others">
          + {nbMore} autre{nbMore > 1 ? 's' : null}
        </span>
      ) : null}
    </div>
  );
}
