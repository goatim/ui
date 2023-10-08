import { ReactElement, useMemo } from 'react';
import { formatPlayerName, Player } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { UrlObject } from 'url';
import { ClubIcon, ClubIconSize, ClubThumbnail, ClubThumbnailTheme } from '../clubs';

export type SoccerPlayerThumbnailSize = 'small' | 'medium' | 'big' | 'full';

export type SoccerPlayerThumbnailTheme = 'dark' | 'light';

export interface PlayerThumbnailProps extends WrapperProps {
  player: Player;
  size?: SoccerPlayerThumbnailSize;
  theme?: ClubThumbnailTheme;
  clubHref?: string | UrlObject;
}

export function SoccerPlayerThumbnail({
  player,
  size = 'small',
  theme = 'dark',
  onClick,
  href,
  target,
  clubHref,
}: PlayerThumbnailProps): ReactElement {
  const club = useMemo(
    () => (player.club && typeof player.club === 'object' ? player.club : null),
    [player],
  );

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
    let nextClassName = 'goatim-ui-player-thumbnail';

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
      <Wrapper className={className} onClick={onClick} href={href} target={target}>
        <div className="infos">
          {player.number !== undefined ? <span className="number">{player.number}</span> : null}
          {player.resolved_position ? (
            <span className="position">{player.resolved_position}</span>
          ) : null}
        </div>
        {player.first_name || player.last_name ? (
          <h1 className="name">{formatPlayerName(player.first_name, player.last_name, 'full')}</h1>
        ) : null}
        {club !== null ? (
          <div className="club">
            <ClubThumbnail club={club} theme={theme} href={clubHref} size="small" />
          </div>
        ) : null}
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className} onClick={onClick} href={href} target={target}>
      <ClubIcon icon={club?.icon} size={clubIconSize} theme={theme} />
      <div className="infos">
        {club !== null && <span className="club-name">{club.name}</span>}
        {player.first_name || player.last_name ? (
          <span className="name">{formatPlayerName(player.first_name, player.last_name)}</span>
        ) : null}
      </div>
    </Wrapper>
  );
}
