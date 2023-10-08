import { ReactElement } from 'react';
import { Match } from '@goatim/client';

export interface GameSummaryCardFooterProps {
  match: Match;
  onUserInteraction: (action: string, data: unknown, event: React.MouseEvent) => void;
}

export function GameSummaryFooterLive({}: GameSummaryCardFooterProps) {
  return <div className="goatim-ui-game-summary-Footer live">TODO</div>;
}

export function GameSummaryFooterResults({ match }: GameSummaryCardFooterProps) {
  return <div className="goatim-ui-game-summary-Footer results"></div>;
}

export function GameSummaryFooterIncoming({}: GameSummaryCardFooterProps) {
  return <div className="goatim-ui-game-summary-Footer incoming">TODO</div>;
}

export function GameSummaryFooterFixture({}: GameSummaryCardFooterProps) {
  return <div className="goatim-ui-game-summary-Footer fixture">TODO</div>;
}

export function GameSummaryCardFooter({
  match,
  onUserInteraction,
}: GameSummaryCardFooterProps): ReactElement {
  const { status } = match;

  switch (status) {
    case 'open':
    case 'created':
      return <GameSummaryFooterFixture match={match} onUserInteraction={onUserInteraction} />;
    case 'ongoing':
    case 'closing':
      return <GameSummaryFooterLive match={match} onUserInteraction={onUserInteraction} />;
    case 'closed':
      return <GameSummaryFooterResults match={match} onUserInteraction={onUserInteraction} />;
    default:
      return <GameSummaryFooterResults match={match} onUserInteraction={onUserInteraction} />;
  }
}
