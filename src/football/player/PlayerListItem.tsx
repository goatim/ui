import { ReactElement, useMemo } from 'react';
import { Asset, formatPlayerName, Player, Portfolio } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { UrlObject } from 'url';
import { ClubIcon, ClubIconSize, ClubThumbnail, ClubThumbnailTheme } from '../../soccer/clubs';

export type PlayerListItemSize = 'small' | 'medium' | 'big' | 'full';

export type PlayerListItemTheme = 'dark' | 'light';

export interface PlayerListItemProps extends WrapperProps {
  playerCard: Portfolio;
  size?: PlayerListItemSize;
  theme?: ClubThumbnailTheme;
  clubHref?: string | UrlObject;
}

export function PlayerListItem({
  playerCard,
  size = 'small',
  theme = 'dark',
  onClick,
  href,
  target,
  clubHref,
}: PlayerListItemProps): ReactElement {
  const asset = useMemo(
    () => (typeof playerCard.asset === 'object' ? playerCard.asset : null),
    [playerCard],
  );
  const player = useMemo(() => (typeof asset?.player === 'object' ? asset.player : null), [asset]);
  const club = useMemo(() => (typeof player?.club === 'object' ? player.club : null), [player]);

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
    let nextClassName = 'goatim-ui-player-list-item';

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
        <div className="club">
          {/* {club && <ClubThumbnail club={club} theme={theme} href={clubHref} size="small" />} */}
          {club && <ClubIcon icon={club.icon} size="small" />}
        </div>

        <div className="infos">
          {/* {player.number !== undefined ? <span className="number">{player.number}</span> : null} */}
          <span>Flag</span>
          <span className="name">
            {player?.first_name || player?.last_name
              ? formatPlayerName(player?.first_name, player?.last_name, 'full')
              : null}
          </span>
        </div>

        <div>
          {player?.resolved_position ? (
            // TODO <span className="position">{formatPlayerPosition(player.resolved_position)}</span>
            <span className="position">{player.resolved_position}</span>
          ) : null}
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={className} onClick={onClick} href={href} target={target}>
      <ClubIcon icon={club?.icon} size="small" theme={theme} />
      <div className="infos">
        {player?.resolved_short_position ? (
          <span className="position">{player?.resolved_short_position}</span>
        ) : null}
        {player?.first_name || player?.last_name ? (
          <span className="name">{formatPlayerName(player?.first_name, player?.last_name)}</span>
        ) : null}
      </div>
    </Wrapper>
  );
}
