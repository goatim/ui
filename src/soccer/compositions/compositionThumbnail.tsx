import { ReactElement } from 'react';
import { Composition } from '@fridaygame/client';
import { WrapperProps } from '@cezembre/fronts';
import WalletThumbnail, {
  WalletThumbnailInfos,
  WalletThumbnailSize,
  WalletThumbnailTheme,
} from '../../market/wallets/walletThumbnail';

export interface Props extends WrapperProps {
  composition: Composition;
  size?: WalletThumbnailSize;
  infos?: WalletThumbnailInfos;
  theme?: WalletThumbnailTheme;
}

export default function CompositionThumbnail({
  composition,
  size = 'small',
  infos = 'picture-and-name',
  theme = 'default',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement | null {
  if (!composition.wallet || typeof composition.wallet !== 'object') {
    return null;
  }
  return (
    <WalletThumbnail
      wallet={composition.wallet}
      size={size}
      infos={infos}
      theme={theme}
      to={to}
      onClick={onClick}
      href={href}
      target={target}
      position={composition.rank}
      variation={composition.score}
    />
  );
}
