import { ReactElement } from 'react';
import { Wallet } from '@fridaygame/client';
import Wrapper, { WrapperProps } from '../general/wrapper';

export type WalletThumbnailSize = 'small' | 'medium' | 'big';

export type WalletThumbnailInfos = 'picture' | 'picture-and-name';

export interface Props extends WrapperProps {
  wallet: Wallet;
  size?: WalletThumbnailSize;
  infos?: WalletThumbnailInfos;
}

export default function WalletThumbnail({
  wallet,
  size = 'small',
  infos = 'picture',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-wallet-thumbnail ${size} ${infos}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      {wallet.picture ? (
        <img src={wallet.picture.thumbnail_url} alt={`${wallet.name}`} />
      ) : (
        <div className="placeholder" />
      )}
      {infos === 'picture-and-name' ? (
        <span className="name">{wallet.name || wallet.id}</span>
      ) : null}
    </Wrapper>
  );
}
