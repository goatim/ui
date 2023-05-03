import { ReactElement } from 'react';
import { Wallet } from '@goatim/client';
import { GoatimCoins } from '../goatimCoins';

export type WalletAmountDetailSize = 'narrow' | 'normal';

export interface WalletAmountDetailProps {
  wallet: Wallet;
  size?: WalletAmountDetailSize;
}

export function WalletAmountDetail({
  wallet,
  size = 'normal',
}: WalletAmountDetailProps): ReactElement {
  return (
    <div className={`goatim-ui-wallet-amount-detail ${size}`}>
      <div className="section">
        <span className="label">Sur ton compte</span>
        <GoatimCoins amount={wallet.amount} size="small" />
      </div>

      <div className={`section${size !== 'narrow' ? ' center' : ''}`}>
        <span className="label">Tu peux retirer</span>
        <GoatimCoins
          amount={
            (wallet.withdrawable_amount || 0) < (wallet.amount || 0)
              ? wallet.withdrawable_amount || 0
              : wallet.amount || 0
          }
          size="small"
        />
      </div>

      <div className={`section${size !== 'narrow' ? ' right' : ''}`}>
        <span className="label">Max retirable</span>
        <GoatimCoins amount={wallet.withdrawable_amount} size="small" />
        <span className="instruction">Dividendes et plus-values</span>
      </div>
    </div>
  );
}
