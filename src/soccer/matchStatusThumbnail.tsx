import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import { MatchStatus } from '@fridaygame/client';
import Countdown from '../general/countdown';

export interface Props {
  status?: MatchStatus;
  beginning?: DateTime | string;
  end?: DateTime | string;
}

export default function MatchStatusThumbnail({ status, beginning, end }: Props): ReactElement {
  const tick = useRef<NodeJS.Timer | null>(null);

  const resolvedBeginning = useMemo<DateTime | undefined>(
    () => (typeof beginning === 'string' ? DateTime.fromISO(beginning) : beginning),
    [beginning],
  );
  const resolvedEnd = useMemo<DateTime | undefined>(
    () => (typeof end === 'string' ? DateTime.fromISO(end) : end),
    [end],
  );

  const [liveStatus, setLiveStatus] = useState<MatchStatus | undefined>(status);

  const resolveStatus = useCallback(() => {
    if (status === 'cancelled') {
      return;
    }
    if (resolvedBeginning && DateTime.now() < resolvedBeginning) {
      setLiveStatus('planned');
    } else if (resolvedEnd && DateTime.now() < resolvedEnd) {
      setLiveStatus('ongoing');
    } else {
      setLiveStatus('passed');
    }
  }, [status, resolvedEnd, resolvedBeginning]);

  useEffect(() => {
    if (!tick.current) {
      tick.current = setInterval(resolveStatus, 1000);
      resolveStatus();
    }
    return () => (tick.current ? clearInterval(tick.current) : undefined);
  }, [resolveStatus]);

  const textualStatus = useMemo<string | undefined>(() => {
    switch (liveStatus) {
      case 'planned':
        return "Coup d'envoi";
      case 'ongoing':
        return 'Coup de sifflet final';
      case 'passed':
        return 'Terminé';
      case 'cancelled':
        return 'Annulé';
      default:
        return undefined;
    }
  }, [liveStatus]);

  return (
    <div className="friday-ui-match-status-thumbnail">
      {liveStatus === 'planned' ? (
        <Countdown theme="light" label={textualStatus} date={beginning} />
      ) : null}
      {liveStatus === 'ongoing' ? (
        <Countdown theme="light" label={textualStatus} date={end} />
      ) : null}
    </div>
  );
}
