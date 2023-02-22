import { MouseEvent, ReactElement, useMemo } from 'react';
import { To } from 'react-router';
import { Composition, Match } from '@fridaygame/client';
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
  const openCompositions = useMemo<boolean>(() => {
    return (
      !!match.status &&
      ['ongoing', 'passed', 'closing', 'closed', 'cancelled'].includes(match.status)
    );
  }, [match.status]);

  return (
    <div className={`friday-ui-match-ranking ${theme}`}>
      <div className="header">
        <span className="title">Classement</span>
      </div>

      <div className="ranking">
        <CompositionRanking
          compositions={ranking}
          theme={theme}
          toComposition={openCompositions ? toComposition : undefined}
          onClickComposition={openCompositions ? onClickComposition : undefined}
        />
      </div>

      {(toComposition || onClickComposition) && match.status === 'open' ? (
        <div className="action">
          <Button
            to={toNewComposition}
            onClick={onClickNewComposition}
            shape="filled"
            theme={theme === 'light' ? 'transparent-light' : 'transparent-dark'}>
            Faire ma composition
          </Button>
        </div>
      ) : null}
    </div>
  );
}
