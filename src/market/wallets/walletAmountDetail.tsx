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
        <span className="label">Pack Starter</span>
        <GoatimCoins amount={wallet.floor_withdrawal} size="small" />
        <span className="instruction">Reçu lors de l&apos;inscription.</span>
      </div>

      <div className={`section${size !== 'narrow' ? ' center' : ''}`}>
        <span className="label">Solde Goatim coins</span>
        <GoatimCoins amount={wallet.amount} size="small" />
      </div>

      <div className={`section${size !== 'narrow' ? ' right' : ''}`}>
        <span className="label">Plafond de retrait</span>
        <GoatimCoins amount={(wallet.amount || 0) - (wallet.floor_withdrawal || 0)} size="small" />
        <span className="instruction">
          Solde GTC
          <br />- solde intial
        </span>
      </div>
    </div>
  );
}
