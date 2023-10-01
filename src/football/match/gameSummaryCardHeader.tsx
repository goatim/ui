import { ReactElement, useCallback } from 'react';
import { Match } from '@goatim/client';
import { ParticipantsThumbnail } from '../../general/participantThumbnail';
import { MatchDates } from './matchDates';
import { UIDefaultSizes, UIUserInteractions } from '../../utils';
import { Button, Icon } from '../../general';

export interface GameSummaryCardHeaderProps {
  match: Match;
  onUserInteraction: (action: string, data: unknown, event: React.MouseEvent) => void;
}

export function GameSummaryCardHeaderLive({}: GameSummaryCardHeaderProps) {
  return <div className="goatim-ui-game-summary-card-header  live">TODO</div>;
}

export function GameSummaryCardHeaderResults({
  match,
  onUserInteraction,
}: GameSummaryCardHeaderProps) {
  const onClickExpand = useCallback(
    (event) => onUserInteraction(UIUserInteractions.openMatchModal, match, event),
    [match, onUserInteraction],
  );

  return (
    <div className="goatim-ui-game-summary-card-header  results">
      <div className="name info">
        <span className="match-slug">{match.slug}</span>
        <ParticipantsThumbnail nbParticipants={match.nb_participants as number} />
        <Button onClick={onClickExpand} theme="light" shape="none" className="bt-open-summary">
          <Icon name="eye" />
        </Button>
      </div>
      <div className="dates">
        <MatchDates
          startDate={match.beginning as string}
          endDate={match.end as string}
          size={UIDefaultSizes.Small}
        />
      </div>
    </div>
  );
}

export function GameSummaryCardHeaderIncoming({}: GameSummaryCardHeaderProps) {
  return <div className="goatim-ui-game-summary-card-header  incoming">TODO</div>;
}

export function GameSummaryCardHeaderFixture({}: GameSummaryCardHeaderProps) {
  return <div className="goatim-ui-game-summary-card-header  fixture">TODO</div>;
}

export function GameSummaryCardHeader({
  match,
  onUserInteraction,
}: GameSummaryCardHeaderProps): ReactElement {
  const { status } = match;

  switch (status) {
    case 'open':
    case 'created':
      return <GameSummaryCardHeaderFixture match={match} onUserInteraction={onUserInteraction} />;
    case 'ongoing':
    case 'closing':
      return <GameSummaryCardHeaderLive match={match} onUserInteraction={onUserInteraction} />;
    case 'closed':
      return <GameSummaryCardHeaderResults match={match} onUserInteraction={onUserInteraction} />;
    default:
      return <GameSummaryCardHeaderResults match={match} onUserInteraction={onUserInteraction} />;
  }

  // return (
  //   <div className={`goatim-ui-game-summary-card-header  ${theme} ${status}`}>
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
