import { ReactElement } from 'react';
import { TournamentParticipant } from '@goatim/client';
import { WalletThumbnail } from '../../market';

export interface TournamentParticipantThumbnailProps {
  tournamentParticipant?: TournamentParticipant;
  showPosition?: boolean;
}

export function TournamentParticipantThumbnail({
  tournamentParticipant,
  showPosition = true,
}: TournamentParticipantThumbnailProps): ReactElement {
  return (
    <div className="goatim-ui-tournament-participant-thumbnail">
      {showPosition ? <span className="position">{tournamentParticipant?.position}</span> : null}
      {tournamentParticipant?.wallet && typeof tournamentParticipant.wallet === 'object' ? (
        <div className="wallet">
          <WalletThumbnail wallet={tournamentParticipant.wallet} pictureOutline="outline-gold" />
        </div>
      ) : null}
    </div>
  );
}
