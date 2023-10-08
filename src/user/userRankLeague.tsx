import { ReactElement } from 'react';
import { User } from '@goatim/client';

export interface UserRankLeagueProps {
  user?: User;
}

export function UserRankLeague({ user }: UserRankLeagueProps): ReactElement {
  const rank = "rookie"
  return (
    <div className="goatim-ui-user-rank-league" data-rank={rank}>
      Rookie League
    </div>
  );
}
