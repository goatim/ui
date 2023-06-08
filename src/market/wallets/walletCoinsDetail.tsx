import { ReactElement, useMemo } from 'react';
import { Wallet } from '@goatim/client';
import { GoatimCoinsAmount } from '../goatimCoins';

export type WalletCoinsDetailSize = 'narrow' | 'normal';

export interface WalletCoinsDetailProps {
  wallet: Wallet;
  size?: WalletCoinsDetailSize;
}

export function WalletCoinsDetail({
  wallet,
  size = 'normal',
}: WalletCoinsDetailProps): ReactElement {
  const withdrawableAmount = useMemo<number>(() => {
    if (
      !wallet.coins ||
      wallet.coins < 100000 ||
      !wallet.withdrawable_coins ||
      wallet.withdrawable_coins < 100000
    ) {
      return 0;
    }

    return wallet.withdrawable_coins < wallet.coins ? wallet.withdrawable_coins : wallet.coins;
  }, [wallet.coins, wallet.withdrawable_coins]);

  return (
    <div className={`goatim-ui-wallet-coins-detail ${size}`}>
      <div className="section">
        <div className="infos">
          <span className="label">Sur ton compte</span>
        </div>
        <div className="value">
          <GoatimCoinsAmount amount={wallet.coins} size="small" />
        </div>
      </div>

      <div className="section">
        <div className="infos">
          <span className="label">Max retirable</span>
          <span className="description">Dividendes et plus-values</span>
        </div>
        <div className="value">
          <GoatimCoinsAmount amount={wallet.withdrawable_coins} size="small" />
        </div>
      </div>

      <div className="section">
        <div className="infos">
          <span className="label">Min retirable</span>
          <span className="description">Pour dépasser les frais Etherum</span>
        </div>
        <div className="value">
          <GoatimCoinsAmount amount={100000} size="small" />
        </div>
      </div>

      <div className="section">
        <div className="infos">
          <span className="label">Tu peux donc retirer</span>
        </div>
        <div className="value">
          <GoatimCoinsAmount amount={withdrawableAmount} size="small" />
        </div>
      </div>
    </div>
  );
}
