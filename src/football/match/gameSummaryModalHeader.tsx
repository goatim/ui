import { ReactElement, useCallback } from 'react';
import { Match, User } from '@goatim/client';
import { ParticipantsThumbnail } from '../../general/participantThumbnail';
import { MatchDates } from './matchDates';
import { UIDefaultSizes, UIDefaultThemes, UIUserInteractions } from '../../utils';
import { Button, Icon } from '../../general';
import { UserRankLeague } from '../../user';
import { RankingRewards } from '../../ranking';
import { GoatimCoinsGains } from '../../market/goatimCoinsGains';

export interface GameSummaryModalHeaderProps {
  match: Match;
  onUserInteraction: (action: string, data: unknown, event: React.MouseEvent) => void;
}

export function GameSummaryModalHeaderLive({}: GameSummaryModalHeaderProps) {
  return <div className="goatim-ui-game-summary-modal-header live">TODO</div>;
}

export function GameSummaryModalHeaderResults({
  match,
  onUserInteraction,
}: GameSummaryModalHeaderProps) {
  const onClickExpand = useCallback(
    (event) => onUserInteraction(UIUserInteractions.openMatchModal, match, event),
    [match, onUserInteraction],
  );

  return (
    <div className="goatim-ui-game-summary-modal-header results">
      <div className="name info">
        <span className="match-title">{match.title}</span>
        <ParticipantsThumbnail nbParticipants={match.nb_participants as number} />
        <UserRankLeague />
      </div>
      <div className="dates info">
        <MatchDates
          startDate={match.beginning as string}
          endDate={match.end as string}
          size={UIDefaultSizes.Large}
        />
        <RankingRewards size={UIDefaultSizes.Small} theme={UIDefaultThemes.Light} />
      </div>
    </div>
  );
}

export function GameSummaryModalHeaderIncoming({}: GameSummaryModalHeaderProps) {
  return <div className="goatim-ui-game-summary-modal-header incoming">TODO</div>;
}

export function GameSummaryModalHeaderFixture({}: GameSummaryModalHeaderProps) {
  return <div className="goatim-ui-game-summary-modal-header fixture">TODO</div>;
}

export function GameSummaryModalHeader({
  match,
  onUserInteraction,
}: GameSummaryModalHeaderProps): ReactElement {
  const { status } = match;

  switch (status) {
    case 'open':
    case 'created':
      return <GameSummaryModalHeaderFixture match={match} onUserInteraction={onUserInteraction} />;
    case 'ongoing':
    case 'closing':
      return <GameSummaryModalHeaderLive match={match} onUserInteraction={onUserInteraction} />;
    case 'closed':
      return <GameSummaryModalHeaderResults match={match} onUserInteraction={onUserInteraction} />;
    default:
      return <GameSummaryModalHeaderResults match={match} onUserInteraction={onUserInteraction} />;
  }

  // return (
  //   <div className={`goatim-ui-game-summary-header ${theme} ${status}`}>
  //     <div className="status">
  //       <MatchStatusThumbnail status={match.status} theme={theme} />
  //     </div>
  //     <span className="title">{match.title}</span>
  //     <div className="rewards">
  //       <div className="reward">
  //         <span className="label">Gain 1er:</span>
  //         <span className="coins">+0.003 ETH</span>
  //       </div>
  //       <div className="reward">
  //         <span className="label">Gain 2ème:</span>
  //         <GoatimCoinsGains gains={30000} />
  //       </div>
  //       <div className="reward">
  //         <span className="label">Gain 3ème:</span>
  //         <GoatimCoinsGains gains={10000} />
  //       </div>
  //     </div>
  //   </div>
  // );
}
