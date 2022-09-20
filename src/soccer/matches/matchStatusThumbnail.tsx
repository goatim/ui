import { ReactElement } from 'react';
import { DateTime } from 'luxon';
import { MatchStatus, useMatchLiveStatus } from '@fridaygame/client';
import DateTimeThumbnail from '../../general/dateTimeThumbnail';

export type MatchStatusThumbnailTheme = 'dark' | 'light';

export interface Props {
  status?: MatchStatus;
  beginning?: DateTime | string;
  end?: DateTime | string;
  theme?: MatchStatusThumbnailTheme;
}

export default function MatchStatusThumbnail({
  status,
  beginning,
  end,
  theme = 'dark',
}: Props): ReactElement {
  const liveStatus = useMatchLiveStatus(beginning, end, status);

  return (
    <div className={`friday-ui-match-status-thumbnail ${theme}`}>
      {liveStatus === 'planned' ? (
        <DateTimeThumbnail
          theme={theme}
          label="Coup d'envoi"
          dateTime={beginning}
          countdown
          align="center"
        />
      ) : null}

      {liveStatus === 'ongoing' ? (
        <DateTimeThumbnail
          theme={theme}
          label="Coup de sifflet final"
          dateTime={end}
          countdown
          align="center"
        />
      ) : null}

      {liveStatus === 'passed' ? <span className="label">Match terminé !</span> : null}
      {liveStatus === 'cancelled' ? <span className="label">Match annulé !</span> : null}
    </div>
  );
}
