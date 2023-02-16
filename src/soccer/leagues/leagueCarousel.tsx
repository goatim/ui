import { MouseEvent, ReactElement } from 'react';
import { Club, League } from '@fridaygame/client';
import { To } from 'react-router';
import LeagueOverview from './leagueOverview';
import Icon from '../../general/icon';

export type LeagueCarouselSize = 'small' | 'medium' | 'big';

export interface Props {
  leagues?: League[];
  size?: LeagueCarouselSize;
  leagueTo?: (league: League) => To;
  leagueOnClick?: (league: League, event: MouseEvent<HTMLButtonElement>) => unknown;
  clubTo?: (club: Club) => To;
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => unknown;
  initialClubs?: Club[];
  getClubs?: (page: number) => Promise<Club[]> | Club[];
}

export default function LeagueCarousel({
  leagues,
  size = 'medium',
  leagueTo,
  leagueOnClick,
  clubTo,
  clubOnClick,
  initialClubs,
  getClubs,
}: Props): ReactElement {
  return (
    <div className={`friday-ui-league-carousel ${size}`}>
      <div className="background">
        <Icon name="soccer-ball" />
      </div>
      <div className="leagues">
        {leagues?.slice(0, 1).map((league) => (
          <div className="league" key={league.id}>
            <LeagueOverview
              league={league}
              leagueTo={leagueTo ? leagueTo(league) : undefined}
              leagueOnClick={leagueOnClick ? (event) => leagueOnClick(league, event) : undefined}
              clubTo={clubTo}
              clubOnClick={clubOnClick}
              size={size}
              initialClubs={initialClubs}
              getClubs={getClubs}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
