import { MouseEvent, ReactElement, useState } from 'react';
import { Composition, Match, PhysicalEvent } from '@fridaygame/client';
import { To } from 'react-router';
import MatchFeed from './matchFeed';
import MatchRanking from './matchRanking';
import Button from '../../general/button';

export type MatchBoardSize = 'small' | 'big';

export type MatchBoardTheme = 'dark' | 'light';

export interface Props {
  match: Match;
  compositions?: Composition[];
  size?: MatchBoardSize;
  theme?: MatchBoardTheme;
  toComposition?: To;
  onClickComposition?: (composition: Composition, event: MouseEvent<HTMLButtonElement>) => unknown;
  toCurrentComposition?: To;
  onClickCurrentComposition?: (event: MouseEvent<HTMLButtonElement>) => unknown;
  physicalEvents?: PhysicalEvent[];
}

export default function MatchBoard({
  match,
  compositions,
  size = 'big',
  theme = 'dark',
  toComposition,
  onClickComposition,
  toCurrentComposition,
  onClickCurrentComposition,
  physicalEvents,
}: Props): ReactElement {
  const [tab, setTab] = useState<'feed' | 'ranking'>('feed');

  return (
    <div className={`friday-ui-match-board ${size} ${theme}`}>
      {size === 'small' ? (
        <div className="tab-menu">
          <Button
            onClick={() => setTab('feed')}
            active={tab === 'feed'}
            shape="text"
            theme="transparent-light">
            Match
          </Button>
          <Button
            onClick={() => setTab('ranking')}
            active={tab === 'ranking'}
            shape="text"
            theme="transparent-light">
            Classement
          </Button>
        </div>
      ) : null}

      {size === 'big' || tab === 'ranking' ? (
        <div className="ranking">
          <MatchRanking
            match={match}
            compositions={compositions}
            toComposition={toComposition}
            onClickComposition={onClickComposition}
            toCurrentComposition={toCurrentComposition}
            onClickCurrentComposition={onClickCurrentComposition}
            theme={theme}
          />
        </div>
      ) : null}

      {size === 'big' || tab === 'feed' ? (
        <div className="feed">
          <MatchFeed match={match} physicalEvents={physicalEvents} theme={theme} />
        </div>
      ) : null}
    </div>
  );
}
