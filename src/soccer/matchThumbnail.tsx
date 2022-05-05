import { MouseEvent, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Match, MatchStatus } from '@fridaygame/client';
import { To } from 'react-router';
import { DateTime } from 'luxon';
import Date from '../general/date';
import MatchCreator from './matchCreator';
import Icon from '../general/icon';
import WalletList from '../market/walletList';
import Button from '../general/button';
import MatchStatusThumbnail from './matchStatusThumbnail';
import MatchIcon from './matchIcon';

export interface Props {
  match: Match;
  toComposition?: To;
  onClickComposition?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  toMatch?: To;
  onClickMatch?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
}

export default function MatchThumbnail({
  match,
  toComposition,
  onClickComposition,
  toMatch,
  onClickMatch,
}: Props): ReactElement {
  const tick = useRef<NodeJS.Timer | null>(null);

  const resolvedStart = useMemo<DateTime | undefined>(
    () => (typeof match.start === 'string' ? DateTime.fromISO(match.start) : match.start),
    [match.start],
  );
  const resolvedEnd = useMemo<DateTime | undefined>(
    () => (typeof match.end === 'string' ? DateTime.fromISO(match.end) : match.end),
    [match.end],
  );

  const [liveStatus, setLiveStatus] = useState<MatchStatus | undefined>(match.status);

  const resolveStatus = useCallback(() => {
    if (match.status === 'cancelled') {
      return;
    }
    if (resolvedStart && DateTime.now() < resolvedStart) {
      setLiveStatus('planned');
    } else if (resolvedEnd && DateTime.now() < resolvedEnd) {
      setLiveStatus('ongoing');
    } else {
      setLiveStatus('passed');
    }
  }, [match.status, resolvedEnd, resolvedStart]);

  useEffect(() => {
    if (!tick.current) {
      tick.current = setInterval(resolveStatus, 1000);
      resolveStatus();
    }
    return () => (tick.current ? clearInterval(tick.current) : undefined);
  }, [resolveStatus]);

  return (
    <div className="friday-ui-match-thumbnail">
      <div className="icon">
        <MatchIcon icon={match.icon} />
      </div>

      <div className="body">
        <div className="header">
          <Date label="Début" date={match.start} />

          <div className="infos">
            <span className="title">{match.title}</span>
            {match.creator && typeof match.creator === 'object' ? (
              <div className="creator">
                <MatchCreator creator={match.creator} nb_participants={match.nb_participants} />
              </div>
            ) : null}
          </div>

          <Date label="Fin" align="right" date={match.end} />
        </div>

        {match.participants?.length ? (
          <div className="participants">
            <WalletList wallets={match.participants} total={match.nb_participants} />
          </div>
        ) : null}

        <div className="action">
          {liveStatus === 'planned' ? (
            <Button onClick={onClickComposition} to={toComposition} shape="filled">
              Faire ma composition
            </Button>
          ) : null}
          {liveStatus === 'ongoing' ? (
            <Button onClick={onClickMatch} to={toMatch} shape="filled">
              Suivre le match
            </Button>
          ) : null}
          {liveStatus === 'passed' ? (
            <Button onClick={onClickMatch} to={toMatch} shape="filled">
              Voir les résultats
            </Button>
          ) : null}
        </div>
      </div>
      <div className="status">
        <MatchStatusThumbnail status={match.status} start={match.start} end={match.end} />
      </div>
    </div>
  );
}
