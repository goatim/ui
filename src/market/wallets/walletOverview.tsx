import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletMetrics from './walletMetrics';
import WalletThumbnail from './walletThumbnail';

export type WalletOverviewSize = 'narrow' | 'normal';

export interface Props {
  wallet: Wallet;
  size?: WalletOverviewSize;
}

export default function WalletOverview({ wallet, size = 'normal' }: Props): ReactElement {
  return (
    <div className={`friday-ui-wallet-overview ${size}`}>
      <div className="team">
        <WalletThumbnail wallet={wallet} size="medium" />
      </div>
      <div className="metrics">
        <WalletMetrics wallet={wallet} size={size} />
      </div>
    </div>
  );
}
