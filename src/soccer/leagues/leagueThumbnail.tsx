import { ReactElement, useMemo } from 'react';
import { League } from '@goatim/client';
import { Wrapper, WrapperProps } from '@cezembre/fronts';
import { LeagueIcon } from './leagueIcon';

export type LeagueThumbnailSize = 'small' | 'medium' | 'big';

export type LeagueThumbnailShape = 'line' | 'logo';

export type LeagueThumbnailTheme = 'dark' | 'light';

export interface LeagueThumbnailProps extends WrapperProps {
  league: League;
  title?: boolean;
  size?: LeagueThumbnailSize;
  shape?: LeagueThumbnailShape;
  theme?: LeagueThumbnailTheme;
  active?: boolean;
}

export function LeagueThumbnail({
  league,
  title = false,
  size = 'small',
  shape = 'line',
  theme = 'dark',
  onClick,
  href,
  target,
  active,
}: LeagueThumbnailProps): ReactElement {
  const className = useMemo<string>(() => {
    const classNames = ['goatim-ui-league-thumbnail', size, shape, theme];

    if (active) {
      classNames.push('active');
    }

    return classNames.join(' ');
  }, [size, theme, shape, active]);

  return (
    <Wrapper className={className} onClick={onClick} href={href} target={target}>
      <LeagueIcon icon={league.icon} size={size} />
      {title ? (
        <h1 className="name">{league.name}</h1>
      ) : (
        <span className="name">{league.name}</span>
      )}
    </Wrapper>
  );
}
