import { MouseEvent, ReactElement } from 'react';
import { Club, League } from '@goatim/client';
import { UrlObject } from 'url';
import { LeagueOverview } from './leagueOverview';
import { Icon } from '../../general';

export type LeagueCarouselSize = 'small' | 'medium' | 'big';

export interface LeagueCarouselProps {
  leagues?: League[];
  size?: LeagueCarouselSize;
  leagueHref?: (league: League) => string | UrlObject;
  leagueOnClick?: (league: League, event: MouseEvent<HTMLButtonElement>) => unknown;
  clubHref?: (club: Club) => string | UrlObject;
  clubOnClick?: (club: Club, event: MouseEvent<HTMLButtonElement>) => unknown;
  getLeagueClubs?: (leagueId: string, page: number) => Promise<Club[]> | Club[];
}

export function LeagueCarousel({
  leagues,
  size = 'medium',
  leagueHref,
  leagueOnClick,
  clubHref,
  clubOnClick,
  getLeagueClubs,
}: LeagueCarouselProps): ReactElement {
  return (
    <div className={`goatim-ui-league-carousel ${size}`}>
      <div className="background">
        <Icon name="soccer-ball" />
      </div>
      <div className="leagues">
        {leagues?.slice(0, 1).map((league) => (
          <div className="league" key={league.id}>
            <LeagueOverview
              league={league}
              leagueHref={leagueHref ? leagueHref(league) : undefined}
              leagueOnClick={leagueOnClick ? (event) => leagueOnClick(league, event) : undefined}
              clubHref={clubHref}
              clubOnClick={clubOnClick}
              size={size}
              getClubs={
                getLeagueClubs ? (page: number) => getLeagueClubs(league.id, page) : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
