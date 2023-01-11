import { ReactElement, useMemo } from 'react';
import { MatchStatus } from '@fridaygame/client';

export interface Props {
  status?: MatchStatus;
}

export default function MatchStatusThumbnail({ status }: Props): ReactElement {
  const textualStatus = useMemo<string>(() => {
    switch (status) {
      case 'open':
        return 'Fais ta composition !';
      case 'ongoing':
        return 'Match en cours ...';
      case 'passed':
        return 'Coup de sifflet final !';
      case 'closing':
        return 'Calcul des gains en cours ...';
      case 'closed':
        return 'Match terminé';
      case 'cancelled':
        return 'Match annulé';
      default:
        return 'Match en préparation ...';
    }
  }, [status]);

  return (
    <div className={`friday-ui-match-status-thumbnail ${status}`}>
      <div className="indicator" />
      <span>{textualStatus}</span>
    </div>
  );
}
