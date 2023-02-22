import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import { WalletMetrics } from './walletMetrics';
import { WalletThumbnail } from './walletThumbnail';

export type WalletOverviewSize = 'narrow' | 'normal';

export interface WalletOverviewProps {
  wallet: Wallet;
  size?: WalletOverviewSize;
}

export function WalletOverview({ wallet, size = 'normal' }: WalletOverviewProps): ReactElement {
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
