import { ReactElement } from 'react';
import { Composition } from '@goatim/client';
import { WrapperProps } from '@cezembre/fronts';
import { WalletRank, WalletThumbnailSize, WalletThumbnailTheme } from '../../market';

export interface CompositionThumbnailProps extends WrapperProps {
  composition: Composition;
  size?: WalletThumbnailSize;
  theme?: WalletThumbnailTheme;
  showGains?: boolean;
  showScore?: boolean;
}

export function CompositionThumbnail({
  composition,
  size = 'small',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
  showGains,
  showScore,
}: CompositionThumbnailProps): ReactElement | null {
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
      gains={showGains ? composition.gains : undefined}
      score={showScore ? composition.score : undefined}
    />
  );
}
