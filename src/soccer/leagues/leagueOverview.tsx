import { MouseEvent, ReactElement, useMemo } from 'react';
import { Club, League } from '@goatim/client';
import { UrlObject } from 'url';
import { LeagueThumbnail } from './leagueThumbnail';
import { ClubCarousel } from '../clubs';

export type LeagueOverviewSize = 'small' | 'medium' | 'big';

export interface LeagueOverviewProps {
  league: League;
  size?: LeagueOverviewSize;
  leagueHref?: string | UrlObject;
  leagueOnClick?: (event: MouseEvent<HTMLButtonElement>) => unknown;
  getClubs?: (page: number) => Promise<Club[]> | Club[];
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => unknown;
  clubHref?: (club: Club) => string | UrlObject;
}

export function LeagueOverview({
  league,
  size = 'medium',
  leagueHref,
  leagueOnClick,
  getClubs,
  clubOnClick,
  clubHref,
}: LeagueOverviewProps): ReactElement {
  const clubColumns = useMemo<number>(() => {
    switch (size) {
      case 'small':
        return 2;
      default:
        return 3;
    }
  }, [size]);

  return (
    <div className={`goatim-ui-league-overview ${size}`}>
      <LeagueThumbnail league={league} size="medium" href={leagueHref} onClick={leagueOnClick} />
      <div className="clubs">
        <ClubCarousel
          getClubs={getClubs}
          columns={clubColumns}
          clubHref={clubHref}
          clubOnClick={clubOnClick}
        />
      </div>
    </div>
  );
}
