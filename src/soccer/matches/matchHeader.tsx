import { ReactElement } from 'react';
import { Match } from '@fridaygame/client';
import MatchStatusThumbnail from './matchStatusThumbnail';
import MatchCreator from './matchCreator';

export type MatchHeaderTheme = 'dark' | 'light';

export interface Props {
  match: Match;
  theme?: MatchHeaderTheme;
}

export default function MatchHeader({ match, theme = 'dark' }: Props): ReactElement {
  return (
    <div className={`friday-ui-match-header ${theme}`}>
      <div className="status">
        <MatchStatusThumbnail status={match.status} theme={theme} />
      </div>
      <span className="title">{match.title}</span>
      {match.creator && typeof match.creator === 'object' ? (
        <div className="creator">
          <MatchCreator creator={match.creator} theme={theme} />
        </div>
      ) : null}
    </div>
  );
}
