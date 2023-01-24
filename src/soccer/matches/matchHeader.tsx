import { ReactElement } from 'react';
import { Match } from '@fridaygame/client';
import MatchStatusThumbnail from './matchStatusThumbnail';
import FridayCoinsVariation from '../../market/fridayCoinsVariation';

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
      <div className="reward">
        <span className="label">Gain 1er:</span>
        <FridayCoinsVariation variation={30000} />
      </div>
      {/* {match.creator && typeof match.creator === 'object' ? ( */}
      {/*  <div className="creator"> */}
      {/*    <MatchCreator creator={match.creator} theme={theme} /> */}
      {/*  </div> */}
      {/* ) : null} */}
    </div>
  );
}
