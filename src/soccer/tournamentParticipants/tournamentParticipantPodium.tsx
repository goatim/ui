import { ReactElement } from 'react';
import { formatScore, TournamentParticipant } from '@fridaygame/client';
import TournamentParticipantThumbnail from './tournamentParticipantThumbnail';

export interface Props {
  tournamentParticipants?: TournamentParticipant[];
}
export default function TournamentParticipantPodium({
  tournamentParticipants,
}: Props): ReactElement {
  return (
    <div className="friday-ui-tournament-participant-podium">
      {tournamentParticipants?.splice(0, 3).map((participant) => (
        <div className="step" key={participant.id}>
          <div className="rank">
            <span className="score">{formatScore(participant.score || 0)}</span>
            <span className="position">{participant.position}</span>
          </div>
          <div className="participant">
            <TournamentParticipantThumbnail tournamentParticipant={participant} />
          </div>
        </div>
      ))}
    </div>
  );
}
