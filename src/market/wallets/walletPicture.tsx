import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import Icon from '../../general/icon';

export type WalletPictureSize = 'small' | 'medium' | 'big';

export type WalletPictureTheme = 'dark' | 'light';

export interface Props {
  wallet: Wallet;
  size?: WalletPictureSize;
  theme?: WalletPictureTheme;
}

export default function WalletPicture({
  wallet,
  size = 'medium',
  theme = 'dark',
}: Props): ReactElement {
  return (
    <div className={`friday-ui-wallet-picture ${size} ${theme}`}>
      {wallet.picture ? (
        <img src={wallet.picture.thumbnail_url} alt={`${wallet.name}`} />
      ) : (
        <div className="placeholder">
          <Icon name="user" />
        </div>
      )}
    </div>
  );
}
