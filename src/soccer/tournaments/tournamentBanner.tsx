import { ReactElement } from 'react';
import { TournamentParticipant } from '@fridaygame/client';
import TournamentParticipantPodium from '../tournamentParticipants/tournamentParticipantPodium';
import Button from '../../general/button';
import trophy from '../../general/assets/trophy.png';

export type TournamentBannerSize = 'small' | 'large';

export interface Props {
  tournamentParticipants?: TournamentParticipant[];
  onMatchesClick?: () => unknown;
  size?: TournamentBannerSize;
}

export default function TournamentBanner({
  tournamentParticipants,
  onMatchesClick,
  size = 'large',
}: Props): ReactElement {
  return (
    <div className={`friday-ui-tournament-banner ${size}`}>
      <div className="podium">
        <TournamentParticipantPodium tournamentParticipants={tournamentParticipants} />
        <span>Friday league</span>
      </div>
      <div className="reward">
        <span className="timer">Fin dans 3:25:56</span>
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
