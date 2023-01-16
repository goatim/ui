import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TournamentParticipant } from '@fridaygame/client';
import { DateTime, Duration } from 'luxon';
import TournamentParticipantPodium from '../tournamentParticipants/tournamentParticipantPodium';
import Button from '../../general/button';
import trophy from '../../general/assets/trophy.png';

export type TournamentBannerSize = 'small' | 'large';

export interface Props {
  tournamentParticipants?: TournamentParticipant[];
  onMatchesClick?: () => unknown;
  size?: TournamentBannerSize;
  end?: DateTime | string;
}

export default function TournamentBanner({
  tournamentParticipants,
  onMatchesClick,
  size = 'large',
  end,
}: Props): ReactElement {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const resolvedEnd = useMemo<DateTime | undefined>(
    () => (typeof end === 'string' ? DateTime.fromISO(end) : end),
    [end],
  );

  const [remainingTime, setRemainingTime] = useState<Duration | undefined>(resolvedEnd?.diffNow());

  const resolveRemainingTime = useCallback(() => {
    setRemainingTime(resolvedEnd?.diffNow());
    timeout.current = setTimeout(resolveRemainingTime, 1000);
  }, [resolvedEnd]);

  useEffect(() => {
    resolveRemainingTime();
    return () => (timeout.current ? clearTimeout(timeout.current) : undefined);
  }, [resolveRemainingTime]);
  return (
    <div className={`friday-ui-tournament-banner ${size}`}>
      <div className="podium">
        <TournamentParticipantPodium tournamentParticipants={tournamentParticipants} />
        <span>Friday league</span>
      </div>
      <div className="reward">
        <span className="timer">{`Fin dans ${remainingTime?.toFormat('d:hh:mm:ss')}`}</span>
        <div className="body">
          <h3 className="date">Le 1er mars</h3>
          <h2 className="title">1 Ether à gagner !</h2>
          <p className="description">
            Participe aux matchs et gagne des points pour te hisser en tête du classement
          </p>
        </div>
        <div className="footer">
          {onMatchesClick ? (
            <Button shape="text" theme="dark" onClick={onMatchesClick}>
              Voir les matchs
            </Button>
          ) : null}
          <img src={trophy} alt="Trophy" />
        </div>
      </div>
    </div>
  );
}
