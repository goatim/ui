import { ReactElement, useMemo } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletThumbnail from './walletThumbnail';

export interface Props {
  wallets?: Wallet[];
  total?: number;
}

export default function WalletList({ wallets, total }: Props): ReactElement {
  const nbMore = useMemo<number>(
    () => (total || 0) - (wallets?.length || 0),
    [total, wallets?.length],
  );

  if (!wallets?.length) {
    return <span>Aucun joueur</span>;
  }
  return (
    <div className="friday-ui-wallet-list">
      {wallets.map((wallet) => (
        <div key={wallet.id} className="wallet">
          <WalletThumbnail wallet={wallet} infos="picture" />
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
