import { ReactElement } from 'react';
import { Match } from '@goatim/client';

export interface GameSummaryModalFooterProps {
  match: Match;
  onUserInteraction: (action: string, data: unknown, event: React.MouseEvent) => void;
}

export function GameSummaryModalFooterLive({}: GameSummaryModalFooterProps) {
  return <div className="goatim-ui-game-summary-modal-footer live">TODO</div>;
}

export function GameSummaryModalFooterResults({ match }: GameSummaryModalFooterProps) {
  return <div className="goatim-ui-game-summary-modal-footer results"></div>;
}

export function GameSummaryModalFooterIncoming({}: GameSummaryModalFooterProps) {
  return <div className="goatim-ui-game-summary-modal-footer incoming">TODO</div>;
}

export function GameSummaryModalFooterFixture({}: GameSummaryModalFooterProps) {
  return <div className="goatim-ui-game-summary-modal-footer fixture">TODO</div>;
}

export function GameSummaryModalFooter({
  match,
  onUserInteraction,
}: GameSummaryModalFooterProps): ReactElement {
  const { status } = match;

  switch (status) {
    case 'open':
    case 'created':
      return <GameSummaryModalFooterFixture match={match} onUserInteraction={onUserInteraction} />;
    case 'ongoing':
    case 'closing':
      return <GameSummaryModalFooterLive match={match} onUserInteraction={onUserInteraction} />;
    case 'closed':
      return <GameSummaryModalFooterResults match={match} onUserInteraction={onUserInteraction} />;
    default:
      return <GameSummaryModalFooterResults match={match} onUserInteraction={onUserInteraction} />;
  }
}
