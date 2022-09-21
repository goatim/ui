import { ReactElement } from 'react';
import { Club } from '@fridaygame/client';
import { To } from 'react-router-dom';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import ClubIcon from './clubIcon';
import LeagueThumbnail from '../leagues/leagueThumbnail';

export type ClubThumbnailSize = 'small' | 'medium' | 'big';

export type ClubThumbnailTheme = 'dark' | 'light';

export type ClubThumbnailDisposition = 'inline' | 'logo';

export interface Props extends WrapperProps {
  club: Club;
  size?: ClubThumbnailSize;
  theme?: ClubThumbnailTheme;
  leagueTo?: To;
  disposition?: ClubThumbnailDisposition;
  title?: boolean;
  showLeague?: boolean;
}

export default function ClubThumbnail({
  club,
  size = 'medium',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
  leagueTo,
  disposition = 'inline',
  title = false,
  showLeague = false,
}: Props): ReactElement {
  return (
    <Wrapper
      className={`friday-ui-club-thumbnail ${size} ${theme} ${disposition}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
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
