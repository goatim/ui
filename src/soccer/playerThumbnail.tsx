import { ReactElement, useEffect, useState } from 'react';
import { Player } from '@fridaygame/client';
import { To } from 'react-router-dom';
import ClubIcon, { ClubIconSize } from './clubIcon';
import ClubThumbnail, { ClubThumbnailTheme } from './clubThumbnail';
import Wrapper, { WrapperProps } from '../general/wrapper';

export type PlayerThumbnailSize = 'small' | 'medium' | 'big' | 'full';

export type PlayerThumbnailTheme = 'default' | 'light';

export interface Props extends WrapperProps {
  player: Player;
  size?: PlayerThumbnailSize;
  theme?: ClubThumbnailTheme;
  clubTo?: To;
}

function getClubIconSize(size: PlayerThumbnailSize): ClubIconSize {
  switch (size) {
    case 'small':
      return 'small';
    case 'medium':
    case 'big':
      return 'medium';
    default:
      return 'small';
  }
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
  const [clubIconSize, setClubIconSize] = useState<ClubIconSize>(getClubIconSize(size));

  useEffect(() => {
    setClubIconSize(getClubIconSize(size));
  }, [size]);

  if (size === 'full') {
    return (
      <div className={`friday-ui-player-thumbnail full ${theme}`}>
        <div className="infos">
          <span className="number">{player.number}</span>
          <span className="position">{player.textual_position}</span>
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
      />
      <div className="infos">
        <span className="number">{player.number}</span>
        <span className="name">{player.name}</span>
      </div>
    </Wrapper>
  );
}