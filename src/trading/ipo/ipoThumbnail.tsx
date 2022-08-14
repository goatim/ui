import { ReactElement, useMemo } from 'react';
import { Asset } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { DateTime } from 'luxon';
import FridayCoins, { FridayCoinsSize, FridayCoinsTheme } from '../../market/fridayCoins';
import Countdown from '../../general/countdown';
import AssetThumbnail, { AssetThumbnailTheme } from '../assets/assetThumbnail';

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
  const assetThumbnailTheme = useMemo<AssetThumbnailTheme>(() => {
    if (theme === 'default') {
      return 'default';
    }
    return 'lighter';
  }, [theme]);

  const quotationSize = useMemo<FridayCoinsSize>(() => {
    switch (size) {
      case 'small':
      case 'medium':
        return 'medium';
      case 'narrow':
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
          <AssetThumbnail asset={asset} shape="text" size="full" theme={assetThumbnailTheme} />
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
