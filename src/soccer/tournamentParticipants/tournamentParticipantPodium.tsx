import { ReactElement } from 'react';
import { formatScore, TournamentParticipant } from '@goatim/client';
import { TournamentParticipantThumbnail } from './tournamentParticipantThumbnail';

export interface TournamentParticipantPodiumProps {
  tournamentParticipants?: TournamentParticipant[];
}

export function TournamentParticipantPodium({
  tournamentParticipants,
}: TournamentParticipantPodiumProps): ReactElement {
  return (
    <div className="goatim-ui-tournament-participant-podium">
      {tournamentParticipants?.slice(0, 3).map((participant) => (
        <div className="step" key={participant.id}>
          <div className="rank">
            <span className="score">{formatScore(participant.score || 0)}</span>
            <span className="position">{participant.position}</span>
          </div>
          <div className="participant">
            <TournamentParticipantThumbnail
              tournamentParticipant={participant}
              showPosition={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
