import { MouseEvent, ReactElement, useMemo } from 'react';
import { Club, League } from '@fridaygame/client';
import { To } from 'react-router';
import { LeagueThumbnail } from './leagueThumbnail';
import { ClubCarousel } from '../clubs';

export type LeagueOverviewSize = 'small' | 'medium' | 'big';

export interface LeagueOverviewProps {
  league: League;
  size?: LeagueOverviewSize;
  leagueTo?: To;
  leagueOnClick?: (event: MouseEvent<HTMLButtonElement>) => unknown;
  getClubs?: (page: number) => Promise<Club[]> | Club[];
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => unknown;
  clubTo?: (club: Club) => To;
}

export function LeagueOverview({
  league,
  size = 'medium',
  leagueTo,
  leagueOnClick,
  getClubs,
  clubOnClick,
  clubTo,
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
    <div className={`friday-ui-league-overview ${size}`}>
      <LeagueThumbnail league={league} size="medium" to={leagueTo} onClick={leagueOnClick} />
      <div className="clubs">
        <ClubCarousel
          getClubs={getClubs}
          shape="box"
          columns={clubColumns}
          clubTo={clubTo}
          clubOnClick={clubOnClick}
        />
      </div>
    </div>
  );
}
