import { ReactElement, useMemo } from 'react';
import { Club } from '@goatim/client';
import { To } from 'react-router-dom';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { ClubIcon } from './clubIcon';
import { LeagueThumbnail } from '../leagues';

export type ClubThumbnailSize = 'small' | 'medium' | 'big';

export type ClubThumbnailTheme = 'dark' | 'light';

export type ClubThumbnailShape = 'text' | 'logo' | 'box';

export interface ClubThumbnailProps extends WrapperProps {
  club: Club;
  size?: ClubThumbnailSize;
  theme?: ClubThumbnailTheme;
  leagueTo?: To;
  shape?: ClubThumbnailShape;
  title?: boolean;
  showLeague?: boolean;
}

export function ClubThumbnail({
  club,
  size = 'medium',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
  leagueTo,
  shape = 'text',
  title = false,
  showLeague = false,
}: ClubThumbnailProps): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-club-thumbnail', size, theme, shape];

    return classNames.join(' ');
  }, [shape, size, theme]);

  return (
    <Wrapper className={className} to={to} onClick={onClick} href={href} target={target}>
      <div className="body">
        <ClubIcon icon={club.icon} size={size} />
        {title ? <h1 className="name">{club.name}</h1> : <span className="name">{club.name}</span>}
      </div>
      {showLeague && club.league && typeof club.league === 'object' ? (
        <div className="league">
          <LeagueThumbnail league={club.league} theme={theme} to={leagueTo} />
        </div>
      ) : null}
    </Wrapper>
  );
}
