import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import UserThumbnail from '../../auth/userThumbnail';

export interface Props {
  wallet: Wallet;
}

export default function WalletTeam({ wallet }: Props): ReactElement {
  return (
    <div className="friday-ui-wallet-team">
      {wallet.owner && typeof wallet.owner === 'object' ? (
        <UserThumbnail user={wallet.owner} infos="picture-and-name" size="medium" />
      ) : null}
    </div>
  );
}
