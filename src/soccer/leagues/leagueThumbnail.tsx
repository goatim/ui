import { ReactElement, useEffect, useState } from 'react';
import { League } from '@fridaygame/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import LeagueIcon, { LeagueIconSize } from './leagueIcon';

export type LeagueThumbnailSize = 'small' | 'medium' | 'big' | 'full';

export type LeagueThumbnailTheme = 'dark' | 'light';

export interface Props extends WrapperProps {
  league: League;
  size?: LeagueThumbnailSize;
  theme?: LeagueThumbnailTheme;
}

function getIconSize(size: LeagueThumbnailSize): LeagueIconSize {
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

export default function LeagueThumbnail({
  league,
  size = 'small',
  theme = 'dark',
  to,
  onClick,
  href,
  target,
}: Props): ReactElement {
  const [iconSize, setIconSize] = useState<LeagueIconSize>(getIconSize(size));

  useEffect(() => {
    setIconSize(getIconSize(size));
  }, [size]);

  return (
    <Wrapper
      className={`friday-ui-league-thumbnail ${size} ${theme}`}
      to={to}
      onClick={onClick}
      href={href}
      target={target}>
      <LeagueIcon icon={league.icon} size={iconSize} />
      {size === 'full' ? <h1>{league.name}</h1> : <span>{league.name}</span>}
    </Wrapper>
  );
}
