import { MouseEvent, ReactElement } from 'react';
import { To } from 'react-router';
import { Composition, Match } from '@goatim/client';
import { CompositionRanking } from '../compositions';
import { Button } from '../../general';

export type MatchRankingTheme = 'dark' | 'light';

export interface MatchRankingProps {
  match: Match;
  ranking?: Composition[];
  myComposition?: Composition;
  toComposition?: To;
  onClickComposition?: (composition: Composition, event: MouseEvent<HTMLButtonElement>) => unknown;
  toNewComposition?: To;
  onClickNewComposition?: (event: MouseEvent<HTMLButtonElement>) => unknown;
  theme?: MatchRankingTheme;
}

export function MatchRanking({
  match,
  ranking,
  myComposition,
  toComposition,
  onClickComposition,
  toNewComposition,
  onClickNewComposition,
  theme = 'dark',
}: MatchRankingProps): ReactElement {
  return (
    <div className={`goatim-ui-match-ranking ${theme}`}>
      <div className="header">
        <span className="title">Classement</span>
      </div>

      <div className="ranking">
        <CompositionRanking
          compositions={ranking}
          theme={theme}
          toComposition={toComposition}
          onClickComposition={onClickComposition}
        />
      </div>

      {match.status === 'open' ? (
        <div className="action">
          {myComposition && (toComposition || onClickComposition) ? (
            <Button
              to={toComposition}
              onClick={
                onClickComposition ? (event) => onClickComposition(myComposition, event) : undefined
              }
              shape="filled"
              theme={theme === 'light' ? 'transparent-light' : 'transparent-dark'}>
              Modifier ma composition
            </Button>
          ) : null}

          {!myComposition && (toNewComposition || onClickNewComposition) ? (
            <Button
              to={toNewComposition}
              onClick={onClickNewComposition}
              shape="filled"
              theme={theme === 'light' ? 'transparent-light' : 'transparent-dark'}>
              Faire ma composition
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
