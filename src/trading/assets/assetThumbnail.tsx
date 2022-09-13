import { ReactElement, useMemo } from 'react';
import { Asset } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
} from '../../soccer/players/playerThumbnail';
import PercentageVariation, { PercentageVariationSize } from '../../market/percentageVariation';
import FridayCoins, { FridayCoinsSize, FridayCoinsTheme } from '../../market/fridayCoins';
import QuotationHistoryGraph from '../quotations/quotationHistoryGraph';

export type AssetThumbnailShape = 'box' | 'text';

export type AssetThumbnailSize = 'narrow' | 'small' | 'medium' | 'big' | 'large' | 'full';

export type AssetThumbnailTheme = 'default' | 'darker' | 'lighter';

export interface Props extends WrapperProps {
  asset: Asset;
  shape?: AssetThumbnailShape;
  size?: AssetThumbnailSize;
  theme?: AssetThumbnailTheme;
  showQuotation?: boolean;
}

export default function AssetThumbnail({
  asset,
  shape = 'box',
  size = 'small',
  theme = 'default',
  showQuotation = true,
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  const playerThumbnailSize = useMemo<PlayerThumbnailSize>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
      case 'medium':
        return 'small';
      case 'big':
      case 'large':
        return 'medium';
      case 'full':
        return 'full';
      default:
        return 'small';
    }
  }, [size]);

  const playerThumbnailTheme = useMemo<PlayerThumbnailTheme>(() => {
    if (theme === 'default') {
      return 'default';
    }
    return 'light';
  }, [theme]);

  const dayVariationSize = useMemo<PercentageVariationSize>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
      case 'medium':
        return 'small';
      case 'big':
      case 'full':
        return 'medium';
      default:
        return 'small';
    }
  }, [size]);

  const quotationSize = useMemo<FridayCoinsSize>(() => {
    switch (size) {
      case 'narrow':
      case 'small':
      case 'medium':
        return 'small';
      case 'big':
      case 'full':
        return 'medium';
      default:
        return 'small';
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
      className={`friday-ui-asset-thumbnail ${shape} ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      {showQuotation &&
      size === 'large' &&
      shape === 'box' &&
      (asset.quotation_history?.data.length || 0) > 1 ? (
        <div className="quotation">
          <QuotationHistoryGraph quotationHistory={asset.quotation_history} />
        </div>
      ) : null}

      <div className="container">
        {asset.type === 'player' && asset.player && typeof asset.player === 'object' ? (
          <PlayerThumbnail
            player={asset.player}
            size={playerThumbnailSize}
            theme={playerThumbnailTheme}
          />
        ) : null}

        {showQuotation ? (
          <div className="metrics">
            <div className="day-variation">
              <PercentageVariation
                variation={asset.day_variation}
                shape="filled"
                size={dayVariationSize}
              />
            </div>
            <div className="quotation">
              <FridayCoins amount={asset.quotation} size={quotationSize} theme={quotationTheme} />
            </div>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
}
