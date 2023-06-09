import { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TournamentParticipant } from '@goatim/client';
import { DateTime } from 'luxon';
import { UrlObject } from 'url';
import { TournamentParticipantPodium } from '../tournamentParticipants';
import { Button } from '../../general';
import trophy from '../../general/assets/trophy.png';

export type TournamentBannerSize = 'small' | 'large';

export interface TournamentBannerProps {
  tournamentParticipants?: TournamentParticipant[];
  matchesHref?: string | UrlObject;
  onMatchesClick?: () => unknown;
  size?: TournamentBannerSize;
  end?: DateTime | string;
}

export function TournamentBanner({
  tournamentParticipants,
  onMatchesClick,
  matchesHref,
  size = 'large',
  end,
}: TournamentBannerProps): ReactElement {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const resolvedEnd = useMemo<DateTime | undefined>(
    () => (typeof end === 'string' ? DateTime.fromISO(end) : end),
    [end],
  );

  const [remainingTime, setRemainingTime] = useState<string | undefined>();

  const resolveRemainingTime = useCallback(() => {
    if (resolvedEnd && resolvedEnd.diffNow().seconds > 0) {
      setRemainingTime(`Fin dans ${resolvedEnd.diffNow().toFormat('d:hh:mm:ss')}`);
      timeout.current = setTimeout(resolveRemainingTime, 1000);
    } else {
      setRemainingTime('Terminé');
    }
  }, [resolvedEnd]);

  useEffect(() => {
    if (resolvedEnd) {
      resolveRemainingTime();
    }
    return () => (timeout.current ? clearTimeout(timeout.current) : undefined);
  }, [resolveRemainingTime, resolvedEnd]);

  return (
    <div className={`goatim-ui-tournament-banner ${size}`}>
      <div className="podium">
        {tournamentParticipants?.length ? (
          <>
            <TournamentParticipantPodium tournamentParticipants={tournamentParticipants} />
            <span className="title">Goatim league</span>
          </>
        ) : (
          <span className="placeholder">À partir du 20 janvier</span>
        )}
      </div>
      <div className="reward">
        {remainingTime ? <span className="timer">{remainingTime}</span> : null}
        <div className="body">
          <h3 className="date">Le 5 août</h3>
          <h2 className="title">1 Ether à gagner !</h2>
          <p className="description">
            Participe aux matchs et gagne des points pour te hisser en tête du classement
          </p>
        </div>
        <div className="footer">
          {onMatchesClick || matchesHref ? (
            <Button shape="text" onClick={onMatchesClick} href={matchesHref}>
              Voir les matchs
            </Button>
          ) : null}
          <img src={trophy} alt="Trophy" />
        </div>
      </div>
    </div>
  );
}
