import { ReactElement } from 'react';
import { Wallet } from '@goatim/client';
import { UserThumbnail } from '../../auth';

export interface WalletTeamProps {
  wallet: Wallet;
}

export function WalletTeam({ wallet }: WalletTeamProps): ReactElement {
  return (
    <div className="goatim-ui-wallet-team">
      {wallet.owner && typeof wallet.owner === 'object' ? (
        <UserThumbnail user={wallet.owner} size="medium" />
      ) : null}
    </div>
  );
}
