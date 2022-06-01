import { MouseEvent, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import { MatchStatus } from '@fridaygame/client';
import { To } from 'react-router';
import Countdown from '../general/countdown';
import Button from '../general/button';

export function useMatchLiveStatus(
  beginning?: DateTime | string,
  end?: DateTime | string,
  initialStatus?: MatchStatus,
): MatchStatus | undefined {
  const tick = useRef<NodeJS.Timer | null>(null);

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
  }, [initialStatus, resolvedEnd, resolvedBeginning]);

  useEffect(() => {
    if (!tick.current) {
      tick.current = setInterval(resolveStatus, 1000);
      resolveStatus();
    }
    return () => (tick.current ? clearInterval(tick.current) : undefined);
  }, [resolveStatus]);

  return liveStatus;
}

export type MatchStatusThumbnailTheme = 'default' | 'light';

export interface Props {
  status?: MatchStatus;
  beginning?: DateTime | string;
  end?: DateTime | string;
  toComposition?: To;
  onClickComposition?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  toMatch?: To;
  onClickMatch?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  theme?: MatchStatusThumbnailTheme;
}

export default function MatchStatusThumbnail({
  status,
  beginning,
  end,
  toComposition,
  onClickComposition,
  toMatch,
  onClickMatch,
  theme = 'default',
}: Props): ReactElement {
  const liveStatus = useMatchLiveStatus(beginning, end, status);

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
    <div className={`friday-ui-match-status-thumbnail ${liveStatus} ${theme}`}>
      {liveStatus === 'planned' ? (
        <Countdown theme={theme} label={textualStatus} date={beginning} />
      ) : null}
      {liveStatus === 'ongoing' ? (
        <Countdown theme={theme} label={textualStatus} date={end} />
      ) : null}

      {liveStatus === 'cancelled' ? <span className="label">Match annulé !</span> : null}
      {liveStatus === 'passed' ? <span className="label">Match terminé !</span> : null}

      {liveStatus === 'planned' && (onClickComposition || toComposition) ? (
        <div className="action">
          <Button onClick={onClickComposition} to={toComposition} shape="filled">
            Faire ma composition
          </Button>
        </div>
      ) : null}
      {liveStatus === 'ongoing' && (onClickMatch || toMatch) ? (
        <div className="action">
          <Button onClick={onClickMatch} to={toMatch} shape="filled">
            Suivre le match
          </Button>
        </div>
      ) : null}
      {liveStatus === 'passed' && (onClickMatch || toMatch) ? (
        <div className="action">
          <Button onClick={onClickMatch} to={toMatch} shape="filled">
            Voir les résultats
          </Button>
        </div>
      ) : null}
    </div>
  );
}
