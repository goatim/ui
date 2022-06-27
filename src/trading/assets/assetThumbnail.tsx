import { ReactElement, useEffect, useState } from 'react';
import { Asset } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
} from '../../soccer/players/playerThumbnail';
import PercentageVariation, { PercentageVariationSize } from '../../market/percentageVariation';
import FridayCoins, { FridayCoinsSize, FridayCoinsTheme } from '../../market/fridayCoins';
import QuotationGraph from '../quotations/quotationGraph';

export type AssetThumbnailSize = 'inline' | 'small' | 'medium' | 'big';

export type AssetThumbnailTheme = 'default' | 'darker' | 'lighter';

export interface Props extends WrapperProps {
  asset: Asset;
  size?: AssetThumbnailSize;
  theme?: AssetThumbnailTheme;
}

function getPlayerThumbnailSize(size: AssetThumbnailSize): PlayerThumbnailSize {
  switch (size) {
    case 'inline':
    case 'small':
      return 'small';
    case 'medium':
      return 'medium';
    case 'big':
      return 'big';
    default:
      return 'small';
  }
}

function getSessionVariationSize(size: AssetThumbnailSize): PercentageVariationSize {
  switch (size) {
    case 'inline':
    case 'small':
      return 'small';
    case 'medium':
      return 'medium';
    case 'big':
      return 'big';
    default:
      return 'small';
  }
}

function getQuotationSize(size: AssetThumbnailSize): FridayCoinsSize {
  switch (size) {
    case 'inline':
    case 'small':
      return 'small';
    case 'medium':
      return 'medium';
    case 'big':
      return 'big';
    default:
      return 'small';
  }
}

function getPlayerThumbnailTheme(theme: AssetThumbnailTheme): PlayerThumbnailTheme {
  if (theme === 'default') {
    return 'default';
  }
  return 'light';
}

function getQuotationTheme(theme: AssetThumbnailTheme): FridayCoinsTheme {
  if (theme === 'default') {
    return 'default';
  }
  return 'light';
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
  const [playerThumbnailSize, setPlayerThumbnailSize] = useState<PlayerThumbnailSize>(
    getPlayerThumbnailSize(size),
  );
  const [playerThumbnailTheme, setPlayerThumbnailTheme] = useState<PlayerThumbnailTheme>(
    getPlayerThumbnailTheme(theme),
  );
  const [SessionVariationSize, setSessionVariationSize] = useState<PercentageVariationSize>(
    getSessionVariationSize(size),
  );
  const [quotationSize, setQuotationSize] = useState<FridayCoinsSize>(getQuotationSize(size));
  const [quotationTheme, setQuotationTheme] = useState<FridayCoinsTheme>(getQuotationTheme(theme));

  useEffect(() => {
    setPlayerThumbnailSize(getPlayerThumbnailSize(size));
    setSessionVariationSize(getSessionVariationSize(size));
    setQuotationSize(getQuotationSize(size));
  }, [size]);

  useEffect(() => {
    setPlayerThumbnailTheme(getPlayerThumbnailTheme(theme));
    setQuotationTheme(getQuotationTheme(theme));
  }, [theme]);

  return (
    <Wrapper
      className={`friday-ui-asset-thumbnail ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      {size === 'big' ? (
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
