import { MouseEvent, ReactElement } from 'react';
import { To } from 'react-router';
import Composition from '@fridaygame/client/dist/soccer/compositions/model';
import { Match } from '@fridaygame/client';
import CompositionRanking from '../compositions/compositionRanking';
import Button from '../../general/button';
import { useMatchLiveStatus } from './matchStatusThumbnail';

export type MatchRankingTheme = 'dark' | 'light';

export interface Props {
  match: Match;
  compositions?: Composition[];
  toComposition?: To;
  onClickComposition?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  theme?: MatchRankingTheme;
}

export default function MatchRanking({
  match,
  compositions,
  toComposition,
  onClickComposition,
  theme = 'dark',
}: Props): ReactElement {
  const liveStatus = useMatchLiveStatus(match.beginning, match.end, match.status);

  return (
    <div className={`friday-ui-match-ranking ${theme}`}>
      <div className="header">
        <span className="title">Classement</span>
      </div>

      <div className="ranking">
        <CompositionRanking compositions={compositions} theme={theme} />
      </div>

      {(toComposition || onClickComposition) && liveStatus === 'planned' ? (
        <div className="action">
          <Button
            to={toComposition}
            onClick={onClickComposition}
            shape="filled"
            theme={theme === 'light' ? 'light' : 'dark'}>
            Faire ma composition
          </Button>
        </div>
      ) : null}
    </div>
  );
}
