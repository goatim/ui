import { ReactElement } from 'react';
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
  return (
    <div className={`goatim-ui-wallet-coins-detail ${size}`}>
      <div className="section">
        <span className="label">Sur ton compte</span>
        <GoatimCoinsAmount amount={wallet.coins} size="small" />
      </div>

      <div className={`section${size !== 'narrow' ? ' center' : ''}`}>
        <span className="label">Tu peux retirer</span>
        <GoatimCoinsAmount
          amount={
            (wallet.withdrawable_coins || 0) < (wallet.coins || 0)
              ? wallet.withdrawable_coins || 0
              : wallet.coins || 0
          }
          size="small"
        />
      </div>

      <div className={`section${size !== 'narrow' ? ' right' : ''}`}>
        <span className="label">Max retirable</span>
        <GoatimCoinsAmount amount={wallet.withdrawable_coins} size="small" />
        <span className="instruction">Dividendes et plus-values</span>
      </div>
    </div>
  );
}
