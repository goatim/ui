import { ReactElement } from 'react';
import { TournamentParticipant } from '@goatim/client';
import { WalletThumbnail } from '../../market';

export interface TournamentParticipantThumbnailProps {
  tournamentParticipant?: TournamentParticipant;
  showOnlyWallet?: boolean;
}

export function TournamentParticipantThumbnail({
  tournamentParticipant,
  showOnlyWallet = false,
}: TournamentParticipantThumbnailProps): ReactElement {
  return (
    <div className="goatim-ui-tournament-participant-thumbnail">
      {!showOnlyWallet ? <span className="position">{tournamentParticipant?.position}</span> : null}
      <div className="body">
        {tournamentParticipant?.wallet && typeof tournamentParticipant.wallet === 'object' ? (
          <div className="wallet">
            <WalletThumbnail wallet={tournamentParticipant.wallet} pictureOutline="outline-gold" />
          </div>
        ) : null}
        {!showOnlyWallet && tournamentParticipant?.score !== undefined ? (
          <span className="score">{tournamentParticipant.score} pts</span>
        ) : null}
      </div>
    </div>
  );
}
