import { ReactElement, useMemo } from 'react';
import { formatPlayerName, Player } from '@fridaygame/client';
import { To } from 'react-router-dom';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { ClubIcon, ClubIconSize, ClubThumbnail, ClubThumbnailTheme } from '../clubs';

export type PlayerThumbnailSize = 'small' | 'medium' | 'big' | 'full';

export type PlayerThumbnailTheme = 'dark' | 'light';

export interface PlayerThumbnailProps extends WrapperProps {
  player: Player;
  size?: PlayerThumbnailSize;
  theme?: ClubThumbnailTheme;
  clubTo?: To;
}

export function PlayerThumbnail({
  player,
  size = 'small',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
  clubTo,
}: PlayerThumbnailProps): ReactElement {
  const clubIconSize = useMemo<ClubIconSize>(() => {
    switch (size) {
      case 'medium':
      case 'big':
        return 'medium';
      default:
        return 'small';
    }
  }, [size]);

  const className = useMemo<string>(() => {
    let nextClassName = 'friday-ui-player-thumbnail';

    if (size) {
      nextClassName += ` ${size}`;
    }

    if (theme) {
      nextClassName += ` ${theme}`;
    }

    return nextClassName;
  }, [size, theme]);

  if (size === 'full') {
    return (
      <Wrapper className={className} to={to} onClick={onClick} href={href} target={target}>
        <div className="infos">
          {player.number !== undefined ? <span className="number">{player.number}</span> : null}
          {player.resolved_position ? (
            <span className="position">{player.resolved_position}</span>
          ) : null}
        </div>
        {player.first_name || player.last_name ? (
          <h1 className="name">{formatPlayerName(player.first_name, player.last_name, 'full')}</h1>
        ) : null}
        {player.club && typeof player.club === 'object' ? (
          <div className="club">
            <ClubThumbnail club={player.club} theme={theme} to={clubTo} size="small" />
          </div>
        ) : null}
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className} to={to} onClick={onClick} href={href} target={target}>
      <ClubIcon
        icon={player.club && typeof player.club === 'object' ? player.club.icon : undefined}
        size={clubIconSize}
        theme={theme}
      />
      <div className="infos">
        {player.resolved_short_position ? (
          <span className="position">{player.resolved_short_position}</span>
        ) : null}
        {player.first_name || player.last_name ? (
          <span className="name">{formatPlayerName(player.first_name, player.last_name)}</span>
        ) : null}
      </div>
    </Wrapper>
  );
}
