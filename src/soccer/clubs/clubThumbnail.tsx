import { ReactElement, useMemo } from 'react';
import { Club } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { UrlObject } from 'url';
import { ClubIcon } from './clubIcon';
import { LeagueThumbnail } from '../leagues';

export type ClubThumbnailSize = 'small' | 'medium' | 'big';

export type ClubThumbnailTheme = 'dark' | 'light';

export type ClubThumbnailShape = 'text' | 'logo' | 'box';

export interface ClubThumbnailProps extends WrapperProps {
  club: Club;
  size?: ClubThumbnailSize;
  theme?: ClubThumbnailTheme;
  leagueHref?: string | UrlObject;
  shape?: ClubThumbnailShape;
  title?: boolean;
  showLeague?: boolean;
  active?: boolean;
}

export function ClubThumbnail({
  club,
  size = 'small',
  theme = 'dark',
  onClick,
  href,
  target,
  leagueHref,
  shape = 'text',
  title = false,
  showLeague = false,
  active,
}: ClubThumbnailProps): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-club-thumbnail', size, theme, shape];

    if (active) {
      classNames.push('active');
    }

    return classNames.join(' ');
  }, [active, shape, size, theme]);

  return (
    <Wrapper className={className} onClick={onClick} href={href} target={target}>
      <div className="body">
        <ClubIcon icon={club.icon} size={size} />
        {title ? <h1 className="name">{club.name}</h1> : <span className="name">{club.name}</span>}
      </div>
      {showLeague && club.league && typeof club.league === 'object' ? (
        <div className="league">
          <LeagueThumbnail league={club.league} theme={theme} href={leagueHref} />
        </div>
      ) : null}
    </Wrapper>
  );
}
