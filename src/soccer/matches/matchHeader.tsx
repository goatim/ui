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
      <div className="rewards">
        <div className="reward">
          <span className="label">Gain 1er:</span>
          <span className="amount">+0.003 ETH</span>
        </div>
        <div className="reward">
          <span className="label">Gain 2ème:</span>
          <GoatimCoinsGains gains={30000} />
        </div>
        <div className="reward">
          <span className="label">Gain 3ème:</span>
          <GoatimCoinsGains gains={10000} />
        </div>
      </div>
    </div>
  );
}
