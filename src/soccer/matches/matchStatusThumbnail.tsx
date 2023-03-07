import { ReactElement, useMemo } from 'react';
import { MatchStatus } from '@goatim/client';

export type MatchStatusThumbnailTheme = 'dark' | 'light';

export interface MatchStatusThumbnailProps {
  status?: MatchStatus;
  theme?: MatchStatusThumbnailTheme;
}

export function MatchStatusThumbnail({
  status,
  theme = 'dark',
}: MatchStatusThumbnailProps): ReactElement {
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
    <div className={`goatim-ui-match-status-thumbnail ${status} ${theme}`}>
      <div className="indicator" />
      <span>{textualStatus}</span>
    </div>
  );
}
