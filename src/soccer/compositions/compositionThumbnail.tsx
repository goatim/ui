import { ReactElement } from 'react';
import { Composition } from '@fridaygame/client';
import { WrapperProps } from '@cezembre/fronts';
import WalletRank from '../../market/wallets/walletRank';
import { WalletThumbnailSize, WalletThumbnailTheme } from '../../market/wallets/walletThumbnail';

export interface Props extends WrapperProps {
  composition: Composition;
  size?: WalletThumbnailSize;
  theme?: WalletThumbnailTheme;
}

export default function CompositionThumbnail({
  composition,
  size = 'small',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement | null {
  if (!composition.wallet || typeof composition.wallet !== 'object') {
    return null;
  }
  return (
    <WalletRank
      wallet={composition.wallet}
      size={size}
      theme={theme}
      to={to}
      onClick={onClick}
      href={href}
      target={target}
      position={composition.position}
      score={composition.score}
      variation={composition.dividends_gains}
    />
  );
}
