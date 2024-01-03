import { ReactElement, useCallback } from 'react';
import { Match } from '@goatim/client';
import { Button } from '@src/general';

export interface GameSummaryCardFooterProps {
  match: Match;
  onUserInteraction: (action: string, data?: unknown, event?: React.MouseEvent) => void;
}

export function GameSummaryFooterLive({}: GameSummaryCardFooterProps) {
  return <div className="goatim-ui-game-summary-Footer live">TODO</div>;
}

export function GameSummaryFooterResults({ match }: GameSummaryCardFooterProps) {
  return <div className="goatim-ui-game-summary-Footer results"></div>;
}

export function GameSummaryFooterIncoming({
  match,
  onUserInteraction,
}: GameSummaryCardFooterProps) {
  return (
    <div className="goatim-ui-game-summary-Footer incoming">
      {typeof match.userComposition !== 'undefined' ? (
        <Button
          href={`/matches/${match.slug}/compositions/${match.userComposition.id}`}
          shape="filled">
          Modifier ma composition
        </Button>
      ) : (
        <Button href={`/matches/${match.slug}/compositions/new`} shape="filled">
          Faire ma composition
        </Button>
      )}
    </div>
  );
}

export function GameSummaryCardFooter({
  match,
  onUserInteraction,
}: GameSummaryCardFooterProps): ReactElement {
  const { status } = match;

  switch (status) {
    case 'open':
    case 'created':
      return <GameSummaryFooterIncoming match={match} onUserInteraction={onUserInteraction} />;
    case 'ongoing':
    case 'closing':
      return <GameSummaryFooterLive match={match} onUserInteraction={onUserInteraction} />;
    case 'closed':
      return <GameSummaryFooterResults match={match} onUserInteraction={onUserInteraction} />;
    default:
      return <GameSummaryFooterResults match={match} onUserInteraction={onUserInteraction} />;
  }
}
