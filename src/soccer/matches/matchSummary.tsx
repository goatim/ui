import { ReactElement } from 'react';
import { Composition, Match } from '@fridaygame/client';
import CompositionPodium from '../compositions/compositionPodium';
import MatchStatusThumbnail from './matchStatusThumbnail';
import CompositionThumbnail from '../compositions/compositionThumbnail';

export interface Props {
  match: Match;
  podium?: Composition[];
  self?: Composition;
}

export default function MatchSummary({ match, podium, self }: Props): ReactElement {
  return (
    <div className="friday-ui-match-summary">
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
            <CompositionThumbnail composition={self} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
