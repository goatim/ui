import { ReactElement } from 'react';
import { Match } from '@fridaygame/client';
import MatchStatusThumbnail from './matchStatusThumbnail';
import MatchCreator from './matchCreator';

export interface Props {
  match: Match;
}

export default function MatchHeader({ match }: Props): ReactElement {
  return (
    <div className="friday-ui-match-header">
      <div className="status">
        <MatchStatusThumbnail status={match.status} />
      </div>
      <span className="title">{match.title}</span>
      {match.creator && typeof match.creator === 'object' ? (
        <div className="creator">
          <MatchCreator creator={match.creator} />
        </div>
      ) : null}
    </div>
  );
}
