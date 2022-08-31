import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import FridayCoins from '../fridayCoins';

export type WalletAmountDetailSize = 'narrow' | 'normal';

export interface Props {
  wallet: Wallet;
  size?: WalletAmountDetailSize;
}

export default function WalletAmountDetail({ wallet, size = 'normal' }: Props): ReactElement {
  return (
    <div className={`friday-ui-wallet-amount-detail ${size}`}>
      <div className="section">
        <span className="label">Pack Starter</span>
        <FridayCoins amount={wallet.floor_withdrawal} size="small" />
        <span className="instruction">Reçu lors de l&apos;inscription.</span>
      </div>

      <div className={`section${size !== 'narrow' ? ' center' : ''}`}>
        <span className="label">Solde Friday coins</span>
        <FridayCoins amount={wallet.amount} size="small" />
      </div>

      <div className={`section${size !== 'narrow' ? ' right' : ''}`}>
        <span className="label">Plafond de retrait</span>
        <FridayCoins amount={(wallet.amount || 0) - (wallet.floor_withdrawal || 0)} size="small" />
        <span className="instruction">
          Solde espèces
          <br />- solde intial
        </span>
      </div>
    </div>
  );
}
