import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import WalletTeam from './walletTeam';
import WalletMetrics from './walletMetrics';

export interface Props {
  wallet: Wallet;
}

export default function WalletOverview({ wallet }: Props): ReactElement {
  return (
    <div className="friday-ui-wallet-overview">
      <div className="team">
        <WalletTeam wallet={wallet} />
      </div>
      <div className="metrics">
        <WalletMetrics wallet={wallet} />
      </div>
    </div>
  );
}
