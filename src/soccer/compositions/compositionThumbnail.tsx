import { ReactElement } from 'react';
import { Composition } from '@fridaygame/client';
import { WrapperProps } from '@cezembre/fronts';
import { WalletRank, WalletThumbnailSize, WalletThumbnailTheme } from '../../market';

export interface CompositionThumbnailProps extends WrapperProps {
  composition: Composition;
  size?: WalletThumbnailSize;
  theme?: WalletThumbnailTheme;
  showScore?: boolean;
  showDividendsGains?: boolean;
}

export function CompositionThumbnail({
  composition,
  size = 'small',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
  showScore,
  showDividendsGains,
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
      score={showScore ? composition.score : undefined}
      variation={showDividendsGains ? composition.dividends_gains : undefined}
    />
  );
}
