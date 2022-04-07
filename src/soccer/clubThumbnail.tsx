import { ReactElement, useEffect, useState } from 'react';
import { Club, League } from '@fridaygame/client';
import { NavLink, To } from 'react-router-dom';
import ClubIcon, { ClubIconSize } from './clubIcon';
import LeagueThumbnail from './leagueThumbnail';
import Wrapper, { WrapperProps } from '../general/wrapper';

export type ClubThumbnailSize = 'small' | 'medium' | 'big' | 'full';

export type ClubThumbnailTheme = 'default' | 'light';

export interface Props extends WrapperProps {
  club: Club;
  size?: ClubThumbnailSize;
  theme?: ClubThumbnailTheme;
  leagueTo?: To;
}

function getIconSize(size: ClubThumbnailSize): ClubIconSize {
  switch (size) {
    case 'small':
      return 'small';
    case 'medium':
    case 'big':
      return 'medium';
    case 'full':
      return 'large';
    default:
      return 'small';
  }
}

export default function ClubThumbnail({
  club,
  size = 'small',
  theme = 'default',
  to,
  onClick,
  href,
  target,
  leagueTo,
}: Props): ReactElement {
  const [iconSize, setIconSize] = useState<ClubIconSize>(getIconSize(size));

  useEffect(() => {
    setIconSize(getIconSize(size));
  }, [size]);

  return (
    <Wrapper
      className={`friday-ui-club-thumbnail ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <ClubIcon icon={club.icon} size={iconSize} />
      {size === 'full' ? (
        <div className="full-infos">
          <h1>{club.name}</h1>
          {club.league && typeof club.league === 'object' ? (
            <div className="league">
              <LeagueThumbnail league={club.league} theme={theme} to={leagueTo} />
            </div>
          ) : null}
        </div>
      ) : (
        <span>{club.name}</span>
      )}
    </Wrapper>
  );
}
