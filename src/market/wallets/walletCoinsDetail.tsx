import { ReactElement, useMemo } from 'react';
import { Wallet } from '@goatim/client';
import { GoatimCoinsAmount } from '../goatimCoins';

export interface WalletCoinsDetailProps {
  wallet: Wallet;
}

export function WalletCoinsDetail({ wallet }: WalletCoinsDetailProps): ReactElement {
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
    <div className="goatim-ui-wallet-coins-detail">
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
          <span className="label">Minimum retirable</span>
        </div>
        <div className="value">
          <GoatimCoinsAmount amount={100000} size="small" />
        </div>
      </div>

      <div className="section">
        <div className="infos">
          <span className="label">Droit de retrait</span>
          <span className="description">Total de tes plus-values et dividendes</span>
        </div>
        <div className="value">
          <GoatimCoinsAmount amount={wallet.withdrawable_coins} size="small" />
        </div>
      </div>

      <div className="section">
        <div className="infos">
          <span className="label">Tu peux donc retirer</span>
          {!withdrawableAmount ? (
            <span className="description">Tu ne peux pas retirer de coins pour le moment.</span>
          ) : null}
        </div>
        <div className="value">
          <GoatimCoinsAmount amount={withdrawableAmount} size="small" />
        </div>
      </div>
    </div>
  );
}
