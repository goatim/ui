import { ReactElement } from 'react';
import { Composition, Match } from '@goatim/client';
import { CompositionPodium, CompositionThumbnail } from '../compositions';
import { MatchStatusThumbnail } from './matchStatusThumbnail';

export interface MatchSummaryProps {
  match: Match;
  podium?: Composition[];
  self?: Composition;
}

export function MatchSummary({ match, podium, self }: MatchSummaryProps): ReactElement {
  return (
    <div className="goatim-ui-match-summary">
      <div className="header">
        <span className="subtitle">Résultats</span>
        <span className="title">{match.title}</span>
        <div className="status">
          <MatchStatusThumbnail status={match.status} />
        </div>
      </div>
      <div className="podium">
        <CompositionPodium compositions={podium} />
      </div>
      {self ? (
        <div className="self">
          <span className="label">Ta performance</span>
          <div className="composition">
            <CompositionThumbnail composition={self} showScore showGains />
          </div>
        </div>
      ) : null}
    </div>
  );
}
