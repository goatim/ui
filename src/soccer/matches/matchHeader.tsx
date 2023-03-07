import { ReactElement } from 'react';
import { Match } from '@goatim/client';
import { MatchStatusThumbnail } from './matchStatusThumbnail';
import { GoatimCoinsGains } from '../../market';

export type MatchHeaderTheme = 'dark' | 'light';

export interface MatchHeaderProps {
  match: Match;
  theme?: MatchHeaderTheme;
}

export function MatchHeader({ match, theme = 'dark' }: MatchHeaderProps): ReactElement {
  return (
    <div className={`goatim-ui-match-header ${theme}`}>
      <div className="status">
        <MatchStatusThumbnail status={match.status} theme={theme} />
      </div>
      <span className="title">{match.title}</span>
      <div className="reward">
        <span className="label">Gain 1er:</span>
        <GoatimCoinsGains variation={30000} />
      </div>
      {/* {match.creator && typeof match.creator === 'object' ? ( */}
      {/*  <div className="creator"> */}
      {/*    <MatchCreator creator={match.creator} theme={theme} /> */}
      {/*  </div> */}
      {/* ) : null} */}
    </div>
  );
}
