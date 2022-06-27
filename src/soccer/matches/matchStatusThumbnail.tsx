import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import { MatchStatus } from '@fridaygame/client';
import Countdown from '../../general/countdown';

export function useMatchLiveStatus(
  beginning?: DateTime | string,
  end?: DateTime | string,
  initialStatus?: MatchStatus,
): MatchStatus | undefined {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const resolvedBeginning = useMemo<DateTime | undefined>(
    () => (typeof beginning === 'string' ? DateTime.fromISO(beginning) : beginning),
    [beginning],
  );

  const resolvedEnd = useMemo<DateTime | undefined>(
    () => (typeof end === 'string' ? DateTime.fromISO(end) : end),
    [end],
  );

  const [liveStatus, setLiveStatus] = useState<MatchStatus | undefined>(initialStatus);

  const resolveStatus = useCallback(() => {
    if (initialStatus === 'cancelled') {
      return;
    }
    if (resolvedBeginning && DateTime.now() < resolvedBeginning) {
      setLiveStatus('planned');
    } else if (resolvedEnd && DateTime.now() < resolvedEnd) {
      setLiveStatus('ongoing');
    } else {
      setLiveStatus('passed');
    }
    timeout.current = setTimeout(resolveStatus, 1000);
  }, [initialStatus, resolvedEnd, resolvedBeginning]);

  useEffect(() => {
    resolveStatus();
    return () => (timeout.current ? clearTimeout(timeout.current) : undefined);
  }, [resolveStatus]);

  return liveStatus;
}

export type MatchStatusThumbnailTheme = 'default' | 'light';

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
  theme = 'default',
}: Props): ReactElement {
  const liveStatus = useMatchLiveStatus(beginning, end, status);

  return (
    <div className={`friday-ui-match-status-thumbnail ${theme}`}>
      {liveStatus === 'planned' ? (
        <Countdown theme={theme} label="Coup d'envoi" date={beginning} />
      ) : null}
      {liveStatus === 'ongoing' ? (
        <Countdown theme={theme} label="Coup de sifflet final" date={end} />
      ) : null}

      {liveStatus === 'passed' ? <span className="label">Match terminé !</span> : null}
      {liveStatus === 'cancelled' ? <span className="label">Match annulé !</span> : null}
    </div>
  );
}
