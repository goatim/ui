import { ReactElement, useMemo } from 'react';
import { Player } from '@fridaygame/client';
import { To } from 'react-router-dom';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import ClubIcon, { ClubIconSize } from '../clubs/clubIcon';
import ClubThumbnail, { ClubThumbnailTheme } from '../clubs/clubThumbnail';

export type PlayerThumbnailSize = 'small' | 'medium' | 'big' | 'full';

export type PlayerThumbnailTheme = 'default' | 'light';

export interface Props extends WrapperProps {
  player: Player;
  size?: PlayerThumbnailSize;
  theme?: ClubThumbnailTheme;
  clubTo?: To;
}

export default function PlayerThumbnail({
  player,
  size = 'small',
  theme = 'default',
  to,
  onClick,
  href,
  target,
  clubTo,
}: Props): ReactElement {
  const clubIconSize = useMemo<ClubIconSize>(() => {
    switch (size) {
      case 'medium':
      case 'big':
        return 'medium';
      default:
        return 'small';
    }
  }, [size]);

  if (size === 'full') {
    return (
      <div className={`friday-ui-player-thumbnail full ${theme}`}>
        <div className="infos">
          <span className="number">{player.number}</span>
          <span className="position">{player.resolved_position}</span>
        </div>
        <h1 className="name">{player.name}</h1>
        {player.club && typeof player.club === 'object' ? (
          <div className="club">
            <ClubThumbnail club={player.club} theme={theme} to={clubTo} />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <Wrapper
      className={`friday-ui-player-thumbnail ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <ClubIcon
        icon={player.club && typeof player.club === 'object' ? player.club.icon : undefined}
        size={clubIconSize}
        theme={theme}
      />
      <div className="infos">
        <span className="number">{player.number}</span>
        <span className="name">{player.name}</span>
      </div>
    </Wrapper>
  );
}
