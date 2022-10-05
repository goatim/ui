import { MouseEvent, ReactElement } from 'react';
import { To } from 'react-router';
import Composition from '@fridaygame/client/dist/soccer/compositions/model';
import { Match, useMatchLiveStatus } from '@fridaygame/client';
import CompositionRanking from '../compositions/compositionRanking';
import Button from '../../general/button';

export type MatchRankingTheme = 'dark' | 'light';

export interface Props {
  match: Match;
  compositions?: Composition[];
  toComposition?: To;
  onClickComposition?: (composition: Composition, event: MouseEvent<HTMLButtonElement>) => unknown;
  toCurrentComposition?: To;
  onClickCurrentComposition?: (event: MouseEvent<HTMLButtonElement>) => unknown;
  theme?: MatchRankingTheme;
}

export default function MatchRanking({
  match,
  compositions,
  toComposition,
  onClickComposition,
  toCurrentComposition,
  onClickCurrentComposition,
  theme = 'dark',
}: Props): ReactElement {
  const liveStatus = useMatchLiveStatus(match.beginning, match.end, match.status);

  return (
    <div className={`friday-ui-match-ranking ${theme}`}>
      <div className="header">
        <span className="title">Classement</span>
      </div>

      <div className="ranking">
        <CompositionRanking
          compositions={compositions}
          theme={theme}
          toComposition={toComposition}
          onClickComposition={onClickComposition}
        />
      </div>

      {(toComposition || onClickComposition) && liveStatus === 'planned' ? (
        <div className="action">
          <Button
            to={toCurrentComposition}
            onClick={onClickCurrentComposition}
            shape="filled"
            theme={theme === 'light' ? 'light' : 'dark'}>
            Faire ma composition
          </Button>
        </div>
      ) : null}
    </div>
  );
}
