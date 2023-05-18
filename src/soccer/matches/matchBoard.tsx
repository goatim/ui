import { MouseEvent, ReactElement, useCallback, useMemo, useState } from 'react';
import {
  Composition,
  CompositionList,
  GetCompositionsQuery,
  Match,
  PhysicalEvent,
} from '@goatim/client';
import { useElementInfiniteScroll } from '@cezembre/fronts';
import { UrlObject } from 'url';
import isPromise from 'is-promise';
import { MatchFeed } from './matchFeed';
import { Button } from '../../general';
import { CompositionRanking } from '../compositions';

export type MatchBoardSize = 'small' | 'big';

export type MatchBoardTheme = 'dark' | 'light';

export interface MatchBoardProps {
  match: Match;
  firstCompositions?: CompositionList;
  compositionPending?: boolean;
  getCompositions?: (query?: GetCompositionsQuery) => CompositionList | Promise<CompositionList>;
  myComposition?: Composition;
  size?: MatchBoardSize;
  theme?: MatchBoardTheme;
  compositionHref?: string | UrlObject;
  onClickComposition?: (composition: Composition, event: MouseEvent<HTMLButtonElement>) => unknown;
  physicalEvents?: PhysicalEvent[];
}

export function MatchBoard({
  match,
  firstCompositions,
  compositionPending = false,
  getCompositions,
  myComposition,
  size = 'big',
  theme = 'dark',
  compositionHref,
  onClickComposition,
  physicalEvents,
}: MatchBoardProps): ReactElement {
  const [tab, setTab] = useState<'feed' | 'ranking'>('feed');

  const [loadedCompositions, setLoadedCompositions] = useState<CompositionList[]>([]);
  const [loadingCompositions, setLoadingCompositions] = useState<boolean>(compositionPending);

  const compositions = useMemo<CompositionList[]>(() => {
    return firstCompositions ? [firstCompositions, ...loadedCompositions] : loadedCompositions;
  }, [firstCompositions, loadedCompositions]);

  const loadNextCompositionsPage = useCallback(async () => {
    if (compositions.length && getCompositions) {
      const { next_page: nextPage } = compositions[compositions.length - 1];
      if (nextPage) {
        const res = getCompositions({ page: nextPage });
        if (isPromise(res)) {
          try {
            setLoadingCompositions(true);
            const nextCompositions = await res;
            setLoadedCompositions((c) => [...c, nextCompositions]);
          } catch (error) {
            // TODO : Handle
          } finally {
            setLoadingCompositions(false);
          }
        } else {
          setLoadedCompositions((c) => [...c, res as CompositionList]);
        }
      }
    }
  }, [compositions, getCompositions]);

  const { ref: rankingContainer } = useElementInfiniteScroll<HTMLDivElement>({
    loadNextPage: loadNextCompositionsPage,
  });

  return (
    <div className={`goatim-ui-match-board ${size} ${theme}`}>
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
        <div className="ranking" ref={rankingContainer}>
          <div className="header">
            <span className="title">Classement</span>
          </div>

          {compositions.length ? (
            <div className="compositions">
              {compositions.map((compositionList) => (
                <div key={compositionList.page} className="composition-list">
                  <CompositionRanking
                    compositions={compositionList.compositions}
                    theme={theme}
                    compositionHref={compositionHref}
                    onClickComposition={onClickComposition}
                  />
                </div>
              ))}
            </div>
          ) : null}
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
