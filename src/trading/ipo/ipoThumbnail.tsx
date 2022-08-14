import { ReactElement, useMemo } from 'react';
import { Asset } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { DateTime } from 'luxon';
import FridayCoins, { FridayCoinsSize, FridayCoinsTheme } from '../../market/fridayCoins';
import Countdown from '../../general/countdown';
import AssetThumbnail, { AssetThumbnailSize, AssetThumbnailTheme } from '../assets/assetThumbnail';

export type IPOThumbnailSize =
  | 'inline'
  | 'narrow'
  | 'small'
  | 'medium'
  | 'big'
  | 'full'
  | 'stretch';

export type IPOThumbnailTheme = 'default' | 'dark' | 'light';

export interface Props extends WrapperProps {
  asset: Asset;
  beginning: DateTime | string;
  displayContent?: boolean;
  size?: IPOThumbnailSize;
  theme?: IPOThumbnailTheme;
}

export default function IPOThumbnail({
  asset,
  beginning,
  size = 'small',
  theme = 'default',
  displayContent = true,
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  const assetThumbnailSize = useMemo<AssetThumbnailSize>(() => {
    switch (size) {
      case 'inline':
      case 'small':
        return 'small';
      case 'medium':
      case 'big':
      case 'full':
        return 'medium';
      default:
        return 'small';
    }
  }, [size]);

  const assetThumbnailTheme = useMemo<AssetThumbnailTheme>(() => {
    if (theme === 'default') {
      return 'default';
    }
    return 'lighter';
  }, [theme]);

  const quotationSize = useMemo<FridayCoinsSize>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
      case 'medium':
        return 'medium';
      case 'big':
      case 'full':
        return 'large';
      default:
        return 'medium';
    }
  }, [size]);

  const quotationTheme = useMemo<FridayCoinsTheme>(() => {
    if (theme === 'default') {
      return 'default';
    }
    return 'light';
  }, [theme]);

  return (
    <Wrapper
      className={`friday-ui-ipo-thumbnail ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <div className="header">
        <span className="headerTitle">Nouvelle entrée en bourse !</span>
      </div>
      {displayContent ? (
        <div className="content">
          <AssetThumbnail
            asset={asset}
            shape="text"
            size={assetThumbnailSize}
            theme={assetThumbnailTheme}
            playerFormat="extended"
          />
          <div className="quotation">
            <FridayCoins amount={asset.quotation} size={quotationSize} theme={quotationTheme} />
          </div>
        </div>
      ) : null}
      <div className="countdown">
        <Countdown theme={theme} label="Ouverture" date={beginning} />
      </div>
    </Wrapper>
  );
}
