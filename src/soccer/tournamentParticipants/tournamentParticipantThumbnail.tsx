import { ReactElement } from 'react';
import { TournamentParticipant } from '@goatim/client';
import { WalletThumbnail } from '../../market';

export interface TournamentParticipantThumbnailProps {
  tournamentParticipant?: TournamentParticipant;
}

export function TournamentParticipantThumbnail({
  tournamentParticipant,
}: TournamentParticipantThumbnailProps): ReactElement {
  return (
    <div className="goatim-ui-tournament-participant-thumbnail">
      {tournamentParticipant?.wallet && typeof tournamentParticipant?.wallet === 'object' ? (
        <div className="wallet">
          <WalletThumbnail wallet={tournamentParticipant.wallet} pictureOutline="outline-gold" />
        </div>
      ) : null}
    </div>
  );
}
