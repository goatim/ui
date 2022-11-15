import { ReactElement } from 'react';
import { Match } from '@fridaygame/client';
import DateTimeThumbnail from '../../general/dateTimeThumbnail';

export interface Props {
  match: Match;
}

export default function MatchLive({ match }: Props): ReactElement {
  return (
    <div className="friday-ui-match-live">
      {match.status === 'planned' ? (
        <DateTimeThumbnail
          label="Coup d'envoi"
          dateTime={match.beginning}
          countdown
          align="center"
          theme="light"
        />
      ) : null}

      {match.status === 'ongoing' ? (
        <DateTimeThumbnail
          label="Coup de sifflet final"
          dateTime={match.end}
          countdown
          align="center"
          theme="light"
        />
      ) : null}

      {match.status === 'passed' ? <span className="label">Match terminé !</span> : null}
      {match.status === 'cancelled' ? <span className="label">Match annulé !</span> : null}
    </div>
  );
}
