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
      <div className="name-row">
        <span className="match-slug">{match.slug}</span>
        <Button onClick={onClickExpand} theme="light" shape="none" className="bt-open-summary">
          <Icon name="eye" />
        </Button>
      </div>
      <div className="dates-row">
        <MatchDates
          startDate={match.beginning as string}
          endDate={match.end as string}
          size={UIDefaultSizes.Small}
        />
        <ParticipantsThumbnail nbParticipants={match.nb_participants as number} />
      </div>
    </div>
  );
}

export function GameSummaryCardHeaderIncoming({
  match,
  onUserInteraction,
}: GameSummaryCardHeaderProps) {
  const onClickExpand = useCallback(
    (event) => onUserInteraction(UIUserInteractions.openMatchModal, match, event),
    [match, onUserInteraction],
  );
  return (
    <div className="goatim-ui-game-summary-card-header incoming">
      <div className="name-row">
        <span className="match-slug">{match.slug}</span>
        <Button onClick={onClickExpand} theme="light" shape="none" className="bt-open-summary">
          <Icon name="eye" />
        </Button>
      </div>
      <div className="dates-row">
        <ParticipantsThumbnail nbParticipants={match.nb_participants as number} />
      </div>
    </div>
  );
}

export function GameSummaryCardHeader({
  match,
  onUserInteraction,
}: GameSummaryCardHeaderProps): ReactElement {
  const { status } = match;

  switch (status) {
    case 'open':
    case 'created':
      return <GameSummaryCardHeaderIncoming match={match} onUserInteraction={onUserInteraction} />;
    case 'ongoing':
    case 'closing':
      return <GameSummaryCardHeaderLive match={match} onUserInteraction={onUserInteraction} />;
    case 'closed':
      return <GameSummaryCardHeaderResults match={match} onUserInteraction={onUserInteraction} />;
    default:
      return <GameSummaryCardHeaderResults match={match} onUserInteraction={onUserInteraction} />;
  }
}
