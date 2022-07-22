import { ReactElement, useMemo } from 'react';
import { Asset } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
} from '../../soccer/players/playerThumbnail';
import PercentageVariation, { PercentageVariationSize } from '../../market/percentageVariation';
import FridayCoins, { FridayCoinsSize, FridayCoinsTheme } from '../../market/fridayCoins';
import QuotationGraph from '../quotations/quotationGraph';

export type AssetThumbnailSize = 'inline' | 'narrow' | 'small' | 'big' | 'full';

export type AssetThumbnailTheme = 'default' | 'darker' | 'lighter';

export interface Props extends WrapperProps {
  asset: Asset;
  size?: AssetThumbnailSize;
  theme?: AssetThumbnailTheme;
}

export default function AssetThumbnail({
  asset,
  size = 'small',
  theme = 'default',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  const playerThumbnailSize = useMemo<PlayerThumbnailSize>(() => {
    switch (size) {
      case 'inline':
      case 'small':
        return 'small';
      case 'big':
      case 'full':
        return 'medium';
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

  const SessionVariationSize = useMemo<PercentageVariationSize>(() => {
    switch (size) {
      case 'narrow':
      case 'inline':
      case 'small':
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
      className={`friday-ui-asset-thumbnail ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      {size === 'full' ? (
        <div className="quotation">
          <QuotationGraph
            quotations={[
              { t: 1, v: 3 },
              { t: 2, v: 2 },
              { t: 5, v: 5 },
              { t: 6, v: 4 },
            ]}
          />
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
        {size !== 'inline' ? (
          <div className="metrics">
            <div className="session-variation">
              <PercentageVariation
                variation={asset.session_variation}
                shape="filled"
                size={SessionVariationSize}
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
