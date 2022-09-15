import { MouseEvent, ReactElement, useState } from 'react';
import { Match, PhysicalEvent } from '@fridaygame/client';
import { To } from 'react-router';
import MatchFeed from './matchFeed';
import MatchRanking from './matchRanking';
import Button from '../../general/button';

export type MatchBoardSize = 'small' | 'big';

export type MatchBoardTheme = 'dark' | 'light';

export interface Props {
  match: Match;
  size?: MatchBoardSize;
  theme?: MatchBoardTheme;
  toComposition?: To;
  onClickComposition?: (event: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  physicalEvents?: PhysicalEvent[];
}

export default function MatchBoard({
  match,
  size = 'big',
  theme = 'dark',
  toComposition,
  onClickComposition,
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
            compositions={match.compositions}
            toComposition={toComposition}
            onClickComposition={onClickComposition}
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
