import { ReactElement } from 'react';
import { Match } from '@fridaygame/client';
import DateTimeThumbnail from '../../general/dateTimeThumbnail';

export interface Props {
  match: Match;
}

export default function MatchLive({ match }: Props): ReactElement {
  switch (match.status) {
    case 'open':
      return (
        <div className="friday-ui-match-live">
          <DateTimeThumbnail
            label="Coup d'envoi"
            dateTime={match.beginning}
            countdown
            align="center"
            theme="light"
          />
        </div>
      );
    case 'ongoing':
      return (
        <div className="friday-ui-match-live">
          <DateTimeThumbnail
            label="Coup de sifflet final"
            dateTime={match.end}
            countdown
            align="center"
            theme="light"
          />
        </div>
      );
    case 'passed':
    case 'closing':
    case 'closed':
      return (
        <div className="friday-ui-match-live">
          <span className="label">Match terminé !</span>
        </div>
      );
    case 'cancelled':
      return (
        <div className="friday-ui-match-live">
          <span className="label">Match annulé !</span>
        </div>
      );
    default:
      return (
        <div className="friday-ui-match-live">
          <span className="label">Match en préparation ...</span>
        </div>
      );
  }
}
