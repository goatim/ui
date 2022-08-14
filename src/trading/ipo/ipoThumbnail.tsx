import { ReactElement, useMemo } from 'react';
import { Asset } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { DateTime } from 'luxon';
import PlayerThumbnail, {
  PlayerThumbnailSize,
  PlayerThumbnailTheme,
} from '../../soccer/players/playerThumbnail';
import FridayCoins, { FridayCoinsSize, FridayCoinsTheme } from '../../market/fridayCoins';
import Countdown from '../../general/countdown';

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
  const playerThumbnailSize = useMemo<PlayerThumbnailSize>(() => {
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

  const playerThumbnailTheme = useMemo<PlayerThumbnailTheme>(() => {
    if (theme === 'default') {
      return 'default';
    }
    return 'light';
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
          {asset.type === 'player' && asset.player && typeof asset.player === 'object' ? (
            <PlayerThumbnail
              player={asset.player}
              format="extended"
              size={playerThumbnailSize}
              theme={playerThumbnailTheme}
            />
          ) : null}
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
