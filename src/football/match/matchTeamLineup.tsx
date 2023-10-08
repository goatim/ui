import { ReactElement } from 'react';
import { Match } from '@goatim/client';

export type MatchTeamLineupTheme = 'dark' | 'light';

export interface MatchTeamLineupProps {
  match: Match;
  onUserInteraction: (action: string) => void;
  theme?: MatchTeamLineupTheme;
}

export function MatchTeamLineup({ match, onUserInteraction, theme = 'dark' }: MatchTeamLineupProps): ReactElement {
  return (
    <div className={`goatim-ui-match-team-lineup ${theme}`}>
    </div>
  );
}
