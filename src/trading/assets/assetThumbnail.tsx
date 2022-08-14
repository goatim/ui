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

export type AssetThumbnailPlayerFormat = 'extended' | 'inline';

export type AssetThumbnailShape = 'box' | 'text';

export type AssetThumbnailSize = 'inline' | 'narrow' | 'small' | 'medium' | 'big' | 'full';

export type AssetThumbnailTheme = 'default' | 'darker' | 'lighter';

export interface Props extends WrapperProps {
  asset: Asset;
  playerFormat?: AssetThumbnailPlayerFormat;
  shape?: AssetThumbnailShape;
  size?: AssetThumbnailSize;
  theme?: AssetThumbnailTheme;
}

export default function AssetThumbnail({
  asset,
  playerFormat = 'inline',
  shape = 'box',
  size = 'small',
  theme = 'default',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  const playerThumbnailSize = useMemo<PlayerThumbnailSize>(() => {
    if (playerFormat === 'inline') {
      switch (size) {
        case 'inline':
        case 'small':
        case 'medium':
          return 'small';
        case 'big':
        case 'full':
          return 'medium';
        default:
          return 'small';
      }
    } else {
      switch (size) {
        case 'inline':
        case 'small':
          return 'small';
        case 'medium':
          return 'medium';
        case 'big':
        case 'full':
          return 'big';
        default:
          return 'small';
      }
    }
  }, [size, playerFormat]);

  const playerThumbnailTheme = useMemo<PlayerThumbnailTheme>(() => {
    if (theme === 'default') {
      return 'default';
    }
    return 'light';
  }, [theme]);

  const sessionVariationSize = useMemo<PercentageVariationSize>(() => {
    switch (size) {
      case 'narrow':
      case 'inline':
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
      case 'inline':
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
      {shape === 'box' && size === 'full' && (asset.quotation_history?.data.length || 0) > 1 ? (
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
            format={playerFormat}
          />
        ) : null}
        {shape === 'box' && size !== 'inline' ? (
          <div className="metrics">
            <div className="session-variation">
              <PercentageVariation
                variation={asset.session_variation}
                shape="filled"
                size={sessionVariationSize}
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
