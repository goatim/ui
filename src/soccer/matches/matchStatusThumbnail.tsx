import { ReactElement, useMemo } from 'react';
import { MatchStatus } from '@fridaygame/client';

export interface Props {
  status?: MatchStatus;
}

export default function MatchStatusThumbnail({ status }: Props): ReactElement {
  const textualStatus = useMemo<string>(() => {
    switch (status) {
      case 'planned':
        return 'Fais ta composition !';
      case 'ongoing':
        return 'Match en cours ...';
      case 'passed':
        return 'Match terminé';
      case 'cancelled':
      default:
        return 'Match annulé';
    }
  }, [status]);

  return (
    <div className={`friday-ui-match-status-thumbnail ${status}`}>
      <div className="indicator" />
      <span>{textualStatus}</span>
    </div>
  );
}
