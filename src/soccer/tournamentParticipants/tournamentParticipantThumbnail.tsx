import { ReactElement, useMemo } from 'react';
import { TournamentParticipant } from '@goatim/client';
import { WalletThumbnail } from '../../market';
import { getPositionSuffix } from '@src/ranking/utils';
import { RankingEvolution } from '@src/ranking';

export interface TournamentParticipantThumbnailProps {
  tournamentParticipant?: TournamentParticipant;
  showOnlyWallet?: boolean;
}

export function TournamentParticipantThumbnail({
  tournamentParticipant,
  showOnlyWallet = false,
}: TournamentParticipantThumbnailProps): ReactElement {
  const positionEvolution = useMemo(() => {
    if (
      typeof tournamentParticipant?.last_position !== 'undefined' &&
      typeof tournamentParticipant?.position !== 'undefined'
    ) {
      return (
        <RankingEvolution
          nbEvo={tournamentParticipant.position - tournamentParticipant.last_position}
        />
      );
    }
    return undefined;
  }, [tournamentParticipant]);
  return (
    <div className="goatim-ui-tournament-participant-thumbnail">
      <div className="body">
        {tournamentParticipant?.wallet && typeof tournamentParticipant.wallet === 'object' ? (
          <div className="wallet">
            <WalletThumbnail wallet={tournamentParticipant.wallet} pictureOutline="outline-gold" />
          </div>
        ) : null}
        {!showOnlyWallet ? (
          <span className="position">
            {getPositionSuffix(tournamentParticipant?.position as number)}
          </span>
        ) : null}

        {!showOnlyWallet && tournamentParticipant?.score !== undefined ? (
          <span className="score">{tournamentParticipant.score} pts</span>
        ) : null}

        {!showOnlyWallet && positionEvolution !== undefined ? positionEvolution : null}
      </div>
    </div>
  );
}
