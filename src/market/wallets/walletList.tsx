import { ReactElement, useMemo } from 'react';
import { Wallet } from '@goatim/client';
import { WalletThumbnail } from './walletThumbnail';

export type WalletListTheme = 'dark' | 'light';

export interface WalletListProps {
  wallets?: Wallet[];
  total?: number;
  theme?: WalletListTheme;
}

export function WalletList({ wallets, total, theme }: WalletListProps): ReactElement {
  const nbMore = useMemo<number>(
    () => (total || 0) - (wallets?.length || 0),
    [total, wallets?.length],
  );

  if (!wallets?.length) {
    return (
      <div className={`goatim-ui-wallet-list-empty ${theme}`}>
        <span>Aucun portefeuille</span>
      </div>
    );
  }

  return (
    <div className={`goatim-ui-wallet-list ${theme}`}>
      {wallets.map((wallet) => (
        <div key={wallet.id} className="wallet">
          <WalletThumbnail wallet={wallet} showName={false} theme={theme} />
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
